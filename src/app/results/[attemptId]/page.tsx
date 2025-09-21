
'use client';

import { useParams, notFound, useRouter } from 'next/navigation';
import { useTestStore } from '@/hooks/use-test-store';
import { ResultsClient } from '@/components/results/ResultsClient';
import { useAuth } from '@/context/auth-context';
import { useEffect } from 'react';
import { Loader } from '@/components/ui/loader';

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
    return <Loader text="Loading results..." />;
  }

  const attempt = getAttemptById(Array.isArray(attemptId) ? attemptId[0] : attemptId);

  if (!attempt) {
    notFound();
  }
  
  const testName = (a: typeof attempts[0]) => {
      let name = `${a.examName} - ${a.subjectName}`;
      if (a.chapterName) {
        name += ` (${a.chapterName})`;
      }
      return name;
  }

  const testHistory = attempts.map(a => ({
    testName: testName(a),
    subjectScores: { [a.subjectName]: a.scoreDetails.score },
    overallScore: a.scoreDetails.score,
  }));

  return (
      <div className='mt-8'>
        <ResultsClient attempt={attempt} testHistory={testHistory} />
      </div>
  )
}
