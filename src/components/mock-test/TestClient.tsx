
'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Exam, Subject, Question, UserAnswer, Chapter } from '@/lib/types';
import { useTestStore } from '@/hooks/use-test-store';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, Flag, RotateCcw, Clock, ChevronLeft, Languages } from 'lucide-react';
import { getQuestions as fetchStaticQuestions } from '@/lib/data';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader } from '../ui/loader';
import { useToast } from '@/hooks/use-toast';
import { getTranslation } from '@/lib/actions';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface TestClientProps {
  exam: Exam;
  subject: Omit<Subject, 'icon'>;
  chapter?: Chapter;
}

interface TranslatedQuestion {
  question: string;
  options: string[];
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
        return 25 * 60; // 25 minutes
    }
}

export function TestClient({ exam, subject, chapter }: TestClientProps) {
  const router = useRouter();
  const { addAttempt } = useTestStore();
  const { toast } = useToast();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  
  const [timeLeft, setTimeLeft] = useState(() => getTestDuration(exam.id, !!chapter));
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [translatedQuestions, setTranslatedQuestions] = useState<Record<number, TranslatedQuestion>>({});
  const [isTranslated, setIsTranslated] = useState<Record<number, boolean>>({});
  const [isTranslating, setIsTranslating] = useState<Record<number, boolean>>({});


  useEffect(() => {
    const fetchedQuestions = fetchStaticQuestions(subject.id, chapter?.id);
    setQuestions(fetchedQuestions);
    setAnswers(fetchedQuestions.map(q => ({ questionId: q.id, selectedOption: null })));
  }, [subject.id, chapter?.id]);


  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);
  
  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    if (questions.length > 0) {
      const newAttemptId = addAttempt(exam.id, subject.id, answers, chapter?.id, questions);
      router.push(`/results/${newAttemptId}`);
    } else {
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
  
  const handleTranslate = async () => {
    const questionId = currentQuestion.id;
    
    // If it's already translated, just toggle the view
    if (translatedQuestions[questionId]) {
      setIsTranslated(prev => ({ ...prev, [questionId]: !prev[questionId] }));
      return;
    }
    
    setIsTranslating(prev => ({ ...prev, [questionId]: true }));
    try {
      const textsToTranslate = [
        currentQuestion.question,
        ...currentQuestion.options
      ];

      const targetLanguage = subject.id === 'english' ? 'Hindi' : 'English';
      
      const translatedTexts = await Promise.all(
        textsToTranslate.map(text => getTranslation({ text, targetLanguage }))
      );

      const [translatedQ, ...translatedOps] = translatedTexts;

      setTranslatedQuestions(prev => ({
        ...prev,
        [questionId]: {
          question: translatedQ,
          options: translatedOps
        }
      }));
      setIsTranslated(prev => ({ ...prev, [questionId]: true }));
    } catch (error) {
      console.error("Translation failed:", error);
      toast({
        title: "Translation Failed",
        description: "Could not translate the question. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(prev => ({ ...prev, [questionId]: false }));
    }
  };

  if (questions.length === 0) {
      return <div className="text-center p-8">
          <CardTitle>Failed to load test</CardTitle>
          <CardDescription>Could not find any questions for this test. Please go back.</CardDescription>
          <Button onClick={() => router.back()} className="mt-4">Go Back</Button>
      </div>;
  }
  
  if (!currentQuestion) {
      // This should not happen with static questions, but as a fallback
      return <Loader />;
  }

  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  const showTranslated = isTranslated[currentQuestion.id];
  const displayQuestion = showTranslated ? translatedQuestions[currentQuestion.id] : currentQuestion;
  const targetLanguage = subject.id === 'english' ? 'Hindi' : 'English';
    
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
             {isSubmitting ? <Loader /> : <AlertDialogAction onClick={handleSubmit}>View Results</AlertDialogAction>}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <CardTitle className="text-2xl font-poppins">
                {exam.name} - {subject.name}
                {chapter && <span className="text-primary font-poppins"> ({chapter.name})</span>}
              </CardTitle>
              <CardDescription>Question {currentQuestionIndex + 1} of {questions.length}</CardDescription>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => router.back()}>
                    <ChevronLeft className="h-4 w-4" />
                </Button>
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
            <div className="flex justify-between items-start w-full">
                <div className="text-lg font-semibold w-full pr-4">
                  {currentQuestionIndex + 1}. {displayQuestion?.question}
                </div>
                 <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                       <Button
                          variant="outline"
                          size="icon"
                          onClick={handleTranslate}
                          disabled={isTranslating[currentQuestion.id]}
                      >
                        {isTranslating[currentQuestion.id] ? <Loader className="h-4 w-4" /> : <Languages className="h-4 w-4" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{showTranslated ? `Show in ${subject.id === 'english' ? 'English' : 'Original'}` : `Translate to ${targetLanguage}`}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            </div>
            <RadioGroup
              key={currentQuestion.id}
              value={currentAnswer?.selectedOption?.toString() ?? ""}
              onValueChange={handleOptionChange}
            >
              {displayQuestion?.options.map((option, index) => (
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
