
'use client'
import { getExamById, getSubjectById, getChapterById, populateQuestions } from '@/lib/data';
import { notFound, useRouter, useParams, useSearchParams } from 'next/navigation';
import { TestClient } from '@/components/mock-test/TestClient';
import { useAuth } from '@/context/auth-context';
import { useEffect, useState } from 'react';
import { Question } from '@/lib/types';
import { Loader } from '@/components/ui/loader';

export default function MathsChapterTestPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const examType = Array.isArray(params.examType) ? params.examType[0] : params.examType;
  const chapterId = Array.isArray(params.chapter) ? params.chapter[0] : params.chapter;
  const lang = searchParams.get('lang') || 'en';
  const subjectId = 'maths';
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);

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
        const newQuestions = await populateQuestions(examType, subjectId, chapterId);
        setQuestions(newQuestions);
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
      return <Loader text="Generating new questions for your test..." />;
  }
  
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
      defaultLang={lang}
    />
    </div>
  );
}



    