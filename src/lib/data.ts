
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
    chapter: 'Percentage',
    translation: {
        question: 'यदि किसी संख्या में 25% की वृद्धि की जाती है, तो मूल संख्या पर वापस आने के लिए नई संख्या में कितने प्रतिशत की कमी करनी होगी?',
        options: ['20%', '25%', '15%', '30%']
    }
  })),
  'maths-profit-loss': Array.from({ length: 10 }, (_, i) => ({
    id: 200 + i,
    question: 'A shopkeeper sells an item for Rs. 550 at a profit of 10%. What is the cost price?',
    options: ['Rs. 450', 'Rs. 500', 'Rs. 525', 'Rs. 475'],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Profit & Loss',
     translation: {
        question: 'एक दुकानदार 10% के लाभ पर एक वस्तु को 550 रुपये में बेचता है। लागत मूल्य क्या है?',
        options: ['रु. 450', 'रु. 500', 'रु. 525', 'रु. 475']
    }
  })),
  'maths-average': Array.from({ length: 10 }, (_, i) => ({
    id: 300 + i,
    question: 'The average of 5 consecutive numbers is 15. What is the largest number?',
    options: ['16', '17', '18', '19'],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Average',
     translation: {
        question: '5 लगातार संख्याओं का औसत 15 है। सबसे बड़ी संख्या क्या है?',
        options: ['16', '17', '18', '19']
    }
  })),
  'maths-si-ci': Array.from({ length: 10 }, (_, i) => ({
    id: 400 + i,
    question: 'What is the simple interest on Rs. 1000 for 2 years at 5% per annum?',
    options: ['Rs. 50', 'Rs. 100', 'Rs. 150', 'Rs. 200'],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Simple & Compound Interest',
    translation: {
        question: '1000 रुपये पर 5% प्रति वर्ष की दर से 2 साल के लिए साधारण ब्याज क्या है?',
        options: ['रु. 50', 'रु. 100', 'रु. 150', 'रु. 200']
    }
  })),
   'maths-discount': Array.from({ length: 10 }, (_, i) => ({
    id: 500 + i,
    question: 'A shopkeeper gives a 20% discount on an item marked at Rs. 1000. What is the selling price?',
    options: ['Rs. 800', 'Rs. 900', 'Rs. 750', 'Rs. 850'],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Discount',
    translation: {
        question: 'एक दुकानदार 1000 रुपये की चिह्नित वस्तु पर 20% की छूट देता है। विक्रय मूल्य क्या है?',
        options: ['रु. 800', 'रु. 900', 'रु. 750', 'रु. 850']
    }
  })),
  'maths-boat-stream': Array.from({ length: 10 }, (_, i) => ({
    id: 600 + i,
    question: 'A boat goes 10 km upstream in 2 hours. The speed of the stream is 1 km/h. What is the speed of the boat in still water?',
    options: ['4 km/h', '5 km/h', '6 km/h', '7 km/h'],
    correctAnswerIndex: 2,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Boat and Stream',
    translation: {
        question: 'एक नाव 2 घंटे में 10 किमी धारा के प्रतिकूल जाती है। धारा की गति 1 किमी/घंटा है। शांत जल में नाव की गति क्या है?',
        options: ['4 किमी/घंटा', '5 किमी/घंटा', '6 किमी/घंटा', '7 किमी/घंटा']
    }
  })),
  'maths-di': Array.from({ length: 10 }, (_, i) => ({
    id: 700 + i,
    question: 'A pie chart shows the distribution of expenses. If the total expenditure is Rs. 1,00,000, what is the expenditure on food (40%)?',
    options: ['Rs. 30,000', 'Rs. 40,000', 'Rs. 50,000', 'Rs. 60,000'],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Data Interpretation',
    translation: {
        question: 'एक पाई चार्ट खर्चों का वितरण दिखाता है। यदि कुल व्यय 1,00,000 रुपये है, तो भोजन पर व्यय (40%) क्या है?',
        options: ['रु. 30,000', 'रु. 40,000', 'रु. 50,000', 'रु. 60,000']
    }
  })),
  'gs': Array.from({ length: 10 }, (_, i) => ({
    id: 800 + i,
    question: 'Who is known as the "Father of the Indian Constitution"?',
    options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Dr. B.R. Ambedkar', 'Sardar Patel'],
    correctAnswerIndex: 2,
    subject: 'General Studies',
    exam: 'SSC CGL',
    translation: {
        question: '"भारतीय संविधान के जनक" के रूप में किसे जाना जाता है?',
        options: ['महात्मा गांधी', 'जवाहरलाल नेहरू', 'डॉ. बी.आर. अंबेडकर', 'सरदार पटेल']
    }
  })),
  'reasoning': Array.from({ length: 10 }, (_, i) => ({
    id: 900 + i,
    question: 'If CAT is coded as 3120, what is the code for DOG?',
    options: ['4157', '4158', '4159', '4156'],
    correctAnswerIndex: 0,
    subject: 'Reasoning',
    exam: 'SSC CGL',
    translation: {
        question: 'यदि CAT को 3120 के रूप में कोडित किया गया है, तो DOG के लिए कोड क्या है?',
        options: ['4157', '4158', '4159', '4156']
    }
  })),
  'english': Array.from({ length: 10 }, (_, i) => ({
    id: 1000 + i,
    question: 'Find the synonym for "Ephemeral".',
    options: ['Permanent', 'Transient', 'Eternal', 'Durable'],
    correctAnswerIndex: 1,
    subject: 'English',
    exam: 'SSC CGL',
    translation: {
        question: '"Ephemeral" का पर्यायवाची शब्द खोजें।',
        options: ['स्थायी', 'क्षणिक', 'शाश्वत', 'टिकाऊ']
    }
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
