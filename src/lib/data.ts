import { Exam, Subject, Question } from './types';
import { Calculator, BookOpen, BrainCircuit, Mic2 } from 'lucide-react';

export const exams: Exam[] = [
  { id: 'cgl', name: 'SSC CGL', description: 'Combined Graduate Level' },
  { id: 'chsl', name: 'SSC CHSL', description: 'Combined Higher Secondary Level' },
  { id: 'mts', name: 'SSC MTS', description: 'Multi-Tasking Staff' },
];

export const subjects: Subject[] = [
  { id: 'maths', name: 'Maths', icon: Calculator },
  { id: 'gs', name: 'General Studies', icon: BookOpen },
  { id: 'reasoning', name: 'Reasoning', icon: BrainCircuit },
  { id: 'english', name: 'English', icon: Mic2 },
];

const allQuestions: Question[] = [
  // Maths
  { id: 1, exam: 'cgl', subject: 'maths', question: 'If a+b=5 and ab=6, find a^2 + b^2.', options: ['13', '14', '15', '12'], correctAnswerIndex: 0 },
  { id: 2, exam: 'cgl', subject: 'maths', question: 'The average of 5 numbers is 27. If one number is excluded, the average becomes 25. The excluded number is?', options: ['35', '25', '45', '55'], correctAnswerIndex: 0 },
  { id: 3, exam: 'chsl', subject: 'maths', question: 'What is the value of sin(30) + cos(60)?', options: ['1', '0.5', '1.5', '2'], correctAnswerIndex: 0 },
  { id: 4, exam: 'mts', subject: 'maths', question: 'A man buys a toy for Rs. 25 and sells it for Rs. 30. Find his gain percent.', options: ['20%', '25%', '15%', '10%'], correctAnswerIndex: 0 },
  { id: 5, exam: 'cgl', subject: 'maths', question: 'Simple interest on a certain sum for 2 years at 10% per annum is Rs. 1600. The sum is?', options: ['Rs. 8000', 'Rs. 10000', 'Rs. 4000', 'Rs. 16000'], correctAnswerIndex: 0 },

  // General Studies
  { id: 6, exam: 'cgl', subject: 'gs', question: 'Who is known as the "Father of the Indian Constitution"?', options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Dr. B.R. Ambedkar', 'Sardar Patel'], correctAnswerIndex: 2 },
  { id: 7, exam: 'chsl', subject: 'gs', question: 'The metal whose salts are sensitive to light is?', options: ['Zinc', 'Silver', 'Copper', 'Aluminum'], correctAnswerIndex: 1 },
  { id: 8, exam: 'mts', subject: 'gs', question: 'Which is the largest river basin in India?', options: ['Godavari Basin', 'Narmada Basin', 'Yamuna Basin', 'Ganga Basin'], correctAnswerIndex: 3 },
  { id: 9, exam: 'cgl', subject: 'gs', question: 'Which vitamin is obtained from Sun rays?', options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'], correctAnswerIndex: 2 },
  { id: 10, exam: 'chsl', subject: 'gs', question: 'What is the capital of Japan?', options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'], correctAnswerIndex: 2 },
  
  // Reasoning
  { id: 11, exam: 'cgl', subject: 'reasoning', question: 'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?', options: ['(1/3)', '(1/8)', '(2/8)', '(1/16)'], correctAnswerIndex: 1 },
  { id: 12, exam: 'chsl', subject: 'reasoning', question: 'If FRIEND is coded as HUMJTK, how is CANDLE written in that code?', options: ['EDRIRL', 'DCQGKP', 'ESJFME', 'FYOBOC'], correctAnswerIndex: 0 },
  { id: 13, exam: 'mts', subject: 'reasoning', question: 'Find the odd one out: Car, Bus, Scooter, Aeroplane.', options: ['Car', 'Bus', 'Scooter', 'Aeroplane'], correctAnswerIndex: 3 },
  { id: 14, exam: 'cgl', subject: 'reasoning', question: 'A is B\'s sister. C is B\'s mother. D is C\'s father. E is D\'s mother. Then, how is A related to D?', options: ['Grandfather', 'Grandmother', 'Daughter', 'Granddaughter'], correctAnswerIndex: 3 },
  { id: 15, exam: 'mts', subject: 'reasoning', question: 'Which word does NOT belong with the others?', options: ['inch', 'ounce', 'centimeter', 'yard'], correctAnswerIndex: 1 },

  // English
  { id: 16, exam: 'cgl', subject: 'english', question: 'Choose the word which is the exact OPPOSITE of the word: "Malice"', options: ['Goodwill', 'Envy', 'Spite', 'Hate'], correctAnswerIndex: 0 },
  { id: 17, exam: 'chsl', subject: 'english', question: 'Find the correctly spelt word.', options: ['Embarass', 'Embarrass', 'Embaras', 'Emberrass'], correctAnswerIndex: 1 },
  { id: 18, exam: 'mts', subject: 'english', question: 'The idiom "A hot potato" means:', options: ['A delicious dish', 'A very hot food item', 'A controversial issue', 'A useless person'], correctAnswerIndex: 2 },
  { id: 19, exam: 'cgl', subject: 'english', question: 'Select the synonym of "Abundant".', options: ['Scarce', 'Plentiful', 'Few', 'Limited'], correctAnswerIndex: 1 },
  { id: 20, exam: 'chsl', subject: 'english', question: 'Fill in the blank: He is afraid ___ the dog.', options: ['from', 'with', 'of', 'at'], correctAnswerIndex: 2 },
];


export const getQuestions = (examId: string, subjectId: string): Question[] => {
  return allQuestions.filter(q => q.exam === examId && q.subject === subjectId);
};

export const getQuestionById = (id: number): Question | undefined => {
  return allQuestions.find(q => q.id === id);
}

export const getExamById = (id: string) => exams.find(e => e.id === id);
export const getSubjectById = (id: string) => subjects.find(s => s.id === id);
