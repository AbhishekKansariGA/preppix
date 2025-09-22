

import { Exam, Subject, Question, Chapter, MixedTest, Category } from './types';
import { Calculator, BookOpen, BrainCircuit, Mic2 } from 'lucide-react';
import { mathsQuestions } from './questions/maths';
import { allGsQuestions } from './questions/gs';
import { allReasoningQuestions } from './questions/reasoning';
import { allEnglishQuestions } from './questions/english';


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

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const fullTestQuestions = (questions: Question[], count: number) => {
    return shuffle([...questions]).slice(0, count);
}


const staticQuestions: { [key: string]: Question[] } = {
  ...mathsQuestions,
  ...gsMixedTests.reduce((acc, test) => {
    const testQuestions = shuffle([...allGsQuestions]).slice(0, 25);
    acc[`gs-${test.id}`] = testQuestions;
    return acc;
  }, {} as { [key: string]: Question[] }),
  ...reasoningMixedTests.reduce((acc, test) => {
    const testQuestions = shuffle([...allReasoningQuestions]).slice(0, 25);
    acc[`reasoning-${test.id}`] = testQuestions;
    return acc;
  }, {} as { [key: string]: Question[] }),
  ...englishMixedTests.reduce((acc, test) => {
    const testQuestions = shuffle([...allEnglishQuestions]).slice(0, 25);
    acc[`english-${test.id}`] = testQuestions;
    return acc;
  }, {} as { [key: string]: Question[] }),
};

export const getQuestions = (subjectId: string, chapterId?: string): Question[] => {
  const key = chapterId ? `${subjectId}-${chapterId}` : subjectId;
  const questions = staticQuestions[key] || [];
  // For non-chapter maths tests, return 10 random questions from all chapters
  if (subjectId === 'maths' && !chapterId) {
       const allMathQuestions = allMathsChapters.flatMap(c => staticQuestions[`maths-${c.id}`] || []);
       return shuffle(allMathQuestions).slice(0, 10);
  }

  // Shuffle questions to make them appear in a random order
  return [...questions].sort(() => Math.random() - 0.5);
}

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

