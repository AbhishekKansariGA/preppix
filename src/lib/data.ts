

import { Exam, Subject, Question, Chapter } from './types';
import { Calculator, BookOpen, BrainCircuit, Mic2 } from 'lucide-react';

export const exams: Exam[] = [
  { id: 'cgl', name: 'SSC CGL', description: 'Combined Graduate Level' },
  { id: 'chsl', name: 'SSC CHSL', description: 'Combined Higher Secondary Level' },
  { id: 'mts', name: 'SSC MTS', description: 'Multi-Tasking Staff' },
];

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

export const gsChapters: Chapter[] = [
    { id: 'history', name: 'History' },
    { id: 'economics', name: 'Economics' },
    { id: 'science', name: 'Science' },
    { id: 'static-gk', name: 'Static GK' },
    { id: 'geography', name: 'Geography' },
    { id: 'computer', name: 'Computer' },
    { id: 'polity', name: 'Polity' },
    { id: 'current-affairs', name: 'Current Affairs' },
];

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
    chapters: gsChapters
  },
  { id: 'reasoning', name: 'Reasoning', icon: BrainCircuit },
  { id: 'english', name: 'English', icon: Mic2 },
];

export const staticQuestions: { [key: string]: Question[] } = {
  'maths-percentages': Array.from({ length: 10 }, (_, i) => ({
    id: 100 + i,
    question: `If a number is increased by ${10 + i}%, by what percentage must the new number be decreased to return to the original number?`,
    options: [`${((100 * (10 + i)) / (110 + i)).toFixed(2)}%`, `${20 + i}%`, `${15 + i}%`, `${25 + i}%`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Percentages',
    translation: {
      question: `यदि किसी संख्या में ${10 + i}% की वृद्धि की जाती है, तो मूल संख्या पर वापस आने के लिए नई संख्या में कितने प्रतिशत की कमी करनी होगी?`,
      options: [`${((100 * (10 + i)) / (110 + i)).toFixed(2)}%`, `${20 + i}%`, `${15 + i}%`, `${25 + i}%`]
    }
  })),
  'maths-profit-loss-discount': Array.from({ length: 10 }, (_, i) => ({
    id: 200 + i,
    question: `A shopkeeper sells an item for Rs. ${550 + i*10} at a profit of 10%. What is the cost price?`,
    options: [`Rs. ${500 + i*9}`, `Rs. ${500 + i*10}`, `Rs. ${475 + i*10}`, `Rs. ${450 + i*10}`],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Profit, Loss and Discount',
     translation: {
        question: `एक दुकानदार 10% के लाभ पर एक वस्तु को ${550 + i*10} रुपये में बेचता है। लागत मूल्य क्या है?`,
        options: [`रु. ${500 + i*9}`, `रु. ${500 + i*10}`, `रु. ${475 + i*10}`, `रु. ${450 + i*10}`]
    }
  })),
  'maths-averages': Array.from({ length: 10 }, (_, i) => ({
    id: 300 + i,
    question: `The average of 5 consecutive numbers is ${15 + i}. What is the largest number?`,
    options: [`${16+i}`, `${17+i}`, `${18+i}`, `${19+i}`],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Averages',
     translation: {
        question: `5 लगातार संख्याओं का औसत ${15 + i} है। सबसे बड़ी संख्या क्या है?`,
        options: [`${16+i}`, `${17+i}`, `${18+i}`, `${19+i}`]
    }
  })),
  'maths-si-ci': Array.from({ length: 10 }, (_, i) => ({
    id: 400 + i,
    question: `What is the simple interest on Rs. ${1000 + i*100} for 2 years at 5% per annum?`,
    options: [`Rs. ${100 + i*10}`, `Rs. ${110 + i*10}`, `Rs. ${120 + i*10}`, `Rs. ${130 + i*10}`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Simple & Compound Interest',
    translation: {
        question: `${1000 + i*100} रुपये पर 5% प्रति वर्ष की दर से 2 साल के लिए साधारण ब्याज क्या है?`,
        options: [`रु. ${100 + i*10}`, `रु. ${110 + i*10}`, `रु. ${120 + i*10}`, `रु. ${130 + i*10}`]
    }
  })),
   'maths-time-work': Array.from({ length: 10 }, (_, i) => ({
    id: 500 + i,
    question: `A can do a piece of work in ${10 + i} days. B can do it in ${15 + i} days. In how many days can they do it together?`,
    options: [`${((10+i)*(15+i)/(25+2*i)).toFixed(2)} days`, `${(12+i)} days`, `${(11+i)} days`, `${(13+i)} days`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Time and Work',
    translation: {
        question: `A एक काम को ${10 + i} दिनों में कर सकता है। B उसे ${15 + i} दिनों में कर सकता है। वे दोनों मिलकर इसे कितने दिनों में कर सकते हैं?`,
        options: [`${((10+i)*(15+i)/(25+2*i)).toFixed(2)} दिन`, `${(12+i)} दिन`, `${(11+i)} दिन`, `${(13+i)} दिन`]
    }
  })),
    'maths-number-system': Array.from({ length: 10 }, (_, i) => ({
    id: 1100 + i,
    question: `What is the unit digit of ${3 + i}^${4}?`,
    options: [`${((3+i)**4) % 10}`, `${((3+i)**4) % 10 - 1}`, `${((3+i)**4) % 10 + 1}`, `${((3+i)**4) % 10 + 2}`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Number System',
    translation: {
      question: `${3 + i}^${4} का इकाई अंक क्या है?`,
      options: [`${((3+i)**4) % 10}`, `${((3+i)**4) % 10 - 1}`, `${((3+i)**4) % 10 + 1}`, `${((3+i)**4) % 10 + 2}`]
    }
  })),
  'maths-ratio-proportion': Array.from({ length: 10 }, (_, i) => ({
    id: 1200 + i,
    question: `If a:b = ${2 + i}:${3 + i} and b:c = ${4 + i}:${5 + i}, what is a:c?`,
    options: [`${(2+i)*(4+i)}:${(3+i)*(5+i)}`, `${(2+i)*(5+i)}:${(3+i)*(4+i)}`, `${(3+i)*(4+i)}:${(2+i)*(5+i)}`, `1:2`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CHSL',
    chapter: 'Ratio and Proportion',
    translation: {
      question: `यदि a:b = ${2 + i}:${3 + i} और b:c = ${4 + i}:${5 + i}, तो a:c क्या है?`,
      options: [`${(2+i)*(4+i)}:${(3+i)*(5+i)}`, `${(2+i)*(5+i)}:${(3+i)*(4+i)}`, `${(3+i)*(4+i)}:${(2+i)*(5+i)}`, `1:2`]
    }
  })),
  'maths-mixtures-allegations': Array.from({ length: 10 }, (_, i) => ({
    id: 1300 + i,
    question: `In what ratio must a grocer mix two varieties of pulses costing Rs. ${15 + i} and Rs. ${20 + i} per kg respectively so as to get a mixture worth Rs. ${16.5 + i} kg?`,
    options: [`7:3`, `5:3`, `3:7`, `3:5`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Mixtures and Allegations',
    translation: {
      question: `एक पंसारी को क्रमशः ${15 + i} रुपये और ${20 + i} रुपये प्रति किलो लागत वाली दो किस्मों की दालों को किस अनुपात में मिलाना चाहिए ताकि ${16.5 + i} रुपये किलो का मिश्रण प्राप्त हो सके?`,
      options: [`7:3`, `5:3`, `3:7`, `3:5`]
    }
  })),
  'maths-time-speed-distance': Array.from({ length: 10 }, (_, i) => ({
    id: 1400 + i,
    question: `A train ${100 + i*10} m long is running at the speed of 30 km/hr. Find the time taken by it to pass a man standing near the railway line.`,
    options: [`${((100 + i*10) * 18 / (30 * 5)).toFixed(2)} sec`, `${((100 + i*10) * 18 / (30 * 5)+1).toFixed(2)} sec`, `${((100 + i*10) * 18 / (30 * 5)+2).toFixed(2)} sec`, `${((100 + i*10) * 18 / (30 * 5)+3).toFixed(2)} sec`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC MTS',
    chapter: 'Time, Speed and Distance',
    translation: {
      question: `${100 + i*10} मीटर लंबी एक ट्रेन 30 किमी/घंटा की गति से चल रही है। रेलवे लाइन के पास खड़े एक आदमी को पार करने में उसे कितना समय लगेगा?`,
      options: [`${((100 + i*10) * 18 / (30 * 5)).toFixed(2)} सेकंड`, `${((100 + i*10) * 18 / (30 * 5)+1).toFixed(2)} सेकंड`, `${((100 + i*10) * 18 / (30 * 5)+2).toFixed(2)} सेकंड`, `${((100 + i*10) * 18 / (30 * 5)+3).toFixed(2)} सेकंड`]
    }
  })),
  'maths-partnership': Array.from({ length: 10 }, (_, i) => ({
    id: 1500 + i,
    question: `A and B start a business with capitals of Rs. ${3000 + i*100} and Rs. ${4000 + i*100}. Find the share of A in a profit of Rs. ${1400 + i*100}.`,
    options: [`Rs. ${Math.round((1400 + i*100) * (3000 + i*100) / (7000 + i*200))}`, `Rs. ${Math.round((1400 + i*100) * (4000 + i*100) / (7000 + i*200))}`, `Rs. 700`, `Rs. 500`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Partnership',
    translation: {
      question: `A और B क्रमशः ${3000 + i*100} रुपये और ${4000 + i*100} रुपये की पूंजी के साथ एक व्यवसाय शुरू करते हैं। ${1400 + i*100} रुपये के लाभ में A का हिस्सा ज्ञात करें।`,
      options: [`रु. ${Math.round((1400 + i*100) * (3000 + i*100) / (7000 + i*200))}`, `रु. ${Math.round((1400 + i*100) * (4000 + i*100) / (7000 + i*200))}`, `रु. 700`, `रु. 500`]
    }
  })),
  'maths-algebra': Array.from({ length: 10 }, (_, i) => ({
    id: 1600 + i,
    question: `If x + 1/x = ${3 + i}, then what is the value of x^2 + 1/x^2?`,
    options: [`${(3+i)**2 - 2}`, `${(3+i)**2 - 1}`, `${(3+i)**2}`, `${(3+i)**2 + 1}`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Algebra',
    translation: {
      question: `यदि x + 1/x = ${3 + i}, तो x^2 + 1/x^2 का मान क्या है?`,
      options: [`${(3+i)**2 - 2}`, `${(3+i)**2 - 1}`, `${(3+i)**2}`, `${(3+i)**2 + 1}`]
    }
  })),
  'maths-geometry': Array.from({ length: 10 }, (_, i) => ({
    id: 1700 + i,
    question: `In a circle, a chord of length ${6 + i} cm is at a distance of ${4 + i} cm from the center. What is the radius of the circle?`,
    options: [`${Math.sqrt(( (6+i)/2 )**2 + (4+i)**2).toFixed(2)} cm`, `${Math.sqrt(( (6+i)/2 )**2 + (4+i)**2 + 1).toFixed(2)} cm`, `${Math.sqrt(( (6+i)/2 )**2 + (4+i)**2 + 2).toFixed(2)} cm`, `${Math.sqrt(( (6+i)/2 )**2 + (4+i)**2 + 3).toFixed(2)} cm`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CHSL',
    chapter: 'Geometry',
    translation: {
      question: `एक वृत्त में, ${6 + i} सेमी लंबाई की एक जीवा केंद्र से ${4 + i} सेमी की दूरी पर है। वृत्त की त्रिज्या क्या है?`,
      options: [`${Math.sqrt(( (6+i)/2 )**2 + (4+i)**2).toFixed(2)} सेमी`, `${Math.sqrt(( (6+i)/2 )**2 + (4+i)**2 + 1).toFixed(2)} सेमी`, `${Math.sqrt(( (6+i)/2 )**2 + (4+i)**2 + 2).toFixed(2)} सेमी`, `${Math.sqrt(( (6+i)/2 )**2 + (4+i)**2 + 3).toFixed(2)} सेमी`]
    }
  })),
  'maths-mensuration': Array.from({ length: 10 }, (_, i) => ({
    id: 1800 + i,
    question: `The area of a square field is ${64 + i*10} sq.m. What is the length of its diagonal?`,
    options: [`${Math.sqrt(2 * (64 + i*10)).toFixed(2)} m`, `${Math.sqrt(2 * (64 + i*10) + 1).toFixed(2)} m`, `${Math.sqrt(2 * (64 + i*10) + 2).toFixed(2)} m`, `${Math.sqrt(2 * (64 + i*10) + 3).toFixed(2)} m`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Mensuration',
    translation: {
      question: `एक वर्गाकार मैदान का क्षेत्रफल ${64 + i*10} वर्ग मीटर है। इसके विकर्ण की लंबाई क्या है?`,
      options: [`${Math.sqrt(2 * (64 + i*10)).toFixed(2)} मीटर`, `${Math.sqrt(2 * (64 + i*10) + 1).toFixed(2)} मीटर`, `${Math.sqrt(2 * (64 + i*10) + 2).toFixed(2)} मीटर`, `${Math.sqrt(2 * (64 + i*10) + 3).toFixed(2)} मीटर`]
    }
  })),
  'maths-trigonometry': Array.from({ length: 10 }, (_, i) => ({
    id: 1900 + i,
    question: `If sin(A) = ${(3+i/10).toFixed(2)}, what is the value of cos(A)?`,
    options: [`${Math.sqrt(1 - ((3+i/10))**2).toFixed(2)}`, `${Math.sqrt(1 - ((3+i/10)+0.1)**2).toFixed(2)}`, `${Math.sqrt(1 - ((3+i/10)+0.2)**2).toFixed(2)}`, `${Math.sqrt(1 - ((3+i/10)-0.1)**2).toFixed(2)}`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC MTS',
    chapter: 'Trigonometry',
    translation: {
      question: `यदि sin(A) = ${(3+i/10).toFixed(2)}, तो cos(A) का मान क्या है?`,
      options: [`${Math.sqrt(1 - ((3+i/10))**2).toFixed(2)}`, `${Math.sqrt(1 - ((3+i/10)+0.1)**2).toFixed(2)}`, `${Math.sqrt(1 - ((3+i/10)+0.2)**2).toFixed(2)}`, `${Math.sqrt(1 - ((3+i/10)-0.1)**2).toFixed(2)}`]
    }
  })),
  'maths-statistics': Array.from({ length: 10 }, (_, i) => ({
    id: 2000 + i,
    question: `Find the mean of the first ${5 + i} natural numbers.`,
    options: [`${(5+i+1)/2}`, `${(5+i+1)/2 + 1}`, `${(5+i+1)/2 + 2}`, `${(5+i+1)/2 - 1}`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Statistics',
    translation: {
      question: `पहले ${5 + i} प्राकृतिक संख्याओं का माध्य ज्ञात कीजिए।`,
      options: [`${(5+i+1)/2}`, `${(5+i+1)/2 + 1}`, `${(5+i+1)/2 + 2}`, `${(5+i+1)/2 - 1}`]
    }
  })),
  'maths-probability': Array.from({ length: 10 }, (_, i) => ({
    id: 2100 + i,
    question: `What is the probability of getting a head when a coin is tossed ${i + 1} times?`,
    options: [`1/${2**(i+1)}`, `1/${2**(i+2)}`, `1/${2**i}`, `i/${2**(i+1)}`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CHSL',
    chapter: 'Probability',
    translation: {
      question: `एक सिक्के को ${i + 1} बार उछालने पर चित आने की क्या प्रायिकता है?`,
      options: [`1/${2**(i+1)}`, `1/${2**(i+2)}`, `1/${2**i}`, `i/${2**(i+1)}`]
    }
  })),
  'maths-di': Array.from({ length: 10 }, (_, i) => ({
    id: 700 + i,
    question: `A pie chart shows the distribution of expenses. If the total expenditure is Rs. 1,00,000, what is the expenditure on food (${30 + i}%)?`,
    options: [`Rs. ${30000 + i*1000}`, `Rs. ${40000 + i*1000}`, `Rs. ${50000 + i*1000}`, `Rs. ${60000 + i*1000}`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Data Interpretation',
    translation: {
        question: `एक पाई चार्ट खर्चों का वितरण दिखाता है। यदि कुल व्यय 1,00,000 रुपये है, तो भोजन पर व्यय (${30 + i}%) क्या है?`,
        options: [`रु. ${30000 + i*1000}`, `रु. ${40000 + i*1000}`, `रु. ${50000 + i*1000}`, `रु. ${60000 + i*1000}`]
    }
  })),
   'maths-coordinate-geometry': Array.from({ length: 10 }, (_, i) => ({
    id: 2200 + i,
    question: `Find the distance between the points (${i}, ${i+2}) and (${i+3}, ${i+6}).`,
    options: [`5`, `6`, `7`, `8`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC MTS',
    chapter: 'Coordinate Geometry',
    translation: {
        question: `बिंदुओं (${i}, ${i+2}) और (${i+3}, ${i+6}) के बीच की दूरी ज्ञात कीजिए।`,
        options: [`5`, `6`, `7`, `8`]
    }
  })),
  'gs-history': [
    { id: 2300, question: 'Who founded the Maurya Empire?', options: ['Ashoka', 'Chandragupta Maurya', 'Bindusara', 'Samudragupta'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'History', translation: { question: 'मौर्य साम्राज्य की स्थापना किसने की?', options: ['अशोक', 'चंद्रगुप्त मौर्य', 'बिन्दुसार', 'समुद्रगुप्त'] } },
    { id: 2301, question: 'The first battle of Panipat was fought between Babur and whom?', options: ['Rana Sanga', 'Ibrahim Lodi', 'Sher Shah Suri', 'Akbar'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'History', translation: { question: 'पानीपत की पहली लड़ाई बाबर और किसके बीच लड़ी गई थी?', options: ['राणा सांगा', 'इब्राहिम लोदी', 'शेर शाह सूरी', 'अकबर'] } },
    { id: 2302, question: 'Who started the policy of "Doctrine of Lapse"?', options: ['Lord Dalhousie', 'Lord Curzon', 'Lord Canning', 'Lord Wellesley'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'History', translation: { question: '"व्यपगत का सिद्धांत" की नीति किसने शुरू की?', options: ['लॉर्ड डलहौजी', 'लॉर्ड कर्जन', 'लॉर्ड कैनिंग', 'लॉर्ड वेलेस्ली'] } },
    { id: 2303, question: 'The Indus Valley Civilization flourished around which period?', options: ['1000-500 BC', '500-100 BC', '2500-1750 BC', '3000-2000 BC'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'History', translation: { question: 'सिंधु घाटी सभ्यता किस काल के आसपास फली-फूली?', options: ['1000-500 ईसा पूर्व', '500-100 ईसा पूर्व', '2500-1750 ईसा पूर्व', '3000-2000 ईसा पूर्व'] } },
    { id: 2304, question: 'Who was the first Gupta ruler to adopt the title of "Maharajadhiraja"?', options: ['Chandragupta I', 'Samudragupta', 'Kumaragupta', 'Skandagupta'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC MTS', chapter: 'History', translation: { question: '"महाराजाधिराज" की उपाधि धारण करने वाला पहला गुप्त शासक कौन था?', options: ['चंद्रगुप्त प्रथम', 'समुद्रगुप्त', 'कुमारगुप्त', 'स्कंदगुप्त'] } },
    { id: 2305, question: 'In which year did the Jallianwala Bagh massacre take place?', options: ['1917', '1918', '1919', '1920'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'History', translation: { question: 'जलियाँवाला बाग हत्याकांड किस वर्ष हुआ था?', options: ['1917', '1918', '1919', '1920'] } },
    { id: 2306, question: 'Who gave the slogan "Inquilab Zindabad"?', options: ['Bhagat Singh', 'Subhas Chandra Bose', 'Mahatma Gandhi', 'Hasrat Mohani'], correctAnswerIndex: 3, subject: 'General Studies', exam: 'SSC CGL', chapter: 'History', translation: { question: '"इंकलाब जिंदाबाद" का नारा किसने दिया?', options: ['भगत सिंह', 'सुभाष चंद्र बोस', 'महात्मा गांधी', 'हसरत मोहानी'] } },
    { id: 2307, question: 'The Third Battle of Panipat was fought between the Marathas and whom?', options: ['Mughals', 'Ahmad Shah Abdali', 'British', 'Nadir Shah'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'History', translation: { question: 'पानीपत की तीसरी लड़ाई मराठों और किसके बीच लड़ी गई थी?', options: ['मुगल', 'अहमद शाह अब्दाली', 'अंग्रेज', 'नादिर शाह'] } },
    { id: 2308, question: 'Who wrote the book "Arthashastra"?', options: ['Kalidasa', 'Chanakya', 'Aryabhatta', 'Harisena'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'History', translation: { question: '"अर्थशास्त्र" पुस्तक किसने लिखी?', options: ['कालिदास', 'चाणक्य', 'आर्यभट्ट', 'हरिसेन'] } },
    { id: 2309, question: 'Which Mughal emperor built the "Red Fort" in Delhi?', options: ['Akbar', 'Jahangir', 'Shah Jahan', 'Aurangzeb'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC MTS', chapter: 'History', translation: { question: 'किस मुगल सम्राट ने दिल्ली में "लाल किला" बनवाया था?', options: ['अकबर', 'जहाँगीर', 'शाहजहाँ', 'औरंगजेब'] } }
  ],
  'gs-economics': [
    { id: 2400, question: 'Who is known as the father of Economics?', options: ['Adam Smith', 'John Maynard Keynes', 'Karl Marx', 'Milton Friedman'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Economics', translation: { question: 'अर्थशास्त्र का जनक किसे कहा जाता है?', options: ['एडम स्मिथ', 'जॉन मेनार्ड कीन्स', 'कार्ल मार्क्स', 'मिल्टन फ्रीडमैन'] } },
    { id: 2401, question: 'What does GDP stand for?', options: ['Gross Domestic Product', 'General Domestic Product', 'Gross Development Product', 'General Development Product'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Economics', translation: { question: 'जीडीपी का क्या अर्थ है?', options: ['सकल घरेलू उत्पाद', 'सामान्य घरेलू उत्पाद', 'सकल विकास उत्पाद', 'सामान्य विकास उत्पाद'] } },
    { id: 2402, question: 'Which body is responsible for monetary policy in India?', options: ['Ministry of Finance', 'NITI Aayog', 'Reserve Bank of India', 'Securities and Exchange Board of India'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Economics', translation: { question: 'भारत में मौद्रिक नीति के लिए कौन सी संस्था जिम्मेदार है?', options: ['वित्त मंत्रालय', 'नीति आयोग', 'भारतीय रिजर्व बैंक', 'भारतीय प्रतिभूति और विनिमय बोर्ड'] } },
    { id: 2403, question: 'The "Blue Revolution" is related to what?', options: ['Fish production', 'Milk production', 'Oilseed production', 'Food grain production'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Economics', translation: { question: '"नीली क्रांति" किससे संबंधित है?', options: ['मछली उत्पादन', 'दूध उत्पादन', 'तिलहन उत्पादन', 'खाद्यान्न उत्पादन'] } },
    { id: 2404, question: 'When were the major commercial banks in India nationalized for the first time?', options: ['1947', '1955', '1969', '1980'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Economics', translation: { question: 'भारत में प्रमुख वाणिज्यिक बैंकों का पहली बार राष्ट्रीयकरण कब किया गया था?', options: ['1947', '1955', '1969', '1980'] } },
    { id: 2405, question: 'What is the base year for calculating the Consumer Price Index (CPI) in India?', options: ['2004-05', '2011-12', '2014-15', '2010'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Economics', translation: { question: 'भारत में उपभोक्ता मूल्य सूचकांक (CPI) की गणना के लिए आधार वर्ष क्या है?', options: ['2004-05', '2011-12', '2014-15', '2010'] } },
    { id: 2406, question: 'What type of economy does India have?', options: ['Capitalist Economy', 'Socialist Economy', 'Mixed Economy', 'Communist Economy'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Economics', translation: { question: 'भारत की अर्थव्यवस्था किस प्रकार की है?', options: ['पूंजीवादी अर्थव्यवस्था', 'समाजवादी अर्थव्यवस्था', 'मिश्रित अर्थव्यवस्था', 'साम्यवादी अर्थव्यवस्था'] } },
    { id: 2407, question: 'Who is the chairman of the GST council?', options: ['Prime Minister', 'President', 'Union Finance Minister', 'RBI Governor'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Economics', translation: { question: 'जीएसटी परिषद का अध्यक्ष कौन है?', options: ['प्रधानमंत्री', 'राष्ट्रपति', 'केंद्रीय वित्त मंत्री', 'आरबीआई गवर्नर'] } },
    { id: 2408, question: 'The term "demonetisation" refers to:', options: ['Creating new currency', 'Withdrawing a currency unit of its status as legal tender', 'Increasing money supply', 'Decreasing taxes'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Economics', translation: { question: '"विमुद्रीकरण" शब्द का अर्थ है:', options: ['नई मुद्रा बनाना', 'किसी मुद्रा इकाई की कानूनी निविदा की स्थिति को वापस लेना', 'मुद्रा आपूर्ति बढ़ाना', 'कर घटाना'] } },
    { id: 2409, question: 'Where is the headquarters of the World Bank located?', options: ['Geneva', 'New York', 'Paris', 'Washington D.C.'], correctAnswerIndex: 3, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Economics', translation: { question: 'विश्व बैंक का मुख्यालय कहाँ स्थित है?', options: ['जिनेवा', 'न्यूयॉर्क', 'पेरिस', 'वाशिंगटन डी.सी.'] } }
  ],
  'gs-science': [
    { id: 2500, question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondrion', 'Ribosome', 'Lysosome'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Science', translation: { question: 'कोशिका का पावरहाउस क्या है?', options: ['नाभिक', 'माइटोकॉन्ड्रियन', 'राइबोसोम', 'लाइसोसोम'] } },
    { id: 2501, question: 'What is the chemical symbol for Gold?', options: ['Ag', 'Au', 'Gd', 'Go'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Science', translation: { question: 'सोने का रासायनिक प्रतीक क्या है?', options: ['Ag', 'Au', 'Gd', 'Go'] } },
    { id: 2502, question: 'Which gas is most abundant in the Earth\'s atmosphere?', options: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Nitrogen'], correctAnswerIndex: 3, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Science', translation: { question: 'पृथ्वी के वायुमंडल में कौन सी गैस सबसे प्रचुर मात्रा में है?', options: ['ऑक्सीजन', 'हाइड्रोजन', 'कार्बन डाइऑक्साइड', 'नाइट्रोजन'] } },
    { id: 2503, question: 'The deficiency of which vitamin causes Scurvy?', options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Science', translation: { question: 'किस विटामिन की कमी से स्कर्वी होता है?', options: ['विटामिन ए', 'विटामिन बी', 'विटामिन सी', 'विटामिन डी'] } },
    { id: 2504, question: 'What is the unit of measurement for electrical resistance?', options: ['Volt', 'Ampere', 'Watt', 'Ohm'], correctAnswerIndex: 3, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Science', translation: { question: 'विद्युत प्रतिरोध के लिए माप की इकाई क्या है?', options: ['वोल्ट', 'एम्पीयर', 'वाट', 'ओम'] } },
    { id: 2505, question: 'Which part of the human brain is responsible for maintaining balance?', options: ['Cerebrum', 'Cerebellum', 'Medulla Oblongata', 'Thalamus'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Science', translation: { question: 'मानव मस्तिष्क का कौन सा हिस्सा संतुलन बनाए रखने के लिए जिम्मेदार है?', options: ['सेरेब्रम', 'सेरिबैलम', 'मज्जा ऑबोंगटा', 'थैलेमस'] } },
    { id: 2506, question: 'What is the hardest substance found in the human body?', options: ['Bone', 'Tooth Enamel', 'Dentin', 'Hair'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Science', translation: { question: 'मानव शरीर में पाया जाने वाला सबसे कठोर पदार्थ कौन सा है?', options: ['हड्डी', 'दांत का इनेमल', 'डेंटिन', 'बाल'] } },
    { id: 2507, question: 'What is the process by which plants make their own food called?', options: ['Respiration', 'Transpiration', 'Photosynthesis', 'Germination'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Science', translation: { question: 'वह प्रक्रिया क्या कहलाती है जिसके द्वारा पौधे अपना भोजन स्वयं बनाते हैं?', options: ['श्वसन', 'वाष्पोत्सर्जन', 'प्रकाश संश्लेषण', 'अंकुरण'] } },
    { id: 2508, question: 'The law of universal gravitation was formulated by whom?', options: ['Galileo Galilei', 'Isaac Newton', 'Albert Einstein', 'Nikola Tesla'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Science', translation: { question: 'सार्वभौमिक गुरुत्वाकर्षण का नियम किसके द्वारा प्रतिपादित किया गया था?', options: ['गैलीलियो गैलीली', 'आइजैक न्यूटन', 'अल्बर्ट आइंस्टीन', 'निकोला टेस्ला'] } },
    { id: 2509, question: 'What is the pH value of pure water?', options: ['6', '7', '8', '9'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Science', translation: { question: 'शुद्ध जल का pH मान क्या है?', options: ['6', '7', '8', '9'] } }
  ],
  'gs-static-gk': [
    { id: 2600, question: 'Which country is known as the "Land of the Midnight Sun"?', options: ['Norway', 'Sweden', 'Finland', 'Canada'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Static GK', translation: { question: '"मध्यरात्रि के सूर्य की भूमि" के रूप में किस देश को जाना जाता है?', options: ['नॉर्वे', 'स्वीडन', 'फिनलैंड', 'कनाडा'] } },
    { id: 2601, question: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Static GK', translation: { question: 'ऑस्ट्रेलिया की राजधानी क्या है?', options: ['सिडनी', 'मेलबर्न', 'कैनबरा', 'पर्थ'] } },
    { id: 2602, question: 'Where is the headquarters of UNESCO located?', options: ['New York, USA', 'Geneva, Switzerland', 'Paris, France', 'London, UK'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Static GK', translation: { question: 'यूनेस्को का मुख्यालय कहाँ स्थित है?', options: ['न्यूयॉर्क, यूएसए', 'जिनेवा, स्विट्जरलैंड', 'पेरिस, फ्रांस', 'लंदन, यूके'] } },
    { id: 2603, question: 'The "Kuchipudi" dance form originated from which state of India?', options: ['Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Karnataka'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Static GK', translation: { question: '"कुचिपुड़ी" नृत्य शैली भारत के किस राज्य से उत्पन्न हुई है?', options: ['तमिलनाडु', 'केरल', 'आंध्र प्रदेश', 'कर्नाटक'] } },
    { id: 2604, question: 'Who wrote the Indian national anthem, "Jana Gana Mana"?', options: ['Bankim Chandra Chatterjee', 'Rabindranath Tagore', 'Sarojini Naidu', 'Subramania Bharati'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Static GK', translation: { question: 'भारतीय राष्ट्रगान, "जन गण मन" किसने लिखा था?', options: ['बंकिम चंद्र चटर्जी', 'रवींद्रनाथ टैगोर', 'सरोजिनी नायडू', 'सुब्रमण्य भारती'] } },
    { id: 2605, question: 'What is the largest desert in the world?', options: ['Sahara Desert', 'Arabian Desert', 'Gobi Desert', 'Antarctic Polar Desert'], correctAnswerIndex: 3, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Static GK', translation: { question: 'दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?', options: ['सहारा रेगिस्तान', 'अरब रेगिस्तान', 'गोबी रेगिस्तान', 'अंटार्कटिक ध्रुवीय रेगिस्तान'] } },
    { id: 2606, question: 'Which is the highest mountain peak in the world?', options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Static GK', translation: { question: 'दुनिया की सबसे ऊँची पर्वत चोटी कौन सी है?', options: ['K2', 'माउंट एवरेस्ट', 'कंचनजंगा', 'ल्होत्से'] } },
    { id: 2607, question: 'What is the currency of Japan?', options: ['Yuan', 'Won', 'Yen', 'Ringgit'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Static GK', translation: { question: 'जापान की मुद्रा क्या है?', options: ['युआन', 'वोन', 'येन', 'रिंगित'] } },
    { id: 2608, question: 'Which river is known as the "Sorrow of Bengal"?', options: ['Ganges', 'Brahmaputra', 'Damodar', 'Hooghly'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Static GK', translation: { question: 'किस नदी को "बंगाल का शोक" कहा जाता है?', options: ['गंगा', 'ब्रह्मपुत्र', 'दामोदर', 'हुगली'] } },
    { id: 2609, question: 'Who was the first Indian woman to win a Nobel Prize?', options: ['Indira Gandhi', 'Mother Teresa', 'Sarojini Naidu', 'Arundhati Roy'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Static GK', translation: { question: 'नोबेल पुरस्कार जीतने वाली पहली भारतीय महिला कौन थीं?', options: ['इंदिरा गांधी', 'मदर टेरेसा', 'सरोजिनी नायडू', 'अरुंधति रॉय'] } }
  ],
  'gs-geography': [
    { id: 2700, question: 'Which is the largest planet in our solar system?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Geography', translation: { question: 'हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?', options: ['पृथ्वी', 'मंगल', 'बृहस्पति', 'शनि'] } },
    { id: 2701, question: 'The "Ring of Fire" is located in which ocean?', options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'], correctAnswerIndex: 3, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Geography', translation: { question: '"रिंग ऑफ फायर" किस महासागर में स्थित है?', options: ['अटलांटिक महासागर', 'हिंद महासागर', 'आर्कटिक महासागर', 'प्रशांत महासागर'] } },
    { id: 2702, question: 'Which imaginary line divides the Earth into the Northern and Southern Hemispheres?', options: ['Tropic of Cancer', 'Equator', 'Tropic of Capricorn', 'Prime Meridian'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Geography', translation: { question: 'कौन सी काल्पनिक रेखा पृथ्वी को उत्तरी और दक्षिणी गोलार्ध में विभाजित करती है?', options: ['कर्क रेखा', 'भूमध्य रेखा', 'मकर रेखा', 'प्रधान मध्याह्न रेखा'] } },
    { id: 2703, question: 'What is the longest river in India?', options: ['Ganges', 'Godavari', 'Yamuna', 'Brahmaputra'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Geography', translation: { question: 'भारत की सबसे लंबी नदी कौन सी है?', options: ['गंगा', 'गोदावरी', 'यमुना', 'ब्रह्मपुत्र'] } },
    { id: 2704, question: 'The "Sunderbans" delta is formed by which two rivers?', options: ['Ganges and Yamuna', 'Ganges and Brahmaputra', 'Krishna and Godavari', 'Narmada and Tapti'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Geography', translation: { question: '"सुंदरबन" डेल्टा किन दो नदियों द्वारा बनता है?', options: ['गंगा और यमुना', 'गंगा और ब्रह्मपुत्र', 'कृष्णा और गोदावरी', 'नर्मदा और ताप्ती'] } },
    { id: 2705, question: 'Which country has the longest coastline in the world?', options: ['Australia', 'Indonesia', 'Canada', 'Russia'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Geography', translation: { question: 'दुनिया में सबसे लंबी तटरेखा किस देश की है?', options: ['ऑस्ट्रेलिया', 'इंडोनेशिया', 'कनाडा', 'रूस'] } },
    { id: 2706, question: 'The "Himalayas" are an example of which type of mountain?', options: ['Volcanic Mountains', 'Block Mountains', 'Fold Mountains', 'Residual Mountains'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Geography', translation: { question: '"हिमालय" किस प्रकार के पर्वत का उदाहरण है?', options: ['ज्वालामुखी पर्वत', 'ब्लॉक पर्वत', 'वलित पर्वत', 'अवशिष्ट पर्वत'] } },
    { id: 2707, question: 'Which layer of the atmosphere contains the ozone layer?', options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Geography', translation: { question: 'वायुमंडल की किस परत में ओजोन परत होती है?', options: ['क्षोभमंडल', 'समतापमंडल', 'मध्यमंडल', 'तापमंडल'] } },
    { id: 2708, question: 'What is the name of the strait that separates India and Sri Lanka?', options: ['Palk Strait', 'Strait of Malacca', 'Sunda Strait', 'Bering Strait'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Geography', translation: { question: 'भारत और श्रीलंका को अलग करने वाली जलडमरूमध्य का क्या नाम है?', options: ['पाक जलडमरूमध्य', 'मलक्का जलडमरूमध्य', 'सुंडा जलडमरूमध्य', 'बेरिंग जलडमरूमध्य'] } },
    { id: 2709, question: 'Which Indian state is known as the "Land of Five Rivers"?', options: ['Haryana', 'Uttar Pradesh', 'Punjab', 'Rajasthan'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Geography', translation: { question: 'कौन सा भारतीय राज्य "पांच नदियों की भूमि" के रूप में जाना जाता है?', options: ['हरियाणा', 'उत्तर प्रदेश', 'पंजाब', 'राजस्थान'] } }
  ],
  'gs-computer': [
    { id: 2800, question: 'What does "CPU" stand for?', options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Unit', 'Control Processing Unit'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Computer', translation: { question: '"सीपीयू" का क्या अर्थ है?', options: ['सेंट्रल प्रोसेसिंग यूनिट', 'कंप्यूटर पर्सनल यूनिट', 'सेंट्रल प्रोग्राम यूनिट', 'कंट्रोल प्रोसेसिंग यूनिट'] } },
    { id: 2801, question: 'Which of the following is a volatile memory?', options: ['ROM', 'RAM', 'SSD', 'HDD'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Computer', translation: { question: 'निम्नलिखित में से कौन एक अस्थिर मेमोरी है?', options: ['ROM', 'RAM', 'SSD', 'HDD'] } },
    { id: 2802, question: 'What is the full form of "URL"?', options: ['Uniform Resource Locator', 'Universal Resource Locator', 'Uniform Resource Link', 'Universal Resource Link'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Computer', translation: { question: '"यूआरएल" का पूर्ण रूप क्या है?', options: ['यूनिफॉर्म रिसोर्स लोकेटर', 'यूनिवर्सल रिसोर्स लोकेटर', 'यूनिफॉर्म रिसोर्स लिंक', 'यूनिवर्सल रिसोर्स लिंक'] } },
    { id: 2803, question: 'Which company developed the first microprocessor?', options: ['IBM', 'Intel', 'AMD', 'Apple'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Computer', translation: { question: 'किस कंपनी ने पहला माइक्रोप्रोसेसर विकसित किया?', options: ['आईबीएम', 'इंटेल', 'एएमडी', 'ऐप्पल'] } },
    { id: 2804, question: 'What does "HTTP" stand for?', options: ['HyperText Transfer Protocol', 'HyperText Transmission Protocol', 'HighText Transfer Protocol', 'HighText Transmission Protocol'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Computer', translation: { question: '"एचटीटीपी" का क्या अर्थ है?', options: ['हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल', 'हाइपरटेक्स्ट ट्रांसमिशन प्रोटोकॉल', 'हाईटेक्स्ट ट्रांसफर प्रोटोकॉल', 'हाईटेक्स्ट ट्रांसमिशन प्रोटोकॉल'] } },
    { id: 2805, question: 'What is the "brain" of the computer?', options: ['Monitor', 'Keyboard', 'Mouse', 'CPU'], correctAnswerIndex: 3, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Computer', translation: { question: 'कंप्यूटर का "मस्तिष्क" क्या है?', options: ['मॉनिटर', 'कीबोर्ड', 'माउस', 'सीपीयू'] } },
    { id: 2806, question: 'Which programming language is known as the "mother of all languages"?', options: ['C', 'Java', 'Assembly', 'FORTRAN'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Computer', translation: { question: 'किस प्रोग्रामिंग भाषा को "सभी भाषाओं की जननी" के रूप में जाना जाता है?', options: ['C', 'जावा', 'असेंबली', 'फोरट्रान'] } },
    { id: 2807, question: '1 Gigabyte (GB) is equal to how many Megabytes (MB)?', options: ['1000 MB', '1024 MB', '1048 MB', '1012 MB'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Computer', translation: { question: '1 गीगाबाइट (जीबी) कितने मेगाबाइट (एमबी) के बराबर है?', options: ['1000 एमबी', '1024 एमबी', '1048 एमबी', '1012 एमबी'] } },
    { id: 2808, question: 'Who is considered the "father of the computer"?', options: ['Alan Turing', 'Charles Babbage', 'John von Neumann', 'Steve Jobs'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Computer', translation: { question: '"कंप्यूटर का जनक" किसे माना जाता है?', options: ['एलन ट्यूरिंग', 'चार्ल्स बैबेज', 'जॉन वॉन न्यूमैन', 'स्टीव जॉब्स'] } },
    { id: 2809, question: 'What does ".com" in a URL represent?', options: ['Company', 'Commercial', 'Community', 'Country'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Computer', translation: { question: 'URL में ".com" क्या दर्शाता है?', options: ['कंपनी', 'वाणिज्यिक', 'समुदाय', 'देश'] } }
  ],
  'gs-polity': [
    { id: 2900, question: 'Who is the head of the Indian state?', options: ['Prime Minister', 'President', 'Chief Justice of India', 'Vice President'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Polity', translation: { question: 'भारतीय राज्य का प्रमुख कौन होता है?', options: ['प्रधानमंत्री', 'राष्ट्रपति', 'भारत के मुख्य न्यायाधीश', 'उपराष्ट्रपति'] } },
    { id: 2901, question: 'How many Fundamental Rights are there in the Indian Constitution?', options: ['5', '6', '7', '8'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Polity', translation: { question: 'भारतीय संविधान में कितने मौलिक अधिकार हैं?', options: ['5', '6', '7', '8'] } },
    { id: 2902, question: 'The concept of "Directive Principles of State Policy" was borrowed from which country\'s constitution?', options: ['USA', 'UK', 'Ireland', 'Canada'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Polity', translation: { question: '"राज्य के नीति निदेशक सिद्धांतों" की अवधारणा किस देश के संविधान से ली गई थी?', options: ['यूएसए', 'यूके', 'आयरलैंड', 'कनाडा'] } },
    { id: 2903, question: 'What is the minimum age to be a member of the Lok Sabha?', options: ['21 years', '25 years', '30 years', '35 years'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Polity', translation: { question: 'लोकसभा का सदस्य बनने के लिए न्यूनतम आयु क्या है?', options: ['21 वर्ष', '25 वर्ष', '30 वर्ष', '35 वर्ष'] } },
    { id: 2904, question: 'Who administers the oath of office to the President of India?', options: ['Prime Minister', 'Vice President', 'Chief Justice of India', 'Speaker of Lok Sabha'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Polity', translation: { question: 'भारत के राष्ट्रपति को पद की शपथ कौन दिलाता है?', options: ['प्रधानमंत्री', 'उपराष्ट्रपति', 'भारत के मुख्य न्यायाधीश', 'लोकसभा अध्यक्ष'] } },
    { id: 2905, question: 'The 73rd Constitutional Amendment Act is related to what?', options: ['Municipalities', 'Panchayati Raj', 'Fundamental Duties', 'Official Languages'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Polity', translation: { question: '73वां संवैधानिक संशोधन अधिनियम किससे संबंधित है?', options: ['नगर पालिकाएं', 'पंचायती राज', 'मौलिक कर्तव्य', 'राजभाषा'] } },
    { id: 2906, question: 'Which article of the Constitution deals with "Right to Equality"?', options: ['Article 14-18', 'Article 19-22', 'Article 23-24', 'Article 25-28'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Polity', translation: { question: 'संविधान का कौन सा अनुच्छेद "समानता के अधिकार" से संबंधित है?', options: ['अनुच्छेद 14-18', 'अनुच्छेद 19-22', 'अनुच्छेद 23-24', 'अनुच्छेद 25-28'] } },
    { id: 2907, question: 'How many members are nominated to the Rajya Sabha by the President?', options: ['2', '10', '12', '15'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Polity', translation: { question: 'राष्ट्रपति द्वारा राज्यसभा के लिए कितने सदस्य मनोनीत किए जाते हैं?', options: ['2', '10', '12', '15'] } },
    { id: 2908, question: 'Who has the power to declare a national emergency in India?', options: ['Prime Minister', 'President', 'Parliament', 'Chief Justice of India'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Polity', translation: { question: 'भारत में राष्ट्रीय आपातकाल घोषित करने की शक्ति किसके पास है?', options: ['प्रधानमंत्री', 'राष्ट्रपति', 'संसद', 'भारत के मुख्य न्यायाधीश'] } },
    { id: 2909, question: 'The Preamble of the Indian Constitution was adopted on which date?', options: ['26th January 1950', '26th November 1949', '15th August 1947', '9th December 1946'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Polity', translation: { question: 'भारतीय संविधान की प्रस्तावना किस तारीख को अपनाई गई थी?', options: ['26 जनवरी 1950', '26 नवंबर 1949', '15 अगस्त 1947', '9 दिसंबर 1946'] } }
  ],
  'gs-current-affairs': [
    { id: 3000, question: 'Who won the Nobel Peace Prize in 2025?', options: ['Climate Activist Group', 'Journalist Collective', 'Human Rights Lawyer', 'UN Peacekeeping Force'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Current Affairs', translation: { question: '2025 में नोबेल शांति पुरस्कार किसने जीता?', options: ['जलवायु कार्यकर्ता समूह', 'पत्रकार समूह', 'मानवाधिकार वकील', 'संयुक्त राष्ट्र शांति सेना'] } },
    { id: 3001, question: 'Which country hosted the 2026 Winter Olympics?', options: ['Italy', 'Sweden', 'Switzerland', 'France'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Current Affairs', translation: { question: '2026 के शीतकालीन ओलंपिक की मेजबानी किस देश ने की?', options: ['इटली', 'स्वीडन', 'स्विट्जरलैंड', 'फ्रांस'] } },
    { id: 3002, question: 'India\'s "Gaganyaan" mission, successfully launched in 2025, was a:', options: ['Lunar Mission', 'Mars Orbiter Mission', 'Human Spaceflight Mission', 'Solar Probe Mission'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Current Affairs', translation: { question: 'भारत का "गगनयान" मिशन, जिसे 2025 में सफलतापूर्वक लॉन्च किया गया, एक था:', options: ['चंद्र मिशन', 'मंगल ऑर्बिटर मिशन', 'मानव अंतरिक्ष उड़ान मिशन', 'सौर जांच मिशन'] } },
    { id: 3003, question: 'The 2026 FIFA World Cup was won by which country?', options: ['Brazil', 'Argentina', 'Germany', 'USA'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Current Affairs', translation: { question: '2026 फीफा विश्व कप किस देश ने जीता?', options: ['ब्राजील', 'अर्जेंटीना', 'जर्मनी', 'यूएसए'] } },
    { id: 3004, question: 'Which city was named the "World\'s Smartest City" in 2025?', options: ['Singapore', 'Dubai', 'Tokyo', 'Helsinki'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Current Affairs', translation: { question: '2025 में किस शहर को "दुनिया का सबसे स्मार्ट शहर" नामित किया गया?', options: ['सिंगापुर', 'दुबई', 'टोक्यो', 'हेलसिंकी'] } },
    { id: 3005, question: 'The major global economic summit of 2026 was held in which Indian city?', options: ['New Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Current Affairs', translation: { question: '2026 का प्रमुख वैश्विक आर्थिक शिखर सम्मेलन किस भारतीय शहर में आयोजित किया गया था?', options: ['नई दिल्ली', 'मुंबई', 'बेंगलुरु', 'हैदराबाद'] } },
    { id: 3006, question: 'Who was appointed as the new CEO of Google in late 2025?', options: ['A new AI entity', 'A veteran from Microsoft', 'An internal promotion from Google', 'A well-known tech entrepreneur'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Current Affairs', translation: { question: '2025 के अंत में Google के नए सीईओ के रूप में किसे नियुक्त किया गया?', options: ['एक नई एआई इकाई', 'माइक्रोसॉफ्ट के एक अनुभवी', 'गूगल से एक आंतरिक पदोन्नति', 'एक प्रसिद्ध तकनीक उद्यमी'] } },
    { id: 3007, question: 'The "Clean Energy for All" initiative, launched in 2025, primarily focuses on:', options: ['Nuclear Power', 'Solar and Wind Power', 'Hydropower', 'Geothermal Energy'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Current Affairs', translation: { question: '2025 में शुरू की गई "सभी के लिए स्वच्छ ऊर्जा" पहल, मुख्य रूप से इस पर केंद्रित है:', options: ['परमाणु ऊर्जा', 'सौर और पवन ऊर्जा', 'जल विद्युत', 'भूतापीय ऊर्जा'] } },
    { id: 3008, question: 'Which film won the Oscar for Best Picture in 2026?', options: ['A historical drama', 'A science fiction epic', 'A small independent film', 'An animated feature'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Current Affairs', translation: { question: '2026 में किस फिल्म ने सर्वश्रेष्ठ फिल्म का ऑस्कर जीता?', options: ['एक ऐतिहासिक नाटक', 'एक विज्ञान कथा महाकाव्य', 'एक छोटी स्वतंत्र फिल्म', 'एक एनिमेटेड फीचर'] } },
    { id: 3009, question: 'India achieved its goal of 5 Trillion Dollar Economy in which year?', options: ['2024', '2025', '2026', '2027'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Current Affairs', translation: { question: 'भारत ने किस वर्ष 5 ट्रिलियन डॉलर अर्थव्यवस्था का अपना लक्ष्य प्राप्त किया?', options: ['2024', '2025', '2026', '2027'] } }
  ],
  'reasoning': [
    { id: 900, question: 'If CAT is coded as 3120, what is the code for DOG?', options: ['4157', '4158', '4159', '4156'], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: 'यदि CAT को 3120 के रूप में कोडित किया गया है, तो DOG के लिए कोड क्या है?', options: ['4157', '4158', '4159', '4156'] } },
    { id: 901, question: 'Find the odd one out: Car, Bus, Scooter, Bicycle', options: ['Car', 'Bus', 'Scooter', 'Bicycle'], correctAnswerIndex: 3, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: 'विषम का पता लगाएं: कार, बस, स्कूटर, साइकिल', options: ['कार', 'बस', 'स्कूटर', 'साइकिल'] } },
    { id: 902, question: 'What number comes next in the series: 2, 5, 10, 17, 26, ?', options: ['35', '37', '39', '41'], correctAnswerIndex: 1, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: 'श्रृंखला में अगला नंबर क्या आता है: 2, 5, 10, 17, 26, ?', options: ['35', '37', '39', '41'] } },
    { id: 903, question: 'If DOCTOR is written as FQEVQT, how can STUDENT be written?', options:['UVWFGPV', 'UVXFGPV', 'UVWFGPW', 'UVWFHPV'], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC MTS', translation: { question: 'यदि DOCTOR को FQEVQT लिखा जाता है, तो STUDENT को कैसे लिखा जा सकता है?', options: ['UVWFGPV', 'UVXFGPV', 'UVWFGPW', 'UVWFHPV'] } },
    { id: 904, question: 'A man is facing North. He turns 90 degrees in the clockwise direction and then 180 degrees in the anti-clockwise direction. Which direction is he facing now?', options: ['East', 'West', 'North', 'South'], correctAnswerIndex: 1, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: 'एक आदमी उत्तर की ओर मुंह करके खड़ा है। वह दक्षिणावर्त दिशा में 90 डिग्री घूमता है और फिर वामावर्त दिशा में 180 डिग्री घूमता है। अब वह किस दिशा में मुंह करके खड़ा है?', options: ['पूर्व', 'पश्चिम', 'उत्तर', 'दक्षिण'] } },
    { id: 905, question: 'Which word does NOT belong with the others? Book, Page, Chapter, Index', options: ['Book', 'Page', 'Chapter', 'Index'], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: 'कौन सा शब्द दूसरों से संबंधित नहीं है? पुस्तक, पृष्ठ, अध्याय, सूचकांक', options: ['पुस्तक', 'पृष्ठ', 'अध्याय', 'सूचकांक'] } },
    { id: 906, question: 'If A is the brother of B, B is the sister of C, and C is the father of D, how is D related to A?', options: ['Brother', 'Sister', 'Nephew', 'Cannot be determined'], correctAnswerIndex: 3, subject: 'Reasoning', exam: 'SSC MTS', translation: { question: 'यदि A, B का भाई है, B, C की बहन है, और C, D का पिता है, तो D, A से कैसे संबंधित है?', options: ['भाई', 'बहन', 'भतीजा', 'निर्धारित नहीं किया जा सकता'] } },
    { id: 907, question: 'Arrange the words in a meaningful sequence: 1. Police, 2. Punishment, 3. Crime, 4. Judge, 5. Judgement', options: ['3, 1, 4, 5, 2', '3, 1, 2, 4, 5', '1, 2, 3, 4, 5', '3, 4, 5, 1, 2'], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: 'शब्दों को एक सार्थक क्रम में व्यवस्थित करें: 1. पुलिस, 2. सजा, 3. अपराध, 4. न्यायाधीश, 5. निर्णय', options: ['3, 1, 4, 5, 2', '3, 1, 2, 4, 5', '1, 2, 3, 4, 5', '3, 4, 5, 1, 2'] } },
    { id: 908, question: 'Find the missing number in the series: 4, 9, 25, 49, ?, 169', options: ['81', '100', '121', '144'], correctAnswerIndex: 2, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: 'श्रृंखला में लुप्त संख्या ज्ञात करें: 4, 9, 25, 49, ?, 169', options: ['81', '100', '121', '144'] } },
    { id: 909, question: 'A is taller than B, but shorter than C. D is taller than A. Who is the tallest?', options: ['A', 'B', 'C', 'Cannot be determined'], correctAnswerIndex: 3, subject: 'Reasoning', exam: 'SSC MTS', translation: { question: 'A, B से लंबा है, लेकिन C से छोटा है। D, A से लंबा है। सबसे लंबा कौन है?', options: ['A', 'B', 'C', 'निर्धारित नहीं किया जा सकता'] } },
  ],
  'english': [
    { id: 1000, question: 'Find the synonym for "Ephemeral".', options: ['Permanent', 'Transient', 'Eternal', 'Durable'], correctAnswerIndex: 1, subject: 'English', exam: 'SSC CGL', translation: { question: '"Ephemeral" का पर्यायवाची शब्द खोजें।', options: ['स्थायी', 'क्षणिक', 'शाश्वत', 'टिकाऊ'] } },
    { id: 1001, question: 'Choose the correct antonym for "Abundant".', options: ['Plentiful', 'Scarce', 'Copious', 'Ample'], correctAnswerIndex: 1, subject: 'English', exam: 'SSC CGL', translation: { question: '"Abundant" के लिए सही विलोम शब्द चुनें।', options: ['प्रचुर', 'अल्प', 'भरपूर', 'पर्याप्त'] } },
    { id: 1002, question: 'Select the word which means "A person who can speak two languages".', options: ['Monolingual', 'Bilingual', 'Multilingual', 'Linguist'], correctAnswerIndex: 1, subject: 'English', exam: 'SSC CHSL', translation: { question: 'उस शब्द का चयन करें जिसका अर्थ है "एक व्यक्ति जो दो भाषाएं बोल सकता है"।', options: ['एकभाषी', 'द्विभाषी', 'बहुभाषी', 'भाषाविद्'] } },
    { id: 1003, question: 'Complete the sentence: "He is very good ___ making stories."', options: ['in', 'at', 'on', 'with'], correctAnswerIndex: 1, subject: 'English', exam: 'SSC MTS', translation: { question: 'वाक्य पूरा करें: "He is very good ___ making stories."', options: ['in', 'at', 'on', 'with'] } },
    { id: 1004, question: 'Find the correctly spelt word.', options: ['Embarassment', 'Embarrassment', 'Embarasment', 'Embarrasment'], correctAnswerIndex: 1, subject: 'English', exam: 'SSC CGL', translation: { question: 'सही वर्तनी वाले शब्द का पता लगाएं।', options: ['Embarassment', 'Embarrassment', 'Embarasment', 'Embarrasment'] } },
    { id: 1005, question: 'What is the plural form of "Goose"?', options: ['Gooses', 'Geese', 'Goose', 'Geèses'], correctAnswerIndex: 1, subject: 'English', exam: 'SSC CHSL', translation: { question: '"Goose" का बहुवचन रूप क्या है?', options: ['Gooses', 'Geese', 'Goose', 'Geèses'] } },
    { id: 1006, question: 'Choose the option that best expresses the meaning of the idiom "To bite the bullet".', options: ['To eat something hard', 'To face a difficult situation with courage', 'To get injured', 'To make a wrong decision'], correctAnswerIndex: 1, subject: 'English', exam: 'SSC MTS', translation: { question: 'उस विकल्प का चयन करें जो मुहावरे "To bite the bullet" का सबसे अच्छा अर्थ व्यक्त करता है।', options: ['कुछ कठोर खाना', 'साहस के साथ एक कठिन परिस्थिति का सामना करना', 'घायल होना', 'गलत निर्णय लेना'] } },
    { id: 1007, question: 'Identify the part of speech of the underlined word: "She runs `quickly`."', options: ['Noun', 'Verb', 'Adjective', 'Adverb'], correctAnswerIndex: 3, subject: 'English', exam: 'SSC CGL', translation: { question: 'रेखांकित शब्द के भाषण के हिस्से को पहचानें: "She runs `quickly`."', options: ['संज्ञा', 'क्रिया', 'विशेषण', 'क्रियाविशेषण'] } },
    { id: 1008, question: 'Change the voice: "The cat killed the mouse."', options: ['The mouse was killed by the cat.', 'The mouse is killed by the cat.', 'The cat was killed by the mouse.', 'The mouse had been killed by the cat.'], correctAnswerIndex: 0, subject: 'English', exam: 'SSC CHSL', translation: { question: 'आवाज बदलें: "The cat killed the mouse."', options: ['The mouse was killed by the cat.', 'The mouse is killed by the cat.', 'The cat was killed by the mouse.', 'The mouse had been killed by the cat.'] } },
    { id: 1009, question: 'Fill in the blank: "I have been waiting for you ___ two hours."', options: ['since', 'for', 'from', 'at'], correctAnswerIndex: 1, subject: 'English', exam: 'SSC MTS', translation: { question: 'रिक्त स्थान भरें: "I have been waiting for you ___ two hours."', options: ['since', 'for', 'from', 'at'] } },
  ],
};

export const getQuestions = (subjectId: string, chapterId?: string): Question[] => {
  const key = chapterId ? `${subjectId}-${chapterId}` : subjectId;
  const questions = staticQuestions[key] || [];
  // Shuffle questions to make them appear in a random order
  return [...questions].sort(() => Math.random() - 0.5);
}

export const getExamById = (id: string) => exams.find(e => e.id === id);
export const getSubjectById = (id: string) => subjects.find(s => s.id === id);
export const getChapterById = (subjectId: string, chapterId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject) return undefined;

    if (subject.chapterGroups) {
        return subject.chapterGroups.flatMap(g => g.chapters).find(c => c.id === chapterId);
    }
    return subject.chapters?.find(c => c.id === chapterId);
};

