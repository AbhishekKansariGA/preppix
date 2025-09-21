'use client'
import { getExamById, getSubjectById, getQuestions } from '@/lib/data';
import { notFound, useRouter, useParams } from 'next/navigation';
import { TestClient } from '@/components/mock-test/TestClient';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';

export default function TestPage() {
  const params = useParams();
  const examType = Array.isArray(params.examType) ? params.examType[0] : params.examType;
  const subjectId = Array.isArray(params.subject) ? params.subject[0] : params.subject;

  const exam = getExamById(examType);
  const subjectData = getSubjectById(subjectId);
  const questions = getQuestions(examType, subjectId);
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
    />
    </div>
  );
}
