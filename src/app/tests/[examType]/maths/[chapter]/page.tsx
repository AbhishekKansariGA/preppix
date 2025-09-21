'use client'
import { getExamById, getSubjectById, getQuestions, getChapterById, populateQuestions } from '@/lib/data';
import { notFound, useRouter, useParams } from 'next/navigation';
import { TestClient } from '@/components/mock-test/TestClient';
import { useAuth } from '@/context/auth-context';
import { useEffect, useState } from 'react';

export default function MathsChapterTestPage() {
  const params = useParams();
  const examType = Array.isArray(params.examType) ? params.examType[0] : params.examType;
  const chapterId = Array.isArray(params.chapter) ? params.chapter[0] : params.chapter;
  const subjectId = 'maths';
  const [isLoading, setIsLoading] = useState(true);

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
  
  useEffect(() => {
    const fetchQuestions = async () => {
        setIsLoading(true);
        await populateQuestions(examType, subjectId, chapterId);
        setIsLoading(false);
    }
    if (exam && subjectData && chapterData) {
        fetchQuestions();
    }
  }, [examType, subjectId, chapterId, exam, subjectData, chapterData]);

  if (!exam || !subjectData || !chapterData) {
    notFound();
  }

  if (!isAuthInitialized || !isAuthenticated || isLoading) {
      return <div>Loading...</div>;
  }
  
  const questions = getQuestions(examType, subjectId, chapterId);
  
  if (questions.length === 0) {
    return <div>No questions available for this chapter. Please try again later.</div>
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
