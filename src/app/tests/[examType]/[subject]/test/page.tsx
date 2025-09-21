'use client'
import { getExamById, getSubjectById, getQuestions, populateQuestions } from '@/lib/data';
import { notFound, useRouter, useParams } from 'next/navigation';
import { TestClient } from '@/components/mock-test/TestClient';
import { useAuth } from '@/context/auth-context';
import { useEffect, useState } from 'react';

export default function TestPage() {
  const params = useParams();
  const examType = Array.isArray(params.examType) ? params.examType[0] : params.examType;
  const subjectId = Array.isArray(params.subject) ? params.subject[0] : params.subject;
  const [isLoading, setIsLoading] = useState(true);
  
  const exam = getExamById(examType);
  const subjectData = getSubjectById(subjectId);
  const { isAuthenticated, isAuthInitialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  useEffect(() => {
    const fetchQuestions = async () => {
        setIsLoading(true);
        await populateQuestions(examType, subjectId);
        setIsLoading(false);
    }
    if (exam && subjectData) {
        fetchQuestions();
    }
  }, [examType, subjectId, exam, subjectData]);


  if (!exam || !subjectData) {
    notFound();
  }
  
  if (subjectId === 'maths') {
      // This page is for full subject tests, not chapter tests for maths
      notFound();
  }

  if (!isAuthInitialized || !isAuthenticated || isLoading) {
      return <div>Loading...</div>;
  }
  
  const questions = getQuestions(examType, subjectId);

  if (questions.length === 0) {
      return <div>No questions available. Please try again later.</div>
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
