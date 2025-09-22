
'use client'
import { getExamById, getSubjectById, getChapterById } from '@/lib/data';
import { notFound, useRouter, useParams } from 'next/navigation';
import { TestClient } from '@/components/mock-test/TestClient';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SubjectTestPage() {
  const params = useParams();
  const examType = Array.isArray(params.examType) ? params.examType[0] : params.examType;
  const subjectId = Array.isArray(params.subject) ? params.subject[0] : params.subject;
  
  const exam = getExamById(examType);
  const subjectData = getSubjectById(subjectId);
  
  const { isAuthenticated, isAuthInitialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  if (!exam || !subjectData) {
    notFound();
  }
  
  if (!isAuthInitialized || !isAuthenticated) {
      return null;
  }

  // If subject has mixed tests (like GS), show test selection page
  if (subjectData.mixedTests) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-poppins">
            {exam.name} - {subjectData.name} Tests
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose a test to start.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjectData.mixedTests.map((test) => (
              <Link href={`/tests/${exam.id}/${subjectData.id}/${test.id}/test`} key={test.id} className="group">
                  <Card className="h-full bg-secondary/30 hover:bg-secondary/60 cursor-pointer flex flex-col">
                  <CardHeader className='flex-1'>
                      <CardTitle className="text-xl font-semibold font-poppins text-foreground">{test.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <Button variant="outline" className="w-full group-hover:bg-primary/20 group-hover:border-primary">
                      <span>Start Test</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                  </CardContent>
                  </Card>
              </Link>
          ))}
        </div>
      </div>
    );
  }

  // If subject has chapters, show chapter selection page
  if (subjectData.chapters) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-poppins">
            {exam.name} - {subjectData.name} Chapters
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose a chapter to start the test.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjectData.chapters.map((chapter) => (
              <Link href={`/tests/${exam.id}/${subjectData.id}/${chapter.id}/test`} key={chapter.id} className="group">
                  <Card className="h-full bg-secondary/30 hover:bg-secondary/60 cursor-pointer flex flex-col">
                  <CardHeader className='flex-1'>
                      <CardTitle className="text-xl font-semibold font-poppins text-foreground">{chapter.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                      <Button variant="outline" className="w-full group-hover:bg-primary/20 group-hover:border-primary">
                      <span>Start Test</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                  </CardContent>
                  </Card>
              </Link>
          ))}
        </div>
      </div>
    );
  }

  // If subject has chapter groups (like Maths), redirect to its specific page
  if (subjectData.chapterGroups) {
      router.push(`/tests/${exam.id}/${subjectData.id}`);
      return null;
  }

  // Default to full test if no chapters/groups
  const { icon: Icon, ...subject } = subjectData;

  return (
    <div className='mt-8'>
    <TestClient
      exam={exam}
      subject={subject}
    />
    </div>
  );
}
