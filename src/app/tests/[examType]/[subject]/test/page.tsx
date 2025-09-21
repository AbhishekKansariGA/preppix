'use client'
import { getExamById, getSubjectById, getQuestions, getChapterById } from '@/lib/data';
import { notFound, useRouter, useParams } from 'next/navigation';
import { TestClient } from '@/components/mock-test/TestClient';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';

export default function TestPage() {
  const params = useParams();
  const examType = Array.isArray(params.examType) ? params.examType[0] : params.examType;
  const subjectId = Array.isArray(params.subject) ? params.subject[0] : params.subject;
  const chapterId = Array.isArray(params.chapter) ? params.chapter[0] : params.chapter;

  const exam = getExamById(examType);
  const subjectData = getSubjectById(subjectId);
  const chapterData = chapterId ? getChapterById(subjectId, chapterId) : undefined;
  const questions = getQuestions(examType, subjectId, chapterId);
  const { isAuthenticated, isAuthInitialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  if (!exam || !subjectData || questions.length === 0) {
    notFound();
  }
  
  if (subjectId === 'maths' && !chapterData) {
      notFound();
  }

  if (!isAuthInitialized || !isAuthenticated) {
      return <div>Loading...</div>;
  }

  const { icon: Icon, ...subject } = subjectData;

  return (
    <div className='mt-8'>
    <TestClient
      exam={exam}
      subject={subject}
      questions={questions}
      chapter={chapterData}
    />
    </div>
  );
}
