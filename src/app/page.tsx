
'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { exams, subjects } from '@/lib/data';
import { ArrowRight, Trophy, AlertTriangle, User } from 'lucide-react';
import { useTestStore } from '@/hooks/use-test-store';
import { cn } from '@/lib/utils';

export default function Home() {
  const { user, isAuthenticated, isAuthInitialized, isProfileComplete } = useAuth();
  const router = useRouter();
  const { attempts } = useTestStore();

  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  if (!isAuthInitialized || !isAuthenticated) {
    return null;
  }

  const examForUser = exams.find(e => e.id === user?.preparingExam);
  
  const latestAttempt = attempts.length > 0 ? attempts[0] : null;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-poppins">
          Welcome to Preppix
        </h1>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Hello, {user?.username || 'Guest'}!
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          {examForUser 
            ? `Ready to ace the ${examForUser.name}? Let's get started.`
            : "Let's start your preparation journey."
          }
        </p>
      </div>

      {!isProfileComplete && (
        <Card className="border-yellow-500/50 bg-yellow-500/10">
          <CardHeader className="flex flex-row items-center gap-4">
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
              <div>
                <CardTitle className="text-yellow-400">Update Your Profile</CardTitle>
                <CardDescription className="text-yellow-400/80">
                  Please update your personal information to start taking mock tests.
                </CardDescription>
              </div>
          </CardHeader>
          <CardContent>
            <Link href="/account">
              <Button variant="outline" className="border-yellow-500/50 bg-transparent hover:bg-yellow-500/20 text-yellow-400">
                <User className="mr-2 h-4 w-4" />
                Go to Account Page
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {examForUser && (
        <Card className="bg-gradient-to-r from-primary/10 to-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">{examForUser.name}</CardTitle>
            <CardDescription>{examForUser.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Choose a subject below to start a mock test or view all tests.
            </p>
             <Link href={`/tests/${examForUser.id}`} className={cn(!isProfileComplete && "pointer-events-none")}>
                <Button disabled={!isProfileComplete}>
                  <span>View All Mock Tests</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
          </CardContent>
        </Card>
      )}
      
       {latestAttempt && (
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Continue where you left off</h2>
          <Card className="mt-4 bg-secondary/30">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div>
                        <CardTitle className='font-poppins text-primary'>{latestAttempt.examName} - {latestAttempt.subjectName}</CardTitle>
                        <CardDescription>
                            {new Date(latestAttempt.date).toLocaleDateString()}
                        </CardDescription>
                    </div>
                     <div className="flex items-center gap-2 text-primary font-semibold">
                        <Trophy className="h-5 w-5" />
                        <span>Score: {latestAttempt.scoreDetails.score.toFixed(2)}</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Link href={`/results/${latestAttempt.id}`}>
                    <Button variant="outline">
                        View Results <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </CardContent>
          </Card>
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold tracking-tight">Explore Subjects</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map(subject => (
            <SubjectCard key={subject.id} subject={subject} examId={examForUser?.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SubjectCard({ subject, examId }: { subject: any, examId?: string }) {
  const { isProfileComplete } = useAuth();
  const isClickable = examId && isProfileComplete;

  const href = isClickable 
    ? ((subject.chapters || subject.chapterGroups || subject.mixedTests) ? `/tests/${examId}/${subject.id}` : `/tests/${examId}/${subject.id}/test`)
    : '#';

  return (
    <Link href={href} className={cn(!isClickable && 'pointer-events-none opacity-50')}>
        <Card className="h-full hover:bg-secondary/50 transition-colors">
            <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                    <subject.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <CardTitle className="text-xl font-poppins">{subject.name}</CardTitle>
                </div>
            </CardHeader>
        </Card>
    </Link>
  )
}
