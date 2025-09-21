
'use server';

import { adaptiveLearningPath, AdaptiveLearningPathInput } from '@/ai/flows/adaptive-learning-path';
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
    const output = await translateText(input);
    return output.translatedText;
}

// AI-based question generation is disabled in favor of static questions.
// export async function getNewQuestion(input: GenerateQuestionInput): Promise<Question | null> {
//   try {
//     const result = await generateQuestion(input);
//     const questionWithDynamicId = {
//       ...result.question,
//       id: Math.floor(Math.random() * 1000000) + Date.now(),
//     };
//     return questionWithDynamicId;
//   } catch (error) {
//     console.error("Error in getNewQuestion action:", error);
//     return null;
//   }
// }
