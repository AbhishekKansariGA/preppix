'use client';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getExamById, subjects } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';

type Props = {
  params: { examType: string };
};

export default function ExamTypePage({ params }: Props) {
  const exam = getExamById(params.examType);
  const { isAuthenticated, isAuthInitialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  if (!exam) {
    notFound();
  }

  if (!isAuthInitialized || !isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header/>
    <div className="space-y-8 mt-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {exam.name} Mock Tests
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose a subject to begin your test.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {subjects.map(subject => (
          <Link href={`/tests/${exam.id}/${subject.id}`} key={subject.id} className="group">
            <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:bg-card/80 hover:shadow-primary/20 hover:shadow-lg">
              <CardHeader>
                <subject.icon className="h-10 w-10 mb-4 text-primary" />
                <CardTitle className="text-2xl font-semibold">{subject.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mt-4 flex items-center justify-between text-primary">
                  <span>Start Test</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}
