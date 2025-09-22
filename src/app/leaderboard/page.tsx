
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
  // SSC CGL - Maths
  { username: 'Rohan Sharma', score: 19.5, exam: 'cgl', subject: 'maths', category: 'general' },
  { username: 'Priya Patel', score: 18.0, exam: 'cgl', subject: 'maths', category: 'obc' },
  { username: 'Arjun Singh', score: 17.5, exam: 'cgl', subject: 'maths', category: 'general' },
  { username: 'Kavita Kumari', score: 17.0, exam: 'cgl', subject: 'maths', category: 'sc' },
  { username: 'Mohit Kumar', score: 16.5, exam: 'cgl', subject: 'maths', category: 'ews' },
  { username: 'Deepika Jain', score: 16.0, exam: 'cgl', subject: 'maths', category: 'general' },
  // SSC CGL - English
  { username: 'Amit Kumar', score: 47.5, exam: 'cgl', subject: 'english', category: 'general' },
  { username: 'Neha Gupta', score: 46.5, exam: 'cgl', subject: 'english', category: 'obc' },
  { username: 'Rajiv Mehra', score: 45.0, exam: 'cgl', subject: 'english', category: 'general' },
  { username: 'Sonia Sharma', score: 44.5, exam: 'cgl', subject: 'english', category: 'sc' },
  { username: 'Vivek Kumar', score: 44.0, exam: 'cgl', subject: 'english', category: 'st' },
  { username: 'Preeti Desai', score: 43.5, exam: 'cgl', subject: 'english', category: 'general' },
  // SSC CGL - GS
  { username: 'Sneha Verma', score: 46.0, exam: 'cgl', subject: 'gs', category: 'sc' },
  { username: 'Ankit Tiwari', score: 45.5, exam: 'cgl', subject: 'gs', category: 'general' },
  { username: 'Pooja Sharma', score: 44.0, exam: 'cgl', subject: 'gs', category: 'obc' },
  { username: 'Rakesh Yadav', score: 43.0, exam: 'cgl', subject: 'gs', category: 'ews' },
  { username: 'Geeta Saini', score: 42.5, exam: 'cgl', subject: 'gs', category: 'general' },
  { username: 'Harman Singh', score: 42.0, exam: 'cgl', subject: 'gs', category: 'sc' },
  // SSC CGL - Reasoning
  { username: 'Vikram Rathore', score: 45.5, exam: 'cgl', subject: 'reasoning', category: 'st' },
  { username: 'Isha Sharma', score: 44.5, exam: 'cgl', subject: 'reasoning', category: 'general' },
  { username: 'Zahir Khan', score: 44.0, exam: 'cgl', subject: 'reasoning', category: 'obc' },
  { username: 'Amrita Rao', score: 43.5, exam: 'cgl', subject: 'reasoning', category: 'general' },
  { username: 'Fardeen Ali', score: 43.0, exam: 'cgl', subject: 'reasoning', category: 'ews' },
  { username: 'Sameera Reddy', score: 42.5, exam: 'cgl', subject: 'reasoning', category: 'sc' },

  // SSC CHSL - Maths
  { username: 'Sanjay Rawat', score: 18.5, exam: 'chsl', subject: 'maths', category: 'obc' },
  { username: 'Pankaj Joshi', score: 17.0, exam: 'chsl', subject: 'maths', category: 'general' },
  { username: 'Mithilesh Jha', score: 16.5, exam: 'chsl', subject: 'maths', category: 'sc' },
  { username: 'Varun Negi', score: 16.0, exam: 'chsl', subject: 'maths', category: 'general' },
  { username: 'Smita Devi', score: 15.5, exam: 'chsl', subject: 'maths', category: 'st' },
  { username: 'Rohit Bisht', score: 15.0, exam: 'chsl', subject: 'maths', category: 'general' },
  // SSC CHSL - English
  { username: 'Rajesh Kumar', score: 47.0, exam: 'chsl', subject: 'english', category: 'general' },
  { username: 'Divya Singh', score: 46.0, exam: 'chsl', subject: 'english', category: 'obc' },
  { username: 'Sunil Kumar', score: 45.5, exam: 'chsl', subject: 'english', category: 'general' },
  { username: 'Reena Tandon', score: 45.0, exam: 'chsl', subject: 'english', category: 'sc' },
  { username: 'Aakash Kumar', score: 44.5, exam: 'chsl', subject: 'english', category: 'ews' },
  { username: 'Kiran Kapoor', score: 44.0, exam: 'chsl', subject: 'english', category: 'general' },
   // SSC CHSL - GS
  { username: 'Ananya Sharma', score: 45.0, exam: 'chsl', subject: 'gs', category: 'general' },
  { username: 'Ishaan Khatri', score: 44.0, exam: 'chsl', subject: 'gs', category: 'obc' },
  { username: 'Janhvi Singh', score: 43.5, exam: 'chsl', subject: 'gs', category: 'general' },
  { username: 'Siddhant Chaturvedi', score: 43.0, exam: 'chsl', subject: 'gs', category: 'sc' },
  { username: 'Tara Devi', score: 42.0, exam: 'chsl', subject: 'gs', category: 'st' },
  { username: 'Raj Kumar', score: 41.5, exam: 'chsl', subject: 'gs', category: 'ews' },
  // SSC CHSL - Reasoning
  { username: 'Sandeep Chaudhary', score: 46.5, exam: 'chsl', subject: 'reasoning', category: 'general' },
  { username: 'Anjali Sharma', score: 45.5, exam: 'chsl', subject: 'reasoning', category: 'obc' },
  { username: 'Sidharth Rawat', score: 45.0, exam: 'chsl', subject: 'reasoning', category: 'general' },
  { username: 'Shraddha Verma', score: 44.0, exam: 'chsl', subject: 'reasoning', category: 'ews' },
  { username: 'Arjun Negi', score: 43.5, exam: 'chsl', subject: 'reasoning', category: 'sc' },
  { username: 'Parineeta Shah', score: 43.0, exam: 'chsl', subject: 'reasoning', category: 'general' },

  // SSC MTS - Maths
  { username: 'Tushar Gupta', score: 19.0, exam: 'mts', subject: 'maths', category: 'general' },
  { username: 'Disha Mehra', score: 18.5, exam: 'mts', subject: 'maths', category: 'obc' },
  { username: 'Vidyut Kumar', score: 18.0, exam: 'mts', subject: 'maths', category: 'general' },
  { username: 'Adah Sharma', score: 17.5, exam: 'mts', subject: 'maths', category: 'sc' },
  { username: 'Kriti Singh', score: 17.0, exam: 'mts', subject: 'maths', category: 'ews' },
  { username: 'Siddharth Rana', score: 16.5, exam: 'mts', subject: 'maths', category: 'general' },
  // SSC MTS - GS
  { username: 'Sunita Devi', score: 49.0, exam: 'mts', subject: 'gs', category: 'ews' },
  { username: 'Ravi Verma', score: 48.0, exam: 'mts', subject: 'gs', category: 'general' },
  { username: 'Meena Kumari', score: 47.5, exam: 'mts', subject: 'gs', category: 'obc' },
  { username: 'Ramesh Yadav', score: 47.0, exam: 'mts', subject: 'gs', category: 'general' },
  { username: 'Priya Chauhan', score: 46.5, exam: 'mts', subject: 'gs', category: 'sc' },
  { username: 'Suresh Kumar', score: 46.0, exam: 'mts', subject: 'gs', category: 'general' },
  // SSC MTS - Reasoning
  { username: 'Sunil Verma', score: 46.5, exam: 'mts', subject: 'reasoning', category: 'general' },
  { username: 'Kavita Singh', score: 46.0, exam: 'mts', subject: 'reasoning', category: 'general' },
  { username: 'Anil Mehta', score: 45.0, exam: 'mts', subject: 'reasoning', category: 'obc' },
  { username: 'Pooja Gupta', score: 44.5, exam: 'mts', subject: 'reasoning', category: 'sc' },
  { username: 'Rakesh Sharma', score: 44.0, exam: 'mts', subject: 'reasoning', category: 'st' },
  { username: 'Sarita Devi', score: 43.5, exam: 'mts', subject: 'reasoning', category: 'ews' },
  // SSC MTS - English
  { username: 'Ranjeet Singh', score: 48.5, exam: 'mts', subject: 'english', category: 'general' },
  { username: 'Divya Khanna', score: 48.0, exam: 'mts', subject: 'english', category: 'general' },
  { username: 'Ranjeev Kapoor', score: 47.0, exam: 'mts', subject: 'english', category: 'general' },
  { username: 'Priya Chauhan', score: 46.5, exam: 'mts', subject: 'english', category: 'obc' },
  { username: 'Sahil Kumar', score: 46.0, exam: 'mts', subject: 'english', category: 'ews' },
  { username: 'Anushka Sharma', score: 45.5, exam: 'mts', subject: 'english', category: 'general' },
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
  
  const userCategory = (user?.category as Category['id']) || 'general';
  const cutoffScore = leaderboardCutoffs[selectedExam]?.[selectedSubject]?.[userCategory] ?? 10;


  const userBestScore = userBestAttempt ? userBestAttempt.scoreDetails.score : 0;
  
  const leaderboardData = dummyTopCandidates.filter(c => c.exam === selectedExam && c.subject === selectedSubject)
                                              .map(c => ({...c, categoryName: categoryData.find(cat => cat.id === c.category)?.name || 'N/A' }));
  
  if (userBestScore > (leaderboardCutoffs[selectedExam]?.[selectedSubject]?.[userCategory] ?? 0)) {
      const userEntry = { 
          username: user.username, 
          score: userBestScore, 
          exam: selectedExam, 
          subject: selectedSubject, 
          category: user.category || 'general',
          categoryName: categoryData.find(cat => cat.id === user.category)?.name || 'N/A',
          isCurrentUser: true 
      };
      // Avoid adding duplicate user entry
      if (!leaderboardData.some(c => 'isCurrentUser' in c)) {
        leaderboardData.push(userEntry);
      }
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
           <CardDescription>Top 5 rankers based on highest score. Your category cut-off: <span className='font-bold text-foreground'>{cutoffScore.toFixed(2)}</span></CardDescription>
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
                </CardHeader>
                <CardContent>
                  <Link href={`/tests/${selectedExam}/${selectedSubject}`}>
                      <Button className="mt-4">Take Test Now</Button>
                  </Link>
                </CardContent>
        </Card>
      )}
    </div>
  );
}

    