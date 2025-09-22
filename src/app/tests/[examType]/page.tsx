
'use client';
import Link from 'next/link';
import { notFound, useRouter, useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getExamById, subjects } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ExamTypePage() {
  const params = useParams();
  const examType = Array.isArray(params.examType) ? params.examType[0] : params.examType;
  const exam = getExamById(examType);
  const { isAuthenticated, isAuthInitialized, isProfileComplete } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  if (!isAuthInitialized || !isAuthenticated) {
    return null;
  }
  
  if (!exam) {
    notFound();
  }
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-poppins">
          {exam.name} Mock Tests
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {isProfileComplete ? "Choose a subject to begin your test." : "Please complete your profile to start taking tests."}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map(subject => {
              const href = (subject.chapters || subject.chapterGroups || subject.mixedTests)
                  ? `/tests/${exam.id}/${subject.id}`
                  : `/tests/${exam.id}/${subject.id}/test`;

              return (
                <Link href={href} key={subject.id} className={cn("group", !isProfileComplete && "pointer-events-none opacity-50")}>
                    <Card className="h-full bg-secondary/30 hover:bg-secondary/60 cursor-pointer flex flex-col">
                    <CardHeader className='items-center text-center flex-1'>
                        <div className='p-4 bg-primary/10 rounded-full mb-4'>
                        <subject.icon className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-semibold">{subject.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button variant="outline" className="w-full group-hover:bg-primary/20 group-hover:border-primary" disabled={!isProfileComplete}>
                            <span>Start Test</span>
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </CardContent>
                    </Card>
                </Link>
              )
          })}
      </div>
    </div>
  );
}
