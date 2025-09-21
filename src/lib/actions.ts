
'use server';

import { adaptiveLearningPath, AdaptiveLearningPathInput } from '@/ai/flows/adaptive-learning-path';
import { generateQuestion, GenerateQuestionInput } from '@/ai/flows/question-generation-flow';
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

export async function getTranslation(input: TranslateTextInput): Promise<string> {
    try {
        const output = await translateText(input);
        return output.translatedText;
    } catch (error) {
        console.error("Error in getTranslation action:", error);
        // Return original text as a fallback
        return input.text;
    }
}


export async function getNewQuestion(input: GenerateQuestionInput): Promise<Question | null> {
  // This function is now just a wrapper around the AI flow.
  // The caching logic is handled in `question-cache.ts` to ensure clean separation.
  try {
    const result = await generateQuestion(input);
    
    // Ensure the generated question has a truly unique ID.
    const questionWithDynamicId = {
      ...result.question,
      id: Math.floor(Math.random() * 1000000) + Date.now(),
    };
    
    return questionWithDynamicId;
  } catch (error) {
    console.error("Error in getNewQuestion action:", error);
    return null; // Return null on error instead of throwing
  }
}
