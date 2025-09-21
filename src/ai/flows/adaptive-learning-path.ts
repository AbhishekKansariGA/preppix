'use server';

/**
 * @fileOverview This file implements the Adaptive Learning Path flow, which analyzes a user's mock test performance and suggests relevant topics or mock tests based on their strengths and weaknesses.
 *
 * @requires genkit
 * @requires z
 *
 * @exports adaptiveLearningPath - A function that takes user performance data and returns personalized learning suggestions.
 * @exports AdaptiveLearningPathInput - The input type for the adaptiveLearningPath function.
 * @exports AdaptiveLearningPathOutput - The return type for the adaptiveLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptiveLearningPathInputSchema = z.object({
  testHistory: z
    .array(
      z.object({
        testName: z.string().describe('Name of the mock test taken.'),
        subjectScores: z
          .record(z.number())
          .describe('Scores for each subject in the test.'),
        overallScore: z.number().describe('Overall score in the test.'),
      })
    )
    .describe('History of mock tests taken by the user.'),
  preferredSubjects: z
    .array(z.string())
    .optional()
    .describe('List of subjects the user prefers to study.'),
});
export type AdaptiveLearningPathInput = z.infer<
  typeof AdaptiveLearningPathInputSchema
>;

const AdaptiveLearningPathOutputSchema = z.object({
  suggestedTopics: z
    .array(z.string())
    .describe(
      'List of topics suggested for the user to focus on, based on their weaknesses.'
    ),
  suggestedTests: z
    .array(z.string())
    .describe(
      'List of mock tests suggested for the user to take, based on their strengths and weaknesses.'
    ),
});
export type AdaptiveLearningPathOutput = z.infer<
  typeof AdaptiveLearningPathOutputSchema
>;

export async function adaptiveLearningPath(
  input: AdaptiveLearningPathInput
): Promise<AdaptiveLearningPathOutput> {
  return adaptiveLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adaptiveLearningPathPrompt',
  input: {
    schema: AdaptiveLearningPathInputSchema,
  },
  output: {
    schema: AdaptiveLearningPathOutputSchema,
  },
  prompt: `You are an AI-powered learning path generator. Analyze the user's mock test history and suggest topics they should focus on and mock tests they should take to improve their scores. Consider the user's preferred subjects when making suggestions.

Test History:
{{#each testHistory}}
  Test Name: {{this.testName}}
  Subject Scores: {{json this.subjectScores}}
  Overall Score: {{this.overallScore}}
{{/each}}

Preferred Subjects: {{json preferredSubjects}}

Based on this information, suggest relevant topics and mock tests.
Topics:`, // The Handlebars helper 'json' is provided by Genkit; don't define it yourself.
});

const adaptiveLearningPathFlow = ai.defineFlow(
  {
    name: 'adaptiveLearningPathFlow',
    inputSchema: AdaptiveLearningPathInputSchema,
    outputSchema: AdaptiveLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
