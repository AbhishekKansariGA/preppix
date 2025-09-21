
'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Exam, Subject, Question, UserAnswer, Chapter } from '@/lib/types';
import { useTestStore } from '@/hooks/use-test-store';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, Flag, Languages, RotateCcw, Clock } from 'lucide-react';
import { getTranslation } from '@/lib/actions';
import { Skeleton } from '../ui/skeleton';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Loader } from '../ui/loader';

interface TestClientProps {
  exam: Exam;
  subject: Omit<Subject, 'icon'>;
  questions: Question[];
  chapter?: Chapter;
}

const getTestDuration = (examId: string, isChapterTest: boolean): number => {
    if (isChapterTest) {
        switch (examId) {
            case 'cgl':
            case 'chsl':
                return 10 * 60; // 10 minutes
            case 'mts':
                return 15 * 60; // 15 minutes
            default:
                return 10 * 60; // Default 10 minutes for chapter tests
        }
    } else {
        // For full subject tests
        return 60 * 60; // 60 minutes
    }
}

export function TestClient({ exam, subject, questions: initialQuestions, chapter }: TestClientProps) {
  const router = useRouter();
  const { addAttempt } = useTestStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [translatedQuestions, setTranslatedQuestions] = useState<Record<number, string>>({});
  const [isTranslating, setIsTranslating] = useState(false);

  const [timeLeft, setTimeLeft] = useState(() => getTestDuration(exam.id, !!chapter));
  const [isTimeUp, setIsTimeUp] = useState(false);
  
  const translationAbortController = useRef<AbortController | null>(null);

  // Memoize questions to prevent re-renders from using stale props
  const questions = useMemo(() => initialQuestions, [initialQuestions]);

  const currentQuestion = questions[currentQuestionIndex];
  
  const handleSubmit = () => {
    const newAttemptId = addAttempt(exam.id, subject.id, answers, chapter?.id);
    router.push(`/results/${newAttemptId}`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsTimeUp(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setAnswers(questions.map(q => ({ questionId: q.id, selectedOption: null })))
    }
  }, [questions]);
  
  useEffect(() => {
    // Reset language and cancel any ongoing translation when question changes
    setCurrentLanguage('en');
    if (translationAbortController.current) {
      translationAbortController.current.abort();
      translationAbortController.current = null;
      setIsTranslating(false);
    }
  }, [currentQuestionIndex]);


  const handleTranslate = async () => {
    if (currentLanguage === 'hi') {
      setCurrentLanguage('en');
      return;
    }

    if (translatedQuestions[currentQuestion.id]) {
      setCurrentLanguage('hi');
      return;
    }
    
    if (translationAbortController.current) {
        translationAbortController.current.abort();
    }
    const abortController = new AbortController();
    translationAbortController.current = abortController;

    setIsTranslating(true);
    try {
      const translation = await getTranslation({ text: currentQuestion.question, targetLanguage: 'Hindi' });
      
      if (abortController.signal.aborted) {
          return;
      }
      
      setTranslatedQuestions(prev => ({...prev, [currentQuestion.id]: translation}));
      setCurrentLanguage('hi');
    } catch (error: any) {
      if (error.name !== 'AbortError') {
        console.error("Translation failed:", error);
      }
    } finally {
      if (!abortController.signal.aborted) {
        setIsTranslating(false);
        translationAbortController.current = null;
      }
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
  
  const handleClearSelection = () => {
    setAnswers(prev =>
      prev.map(a =>
        a.questionId === currentQuestion.id
          ? { ...a, selectedOption: null }
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

  if (answers.length === 0 || !currentQuestion) {
      return <Loader text="Preparing your test..." />;
  }

  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const displayQuestion = currentLanguage === 'hi' && translatedQuestions[currentQuestion.id] 
    ? translatedQuestions[currentQuestion.id] 
    : currentQuestion.question;
    
  const testTitle = chapter ? `${exam.name} - ${subject.name} (${chapter.name})` : `${exam.name} - ${subject.name}`;

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
       <AlertDialog open={isTimeUp}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Time's Up!</AlertDialogTitle>
            <AlertDialogDescription>
              Your time for the test has run out. Your answers will now be submitted automatically.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleSubmit}>View Results</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <CardTitle className="text-2xl">{testTitle}</CardTitle>
              <CardDescription>Question {currentQuestionIndex + 1} of {questions.length}</CardDescription>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 font-semibold text-lg text-primary p-2 rounded-md bg-primary/10">
                    <Clock className="h-5 w-5" />
                    <span>{formatTime(timeLeft)}</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => router.back()}>End Test</Button>
            </div>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
        <CardContent className="min-h-[300px]">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div className="text-lg font-semibold w-full pr-4">
                 {isTranslating && currentLanguage === 'en' ? (
                   <div className='space-y-2'>
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-6 w-3/4" />
                   </div>
                ) : (
                  displayQuestion
                )}
              </div>
              <Button variant="ghost" size="icon" onClick={handleTranslate} disabled={isTranslating} className="shrink-0">
                <Languages className="h-5 w-5" />
              </Button>
            </div>
            <RadioGroup
              key={currentQuestion.id}
              value={currentAnswer?.selectedOption?.toString() ?? ""}
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
        <CardFooter className="flex justify-between items-center">
          <Button variant="outline" onClick={handlePrev} disabled={currentQuestionIndex === 0} size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>

          {currentAnswer?.selectedOption !== null && (
            <Button variant="ghost" onClick={handleClearSelection} size="sm" className="text-muted-foreground">
                <RotateCcw className="mr-2 h-4 w-4" /> Clear
            </Button>
          )}

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
