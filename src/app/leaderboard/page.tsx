
'use client';

import { useAuth } from '@/context/auth-context';
import { useTestStore } from '@/hooks/use-test-store';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, Medal, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Attempt, Category } from '@/lib/types';
import { exams, subjects, leaderboardCutoffs, categories as categoryData } from '@/lib/data';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Expanded dummy data to include exam, subject, and category
const dummyTopCandidates: { username: string; score: number; exam: string; subject: string; category: Category['id'] }[] = [
  // CGL
  { username: 'Rohan Sharma', score: 19.5, exam: 'cgl', subject: 'maths', category: 'general' },
  { username: 'Priya Patel', score: 18.0, exam: 'cgl', subject: 'maths', category: 'obc' },
  { username: 'Amit Singh', score: 47.5, exam: 'cgl', subject: 'english', category: 'general' },
  { username: 'Sneha Verma', score: 46.0, exam: 'cgl', subject: 'gs', category: 'sc' },
  { username: 'Vikram Rathore', score: 45.5, exam: 'cgl', subject: 'reasoning', category: 'st' },
  // CHSL
  { username: 'Anjali Kumari', score: 18.5, exam: 'chsl', subject: 'maths', category: 'obc' },
  { username: 'Rajesh Kumar', score: 47.0, exam: 'chsl', subject: 'english', category: 'general' },
  // MTS
  { username: 'Sunita Devi', score: 49.0, exam: 'mts', subject: 'gs', category: 'ews' },
  { username: 'Manoj Tiwari', score: 46.5, exam: 'mts', subject: 'reasoning', category: 'general' },
];

export default function LeaderboardPage() {
  const { user, isAuthenticated, isAuthInitialized } = useAuth();
  const { attempts, isInitialized: isTestStoreInitialized } = useTestStore();
  const router = useRouter();
  
  const [selectedExam, setSelectedExam] = useState(user?.preparingExam || 'cgl');
  const [selectedSubject, setSelectedSubject] = useState('maths');

  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  const filteredUserAttempts = useMemo<Attempt[]>(() => {
    return attempts.filter(a => a.examId === selectedExam && a.subjectId === selectedSubject);
  }, [attempts, selectedExam, selectedSubject]);

  const userBestAttempt = useMemo<Attempt | null>(() => {
    if (filteredUserAttempts.length === 0) return null;
    return filteredUserAttempts.reduce((best, current) => {
        return current.scoreDetails.score > best.scoreDetails.score ? current : best;
    }, filteredUserAttempts[0]);
  }, [filteredUserAttempts]);

  if (!isAuthInitialized || !isTestStoreInitialized || !isAuthenticated || !user) {
    return null;
  }
  
  const examDetails = exams.find(e => e.id === selectedExam);
  const subjectDetails = subjects.find(s => s.id === selectedSubject);
  const cutoffScore = leaderboardCutoffs[selectedExam]?.[selectedSubject] ?? 10;

  const userBestScore = userBestAttempt ? userBestAttempt.scoreDetails.score : 0;
  
  const leaderboardData = dummyTopCandidates.filter(c => c.exam === selectedExam && c.subject === selectedSubject)
                                              .map(c => ({...c, categoryName: categoryData.find(cat => cat.id === c.category)?.name || 'N/A' }));
  
  if (userBestScore > cutoffScore) {
      const userEntry = { 
          username: user.username, 
          score: userBestScore, 
          exam: selectedExam, 
          subject: selectedSubject, 
          category: user.category || 'general',
          categoryName: categoryData.find(cat => cat.id === user.category)?.name || 'N/A',
          isCurrentUser: true 
      };
      leaderboardData.push(userEntry);
  }

  leaderboardData.sort((a, b) => b.score - a.score);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
       <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-poppins">
          Leaderboard
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          See how you rank among the top performers for each test.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filter Leaderboard</CardTitle>
          <CardDescription>Select an exam and subject to view the rankings.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
            <Select value={selectedExam} onValueChange={setSelectedExam}>
                <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Select Exam" />
                </SelectTrigger>
                <SelectContent>
                    {exams.map(exam => (
                        <SelectItem key={exam.id} value={exam.id}>{exam.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                    {subjects.map(subject => (
                        <SelectItem key={subject.id} value={subject.id}>{subject.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle className='text-primary'>{examDetails?.name} - {subjectDetails?.name}</CardTitle>
           <CardDescription>Top 5 rankers based on highest score. Cut-off: <span className='font-bold text-foreground'>{cutoffScore.toFixed(2)}</span></CardDescription>
        </CardHeader>
        <CardContent>
          {leaderboardData.length > 0 ? (
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
                          <p className="text-sm text-muted-foreground">{candidate.categoryName}</p>
                      </div>
                      <div className='text-right'>
                           <p className="font-bold text-xl text-primary">{candidate.score.toFixed(2)}</p>
                           <p className="text-xs text-muted-foreground">Score</p>
                      </div>
                  </div>
                )
              })}
            </div>
          ) : (
             <div className="text-center py-8">
              <p className="text-muted-foreground">No leaderboard data available for this selection yet.</p>
              <p className="text-sm text-muted-foreground">Take the test to get on the board!</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      {userBestScore <= cutoffScore && (
        <Card className='text-center'>
            <CardHeader>
                <CardTitle>You are not on the leaderboard</CardTitle>
                <CardDescription>
                  For the selected test ({examDetails?.name} - {subjectDetails?.name}), you need a score greater than {cutoffScore.toFixed(2)} to appear. 
                  {userBestAttempt ? ` Your current best is ${userBestScore.toFixed(2)}.` : " You haven't attempted this test yet."}
                </CardDescription>
                <CardContent>
                  <Link href={`/tests/${selectedExam}/${selectedSubject}`}>
                      <Button className="mt-4">Take Test Now</Button>
                  </Link>
                </CardContent>
            </CardHeader>
        </Card>
      )}
    </div>
  );
}
