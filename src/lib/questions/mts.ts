
import { Question } from '../types';

export const mtsQuestions: Question[] = [
  // --- Maths (Moderate/Easy) ---
  // Percentages
  { id: 12001, question: "What is 50% of 200?", options: ["50", "100", "150", "200"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC MTS', chapter: 'percentages' },
  { id: 12002, question: "A shopkeeper bought a chair for Rs. 500 and sold it for Rs. 550. What is his profit percentage?", options: ["10%", "5%", "15%", "12%"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC MTS', chapter: 'percentages' },
  
  // Profit & Loss
  { id: 12003, question: "If the cost price of an item is Rs. 80 and the selling price is Rs. 100, what is the profit?", options: ["Rs. 20", "Rs. 180", "Rs. 25", "Rs. 10"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC MTS', chapter: 'profit-loss-discount' },
  { id: 12004, question: "A discount of 20% on an article is Rs. 40. What is the marked price?", options: ["Rs. 200", "Rs. 160", "Rs. 240", "Rs. 800"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC MTS', chapter: 'profit-loss-discount' },

  // Algebra
  { id: 12005, question: "If x + 5 = 12, what is the value of x?", options: ["7", "17", "-7", "5"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC MTS', chapter: 'algebra'},
  { id: 12006, question: "Simplify: 3a + 2b - a + 4b", options: ["2a + 6b", "4a + 6b", "2a + 2b", "4a + 2b"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC MTS', chapter: 'algebra'},

  // Geometry
  { id: 12007, question: "What is the area of a square with a side of 10 cm?", options: ["40 sq.cm", "100 sq.cm", "20 sq.cm", "10 sq.cm"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC MTS', chapter: 'geometry'},
  { id: 12008, question: "What is the perimeter of a rectangle with length 8 cm and width 5 cm?", options: ["13 cm", "26 cm", "40 cm", "21 cm"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC MTS', chapter: 'geometry'},
  
  // Trigonometry
  { id: 12009, question: "What is the value of sin 90°?", options: ["0", "1", "1/2", "undefined"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC MTS', chapter: 'trigonometry'},
  { id: 12010, question: "If a right-angled triangle has sides 3 cm and 4 cm, what is the hypotenuse?", options: ["5 cm", "6 cm", "7 cm", "2.5 cm"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC MTS', chapter: 'trigonometry'},

  // --- General Studies (Moderate/Easy) ---
  { id: 22001, question: "Who was the first Prime Minister of India?", options: ["Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru", "Dr. Rajendra Prasad"], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC MTS' },
  { id: 22002, question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC MTS' },
  { id: 22003, question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC MTS' },

  // --- Reasoning (Moderate/Easy) ---
  { id: 32001, question: "Which number will complete the series? 2, 4, 6, 8, ?", options: ["10", "12", "9", "11"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC MTS' },
  { id: 32002, question: "If 'Book' is related to 'Read', then 'Pen' is related to:", options: ["Write", "Ink", "Paper", "Blue"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC MTS' },
  { id: 32003, question: "Find the odd one out: Apple, Banana, Carrot, Mango.", options: ["Apple", "Banana", "Carrot", "Mango"], correctAnswerIndex: 2, subject: 'Reasoning', exam: 'SSC MTS' },

  // --- English (Moderate/Easy) ---
  { id: 42001, question: "What is the opposite of 'Happy'?", options: ["Joyful", "Glad", "Sad", "Cheerful"], correctAnswerIndex: 2, subject: 'English', exam: 'SSC MTS' },
  { id: 42002, question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Childer"], correctAnswerIndex: 1, subject: 'English', exam: 'SSC MTS' },
  { id: 42003, question: "Choose the correct verb: The dogs ___ barking.", options: ["is", "am", "are", "was"], correctAnswerIndex: 2, subject: 'English', exam: 'SSC MTS' },
];
