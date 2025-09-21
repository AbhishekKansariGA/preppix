
'use client'
import { getExamById, getSubjectById, getChapterById } from '@/lib/data';
import { notFound, useRouter, useParams } from 'next/navigation';
import { TestClient } from '@/components/mock-test/TestClient';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { Loader } from '@/components/ui/loader';

export default function MathsChapterTestPage() {
  const params = useParams();
  const examType = Array.isArray(params.examType) ? params.examType[0] : params.examType;
  const chapterId = Array.isArray(params.chapter) ? params.chapter[0] : params.chapter;
  const subjectId = 'maths';

  const exam = getExamById(examType);
  const subjectData = getSubjectById(subjectId);
  const chapterData = chapterId ? getChapterById(subjectId, chapterId) : undefined;
  
  const { isAuthenticated, isAuthInitialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  if (!exam || !subjectData || !chapterData) {
    notFound();
  }

  if (!isAuthInitialized || !isAuthenticated) {
      return <Loader text="Preparing your test..." />;
  }

  const { icon: Icon, ...subject } = subjectData;

  return (
    <div className='mt-8'>
    <TestClient
      exam={exam}
      subject={subject}
      chapter={chapterData}
    />
    </div>
  );
}
