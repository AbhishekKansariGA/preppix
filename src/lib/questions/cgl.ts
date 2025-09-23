
import { Question } from '../types';

export const cglQuestions: Question[] = [
  // --- Maths (Harder) ---
  // Percentages
  { id: 10001, question: "A's salary is 40% of B's salary and B's salary is 25% of C's salary. What percentage of C's salary is A's salary?", options: ["5%", "10%", "15%", "20%"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CGL', chapter: 'percentages' },
  { id: 10002, question: "In an examination, 65% of the students passed in Mathematics, 48% passed in Physics and 30% passed in both. How much percent of students failed in both the subjects?", options: ["17%", "15%", "13%", "12%"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CGL', chapter: 'percentages' },

  // Profit & Loss
  { id: 10003, question: "A dealer sells two machines at Rs. 12000 each. On one, he gains 32% and on the other, he loses 32%. What is his profit or loss percent in the whole transaction?", options: ["No gain no loss", "1% loss", "10.24% loss", "10.24% gain"], correctAnswerIndex: 2, subject: 'Maths', exam: 'SSC CGL', chapter: 'profit-loss-discount' },
  { id: 10004, question: "By selling 144 hens, Mahesh suffered a loss equal to the selling price of 6 hens. His loss percent is:", options: ["4%", "3%", "5%", "4.17%"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CGL', chapter: 'profit-loss-discount' },
  
  // Algebra
  { id: 10005, question: "If x = (√3 + 1) / (√3 - 1) and y = (√3 - 1) / (√3 + 1), then the value of x² + y² is:", options: ["14", "13", "15", "10"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CGL', chapter: 'algebra'},
  { id: 10006, question: "If x + 1/x = 5, then the value of x⁶ + 1/x⁶ is:", options: ["12098", "12048", "14088", "14048"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CGL', chapter: 'algebra'},

  // Geometry
  { id: 10007, question: "The lengths of the three medians of a triangle are 9 cm, 12 cm and 15 cm. The area (in sq. cm) of the triangle is", options: ["24", "72", "48", "144"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CGL', chapter: 'geometry'},
  { id: 10008, question: "If the incentre of an equilateral triangle lies inside the triangle and its radius is 3 cm, then the side of the equilateral triangle is", options: ["9√3 cm", "6√3 cm", "3√3 cm", "6 cm"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CGL', chapter: 'geometry'},

  // Trigonometry
  { id: 10009, question: "The value of (sin 30° + cos 30°) – (sin 60° + cos 60°) is", options: ["0", "1", "2", "-1"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CGL', chapter: 'trigonometry'},
  { id: 10010, question: "If tan(θ) + cot(θ) = 2, then the value of tan²⁰(θ) + cot²⁰(θ) is:", options: ["0", "2", "2²⁰", "2¹⁰"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CGL', chapter: 'trigonometry'},

  // --- General Studies (Harder) ---
  { id: 20001, question: "Which article of the Indian Constitution deals with the abolition of titles?", options: ["Article 16", "Article 17", "Article 18", "Article 19"], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL' },
  { id: 20002, question: "The Ryotwari System was introduced by Thomas Munro in which region of India?", options: ["Bengal and Bihar", "Madras and Bombay Presidencies", "United Provinces", "Central Provinces"], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL' },
  { id: 20003, question: "Which of the following is NOT a primary greenhouse gas found in the Earth's atmosphere?", options: ["Carbon Dioxide", "Methane", "Nitrous Oxide", "Sulphur Dioxide"], correctAnswerIndex: 3, subject: 'General Studies', exam: 'SSC CGL' },
  
  // --- Reasoning (Harder) ---
  { id: 30001, question: "Find the next number in the series: 3, 7, 23, 95, ?", options: ["479", "383", "575", "475"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL' },
  { id: 30002, question: "In a certain code, 'JOURNEY' is written as 'LPVSIDZ'. How is 'MEDICAL' written in that code?", options: ["NFHDJBK", "NFFDJBK", "NFDHDBK", "NFHDJCK"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL' },
  { id: 30003, question: "Statements: All pens are pencils. No pencil is an eraser. Conclusions: I. No pen is an eraser. II. Some erasers are pens.", options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL' },

  // --- English (Harder) ---
  { id: 40001, question: "Find the synonym of 'Cacophony'.", options: ["Harmony", "Silence", "Discord", "Melody"], correctAnswerIndex: 2, subject: 'English', exam: 'SSC CGL' },
  { id: 40002, question: "Choose the correct meaning of the idiom 'To throw down the gauntlet'.", options: ["To accept defeat", "To give a challenge", "To surrender", "To abuse someone"], correctAnswerIndex: 1, subject: 'English', exam: 'SSC CGL' },
  { id: 40003, question: "In the following question, a sentence has been given in Active/Passive voice. Out of the four alternatives, select the one which best expresses the same sentence in Passive/Active voice: 'The deputy manager is threatening the staff.'", options: ["The staff is threatened by the deputy manager.", "The staff are being threatened by the deputy manager.", "The deputy manager is being threatened by the staff.", "The staff were threatened by the deputy manager."], correctAnswerIndex: 1, subject: 'English', exam: 'SSC CGL' },
];
