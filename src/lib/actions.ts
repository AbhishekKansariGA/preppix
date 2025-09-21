'use server';

import { adaptiveLearningPath, AdaptiveLearningPathInput } from '@/ai/flows/adaptive-learning-path';
import { translateText, TranslateTextInput } from '@/ai/flows/translation-flow';

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
