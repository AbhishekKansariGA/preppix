
'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTestStore } from "@/hooks/use-test-store";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { subjects } from "@/lib/data";

export default function LeaderboardPage() {
    const { attempts, isInitialized } = useTestStore();
    const { isAuthenticated, isAuthInitialized, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isAuthInitialized && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, isAuthInitialized, router]);

    const subjectPerformance = useMemo(() => {
        const performance: { [key: string]: { totalScore: number; count: number; accuracy: number, accuracyCount: number } } = {};

        subjects.forEach(s => {
            performance[s.name] = { totalScore: 0, count: 0, accuracy: 0, accuracyCount: 0 };
        });

        attempts.forEach(attempt => {
            if (performance[attempt.subjectName]) {
                performance[attempt.subjectName].totalScore += attempt.scoreDetails.score;
                performance[attempt.subjectName].count++;
                if (attempt.scoreDetails.accuracy > 0) {
                    performance[attempt.subjectName].accuracy += attempt.scoreDetails.accuracy;
                    performance[attempt.subjectName].accuracyCount++;
                }
            }
        });

        return Object.keys(performance).map(subjectName => ({
            name: subjectName,
            averageScore: performance[subjectName].count > 0 ? performance[subjectName].totalScore / performance[subjectName].count : 0,
            averageAccuracy: performance[subjectName].accuracyCount > 0 ? performance[subjectName].accuracy / performance[subjectName].accuracyCount : 0,
        }));
    }, [attempts]);

    const overallStats = useMemo(() => {
        if (attempts.length === 0) {
            return { totalTests: 0, averageScore: 0, averageAccuracy: 0 };
        }

        const totalTests = attempts.length;
        const totalScore = attempts.reduce((acc, a) => acc + a.scoreDetails.score, 0);
        const totalAccuracy = attempts.reduce((acc, a) => acc + a.scoreDetails.accuracy, 0);
        
        return {
            totalTests,
            averageScore: totalScore / totalTests,
            averageAccuracy: totalAccuracy / totalTests,
        };
    }, [attempts]);


    if (!isAuthInitialized || !isInitialized || !isAuthenticated) {
        return null;
    }
  return (
    <div className="space-y-6">
        <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
                <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${user?.username}`} />
                <AvatarFallback>{user?.username?.[0]}</AvatarFallback>
            </Avatar>
            <div>
                <h1 className="text-2xl font-bold">My Stats</h1>
                <p className="text-muted-foreground">Here's your performance overview.</p>
            </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
            <StatCard title="Total Tests Taken" value={overallStats.totalTests} />
            <StatCard title="Overall Average Score" value={`${overallStats.averageScore.toFixed(2)}`} />
            <StatCard title="Overall Average Accuracy" value={`${overallStats.averageAccuracy.toFixed(2)}%`} />
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Subject-wise Performance</CardTitle>
                <CardDescription>Your average score and accuracy in each subject.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subjectPerformance}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`}/>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "hsl(var(--background))",
                            borderColor: "hsl(var(--border))"
                        }}
                    />
                    <Bar dataKey="averageScore" fill="hsl(var(--primary))" name="Avg. Score" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="averageAccuracy" fill="hsl(var(--primary) / 0.5)" name="Avg. Accuracy (%)" radius={[4, 4, 0, 0]} />
                </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                 <CardTitle>Recent Attempts</CardTitle>
            </CardHeader>
            <CardContent>
                {attempts.slice(0, 5).map(attempt => (
                    <div key={attempt.id} className="flex justify-between items-center p-2 rounded-lg hover:bg-muted">
                        <div>
                            <p className="font-semibold">{attempt.examName} - {attempt.subjectName} {attempt.chapterName ? `(${attempt.chapterName})` : ''}</p>
                            <p className="text-sm text-muted-foreground">{new Date(attempt.date).toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                             <p className="font-semibold">{attempt.scoreDetails.score.toFixed(2)}</p>
                            <p className="text-sm text-muted-foreground">Accuracy: {attempt.scoreDetails.accuracy.toFixed(2)}%</p>
                        </div>
                    </div>
                ))}
                {attempts.length === 0 && <p className="text-muted-foreground text-center">No attempts yet.</p>}
            </CardContent>
        </Card>
    </div>
  );
}


function StatCard({ title, value }: { title: string, value: string | number }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}
