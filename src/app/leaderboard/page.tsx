
'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const allUsers = [
  "Arjun Sharma", "Priya Singh", "Rohan Kumar", "Sneha Patel", "Vikram Reddy",
  "Anjali Gupta", "Manish Verma", "Kavita Desai", "Suresh Iyer", "Deepika Rao",
  "Amit Patel", "Neha Sharma", "Rajesh Kumar", "Sunita Reddy", "Vivek Singh",
  "Pooja Gupta", "Sanjay Verma", "Meera Desai", "Ashok Iyer", "Rani Rao"
];

const generateLeaderboardData = () => {
  // Shuffle users and pick 10 to make it dynamic
  const shuffledUsers = [...allUsers].sort(() => 0.5 - Math.random());
  const selectedUsers = shuffledUsers.slice(0, 10);

  return selectedUsers.map((name, index) => ({
    name: name,
    score: 180 + Math.random() * 20, // Scores between 180 and 200
    avatar: name.split(' ').map(n => n[0]).join('')
  }))
  .sort((a, b) => b.score - a.score)
  .map((user, index) => ({ ...user, rank: index + 1 }));
};


export default function LeaderboardPage() {
    const { isAuthenticated, isAuthInitialized } = useAuth();
    const router = useRouter();
    const [leaderboardData, setLeaderboardData] = useState(() => generateLeaderboardData());

    useEffect(() => {
        if (isAuthInitialized && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, isAuthInitialized, router]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLeaderboardData(generateLeaderboardData());
        }, 60000); // Update every minute

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    if (!isAuthInitialized || !isAuthenticated) {
        return null;
    }
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Trophy className="h-8 w-8 text-primary" />
        <CardTitle className="text-3xl font-bold">Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-center">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right w-[100px]">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.slice(0, 5).map((user, index) => (
              <TableRow key={user.rank} className={index < 3 ? "bg-primary/10" : ""}>
                <TableCell className="font-medium text-lg text-center">
                  {user.rank}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${user.name}`} />
                      <AvatarFallback>{user.avatar}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-bold text-primary text-lg">{user.score.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
