
'use server';

import { Question } from './types';
import { getNewQuestion as generateNewQuestion } from './actions';

// This cache will store questions on the server-side memory.
// It's a simple in-memory cache that persists between server actions within the same server instance.
const questionCache = new Map<string, Question[]>();

function getCacheKey(exam: string, subject: string, chapter?: string): string {
    return `${exam}-${subject}-${chapter || 'full'}`;
}

export async function preloadQuestions(exam: string, subject: string, chapter?: string) {
    const cacheKey = getCacheKey(exam, subject, chapter);
    if (questionCache.has(cacheKey) && questionCache.get(cacheKey)!.length >= 10) {
        // console.log(`Cache hit for ${cacheKey}. No need to preload.`);
        return;
    }

    // console.log(`Cache miss for ${cacheKey}. Preloading questions...`);
    const questionPromises: Promise<Question | null>[] = [];
    for (let i = 0; i < 10; i++) {
        questionPromises.push(generateNewQuestion({ exam, subject, chapter }));
    }
    
    try {
        const results = await Promise.all(questionPromises);
        const uniqueQuestions: Question[] = [];
        const questionTexts = new Set<string>();

        for (const q of results) {
            if (q && !questionTexts.has(q.question)) {
                uniqueQuestions.push(q);
                questionTexts.add(q.question);
            }
        }
        
        // If we still don't have enough, fetch more until we do.
        let retries = 0;
        const MAX_RETRIES = 15;
        while(uniqueQuestions.length < 10 && retries < MAX_RETRIES) {
             const q = await generateNewQuestion({ exam, subject, chapter });
             if (q && !questionTexts.has(q.question)) {
                uniqueQuestions.push(q);
                questionTexts.add(q.question);
            }
            retries++;
        }

        if(uniqueQuestions.length >= 10) {
            questionCache.set(cacheKey, uniqueQuestions.slice(0, 10));
            // console.log(`Successfully preloaded ${uniqueQuestions.length} questions for ${cacheKey}`);
        } else {
            console.warn(`Failed to preload enough unique questions for ${cacheKey} after retries.`);
        }
    } catch (error) {
        console.error(`Error preloading questions for ${cacheKey}:`, error);
    }
}


export async function getPreloadedQuestions(exam: string, subject: string, chapter?: string): Promise<Question[]> {
    const cacheKey = getCacheKey(exam, subject, chapter);
    let questions = questionCache.get(cacheKey);

    if (!questions || questions.length < 10) {
        // console.log(`No/not enough preloaded questions for ${cacheKey}. Fetching them now.`);
        await preloadQuestions(exam, subject, chapter);
        questions = questionCache.get(cacheKey);
    } else {
        // console.log(`Serving preloaded questions for ${cacheKey}`);
    }
    
    // Clear the cache for this key after fetching so that the next test gets fresh questions.
    questionCache.delete(cacheKey);

    return questions || [];
}
