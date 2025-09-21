
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

async function withAbort<T>(promise: Promise<T>, signal?: AbortSignal): Promise<T> {
  return new Promise((resolve, reject) => {
    if (signal) {
      signal.addEventListener('abort', () => {
        reject(new DOMException('Aborted', 'AbortError'));
      });
    }

    promise.then(resolve, reject);
  });
}


export async function getTranslation(input: TranslateTextInput, signal?: AbortSignal): Promise<string> {
    try {
        const output = await withAbort(translateText(input), signal);
        return output.translatedText;
    } catch (error) {
        console.error("Error in getTranslation action:", error);
        throw error; // Re-throw to be handled by the caller
    }
}


export async function getNewQuestion(input: GenerateQuestionInput): Promise<Question> {
  console.log("Generating new question from AI...");
  try {
    const result = await generateQuestion(input);
    
    const questionWithDynamicId = {
      ...result.question,
      id: Math.floor(Math.random() * 100000) + Date.now(), // Create a more dynamic ID
    };
    
    return questionWithDynamicId;
  } catch (error) {
    console.error("Error in getNewQuestion action:", error);
    throw new Error("Failed to get new question from AI.");
  }
}
