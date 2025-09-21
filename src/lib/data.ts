
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
    question: 'यदि किसी संख्या में 25% की वृद्धि की जाती है, तो मूल संख्या पर वापस आने के लिए नई संख्या में कितने प्रतिशत की कमी करनी होगी?',
    options: ['20%', '25%', '15%', '30%'],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Percentage'
  })),
  'maths-profit-loss': Array.from({ length: 10 }, (_, i) => ({
    id: 200 + i,
    question: 'एक दुकानदार 10% के लाभ पर एक वस्तु को 550 रुपये में बेचता है। लागत मूल्य क्या है?',
    options: ['रु. 450', 'रु. 500', 'रु. 525', 'रु. 475'],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Profit & Loss'
  })),
  'maths-average': Array.from({ length: 10 }, (_, i) => ({
    id: 300 + i,
    question: '5 लगातार संख्याओं का औसत 15 है। सबसे बड़ी संख्या क्या है?',
    options: ['16', '17', '18', '19'],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Average'
  })),
  'maths-si-ci': Array.from({ length: 10 }, (_, i) => ({
    id: 400 + i,
    question: '1000 रुपये पर 5% प्रति वर्ष की दर से 2 साल के लिए साधारण ब्याज क्या है?',
    options: ['रु. 50', 'रु. 100', 'रु. 150', 'रु. 200'],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Simple & Compound Interest'
  })),
   'maths-discount': Array.from({ length: 10 }, (_, i) => ({
    id: 500 + i,
    question: 'एक दुकानदार 1000 रुपये की चिह्नित वस्तु पर 20% की छूट देता है। विक्रय मूल्य क्या है?',
    options: ['रु. 800', 'रु. 900', 'रु. 750', 'रु. 850'],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Discount'
  })),
  'maths-boat-stream': Array.from({ length: 10 }, (_, i) => ({
    id: 600 + i,
    question: 'एक नाव 2 घंटे में 10 किमी धारा के प्रतिकूल जाती है। धारा की गति 1 किमी/घंटा है। शांत जल में नाव की गति क्या है?',
    options: ['4 किमी/घंटा', '5 किमी/घंटा', '6 किमी/घंटा', '7 किमी/घंटा'],
    correctAnswerIndex: 2,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Boat and Stream'
  })),
  'maths-di': Array.from({ length: 10 }, (_, i) => ({
    id: 700 + i,
    question: 'एक पाई चार्ट खर्चों का वितरण दिखाता है। यदि कुल व्यय 1,00,000 रुपये है, तो भोजन पर व्यय (40%) क्या है?',
    options: ['रु. 30,000', 'रु. 40,000', 'रु. 50,000', 'रु. 60,000'],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Data Interpretation'
  })),
  'gs': Array.from({ length: 10 }, (_, i) => ({
    id: 800 + i,
    question: '"भारतीय संविधान के जनक" के रूप में किसे जाना जाता है?',
    options: ['महात्मा गांधी', 'जवाहरलाल नेहरू', 'डॉ. बी.आर. अंबेडकर', 'सरदार पटेल'],
    correctAnswerIndex: 2,
    subject: 'General Studies',
    exam: 'SSC CGL'
  })),
  'reasoning': Array.from({ length: 10 }, (_, i) => ({
    id: 900 + i,
    question: 'यदि CAT को 3120 के रूप में कोडित किया गया है, तो DOG के लिए कोड क्या है?',
    options: ['4157', '4158', '4159', '4156'],
    correctAnswerIndex: 0,
    subject: 'Reasoning',
    exam: 'SSC CGL'
  })),
  'english': Array.from({ length: 10 }, (_, i) => ({
    id: 1000 + i,
    question: 'Find the synonym for "Ephemeral".',
    options: ['Permanent', 'Transient', 'Eternal', 'Durable'],
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
