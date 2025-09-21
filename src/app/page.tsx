
'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { exams } from '@/lib/data';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';

export default function Home() {
  const { user, isAuthenticated, isAuthInitialized } = useAuth();
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
    <div className="space-y-10">
      <div className="relative isolate overflow-hidden rounded-2xl bg-gray-900 border border-primary/20 shadow-2xl shadow-primary/10">
        <div className="px-6 py-16 sm:px-24 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {user && (
              <p className="text-xl font-semibold leading-8 text-blue-400">
                Welcome back, {user.username}!
              </p>
            )}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl font-poppins">
              Ready to Ace Your Exam?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Select an exam below and kickstart your preparation journey with our tailored mock tests.
            </p>
          </div>
        </div>
        <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">
          Choose Your Exam
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exams.map((exam) => (
            <Link href={`/tests/${exam.id}`} key={exam.id} className="group">
              <Card className="h-full border-secondary bg-secondary/30 transition-all duration-300 hover:bg-secondary/60 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold">{exam.name}</CardTitle>
                    <CardDescription className="text-sm">{exam.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between text-primary">
                    Start Preparing <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
