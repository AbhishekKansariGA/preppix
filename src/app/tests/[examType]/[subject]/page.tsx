import { getExamById, getSubjectById, getQuestions } from '@/lib/data';
import { notFound } from 'next/navigation';
import { TestClient } from '@/components/mock-test/TestClient';

type Props = {
  params: { examType: string; subject: string };
};

export default function TestPage({ params }: Props) {
  const { examType, subject: subjectId } = params;
  const exam = getExamById(examType);
  const subjectData = getSubjectById(subjectId);
  const questions = getQuestions(examType, subjectId);

  if (!exam || !subjectData || questions.length === 0) {
    notFound();
  }

  const { icon: Icon, ...subject } = subjectData;

  return (
    <TestClient
      exam={exam}
      subject={subject}
      questions={questions}
    />
  );
}
