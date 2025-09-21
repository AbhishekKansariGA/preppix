
import { Exam, Subject, Question, Chapter } from './types';
import { Calculator, BookOpen, BrainCircuit, Mic2 } from 'lucide-react';

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

export const staticQuestions: { [key: string]: Question[] } = {
  'maths-percentage': Array.from({ length: 10 }, (_, i) => ({
    id: 100 + i,
    question: 'If a number is increased by 25%, by what percentage must the new number be decreased to return to the original number?',
    options: ['20%', '25%', '15%', '30%'],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Percentage'
  })),
  'maths-profit-loss': Array.from({ length: 10 }, (_, i) => ({
    id: 200 + i,
    question: 'A shopkeeper sells an article for Rs. 550 at a profit of 10%. What is the cost price?',
    options: ['Rs. 450', 'Rs. 500', 'Rs. 525', 'Rs. 475'],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Profit & Loss'
  })),
  'maths-average': Array.from({ length: 10 }, (_, i) => ({
    id: 300 + i,
    question: 'The average of 5 consecutive numbers is 15. What is the largest number?',
    options: ['16', '17', '18', '19'],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Average'
  })),
  'maths-si-ci': Array.from({ length: 10 }, (_, i) => ({
    id: 400 + i,
    question: 'What is the simple interest on Rs. 1000 at 5% per annum for 2 years?',
    options: ['Rs. 50', 'Rs. 100', 'Rs. 150', 'Rs. 200'],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Simple & Compound Interest'
  })),
   'maths-discount': Array.from({ length: 10 }, (_, i) => ({
    id: 500 + i,
    question: 'A shopkeeper gives a 20% discount on an item marked at Rs. 1000. What is the selling price?',
    options: ['Rs. 800', 'Rs. 900', 'Rs. 750', 'Rs. 850'],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Discount'
  })),
  'maths-boat-stream': Array.from({ length: 10 }, (_, i) => ({
    id: 600 + i,
    question: 'A boat goes 10 km upstream in 2 hours. The speed of the stream is 1 km/h. What is the speed of the boat in still water?',
    options: ['4 km/h', '5 km/h', '6 km/h', '7 km/h'],
    correctAnswerIndex: 2,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Boat and Stream'
  })),
  'maths-di': Array.from({ length: 10 }, (_, i) => ({
    id: 700 + i,
    question: 'A pie chart shows the distribution of expenses. If the total expenditure is Rs. 1,00,000, what is the expenditure on food (40%)?',
    options: ['Rs. 30,000', 'Rs. 40,000', 'Rs. 50,000', 'Rs. 60,000'],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Data Interpretation'
  })),
  'gs': Array.from({ length: 10 }, (_, i) => ({
    id: 800 + i,
    question: 'Who is known as the "Father of the Indian Constitution"?',
    options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Dr. B.R. Ambedkar', 'Sardar Patel'],
    correctAnswerIndex: 2,
    subject: 'General Studies',
    exam: 'SSC CGL'
  })),
  'reasoning': Array.from({ length: 10 }, (_, i) => ({
    id: 900 + i,
    question: 'If CAT is coded as 3120, what is the code for DOG?',
    options: ['4157', '4158', '4159', '4156'],
    correctAnswerIndex: 0,
    subject: 'Reasoning',
    exam: 'SSC CGL'
  })),
  'english': Array.from({ length: 10 }, (_, i) => ({
    id: 1000 + i,
    question: '"Ephemeral" का पर्यायवाची शब्द खोजें।',
    options: ['स्थायी', 'क्षणिक', 'शाश्वत', 'टिकाऊ'],
    correctAnswerIndex: 1,
    subject: 'English',
    exam: 'SSC CGL'
  })),
};

export const getQuestions = (subjectId: string, chapterId?: string): Question[] => {
  const key = chapterId ? `${subjectId}-${chapterId}` : subjectId;
  return staticQuestions[key] || [];
}

export const getExamById = (id: string) => exams.find(e => e.id === id);
export const getSubjectById = (id: string) => subjects.find(s => s.id === id);
export const getChapterById = (subjectId: string, chapterId: string) => {
    if (subjectId !== 'maths') return undefined;
    return mathsChapters.find(c => c.id === chapterId);
};
