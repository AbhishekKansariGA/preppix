
import { Question } from '../types';

export const mathsQuestions: { [key: string]: Question[] } = {
  'maths-percentages': [
    { id: 100, question: "What is 20% of 150?", options: ["20", "25", "30", "35"], correctAnswerIndex: 2, subject: 'Maths', exam: 'SSC CGL', chapter: 'Percentages', translation: { question: "150 का 20% क्या है?", options: ["20", "25", "30", "35"] } },
    { id: 101, question: "If a number is increased from 40 to 50, what is the percentage increase?", options: ["20%", "25%", "30%", "10%"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CGL', chapter: 'Percentages', translation: { question: "यदि किसी संख्या को 40 से बढ़ाकर 50 कर दिया जाए, तो प्रतिशत वृद्धि क्या है?", options: ["20%", "25%", "30%", "10%"] } },
    // ... more questions
  ],
  'maths-profit-loss-discount': [
    { id: 200, question: "A man buys a toy for Rs. 25 and sells it for Rs. 30. Find his gain percent.", options: ["20%", "25%", "15%", "30%"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CGL', chapter: 'Profit, Loss and Discount', translation: { question: "एक आदमी 25 रुपये में एक खिलौना खरीदता है और उसे 30 रुपये में बेचता है। उसका लाभ प्रतिशत ज्ञात कीजिए।", options: ["20%", "25%", "15%", "30%"] } },
    // ... more questions
  ],
  'maths-ratio-proportion': [
    { id: 1200, question: "If a:b = 2:3 and b:c = 4:5, what is a:c?", options: ["8:15", "2:5", "3:4", "1:2"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CHSL', chapter: 'Ratio and Proportion', translation: { question: "यदि a:b = 2:3 और b:c = 4:5, तो a:c क्या है?", options: ["8:15", "2:5", "3:4", "1:2"] } },
  ],
  'maths-time-speed-distance': [
    { id: 1400, question: "A train 100 m long is running at the speed of 30 km/hr. Find the time taken by it to pass a man standing near the railway line.", options: ["10 sec", "12 sec", "14 sec", "16 sec"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC MTS', chapter: 'Time, Speed and Distance', translation: { question: "100 मीटर लंबी एक ट्रेन 30 किमी/घंटा की गति से चल रही है। रेलवे लाइन के पास खड़े एक आदमी को पार करने में उसे कितना समय लगेगा?", options: ["10 सेकंड", "12 सेकंड", "14 सेकंड", "16 सेकंड"] } },
  ],
  // Add all other chapters and their questions for different exams here
};
