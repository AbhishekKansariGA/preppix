

'use client';
import Link from 'next/link';
import { notFound, useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getExamById, getSubjectById } from '@/lib/data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTestStore } from '@/hooks/use-test-store';

export default function MathsChapterPage() {
  const params = useParams();
  const router = useRouter();
  const examType = Array.isArray(params.examType) ? params.examType[0] : params.examType;
  const exam = getExamById(examType);
  const subject = getSubjectById('maths');
  const { isAuthenticated, isAuthInitialized } = useAuth();
  const { attempts } = useTestStore();
  
  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  if (!isAuthInitialized || !isAuthenticated) {
    return null;
  }

  if (!exam || !subject || !subject.chapterGroups) {
    notFound();
  }

  const attemptedChapterIds = new Set(
    attempts
        .filter(a => a.examId === exam.id && a.subjectId === subject.id && a.chapterId)
        .map(a => a.chapterId)
  );
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-poppins">
          {exam.name} - {subject.name} Chapters
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose a chapter to start the test. Each test has 10 questions and is for 20 marks.
        </p>
      </div>
      
      {subject.chapterGroups.map((group) => (
        <div key={group.title}>
            <h2 className="text-2xl font-bold tracking-tight mb-4 text-primary">{group.title}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.chapters.map((chapter) => {
              const isAttempted = attemptedChapterIds.has(chapter.id);
              return (
                <Link href={`/tests/${exam.id}/maths/${chapter.id}/test`} key={chapter.id} className="group">
                    <Card className="h-full bg-secondary/30 hover:bg-secondary/60 cursor-pointer flex flex-col">
                    <CardHeader className='flex-1'>
                        <div className="flex items-center gap-2">
                            {isAttempted && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                            <CardTitle className="text-xl font-semibold font-poppins text-foreground">{chapter.name}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Button variant="outline" className="w-full group-hover:bg-primary/20 group-hover:border-primary">
                        <span>{isAttempted ? "Retake Test" : "Start Test"}</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </CardContent>
                    </Card>
                </Link>
              )
            })}
            </div>
        </div>
      ))}
    </div>
  );
}
