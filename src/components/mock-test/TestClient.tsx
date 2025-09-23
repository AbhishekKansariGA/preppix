
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
import { ArrowLeft, ArrowRight, Flag, RotateCcw, Clock, ChevronLeft, Languages, Pause, Play, History } from 'lucide-react';
import { getQuestions as fetchStaticQuestions } from '@/lib/data';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Loader } from '../ui/loader';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { cn } from '@/lib/utils';

interface TestClientProps {
  exam: Exam;
  subject: Omit<Subject, 'icon'>;
  chapter?: Chapter;
}

interface InProgressTestState {
    examId: string;
    subjectId: string;
    chapterId?: string;
    answers: UserAnswer[];
    currentQuestionIndex: number;
    timeLeft: number;
    questions: Question[];
}

const getTestDuration = (examId: string, subjectId: string, isChapterTest: boolean): number => {
    if (subjectId === 'reasoning') {
        return 25 * 60; // 25 minutes for reasoning
    }
    if (subjectId === 'gs' || subjectId === 'english') {
        return 15 * 60; // 15 minutes for mixed tests
    }
    if (isChapterTest) { // This will now only be for Maths
        return 10 * 60; // 10 minutes for maths chapter tests
    }
    // Fallback/Default for any other case
    return 25 * 60; 
}

export function TestClient({ exam, subject, chapter }: TestClientProps) {
  const router = useRouter();
  const { addAttempt } = useTestStore();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  
  const [timeLeft, setTimeLeft] = useState(() => getTestDuration(exam.id, subject.id, !!chapter));
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const [isTranslated, setIsTranslated] = useState<Record<number, boolean>>({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  
  const inProgressTestKey = `in-progress-test-${exam.id}-${subject.id}-${chapter?.id || 'full'}`;

  const saveInProgressTest = (state: InProgressTestState) => {
    localStorage.setItem(inProgressTestKey, JSON.stringify(state));
  };
  
  const clearInProgressTest = () => {
      localStorage.removeItem(inProgressTestKey);
  };
  
  const startNewTest = useCallback(() => {
    clearInProgressTest();
    const fetchedQuestions = fetchStaticQuestions(exam.id, subject.id, chapter?.id);
    setQuestions(fetchedQuestions);
    setAnswers(fetchedQuestions.map(q => ({ questionId: q.id, selectedOption: null })));
    setCurrentQuestionIndex(0);
    setTimeLeft(getTestDuration(exam.id, subject.id, !!chapter));
    setIsLoading(false);
  }, [exam.id, subject.id, chapter?.id]);
  
  const resumeTest = useCallback((savedState: InProgressTestState) => {
    setQuestions(savedState.questions);
    setAnswers(savedState.answers);
    setCurrentQuestionIndex(savedState.currentQuestionIndex);
    setTimeLeft(savedState.timeLeft);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const savedStateRaw = localStorage.getItem(inProgressTestKey);
    if (savedStateRaw) {
      try {
        const savedState: InProgressTestState = JSON.parse(savedStateRaw);
        if (savedState.questions && savedState.questions.length > 0) {
          setShowResumeDialog(true);
        } else {
            startNewTest();
        }
      } catch (error) {
        startNewTest();
      }
    } else {
      startNewTest();
    }
  }, [inProgressTestKey, startNewTest]);


  useEffect(() => {
    if (!isLoading && questions.length > 0) {
      const stateToSave: InProgressTestState = {
        examId: exam.id,
        subjectId: subject.id,
        chapterId: chapter?.id,
        answers,
        currentQuestionIndex,
        timeLeft,
        questions
      };
      saveInProgressTest(stateToSave);
    }
  }, [answers, currentQuestionIndex, timeLeft, isLoading, questions]);

  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);
  
  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    if (questions.length > 0) {
      const newAttemptId = addAttempt(exam.id, subject.id, answers, chapter?.id, questions);
      clearInProgressTest();
      router.push(`/results/${newAttemptId}`);
    } else {
        setIsSubmitting(false);
        router.back();
    }
  }, [addAttempt, answers, chapter?.id, exam.id, subject.id, router, questions]);

  useEffect(() => {
    if (questions.length === 0 || isPaused || isLoading) return;
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
  }, [questions.length, isPaused, isLoading]);

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
  
  const handleTranslate = () => {
    const questionId = currentQuestion.id;
    if (currentQuestion.translation) {
      setIsTranslated(prev => ({ ...prev, [questionId]: !prev[questionId] }));
    }
  };
  
  const togglePause = () => {
      setIsPaused(prev => !prev);
  }
  
  if (isLoading) {
      return <div className="flex justify-center items-center h-64"><Loader /></div>;
  }
  
  if (showResumeDialog) {
    return (
      <AlertDialog open={showResumeDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Resume Test?</AlertDialogTitle>
            <AlertDialogDescription>
              We found an incomplete test. Would you like to resume where you left off or start a new test?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="outline" onClick={() => { startNewTest(); setShowResumeDialog(false); }}>
                <RotateCcw className="mr-2 h-4 w-4" /> Start New
            </Button>
            <Button onClick={() => {
              const savedState = JSON.parse(localStorage.getItem(inProgressTestKey)!);
              resumeTest(savedState);
              setShowResumeDialog(false);
            }}>
              <History className="mr-2 h-4 w-4" /> Resume
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  if (questions.length === 0) {
      return <div className="text-center p-8">
          <CardTitle>Failed to load test</CardTitle>
          <CardDescription>Could not find any questions for this test. Please go back.</CardDescription>
          <Button onClick={() => router.back()} className="mt-4">Go Back</Button>
      </div>;
  }
  
  if (!currentQuestion) {
      return <Loader />;
  }

  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  const showTranslated = isTranslated[currentQuestion.id];
  const displayQuestion = (showTranslated && currentQuestion.translation) ? currentQuestion.translation : {question: currentQuestion.question, options: currentQuestion.options};
  
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

      <Card className="relative">
        {isPaused && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex flex-col justify-center items-center gap-4">
                <h2 className="text-2xl font-bold text-primary">Test Paused</h2>
                <Button onClick={togglePause}>
                    <Play className="mr-2 h-4 w-4"/>
                    Resume Test
                </Button>
            </div>
        )}
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
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="icon">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure you want to exit the test?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Your progress will be saved. You can resume it later.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => router.back()}>Yes, Exit</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <div className={cn("flex items-center gap-2 font-semibold text-lg text-primary p-2 rounded-md bg-primary/10", isPaused && "animate-pulse")}>
                    <Clock className="h-5 w-5" />
                    <span>{formatTime(timeLeft)}</span>
                </div>
                 <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                       <Button variant="outline" size="icon" onClick={togglePause}>
                           {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                       </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{isPaused ? 'Resume Test' : 'Pause Test'}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm">End Test</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure you want to end the test?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Your progress will be submitted, and you will be taken to the results page. You cannot resume this test later.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
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
                {currentQuestion.translation && (
                 <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                       <Button
                          variant="outline"
                          size="icon"
                          onClick={handleTranslate}
                      >
                        <Languages className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{showTranslated ? `Show in ${subject.id === 'english' ? 'English' : 'English'}` : `Translate to ${targetLanguage}`}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                )}
            </div>
            <RadioGroup
              key={`${currentQuestion.id}-${showTranslated}`}
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
             <Button onClick={() => setShowConfirmation(true)} size="sm" disabled={isSubmitting}>
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


    