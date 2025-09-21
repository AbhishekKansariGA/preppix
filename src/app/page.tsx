
'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { exams, subjects } from '@/lib/data';
import { ArrowRight, Trophy } from 'lucide-react';
import { useTestStore } from '@/hooks/use-test-store';

export default function Home() {
  const { user, isAuthenticated, isAuthInitialized } = useAuth();
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
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-poppins">
          Hello, {user?.username || 'Guest'}!
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {examForUser 
            ? `Ready to ace the ${examForUser.name}? Let's get started.`
            : "Let's start your preparation journey."
          }
        </p>
      </div>

      {examForUser && (
        <Card className="bg-gradient-to-r from-primary/10 to-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">{examForUser.name}</CardTitle>
            <CardDescription>{examForUser.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Choose a subject below to start a mock test.
            </p>
             <Link href={`/tests/${examForUser.id}`}>
                <Button>
                  <span>View All Mock Tests</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      <div>
        <h2 className="text-2xl font-bold tracking-tight">Quick Actions</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ActionCard 
            title="All Subjects" 
            description="Browse all available subjects."
            href={examForUser ? `/tests/${examForUser.id}` : '#'}
          />
          <ActionCard 
            title="My Stats" 
            description="Check your performance."
            href="/leaderboard"
          />
        </div>
      </div>
      
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


function ActionCard({ title, description, href }: { title: string, description: string, href: string }) {
  return (
    <Link href={href}>
      <Card className="hover:bg-secondary/50 transition-colors h-full">
        <CardHeader>
          <CardTitle className="text-xl font-poppins">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

function SubjectCard({ subject, examId }: { subject: any, examId?: string }) {
  const href = examId 
    ? (subject.id === 'maths' ? `/tests/${examId}/maths` : `/tests/${examId}/${subject.id}/test`)
    : '#';

  return (
    <Link href={href} className={!examId ? 'pointer-events-none' : ''}>
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
