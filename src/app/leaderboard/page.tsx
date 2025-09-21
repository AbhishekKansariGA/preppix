
'use client';

import { useAuth } from '@/context/auth-context';
import { useTestStore } from '@/hooks/use-test-store';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, Medal, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Attempt } from '@/lib/types';

// Dummy data for top candidates
const dummyTopCandidates = [
  { username: 'Rohan Sharma', score: 19.5, exam: 'SSC CGL' },
  { username: 'Priya Patel', score: 18.0, exam: 'SSC CGL' },
  { username: 'Amit Singh', score: 17.5, exam: 'SSC CHSL' },
  { username: 'Sneha Verma', score: 16.0, exam: 'SSC CGL' },
  { username: 'Vikram Rathore', score: 15.5, exam: 'SSC MTS' },
];

const CUTOFF_SCORE = 10; // Example cutoff score

export default function LeaderboardPage() {
  const { user, isAuthenticated, isAuthInitialized } = useAuth();
  const { attempts, isInitialized: isTestStoreInitialized } = useTestStore();
  const router = useRouter();

  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);
  
  const userBestAttempt = useMemo<Attempt | null>(() => {
    if (attempts.length === 0) return null;
    return attempts.reduce((best, current) => {
        return current.scoreDetails.score > best.scoreDetails.score ? current : best;
    }, attempts[0]);
  }, [attempts]);

  if (!isAuthInitialized || !isTestStoreInitialized || !isAuthenticated || !user) {
    return null;
  }
  
  const userBestScore = userBestAttempt ? userBestAttempt.scoreDetails.score : 0;
  const userBestExam = userBestAttempt ? userBestAttempt.examName : 'N/A';

  const leaderboardData = [...dummyTopCandidates];
  
  if (userBestScore > CUTOFF_SCORE) {
      const userEntry = { username: user.username, score: userBestScore, exam: userBestExam, isCurrentUser: true };
      leaderboardData.push(userEntry);
  }

  leaderboardData.sort((a, b) => b.score - a.score);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
       <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-poppins">
          Leaderboard
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          See how you rank among the top performers.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top 5 Rankers</CardTitle>
           <CardDescription>Based on highest score achieved in any test.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaderboardData.slice(0, 5).map((candidate, index) => {
              const rank = index + 1;
              const isCurrentUser = 'isCurrentUser' in candidate && candidate.isCurrentUser;
              
              const getRankIcon = (r: number) => {
                  if (r === 1) return <Crown className="h-6 w-6 text-yellow-400" />;
                  if (r === 2) return <Medal className="h-6 w-6 text-gray-300" />;
                  if (r === 3) return <Trophy className="h-6 w-6 text-yellow-600" />;
                  return <span className='font-bold text-lg'>{r}</span>;
              }

              return (
                <div 
                  key={index}
                  className={cn(
                      "flex items-center gap-4 p-4 rounded-lg",
                      isCurrentUser ? "bg-primary/20 border-2 border-primary" : "bg-muted/50",
                      rank === 1 && "bg-yellow-400/10"
                  )}
                >
                    <div className="w-8 flex justify-center items-center">
                        {getRankIcon(rank)}
                    </div>
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={`https://api.dicebear.com/8.x/initials/svg?seed=${candidate.username}`} />
                        <AvatarFallback>{candidate.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className='flex-1'>
                        <p className="font-semibold text-lg">{candidate.username}</p>
                        <p className="text-sm text-muted-foreground">{candidate.exam}</p>
                    </div>
                    <div className='text-right'>
                         <p className="font-bold text-xl text-primary">{candidate.score.toFixed(2)}</p>
                         <p className="text-xs text-muted-foreground">Score</p>
                    </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
      
      {userBestScore <= CUTOFF_SCORE && (
        <Card className='text-center'>
            <CardHeader>
                <CardTitle>You are not on the leaderboard yet</CardTitle>
                <CardDescription>Score more than {CUTOFF_SCORE} to appear on the leaderboard. Your current best is {userBestScore.toFixed(2)}.</CardDescription>
            </CardHeader>
        </Card>
      )}
    </div>
  );
}
