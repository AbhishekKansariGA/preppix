
'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Exam, Subject, Question, UserAnswer, Chapter } from '@/lib/types';
import { useTestStore } from '@/hooks/use-test-store';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, Flag, RotateCcw, Clock } from 'lucide-react';
import { getTranslation, getNewQuestion } from '@/lib/actions';
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
import { useToast } from '@/hooks/use-toast';

interface TestClientProps {
  exam: Exam;
  subject: Omit<Subject, 'icon'>;
  chapter?: Chapter;
}

const TOTAL_QUESTIONS = 10;
const MAX_GENERATION_ATTEMPTS = 20; // Allow for retries

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
        return 25 * 60; // 25 minutes
    }
}

export function TestClient({ exam, subject, chapter }: TestClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addAttempt } = useTestStore();
  const { toast } = useToast();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  
  const [timeLeft, setTimeLeft] = useState(() => getTestDuration(exam.id, !!chapter));
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const lang = searchParams.get('lang') || 'en';
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuestions = useCallback(async () => {
    setIsLoading(true);
    const generatedQuestions: Question[] = [];
    const questionTexts = new Set<string>();
    let attempts = 0;

    while (generatedQuestions.length < TOTAL_QUESTIONS && attempts < MAX_GENERATION_ATTEMPTS) {
      attempts++;
      try {
        let question = await getNewQuestion({
          exam: exam.name,
          subject: subject.name,
          chapter: chapter?.name,
        });

        // Ensure question is unique
        if (questionTexts.has(question.question)) {
          console.log("Duplicate question generated, retrying...");
          continue; // Skip if question text is a duplicate
        }
        questionTexts.add(question.question);

        if (lang === 'hi') {
          const translatedText = await getTranslation({ text: question.question, targetLanguage: 'Hindi' });
          const translatedOptions = await Promise.all(question.options.map(option => getTranslation({ text: option, targetLanguage: 'Hindi' })));
          question.question = translatedText;
          question.options = translatedOptions;
        }

        generatedQuestions.push(question);
      } catch (error) {
        console.error(`Failed to generate or translate question on attempt ${attempts}, retrying...`, error);
        // Wait for a short duration before retrying to avoid spamming the service
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
    
    if (generatedQuestions.length < TOTAL_QUESTIONS) {
        toast({
            title: "Error loading test",
            description: "Could not generate all questions after multiple attempts. Please try again later.",
            variant: "destructive"
        });
        setQuestions([]);
    } else {
        setQuestions(generatedQuestions);
        setAnswers(generatedQuestions.map(q => ({ questionId: q.id, selectedOption: null })));
    }

    setIsLoading(false);
  }, [exam.name, subject.name, chapter?.name, lang, toast]);


  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);


  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);
  
  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    if (questions.length > 0) {
      const newAttemptId = addAttempt(exam.id, subject.id, answers, chapter?.id, questions);
      router.push(`/results/${newAttemptId}`);
    } else {
        // Handle case where submission is clicked but no questions were loaded
        toast({ title: "Submission Error", description: "No questions were loaded to submit.", variant: "destructive" });
        setIsSubmitting(false);
        router.back();
    }
  }, [addAttempt, answers, chapter?.id, exam.id, subject.id, router, questions, toast]);

  useEffect(() => {
    if (questions.length === 0) return;
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
  }, [questions.length]);

  useEffect(() => {
    if (isTimeUp) {
      handleSubmit();
    }
  }, [isTimeUp, handleSubmit]);

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
  
  if (isLoading) {
      return <Loader text="Generating new questions for you..." />;
  }

  if (questions.length === 0 && !isLoading) {
      return <div className="text-center p-8">
          <CardTitle>Failed to load test</CardTitle>
          <CardDescription>Could not generate any questions. Please try again later.</CardDescription>
          <Button onClick={() => router.back()} className="mt-4">Go Back</Button>
      </div>;
  }
  
  if (!currentQuestion) {
      return <Loader text="Loading question..." />;
  }


  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
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
       <AlertDialog open={isTimeUp || isSubmitting}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{isSubmitting ? "Submitting..." : "Time's Up!"}</AlertDialogTitle>
            <AlertDialogDescription>
              {isSubmitting 
                ? "Your test is being submitted. Please wait."
                : "Your time for the test has run out. Your answers will now be submitted automatically."
              }
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
             {isSubmitting ? <Loader text="Redirecting to results..."/> : <AlertDialogAction onClick={handleSubmit}>View Results</AlertDialogAction>}
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
                <Button variant="outline" size="sm" onClick={handleSubmit}>End Test</Button>
            </div>
          </div>
          <Progress value={progress} className="mt-4 h-2" />
        </CardHeader>
        <CardContent className="min-h-[300px]">
          <div className="space-y-6">
            <div className="text-lg font-semibold w-full pr-4">
              {currentQuestion.question}
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
             <Button onClick={handleSubmit} size="sm" disabled={isSubmitting}>
               <Flag className="mr-2 h-4 w-4" /> Submit
             </Button>
          ) : (
            <Button onClick={handleNext} size="sm" disabled={currentQuestionIndex === questions.length - 1}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

    