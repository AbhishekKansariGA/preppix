'use client'
import { getExamById, getSubjectById, populateQuestions } from '@/lib/data';
import { notFound, useRouter, useParams } from 'next/navigation';
import { TestClient } from '@/components/mock-test/TestClient';
import { useAuth } from '@/context/auth-context';
import { useEffect, useState } from 'react';
import { Question } from '@/lib/types';
import { Loader } from '@/components/ui/loader';

export default function TestPage() {
  const params = useParams();
  const examType = Array.isArray(params.examType) ? params.examType[0] : params.examType;
  const subjectId = Array.isArray(params.subject) ? params.subject[0] : params.subject;
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  
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
        const newQuestions = await populateQuestions(examType, subjectId);
        setQuestions(newQuestions);
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
      return <Loader text="Generating new questions for you..." />;
  }
  
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
