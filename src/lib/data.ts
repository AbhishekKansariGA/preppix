

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
  { id: 'gs', name: 'General Studies', icon: BookOpen },
  { id: 'reasoning', name: 'Reasoning', icon: BrainCircuit },
  { id: 'english', name: 'English', icon: Mic2 },
];

export const staticQuestions: { [key: string]: Question[] } = {
  'maths-percentages': Array.from({ length: 10 }, (_, i) => ({
    id: 100 + i,
    question: `If a number is increased by ${10 + i}%, by what percentage must the new number be decreased to return to the original number?`,
    options: [`${(100 * (10 + i)) / (110 + i)}%`, '25%', '15%', '30%'],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Percentages',
    translation: {
      question: `यदि किसी संख्या में ${10 + i}% की वृद्धि की जाती है, तो मूल संख्या पर वापस आने के लिए नई संख्या में कितने प्रतिशत की कमी करनी होगी?`,
      options: [`${(100 * (10 + i)) / (110 + i)}%`, '25%', '15%', '30%']
    }
  })),
  'maths-profit-loss-discount': Array.from({ length: 10 }, (_, i) => ({
    id: 200 + i,
    question: `A shopkeeper sells an item for Rs. ${550 + i*10} at a profit of 10%. What is the cost price?`,
    options: [`Rs. ${500 + i*10}`, `Rs. ${525 + i*10}`, `Rs. ${475 + i*10}`, `Rs. ${450 + i*10}`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Profit, Loss and Discount',
     translation: {
        question: `एक दुकानदार 10% के लाभ पर एक वस्तु को ${550 + i*10} रुपये में बेचता है। लागत मूल्य क्या है?`,
        options: [`रु. ${500 + i*10}`, `रु. ${525 + i*10}`, `रु. ${475 + i*10}`, `रु. ${450 + i*10}`]
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
    options: [`${(10+i)*(15+i)/(25+2*i)} days`, `7 days`, `8 days`, `9 days`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Time and Work',
    translation: {
        question: `A एक काम को ${10 + i} दिनों में कर सकता है। B उसे ${15 + i} दिनों में कर सकता है। वे दोनों मिलकर इसे कितने दिनों में कर सकते हैं?`,
        options: [`${(10+i)*(15+i)/(25+2*i)} दिन`, `7 दिन`, `8 दिन`, `9 दिन`]
    }
  })),
    'maths-number-system': Array.from({ length: 10 }, (_, i) => ({
    id: 1100 + i,
    question: `What is the unit digit of ${3 + i}^${4 + i}?`,
    options: [`1`, `3`, `7`, `9`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Number System',
    translation: {
      question: `${3 + i}^${4 + i} का इकाई अंक क्या है?`,
      options: [`1`, `3`, `7`, `9`]
    }
  })),
  'maths-ratio-proportion': Array.from({ length: 10 }, (_, i) => ({
    id: 1200 + i,
    question: `If a:b = ${2 + i}:${3 + i} and b:c = ${4 + i}:${5 + i}, what is a:c?`,
    options: [`${(2+i)*(4+i)}:${(3+i)*(5+i)}`, '2:5', '8:15', '1:2'],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CHSL',
    chapter: 'Ratio and Proportion',
    translation: {
      question: `यदि a:b = ${2 + i}:${3 + i} और b:c = ${4 + i}:${5 + i}, तो a:c क्या है?`,
      options: [`${(2+i)*(4+i)}:${(3+i)*(5+i)}`, '2:5', '8:15', '1:2']
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
    options: [`${12 + i} sec`, `${15 + i} sec`, `${10 + i} sec`, `${11 + i} sec`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC MTS',
    chapter: 'Time, Speed and Distance',
    translation: {
      question: `${100 + i*10} मीटर लंबी एक ट्रेन 30 किमी/घंटा की गति से चल रही है। रेलवे लाइन के पास खड़े एक आदमी को पार करने में उसे कितना समय लगेगा?`,
      options: [`${12 + i} सेकंड`, `${15 + i} सेकंड`, `${10 + i} सेकंड`, `${11 + i} सेकंड`]
    }
  })),
  'maths-partnership': Array.from({ length: 10 }, (_, i) => ({
    id: 1500 + i,
    question: `A and B start a business with capitals of Rs. ${3000 + i*100} and Rs. ${4000 + i*100}. Find the share of A in a profit of Rs. ${1400 + i*100}.`,
    options: [`Rs. ${600 + i*50}`, `Rs. 800`, `Rs. 700`, `Rs. 500`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Partnership',
    translation: {
      question: `A और B क्रमशः ${3000 + i*100} रुपये और ${4000 + i*100} रुपये की पूंजी के साथ एक व्यवसाय शुरू करते हैं। ${1400 + i*100} रुपये के लाभ में A का हिस्सा ज्ञात करें।`,
      options: [`रु. ${600 + i*50}`, `रु. 800`, `रु. 700`, `रु. 500`]
    }
  })),
  'maths-algebra': Array.from({ length: 10 }, (_, i) => ({
    id: 1600 + i,
    question: `If x + 1/x = ${3 + i}, then what is the value of x^2 + 1/x^2?`,
    options: [`${(3+i)**2 - 2}`, '11', '12', '13'],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Algebra',
    translation: {
      question: `यदि x + 1/x = ${3 + i}, तो x^2 + 1/x^2 का मान क्या है?`,
      options: [`${(3+i)**2 - 2}`, '11', '12', '13']
    }
  })),
  'maths-geometry': Array.from({ length: 10 }, (_, i) => ({
    id: 1700 + i,
    question: `In a circle, a chord of length ${6 + i} cm is at a distance of ${4 + i} cm from the center. What is the radius of the circle?`,
    options: [`${Math.sqrt((3+i/2)**2 + (4+i)**2)} cm`, '5 cm', '6 cm', '7 cm'],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CHSL',
    chapter: 'Geometry',
    translation: {
      question: `एक वृत्त में, ${6 + i} सेमी लंबाई की एक जीवा केंद्र से ${4 + i} सेमी की दूरी पर है। वृत्त की त्रिज्या क्या है?`,
      options: [`${Math.sqrt((3+i/2)**2 + (4+i)**2)} सेमी`, '5 सेमी', '6 सेमी', '7 सेमी']
    }
  })),
  'maths-mensuration': Array.from({ length: 10 }, (_, i) => ({
    id: 1800 + i,
    question: `The area of a square field is ${64 + i*10} sq.m. What is the length of its diagonal?`,
    options: [`${Math.sqrt(2 * (64 + i*10))} m`, '10 m', '12 m', '14 m'],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Mensuration',
    translation: {
      question: `एक वर्गाकार मैदान का क्षेत्रफल ${64 + i*10} वर्ग मीटर है। इसके विकर्ण की लंबाई क्या है?`,
      options: [`${Math.sqrt(2 * (64 + i*10))} मीटर`, '10 मीटर', '12 मीटर', '14 मीटर']
    }
  })),
  'maths-trigonometry': Array.from({ length: 10 }, (_, i) => ({
    id: 1900 + i,
    question: `If sin(A) = ${3+i}/5, what is the value of cos(A)?`,
    options: [`${Math.sqrt(1 - ((3+i)/5)**2)}`, '4/5', '3/4', '5/3'],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC MTS',
    chapter: 'Trigonometry',
    translation: {
      question: `यदि sin(A) = ${3+i}/5, तो cos(A) का मान क्या है?`,
      options: [`${Math.sqrt(1 - ((3+i)/5)**2)}`, '4/5', '3/4', '5/3']
    }
  })),
  'maths-statistics': Array.from({ length: 10 }, (_, i) => ({
    id: 2000 + i,
    question: `Find the mean of the first ${5 + i} natural numbers.`,
    options: [`${(5+i+1)/2}`, '3', '3.5', '4'],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Statistics',
    translation: {
      question: `पहले ${5 + i} प्राकृतिक संख्याओं का माध्य ज्ञात कीजिए।`,
      options: [`${(5+i+1)/2}`, '3', '3.5', '4']
    }
  })),
  'maths-probability': Array.from({ length: 10 }, (_, i) => ({
    id: 2100 + i,
    question: `What is the probability of getting a head when a coin is tossed ${i + 1} times?`,
    options: [`1/2`, `1/3`, `1/4`, `1/5`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CHSL',
    chapter: 'Probability',
    translation: {
      question: `एक सिक्के को ${i + 1} बार उछालने पर चित आने की क्या प्रायिकता है?`,
      options: [`1/2`, `1/3`, `1/4`, `1/5`]
    }
  })),
  'maths-di': Array.from({ length: 10 }, (_, i) => ({
    id: 700 + i,
    question: `A pie chart shows the distribution of expenses. If the total expenditure is Rs. 1,00,000, what is the expenditure on food (${40 + i}%)?`,
    options: [`Rs. ${30000 + i*1000}`, `Rs. ${40000 + i*1000}`, `Rs. ${50000 + i*1000}`, `Rs. ${60000 + i*1000}`],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Data Interpretation',
    translation: {
        question: `एक पाई चार्ट खर्चों का वितरण दिखाता है। यदि कुल व्यय 1,00,000 रुपये है, तो भोजन पर व्यय (${40 + i}%) क्या है?`,
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
  'gs': [
    { id: 800, question: 'Who is the guardian of the Indian Constitution?', options: ['President', 'Prime Minister', 'Supreme Court', 'Parliament'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Polity', translation: { question: 'भारतीय संविधान का संरक्षक कौन है?', options: ['राष्ट्रपति', 'प्रधानमंत्री', 'सर्वोच्च न्यायालय', 'संसद'] } },
    { id: 801, question: 'The Dandi March was a part of which movement?', options: ['Quit India Movement', 'Non-Cooperation Movement', 'Civil Disobedience Movement', 'Khilafat Movement'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'History', translation: { question: 'दांडी मार्च किस आंदोलन का हिस्सा था?', options: ['भारत छोड़ो आंदोलन', 'असहयोग आंदोलन', 'सविनय अवज्ञा आंदोलन', 'खिलाफत आंदोलन'] } },
    { id: 802, question: 'Which planet is known as the "Morning Star" or "Evening Star"?', options: ['Mars', 'Venus', 'Jupiter', 'Mercury'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Geography', translation: { question: 'किस ग्रह को "सुबह का तारा" या "शाम का तारा" कहा जाता है?', options: ['मंगल', 'शुक्र', 'बृहस्पति', 'बुध'] } },
    { id: 803, question: 'What is the chemical formula for laughing gas?', options: ['NO2', 'N2O', 'NO', 'N2O3'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Science', translation: { question: 'हंसाने वाली गैस का रासायनिक सूत्र क्या है?', options: ['NO2', 'N2O', 'NO', 'N2O3'] } },
    { id: 804, question: 'The "GATT" was replaced by which organization?', options: ['World Bank', 'IMF', 'WTO', 'UNICEF'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Economics', translation: { question: '"GATT" को किस संगठन द्वारा प्रतिस्थापित किया गया था?', options: ['विश्व बैंक', 'आईएमएफ', 'डब्ल्यूटीओ', 'यूनिसेफ'] } },
    { id: 805, question: 'Which country is known as the "Land of the Rising Sun"?', options: ['China', 'South Korea', 'Japan', 'Thailand'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Static GK', translation: { question: 'किस देश को "उगते सूरज की भूमि" के रूप में जाना जाता है?', options: ['चीन', 'दक्षिण कोरिया', 'जापान', 'थाईलैंड'] } },
    { id: 806, question: 'What does "CPU" stand for in computer terminology?', options: ['Central Processing Unit', 'Computer Processing Unit', 'Central Program Unit', 'Computer Program Unit'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Computer', translation: { question: 'कंप्यूटर शब्दावली में "सीपीयू" का क्या अर्थ है?', options: ['सेंट्रल प्रोसेसिंग यूनिट', 'कंप्यूटर प्रोसेसिंग यूनिट', 'सेंट्रल प्रोग्राम यूनिट', 'कंप्यूटर प्रोग्राम यूनिट'] } },
    { id: 807, question: 'The "Preamble" of the Indian Constitution was amended by which amendment act?', options: ['44th Amendment', '42nd Amendment', '52nd Amendment', '24th Amendment'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Polity', translation: { question: 'भारतीय संविधान की "प्रस्तावना" को किस संशोधन अधिनियम द्वारा संशोधित किया गया था?', options: ['44वां संशोधन', '42वां संशोधन', '52वां संशोधन', '24वां संशोधन'] } },
    { id: 808, question: 'Which city hosted the 2024 Summer Olympics?', options: ['Tokyo', 'Los Angeles', 'Paris', 'Brisbane'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Current Affairs', translation: { question: '2024 के ग्रीष्मकालीन ओलंपिक की मेजबानी किस शहर ने की?', options: ['टोक्यो', 'लॉस एंजिल्स', 'पेरिस', 'ब्रिस्बेन'] } },
    { id: 809, question: 'The Battle of Plassey was fought in which year?', options: ['1764', '1757', '1857', '1761'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC MTS', chapter: 'History', translation: { question: 'प्लासी का युद्ध किस वर्ष लड़ा गया था?', options: ['1764', '1757', '1857', '1761'] } },
    { id: 810, question: 'Which is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Geography', translation: { question: 'दुनिया की सबसे लंबी नदी कौन सी है?', options: ['अमेज़ॅन', 'नील', 'यांग्त्ज़ी', 'मिसिसिपी'] } },
    { id: 811, question: 'The deficiency of Vitamin D causes which disease?', options: ['Scurvy', 'Rickets', 'Beriberi', 'Night Blindness'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Science', translation: { question: 'विटामिन डी की कमी से कौन सा रोग होता है?', options: ['स्कर्वी', 'रिकेट्स', 'बेरीबेरी', 'रतौंधी'] } },
    { id: 812, question: 'What is the full form of "GST" in India?', options: ['Goods and Service Tax', 'General Sales Tax', 'Goods and Sales Tax', 'Government Service Tax'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Economics', translation: { question: 'भारत में "जीएसटी" का पूर्ण रूप क्या है?', options: ['वस्तु एवं सेवा कर', 'सामान्य बिक्री कर', 'वस्तु एवं बिक्री कर', 'सरकारी सेवा कर'] } },
    { id: 813, question: 'Who is the first woman to climb Mount Everest?', options: ['Bachendri Pal', 'Santosh Yadav', 'Junko Tabei', 'Arunima Sinha'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Static GK', translation: { question: 'माउंट एवरेस्ट पर चढ़ने वाली पहली महिला कौन है?', options: ['बछेंद्री पाल', 'संतोष यादव', 'जंको ताबेई', 'अरुणिमा सिन्हा'] } },
    { id: 814, question: 'Which key combination is used to copy text in Windows?', options: ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + A'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Computer', translation: { question: 'विंडोज में टेक्स्ट कॉपी करने के लिए किस कुंजी संयोजन का उपयोग किया जाता है?', options: ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + A'] } },
    { id: 815, question: 'How many schedules are there in the Indian Constitution?', options: ['8', '10', '12', '14'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Polity', translation: { question: 'भारतीय संविधान में कितनी अनुसूचियां हैं?', options: ['8', '10', '12', '14'] } },
    { id: 816, question: 'The Harappan civilization flourished along which river?', options: ['Ganges', 'Yamuna', 'Indus', 'Narmada'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'History', translation: { question: 'हड़प्पा सभ्यता किस नदी के किनारे फली-फूली?', options: ['गंगा', 'यमुना', 'सिंधु', 'नर्मदा'] } },
    { id: 817, question: 'Suez Canal connects which two bodies of water?', options: ['Atlantic and Pacific Ocean', 'Mediterranean Sea and Red Sea', 'Indian Ocean and Pacific Ocean', 'Atlantic Ocean and Mediterranean Sea'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Geography', translation: { question: 'स्वेज नहर किन दो जल निकायों को जोड़ती है?', options: ['अटलांटिक और प्रशांत महासागर', 'भूमध्य सागर और लाल सागर', 'हिंद महासागर और प्रशांत महासागर', 'अटलांटिक महासागर और भूमध्य सागर'] } },
    { id: 818, question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondrion', 'Lysosome'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Science', translation: { question: 'कोशिका का पावरहाउस क्या है?', options: ['नाभिक', 'राइबोसोम', 'माइटोकॉन्ड्रियन', 'लाइसोसोम'] } },
    { id: 819, question: 'Who is the author of "The Wealth of Nations"?', options: ['Karl Marx', 'John Maynard Keynes', 'Adam Smith', 'Milton Friedman'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Economics', translation: { question: '"द वेल्थ ऑफ नेशंस" के लेखक कौन हैं?', options: ['कार्ल मार्क्स', 'जॉन मेनार्ड कीन्स', 'एडम स्मिथ', 'मिल्टन फ्रीडमैन'] } },
    { id: 820, question: 'Where is the headquarters of ISRO located?', options: ['Mumbai', 'Hyderabad', 'Bengaluru', 'New Delhi'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Static GK', translation: { question: 'इसरो का मुख्यालय कहाँ स्थित है?', options: ['मुंबई', 'हैदराबाद', 'बेंगलुरु', 'नई दिल्ली'] } },
    { id: 821, question: 'What is a "bug" in the context of software?', options: ['A feature', 'An error or flaw', 'A type of virus', 'A user'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Computer', translation: { question: 'सॉफ्टवेयर के संदर्भ में "बग" क्या है?', options: ['एक सुविधा', 'एक त्रुटि या दोष', 'एक प्रकार का वायरस', 'एक उपयोगकर्ता'] } },
    { id: 822, question: 'Which country will host the 2026 FIFA World Cup?', options: ['Qatar', 'USA, Canada, Mexico', 'Brazil', 'Germany'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Current Affairs', translation: { question: '2026 फीफा विश्व कप की मेजबानी कौन सा देश करेगा?', options: ['कतर', 'यूएसए, कनाडा, मैक्सिको', 'ब्राजील', 'जर्मनी'] } },
    { id: 823, question: 'Who holds the authority to declare a financial emergency in India?', options: ['Prime Minister', 'Finance Minister', 'President', 'Governor of RBI'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Polity', translation: { question: 'भारत में वित्तीय आपातकाल घोषित करने का अधिकार किसके पास है?', options: ['प्रधानमंत्री', 'वित्त मंत्री', 'राष्ट्रपति', 'आरबीआई के गवर्नर'] } },
    { id: 824, question: 'The "Chipko Movement" is associated with which of the following?', options: ['Water conservation', 'Forest conservation', 'Soil conservation', 'Wildlife protection'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC MTS', chapter: 'Static GK', translation: { question: '"चिपको आंदोलन" निम्नलिखित में से किससे संबंधित है?', options: ['जल संरक्षण', 'वन संरक्षण', 'मृदा संरक्षण', 'वन्यजीव संरक्षण'] } },
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
  return questions.sort(() => Math.random() - 0.5);
}

export const getExamById = (id: string) => exams.find(e => e.id === id);
export const getSubjectById = (id: string) => subjects.find(s => s.id === id);
export const getChapterById = (subjectId: string, chapterId: string) => {
    if (subjectId !== 'maths') return undefined;
    return allMathsChapters.find(c => c.id === chapterId);
};
