'use client';

import { useParams, notFound, useRouter } from 'next/navigation';
import { useTestStore } from '@/hooks/use-test-store';
import { ResultsClient } from '@/components/results/ResultsClient';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';

export default function ResultsPage() {
  const params = useParams();
  const { attemptId } = params;
  const { getAttemptById, attempts, isInitialized } = useTestStore();
  const { isAuthenticated, isAuthInitialized } = useAuth();
  const router = useRouter();

   useEffect(() => {
    if (isAuthInitialized && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isAuthInitialized, router]);

  if (!isInitialized || !isAuthInitialized || !isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading results...</div>
      </div>
    );
  }

  const attempt = getAttemptById(Array.isArray(attemptId) ? attemptId[0] : attemptId);

  if (!attempt) {
    notFound();
  }

  const testHistory = attempts.map(a => ({
    testName: `${a.examName} - ${a.subjectName}`,
    subjectScores: { [a.subjectName]: a.scoreDetails.score },
    overallScore: a.scoreDetails.score,
  }));

  return (
    <>
      <Header />
      <div className='mt-8'>
        <ResultsClient attempt={attempt} testHistory={testHistory} />
      </div>
    </>
  )
}
