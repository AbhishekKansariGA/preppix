
import { Question } from '../types';

export const chslQuestions: Question[] = [
  // --- Maths (Moderate) ---
  // Percentages
  { id: 11001, question: "If 15% of a number is 45, what is the number?", options: ["200", "300", "150", "450"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CHSL', chapter: 'percentages' },
  { id: 11002, question: "A man spends 75% of his income. If his income increases by 20% and his expenditure increases by 10%, his savings will be increased by:", options: ["40%", "50%", "30%", "25%"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CHSL', chapter: 'percentages' },

  // Profit & Loss
  { id: 11003, question: "A shopkeeper sells an article for Rs. 492 after allowing a discount of 18%. Find the marked price.", options: ["Rs. 580", "Rs. 600", "Rs. 620", "Rs. 550"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CHSL', chapter: 'profit-loss-discount' },
  { id: 11004, question: "The cost price of 15 articles is the same as the selling price of 10 articles. The profit percent is:", options: ["30%", "40%", "50%", "45%"], correctAnswerIndex: 2, subject: 'Maths', exam: 'SSC CHSL', chapter: 'profit-loss-discount' },

  // Algebra
  { id: 11005, question: "If x + 1/x = 4, then find the value of x² + 1/x².", options: ["14", "16", "12", "18"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CHSL', chapter: 'algebra'},
  { id: 11006, question: "Find the factors of x² - 5x + 6.", options: ["(x-2)(x-3)", "(x+2)(x+3)", "(x-2)(x+3)", "(x+2)(x-3)"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CHSL', chapter: 'algebra'},

  // Geometry
  { id: 11007, question: "The angles of a quadrilateral are in the ratio 1:2:3:4. Find the measure of the largest angle.", options: ["120°", "144°", "150°", "100°"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CHSL', chapter: 'geometry'},
  { id: 11008, question: "Two parallel chords of a circle of radius 13 cm are on the same side of the center. If the length of chords are 10 cm and 24 cm, find the distance between them.", options: ["7 cm", "8 cm", "5 cm", "12 cm"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CHSL', chapter: 'geometry'},
  
  // Trigonometry
  { id: 11009, question: "If sin(θ) = 5/13, find the value of tan(θ).", options: ["5/12", "12/5", "12/13", "13/12"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CHSL', chapter: 'trigonometry'},
  { id: 11010, question: "What is the value of tan 45° + cot 45°?", options: ["1", "2", "0", "1/2"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CHSL', chapter: 'trigonometry'},

  // --- General Studies (Moderate) ---
  { id: 21001, question: "Who was the first woman to preside over the Indian National Congress?", options: ["Sarojini Naidu", "Annie Besant", "Indira Gandhi", "Vijaya Lakshmi Pandit"], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL' },
  { id: 21002, question: "Which vitamin deficiency causes Scurvy?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CHSL' },
  { id: 21003, question: "What is the main function of the RBI?", options: ["Printing currency", "Controlling inflation", "Formulating fiscal policy", "Both a and b"], correctAnswerIndex: 3, subject: 'General Studies', exam: 'SSC CHSL' },

  // --- Reasoning (Moderate) ---
  { id: 31001, question: "Find the missing number in the series: 4, 9, 16, 25, ?, 49.", options: ["36", "30", "42", "40"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CHSL' },
  { id: 31002, question: "If 'CAT' is coded as '3120', what is the code for 'DOG'?", options: ["4157", "4158", "4147", "4156"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CHSL' },
  { id: 31003, question: "A man is facing West. He turns 45° in the clockwise direction and then another 180° in the same direction and then 270° in the anti-clockwise direction. Which direction is he facing now?", options: ["South-West", "South", "West", "North-West"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CHSL' },

  // --- English (Moderate) ---
  { id: 41001, question: "Find the antonym of 'Ancient'.", options: ["Old", "Modern", "Aged", "Past"], correctAnswerIndex: 1, subject: 'English', exam: 'SSC CHSL' },
  { id: 41002, question: "Choose the correctly spelt word.", options: ["Millenium", "Millennium", "Milennium", "Millennim"], correctAnswerIndex: 1, subject: 'English', exam: 'SSC CHSL' },
  { id: 41003, question: "Fill in the blank: He is ___ honorable man.", options: ["a", "an", "the", "No article"], correctAnswerIndex: 1, subject: 'English', exam: 'SSC CHSL' },
];
