'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Exam, Subject, Question, UserAnswer, Chapter } from '@/lib/types';
import { useTestStore } from '@/hooks/use-test-store';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, Flag, Languages } from 'lucide-react';
import { getTranslation } from '@/lib/actions';
import { Skeleton } from '../ui/skeleton';

interface TestClientProps {
  exam: Exam;
  subject: Omit<Subject, 'icon'>;
  questions: Question[];
  chapter?: Chapter;
}

export function TestClient({ exam, subject, questions, chapter }: TestClientProps) {
  const router = useRouter();
  const { addAttempt } = useTestStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>(
    questions.map(q => ({ questionId: q.id, selectedOption: null }))
  );
  
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [translatedQuestion, setTranslatedQuestion] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    // Reset translation when question changes
    setTranslatedQuestion(null);
    setCurrentLanguage('en');
  }, [currentQuestionIndex]);


  const handleTranslate = async () => {
    if (currentLanguage === 'hi' && translatedQuestion) {
      setCurrentLanguage('en');
      return;
    }

    setIsTranslating(true);
    try {
      const translation = await getTranslation({ text: currentQuestion.question, targetLanguage: 'Hindi' });
      setTranslatedQuestion(translation);
      setCurrentLanguage('hi');
    } catch (error) {
      console.error("Translation failed:", error);
      // Optionally, show an error to the user
    } finally {
      setIsTranslating(false);
    }
  };


  const handleOptionChange = (value: string) => {
    const selectedOption = parseInt(value, 10);
    setAnswers(prev =>
      prev.map(a =>
        a.questionId === currentQuestion.id
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
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    const newAttemptId = addAttempt(exam.id, subject.id, answers, chapter?.id);
    router.push(`/results/${newAttemptId}`);
  };

  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const displayQuestion = currentLanguage === 'hi' && translatedQuestion ? translatedQuestion : currentQuestion.question;
  const testTitle = chapter ? `${exam.name} - ${subject.name} (${chapter.name})` : `${exam.name} - ${subject.name}`;

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl">{testTitle}</CardTitle>
              <CardDescription>Question {currentQuestionIndex + 1} of {questions.length}</CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={() => router.back()}>End Test</Button>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
        <CardContent className="min-h-[300px]">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              {isTranslating && currentLanguage === 'en' ? (
                 <div className='space-y-2 w-full'>
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-1/2" />
                 </div>
              ) : (
                <p className="text-lg font-semibold">{displayQuestion}</p>
              )}
              <Button variant="ghost" size="icon" onClick={handleTranslate} disabled={isTranslating} className="shrink-0 ml-4">
                <Languages className="h-5 w-5" />
              </Button>
            </div>
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
          <Button variant="outline" onClick={handlePrev} disabled={currentQuestionIndex === 0} size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          {currentQuestionIndex === questions.length - 1 ? (
             <Button onClick={handleSubmit} size="sm">
               <Flag className="mr-2 h-4 w-4" /> Submit
             </Button>
          ) : (
            <Button onClick={handleNext} size="sm">
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
