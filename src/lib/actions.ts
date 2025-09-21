'use server';

import { adaptiveLearningPath, AdaptiveLearningPathInput } from '@/ai/flows/adaptive-learning-path';
import { generateQuestions, GenerateQuestionInput } from '@/ai/flows/question-generation-flow';
import { translateText, TranslateTextInput } from '@/ai/flows/translation-flow';
import { Question } from './types';


export async function getAdaptiveLearningPath(input: AdaptiveLearningPathInput) {
  try {
    const output = await adaptiveLearningPath(input);
    return output;
  } catch (error) {
    console.error("Error in getAdaptiveLearningPath action:", error);
    throw new Error("Failed to get adaptive learning path from AI.");
  }
}

export async function getTranslation(input: TranslateTextInput) {
    try {
        const output = await translateText(input);
        return output.translatedText;
    } catch (error) {
        console.error("Error in getTranslation action:", error);
        throw new Error("Failed to get translation from AI.");
    }
}

let questionCache: { [key: string]: { questions: Question[], timestamp: number } } = {};
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function getNewQuestions(input: GenerateQuestionInput): Promise<Question[]> {
  const cacheKey = `${input.exam}-${input.subject}-${input.chapter || 'all'}`;
  const now = Date.now();

  if (questionCache[cacheKey] && (now - questionCache[cacheKey].timestamp < CACHE_DURATION)) {
    console.log("Serving from cache");
    return questionCache[cacheKey].questions;
  }
  
  console.log("Generating new questions");
  try {
    const result = await generateQuestions(input);
    
    const questionsWithDynamicIds = result.questions.map(q => ({
      ...q,
      id: Math.floor(Math.random() * 100000) + Date.now(), // Create a more dynamic ID
    }));

    questionCache[cacheKey] = {
      questions: questionsWithDynamicIds,
      timestamp: now,
    };
    
    return questionsWithDynamicIds;
  } catch (error) {
    console.error("Error in getNewQuestions action:", error);
    throw new Error("Failed to get new questions from AI.");
  }
}
