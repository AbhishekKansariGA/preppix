
'use server';

/**
 * @fileOverview This file implements a text translation flow.
 *
 * @exports translateText - A function that translates text to a target language.
 * @exports TranslateTextInput - The input type for the translateText function.
 * @exports TranslateTextOutput - The return type for the translateText function.
 */

import {z} from 'genkit';
import {ai} from '@/ai/genkit';


const TranslateTextInputSchema = z.object({
  text: z.string().describe('The text to be translated.'),
  targetLanguage: z
    .string()
    .describe('The target language for translation (e.g., "Hindi").'),
});
export type TranslateTextInput = z.infer<typeof TranslateTextInputSchema>;

const TranslateTextOutputSchema = z.object({
  translatedText: z.string().describe('The translated text.'),
});
export type TranslateTextOutput = z.infer<typeof TranslateTextOutputSchema>;


export async function translateText(
  input: TranslateTextInput
): Promise<TranslateTextOutput> {
  return translationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'translationPrompt',
  input: {
    schema: TranslateTextInputSchema,
  },
  output: {
    schema: TranslateTextOutputSchema,
  },
  prompt: `Translate the following text to {{targetLanguage}}. Do not translate proper nouns or technical terms that should remain in their original language.

Text to translate:
"{{text}}"

Translated text:`,
});

const translationFlow = ai.defineFlow(
  {
    name: 'translationFlow',
    inputSchema: TranslateTextInputSchema,
    outputSchema: TranslateTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
