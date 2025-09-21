
'use client';
import Link from 'next/link';
import { notFound, useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getExamById, getSubjectById } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { Loader } from '@/components/ui/loader';

export default function MathsChapterPage() {
  const params = useParams();
  const router = useRouter();
  const examType = Array.isArray(params.examType) ? params.examType[0] : params.examType;
  const exam = getExamById(examType);
  const subject = getSubjectById('maths');
  const { isAuthenticated, isAuthInitialized } = useAuth();
  
  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  if (!isAuthInitialized || !isAuthenticated) {
    return <Loader text="Loading chapters..." />;
  }

  if (!exam || !subject || !subject.chapters) {
    notFound();
  }
  
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-poppins">
          {exam.name} - {subject.name} Chapters
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose a chapter to start the test.
        </p>
      </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subject.chapters.map((chapter) => (
             <Link href={`/tests/${exam.id}/maths/${chapter.id}`} key={chapter.id}>
                <Card className="h-full transform transition-all duration-300 hover:scale-105 bg-secondary/30 hover:bg-secondary/60 hover:shadow-primary/20 hover:shadow-lg cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold font-poppins text-primary">{chapter.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mt-4 flex items-center justify-between text-primary font-semibold">
                      <span>Start Test</span>
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
            </Link>
          ))}
        </div>
    </div>
  );
}
