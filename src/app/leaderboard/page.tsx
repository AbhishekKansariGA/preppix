import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Arjun Sharma", score: 198.5, avatar: "AS" },
  { rank: 2, name: "Priya Singh", score: 195.0, avatar: "PS" },
  { rank: 3, name: "Rohan Kumar", score: 192.5, avatar: "RK" },
  { rank: 4, name: "Sneha Patel", score: 190.0, avatar: "SP" },
  { rank: 5, name: "Vikram Reddy", score: 188.5, avatar: "VR" },
  { rank: 6, name: "Anjali Gupta", score: 187.0, avatar: "AG" },
  { rank: 7, name: "Manish Verma", score: 185.5, avatar: "MV" },
  { rank: 8, name: "Kavita Desai", score: 184.0, avatar: "KD" },
  { rank: 9, name: "Suresh Iyer", score: 182.5, avatar: "SI" },
  { rank: 10, name: "Deepika Rao", score: 181.0, avatar: "DR" },
];

export default function LeaderboardPage() {
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
              <TableHead className="w-[80px]">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((user, index) => (
              <TableRow key={user.rank} className={index < 3 ? "bg-primary/10" : ""}>
                <TableCell className="font-medium text-lg">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                    {user.rank}
                  </div>
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
