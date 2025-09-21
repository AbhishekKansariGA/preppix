'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Exam, Subject, Question, UserAnswer } from '@/lib/types';
import { useTestStore } from '@/hooks/use-test-store';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, Flag } from 'lucide-react';

interface TestClientProps {
  exam: Exam;
  subject: Omit<Subject, 'icon'>;
  questions: Question[];
}

export function TestClient({ exam, subject, questions }: TestClientProps) {
  const router = useRouter();
  const { addAttempt } = useTestStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>(
    questions.map(q => ({ questionId: q.id, selectedOption: null }))
  );

  const handleOptionChange = (value: string) => {
    const selectedOption = parseInt(value, 10);
    setAnswers(prev =>
      prev.map(a =>
        a.questionId === questions[currentQuestionIndex].id
          ? { ...a, selectedOption: selectedOption }
          : a
      )
    );
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const newAttemptId = addAttempt(exam.id, subject.id, answers);
    router.push(`/results/${newAttemptId}`);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl">{exam.name} - {subject.name}</CardTitle>
              <CardDescription>Question {currentQuestionIndex + 1} of {questions.length}</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => router.back()}>End Test</Button>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
        <CardContent className="min-h-[300px]">
          <div className="space-y-6">
            <p className="text-lg font-semibold">{currentQuestion.question}</p>
            <RadioGroup
              key={currentQuestion.id} // Add key to force re-render
              value={currentAnswer?.selectedOption?.toString()}
              onValueChange={handleOptionChange}
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-md border border-transparent transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/10">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="text-base cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePrev} disabled={currentQuestionIndex === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          {currentQuestionIndex === questions.length - 1 ? (
             <Button onClick={handleSubmit}>
               <Flag className="mr-2 h-4 w-4" /> Submit Test
             </Button>
          ) : (
            <Button onClick={handleNext}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
