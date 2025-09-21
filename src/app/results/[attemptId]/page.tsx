'use client';

import { useParams, notFound } from 'next/navigation';
import { useTestStore } from '@/hooks/use-test-store';
import { ResultsClient } from '@/components/results/ResultsClient';

export default function ResultsPage() {
  const params = useParams();
  const { attemptId } = params;
  const { getAttemptById, attempts, isInitialized } = useTestStore();

  if (!isInitialized) {
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

  return <ResultsClient attempt={attempt} testHistory={testHistory} />;
}
