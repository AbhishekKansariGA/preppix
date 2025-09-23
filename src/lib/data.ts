import { Exam, Subject, Question, Chapter, MixedTest, Category } from './types';
import { Calculator, BookOpen, BrainCircuit, Mic2 } from 'lucide-react';
import { cglQuestions } from './questions/cgl';
import { chslQuestions } from './questions/chsl';
import { mtsQuestions } from './questions/mts';

export const exams: Exam[] = [
  { id: 'cgl', name: 'SSC CGL', description: 'Combined Graduate Level' },
  { id: 'chsl', name: 'SSC CHSL', description: 'Combined Higher Secondary Level' },
  { id: 'mts', name: 'SSC MTS', description: 'Multi-Tasking Staff' },
];

export const categories: Category[] = [
    { id: 'general', name: 'General' },
    { id: 'obc', name: 'OBC' },
    { id: 'sc', name: 'SC' },
    { id: 'st', name: 'ST' },
    { id: 'ews', name: 'EWS' },
];

export const leaderboardCutoffs: Record<string, Record<string, Record<Category['id'], number>>> = {
  cgl: {
    maths:     { general: 15, obc: 14, sc: 13, st: 12, ews: 14.5 },
    gs:        { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
    reasoning: { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
    english:   { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
  },
  chsl: {
    maths:     { general: 15, obc: 14, sc: 13, st: 12, ews: 14.5 },
    gs:        { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
    reasoning: { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
    english:   { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
  },
  mts: {
    maths:     { general: 15, obc: 14, sc: 13, st: 12, ews: 14.5 },
    gs:        { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
    reasoning: { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
    english:   { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
  }
};

export const arithmeticChapters: Chapter[] = [
    { id: 'number-system', name: 'Number System' },
    { id: 'percentages', name: 'Percentages' },
    { id: 'ratio-proportion', name: 'Ratio and Proportion' },
    { id: 'averages', name: 'Averages' },
    { id: 'si-ci', name: 'Simple and Compound Interest' },
    { id: 'profit-loss-discount', name: 'Profit, Loss and Discount' },
    { id: 'mixtures-allegations', name: 'Mixtures and Allegations' },
    { id: 'time-work', name: 'Time and Work' },
    { id: 'time-speed-distance', name: 'Time, Speed and Distance' },
    { id: 'partnership', name: 'Partnership' },
];

export const advancedChapters: Chapter[] = [
    { id: 'algebra', name: 'Algebra' },
    { id: 'geometry', name: 'Geometry' },
    { id: 'mensuration', name: 'Mensuration' },
    { id: 'trigonometry', name: 'Trigonometry' },
    { id: 'statistics', name: 'Statistics' },
    { id: 'probability', name: 'Probability' },
    { id: 'di', name: 'Data Interpretation' },
    { id: 'coordinate-geometry', name: 'Coordinate Geometry' },
];

export const allMathsChapters: Chapter[] = [...arithmeticChapters, ...advancedChapters];

export const gsMixedTests: MixedTest[] = Array.from({ length: 10 }, (_, i) => ({
    id: `test-${i + 1}`,
    name: `Test ${i + 1}`
}));

export const reasoningMixedTests: MixedTest[] = Array.from({ length: 10 }, (_, i) => ({
    id: `test-${i + 1}`,
    name: `Test ${i + 1}`
}));

export const englishMixedTests: MixedTest[] = Array.from({ length: 10 }, (_, i) => ({
    id: `test-${i + 1}`,
    name: `Test ${i + 1}`
}));

export const subjects: Subject[] = [
  { 
    id: 'maths', 
    name: 'Maths', 
    icon: Calculator,
    chapterGroups: [
        { title: 'Arithmetic', chapters: arithmeticChapters },
        { title: 'Advanced Maths', chapters: advancedChapters },
    ]
  },
  { 
    id: 'gs', 
    name: 'General Studies', 
    icon: BookOpen,
    mixedTests: gsMixedTests
  },
  { 
    id: 'reasoning', 
    name: 'Reasoning', 
    icon: BrainCircuit,
    mixedTests: reasoningMixedTests
  },
  { 
    id: 'english', 
    name: 'English', 
    icon: Mic2,
    mixedTests: englishMixedTests
  },
];

// Function to shuffle an array
function shuffle(array: any[]) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

export const getQuestions = (examId: string, subjectId: string, chapterId?: string): Question[] => {
    let questionPool: Question[] = [];

    // 1. Select the question pool based on the exam
    switch (examId) {
        case 'cgl':
            questionPool = cglQuestions;
            break;
        case 'chsl':
            questionPool = chslQuestions;
            break;
        case 'mts':
            questionPool = mtsQuestions;
            break;
        default:
            return []; // Return empty if exam is not found
    }

    // 2. Filter the pool by the selected subject
    let subjectQuestions = questionPool.filter(q => q.subject.toLowerCase().replace(/\s+/g, '-') === subjectId);
    
    let finalQuestions: Question[] = [];

    // 3. Filter by chapter or handle mixed tests
    if (subjectId === 'maths') {
        if (chapterId) {
            // It's a chapter-specific test
            const chapterQuestions = subjectQuestions.filter(q => q.chapter === chapterId);
            finalQuestions = shuffle([...chapterQuestions]).slice(0, 10);
        } else {
            // Full maths test - currently not a feature, but we can handle it if needed
            return [];
        }
    } else if (subjectId === 'gs' || subjectId === 'reasoning' || subjectId === 'english') {
        if (chapterId) { // chapterId here represents a mixed test ID like "test-1"
             // To make tests seem different, we'll shuffle the pool and slice it.
             const testSize = 25; 
             const shuffled = shuffle([...subjectQuestions]);
             
             // Take a slice to simulate a unique test, using testId for pseudo-randomness
             const testNumber = parseInt(chapterId.replace('test-', '')) || 1;
             const startIndex = (testNumber - 1) * 10 % (shuffled.length - testSize + 1);
             finalQuestions = shuffled.slice(startIndex, startIndex + testSize);
        } else {
             return [];
        }
    } else {
         finalQuestions = subjectQuestions;
    }

    return finalQuestions;
};

export const getExamById = (id: string) => exams.find(e => e.id === id);
export const getSubjectById = (id: string) => subjects.find(s => s.id === id);
export const getChapterById = (subjectId: string, chapterId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject) return undefined;
    
    if ((subject.id === 'gs' || subject.id === 'reasoning' || subject.id === 'english') && subject.mixedTests) {
        return subject.mixedTests.find(t => t.id === chapterId);
    }

    if (subject.chapterGroups) {
        return subject.chapterGroups.flatMap(g => g.chapters).find(c => c.id === chapterId);
    }
    return subject.chapters?.find(c => c.id === chapterId);
};
