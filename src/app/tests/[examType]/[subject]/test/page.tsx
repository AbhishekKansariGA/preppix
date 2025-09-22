
'use client'
import { getExamById, getSubjectById } from '@/lib/data';
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
  
  if (subjectId === 'maths' || subjectId === 'reasoning' || subjectId === 'gs') {
      // This page is for full subject tests, not for subjects with chapters/mixed tests
      notFound();
  }

  if (!isAuthInitialized || !isAuthenticated) {
      return null;
  }

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
