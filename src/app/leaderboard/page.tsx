
'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Button } from "@/components/ui/button";

const moodData = [
  { day: 'Mon', mood: 3, pv: 2400, amt: 2400 },
  { day: 'Tue', mood: 4, pv: 1398, amt: 2210 },
  { day: 'Wed', mood: 3.5, pv: 9800, amt: 2290 },
  { day: 'Thu', mood: 5, pv: 3908, amt: 2000 },
  { day: 'Fri', mood: 4, pv: 4800, amt: 2181 },
  { day: 'Sat', mood: 4.5, pv: 3800, amt: 2500 },
  { day: 'Sun', mood: 5, pv: 4300, amt: 2100 },
];


export default function LeaderboardPage() {
    const { isAuthenticated, isAuthInitialized, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isAuthInitialized && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, isAuthInitialized, router]);


    if (!isAuthInitialized || !isAuthenticated) {
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
                <h1 className="text-2xl font-bold">{user?.username}</h1>
                <p className="text-muted-foreground">Here are your weekly stats.</p>
            </div>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Mood Analysis</CardTitle>
                <CardDescription>Your mood fluctuations over the week.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                <LineChart data={moodData}>
                    <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                    <YAxis domain={[1, 5]} hide />
                     <Tooltip
                        contentStyle={{
                            backgroundColor: "hsl(var(--background))",
                            borderColor: "hsl(var(--border))"
                        }}
                     />
                    <Line type="monotone" dataKey="mood" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 6, fill: 'hsl(var(--primary))' }} />
                </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                 <CardTitle>Quote of the day</CardTitle>
            </CardHeader>
            <CardContent>
                <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-foreground">
                    "Every day is a new opportunity for growth and positive change."
                </blockquote>
            </CardContent>
        </Card>
    </div>
  );
}
