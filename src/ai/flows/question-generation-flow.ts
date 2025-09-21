'use server';

/**
 * @fileOverview This file implements a question generation flow for mock tests.
 *
 * @requires genkit
 * @requires z
 *
 * @exports generateQuestion - A function that generates a new question for a given subject and chapter.
 * @exports GenerateQuestionInput - The input type for the generateQuestion function.
 * @exports GenerateQuestionOutput - The return type for the generateQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateQuestionInputSchema = z.object({
    subject: z.string().describe('The subject for which to generate a question (e.g., "Maths", "English").'),
    chapter: z.string().optional().describe('The specific chapter within the subject (e.g., "Percentage", "Profit & Loss").'),
    exam: z.string().describe('The exam for which the question is intended (e.g., "SSC CGL", "SSC CHSL").'),
});
export type GenerateQuestionInput = z.infer<typeof GenerateQuestionInputSchema>;


const QuestionSchema = z.object({
    id: z.number().describe("A unique number for the question."),
    question: z.string().describe("The question text."),
    options: z.array(z.string()).length(4).describe("An array of 4 possible answers."),
    correctAnswerIndex: z.number().min(0).max(3).describe("The index (0-3) of the correct answer in the options array."),
    subject: z.string(),
    exam: z.string(),
    chapter: z.string().optional(),
});

const GenerateQuestionOutputSchema = z.object({
    question: QuestionSchema.describe("The generated question."),
});

export type GenerateQuestionOutput = z.infer<typeof GenerateQuestionOutputSchema>;

export async function generateQuestion(input: GenerateQuestionInput): Promise<GenerateQuestionOutput> {
  return questionGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'questionGenerationPrompt',
  input: {
    schema: GenerateQuestionInputSchema,
  },
  output: {
    schema: GenerateQuestionOutputSchema,
  },
  prompt: `You are an expert question creator for Indian competitive exams like SSC CGL, CHSL, and MTS.
Generate a unique and relevant multiple-choice question for the following subject and chapter, tailored for the specified exam.
Ensure the question is of a suitable difficulty level for the exam.
For the question, provide a unique ID, 4 options, and the index of the correct answer.

Exam: {{exam}}
Subject: {{subject}}
{{#if chapter}}
Chapter: {{chapter}}
{{/if}}

Generate the question now.`,
});


const questionGenerationFlow = ai.defineFlow(
  {
    name: 'questionGenerationFlow',
    inputSchema: GenerateQuestionInputSchema,
    outputSchema: GenerateQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
