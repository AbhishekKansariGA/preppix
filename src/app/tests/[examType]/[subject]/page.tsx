'use client'
import { getExamById, getSubjectById, getQuestions } from '@/lib/data';
import { notFound, useRouter } from 'next/navigation';
import { TestClient } from '@/components/mock-test/TestClient';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';

type Props = {
  params: { examType: string; subject: string };
};

export default function TestPage({ params }: Props) {
  const { examType, subject: subjectId } = params;
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
    <>
    <Header />
    <div className='mt-8'>
    <TestClient
      exam={exam}
      subject={subject}
      questions={questions}
    />
    </div>
    </>
  );
}
