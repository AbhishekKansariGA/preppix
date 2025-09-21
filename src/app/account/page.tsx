'use client';

import { useTestStore } from '@/hooks/use-test-store';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { format } from 'date-fns';
import { History, ArrowRight, BarChart, FileText, LogOut } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';

export default function AccountPage() {
  const { attempts, isInitialized, clearHistory } = useTestStore();
  const { isAuthenticated, isAuthInitialized, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  if (!isInitialized || !isAuthInitialized || !isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header/>
    <div className="space-y-8 mt-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl flex items-center gap-3">
            <History className="h-8 w-8 text-primary" />
            My Past Attempts
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Review your previous mock tests to track your progress.
          </p>
        </div>
        <div className="flex gap-2">
        {attempts.length > 0 && (
          <Button variant="destructive" onClick={clearHistory}>Clear History</Button>
        )}
        <Button variant="ghost" onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
        </Button>
        </div>
      </div>

      {attempts.length === 0 ? (
        <Card className="text-center py-16">
          <CardHeader>
            <CardTitle>No attempts yet!</CardTitle>
            <CardDescription>
              Start a new mock test to see your history here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/">
                <FileText className="mr-2 h-4 w-4" /> Go to Mock Tests
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {attempts.map(attempt => (
            <Link href={`/results/${attempt.id}`} key={attempt.id}>
              <Card className="group transition-all hover:bg-card/80 hover:shadow-primary/20 hover:shadow-md">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="p-3 rounded-md bg-primary/10 text-primary">
                        <BarChart className="h-6 w-6" />
                     </div>
                     <div>
                      <p className="font-semibold text-lg">{attempt.examName} - {attempt.subjectName}</p>
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(attempt.date), 'MMMM d, yyyy - h:mm a')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                       <p className="text-sm text-muted-foreground">Score</p>
                       <p className="font-bold text-xl text-primary">{attempt.scoreDetails.score.toFixed(2)}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
