
'use client';

import { useState, useMemo } from 'react';
import { Attempt, Question } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, CheckCircle2, Lightbulb, PieChart, Star, X, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { Pie, PieChart as RechartsPieChart } from "recharts";
import { getAdaptiveLearningPath } from '@/lib/actions';
import { AdaptiveLearningPathInput } from '@/ai/flows/adaptive-learning-path';

type ResultsClientProps = {
  attempt: Attempt;
  testHistory: AdaptiveLearningPathInput['testHistory'];
};

export function ResultsClient({ attempt, testHistory }: ResultsClientProps) {
  const { scoreDetails, answers, questions } = attempt;

  const chartData = [
    { name: 'Correct', value: scoreDetails.correct, fill: 'var(--color-correct)' },
    { name: 'Incorrect', value: scoreDetails.incorrect, fill: 'var(--color-incorrect)' },
    { name: 'Unattempted', value: scoreDetails.totalQuestions - scoreDetails.attempted, fill: 'var(--color-unattempted)' },
  ];

  const chartConfig = {
    correct: { label: 'Correct', color: 'hsl(var(--chart-2))' },
    incorrect: { label: 'Incorrect', color: 'hsl(var(--destructive))' },
    unattempted: { label: 'Unattempted', color: 'hsl(var(--muted))' },
  } satisfies ChartConfig;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-poppins">
          Test Results: {attempt.examName} - {attempt.subjectName}
          {attempt.chapterName && <span className="text-primary"> ({attempt.chapterName})</span>}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Here's a breakdown of your performance.
        </p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">
            <PieChart className="mr-2 h-4 w-4" /> Overview
          </TabsTrigger>
          <TabsTrigger value="review">
            <Star className="mr-2 h-4 w-4" /> Review Answers
          </TabsTrigger>
          <TabsTrigger value="ai-suggestions">
            <Lightbulb className="mr-2 h-4 w-4" /> AI Path
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="grid grid-cols-2 gap-4 text-center">
                <StatCard title="Total Score" value={`${scoreDetails.score.toFixed(2)} / ${scoreDetails.totalScore}`} />
                <StatCard title="Accuracy" value={`${scoreDetails.accuracy.toFixed(2)}%`} />
                <StatCard title="Correct" value={scoreDetails.correct} className="text-green-500" />
                <StatCard title="Incorrect" value={scoreDetails.incorrect} className="text-red-500" />
                <StatCard title="Attempted" value={scoreDetails.attempted} />
                <StatCard title="Unattempted" value={scoreDetails.totalQuestions - scoreDetails.attempted} />
              </div>
              <div>
                <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
                  <RechartsPieChart>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <Pie data={chartData} dataKey="value" nameKey="name" innerRadius={60} />
                  </RechartsPieChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="review">
          <Card>
            <CardHeader>
              <CardTitle>Answer Review</CardTitle>
              <CardDescription>Check your answers against the correct solutions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {answers.map((answer, index) => {
                const question = questions.find(q => q.id === answer.questionId);
                if (!question) return null;
                const isCorrect = answer.selectedOption === question.correctAnswerIndex;
                const isAttempted = answer.selectedOption !== null;

                return (
                  <div key={question.id} className="p-4 rounded-lg border">
                    <p className="font-semibold mb-4">{index + 1}. {question.question}</p>
                    <div className="space-y-2">
                      {question.options.map((option, optIndex) => {
                        const isSelected = answer.selectedOption === optIndex;
                        const isCorrectAnswer = question.correctAnswerIndex === optIndex;
                        return (
                          <div
                            key={optIndex}
                            className={cn(
                              "flex items-center gap-3 p-2 rounded-md text-sm",
                              isCorrectAnswer && "bg-green-500/10 text-green-300",
                              isSelected && !isCorrectAnswer && "bg-red-500/10 text-red-300"
                            )}
                          >
                            {isCorrectAnswer ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : isSelected ? <XCircle className="h-4 w-4 text-red-500" /> : <div className="w-4 h-4"/>}
                            <span>{option}</span>
                            {isSelected && <Badge variant="outline" className="ml-auto">{isCorrect ? "Your Correct Answer" : "Your Answer"}</Badge>}
                            {!isSelected && isCorrectAnswer && <Badge variant="outline" className="ml-auto">Correct Answer</Badge>}
                          </div>
                        );
                      })}
                    </div>
                     {!isAttempted && <p className="mt-3 text-sm text-yellow-500">You did not attempt this question. The correct answer is: "{question.options[question.correctAnswerIndex]}"</p>}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ai-suggestions">
           <AdaptiveLearningSuggestions testHistory={testHistory} />
        </TabsContent>
      </Tabs>
    </div>
  );
}


function StatCard({ title, value, className }: { title: string, value: string | number, className?: string }) {
  return (
    <div className="p-4 bg-muted rounded-lg">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className={cn("text-2xl font-bold", className)}>{value}</p>
    </div>
  )
}

function AdaptiveLearningSuggestions({ testHistory }: { testHistory: AdaptiveLearningPathInput['testHistory'] }) {
    const [suggestions, setSuggestions] = useState<{ suggestedTopics: string[], suggestedTests: string[] } | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGeneratePath = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await getAdaptiveLearningPath({ testHistory });
            setSuggestions(result);
        } catch (e) {
            setError("Failed to generate learning path. Please try again.");
            console.error(e);
        }
        setIsLoading(false);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Adaptive Learning Path</CardTitle>
                <CardDescription>Get AI-powered suggestions to improve your weak areas and capitalize on your strengths.</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                {!suggestions && (
                    <Button onClick={handleGeneratePath} disabled={isLoading}>
                        {isLoading ? "Generating..." : "Generate My Learning Path"}
                    </Button>
                )}
                 {error && <p className="mt-4 text-red-500">{error}</p>}
                 {suggestions && (
                    <div className="mt-6 text-left grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Suggested Topics to Focus On</h3>
                            <ul className="space-y-2">
                                {suggestions.suggestedTopics.map((topic, index) => (
                                    <li key={index} className="flex items-center gap-3 p-2 bg-muted rounded-md">
                                        <ArrowRight className="h-4 w-4 text-primary" />
                                        <span>{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-3">Recommended Mock Tests</h3>
                             <ul className="space-y-2">
                                {suggestions.suggestedTests.map((test, index) => (
                                    <li key={index} className="flex items-center gap-3 p-2 bg-muted rounded-md">
                                        <Check className="h-4 w-4 text-primary" />
                                        <span>{test}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
