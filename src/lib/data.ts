import { Exam, Subject, Question, Chapter } from './types';
import { Calculator, BookOpen, BrainCircuit, Mic2 } from 'lucide-react';
import { getNewQuestions } from './actions';

export const exams: Exam[] = [
  { id: 'cgl', name: 'SSC CGL', description: 'Combined Graduate Level' },
  { id: 'chsl', name: 'SSC CHSL', description: 'Combined Higher Secondary Level' },
  { id: 'mts', name: 'SSC MTS', description: 'Multi-Tasking Staff' },
];

export const mathsChapters: Chapter[] = [
    { id: 'percentage', name: 'Percentage' },
    { id: 'profit-loss', name: 'Profit & Loss' },
    { id: 'average', name: 'Average' },
    { id: 'si-ci', name: 'Simple & Compound Interest' },
    { id: 'discount', name: 'Discount' },
    { id: 'boat-stream', name: 'Boat and Stream' },
    { id: 'di', name: 'Data Interpretation' },
];

export const subjects: Subject[] = [
  { id: 'maths', name: 'Maths', icon: Calculator, chapters: mathsChapters },
  { id: 'gs', name: 'General Studies', icon: BookOpen },
  { id: 'reasoning', name: 'Reasoning', icon: BrainCircuit },
  { id: 'english', name: 'English', icon: Mic2 },
];

let allQuestions: Question[] = [];

// This function will now directly fetch new questions for a test session.
export const populateQuestions = async (examId: string, subjectId: string, chapterId?: string): Promise<Question[]> => {
    const exam = getExamById(examId);
    const subject = getSubjectById(subjectId);
    const chapter = chapterId ? getChapterById(subjectId, chapterId) : undefined;
    
    if (!exam || !subject) return [];

    const newQuestions = await getNewQuestions({
        exam: exam.name,
        subject: subject.name,
        chapter: chapter?.name
    });
    
    // Add newly fetched questions to our global store to be accessible by getQuestionById
    const existingQuestionIds = new Set(allQuestions.map(q => q.id));
    const uniqueNewQuestions = newQuestions.filter(q => !existingQuestionIds.has(q.id));
    allQuestions = [...allQuestions, ...uniqueNewQuestions];
    
    return newQuestions; // Return only the new questions for the current test
};


export const getQuestions = (examId: string, subjectId: string, chapterId?: string): Question[] => {
    // This function is now less critical for starting a test, but can be used for other purposes.
    // For simplicity, we'll keep its filtering logic, though it's not the primary source for tests anymore.
    const exam = getExamById(examId);
    const subject = getSubjectById(subjectId);
    const chapter = chapterId ? getChapterById(subjectId, chapterId) : undefined;
    
    if (!exam || !subject) return [];

    let filteredQuestions = allQuestions.filter(q => 
        q.exam === exam.name && 
        q.subject === subject.name
    );

    if (chapter) {
        filteredQuestions = filteredQuestions.filter(q => q.chapter === chapter.name);
    } else if (subjectId !== 'maths') {
        filteredQuestions = filteredQuestions.filter(q => !q.chapter);
    }
    
    return filteredQuestions;
};

export const getQuestionById = (id: number): Question | undefined => {
  return allQuestions.find(q => q.id === id);
}

export const getExamById = (id: string) => exams.find(e => e.id === id);
export const getSubjectById = (id: string) => subjects.find(s => s.id === id);
export const getChapterById = (subjectId: string, chapterId: string) => {
    if (subjectId !== 'maths') return undefined;
    return mathsChapters.find(c => c.id === chapterId);
};
