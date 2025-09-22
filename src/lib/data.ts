

import { Exam, Subject, Question, Chapter, MixedTest, Category } from './types';
import { Calculator, BookOpen, BrainCircuit, Mic2 } from 'lucide-react';

export const exams: Exam[] = [
  { id: 'cgl', name: 'SSC CGL', description: 'Combined Graduate Level' },
  { id: 'chsl', name: 'SSC CHSL', description: 'Combined Higher Secondary Level' },
  { id: 'mts', name: 'SSC MTS', description: 'Multi-Tasking Staff' },
];

export const categories: Category[] = [
    { id: 'general', name: 'General' },
    { id: 'obc', name: 'OBC' },
    { id: 'sc', name: 'SC' },
    { id: 'st', name: 'ST' },
    { id: 'ews', name: 'EWS' },
];

export const leaderboardCutoffs: Record<string, Record<string, Record<Category['id'], number>>> = {
  cgl: {
    maths:     { general: 15, obc: 14, sc: 13, st: 12, ews: 14.5 },
    gs:        { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
    reasoning: { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
    english:   { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
  },
  chsl: {
    maths:     { general: 15, obc: 14, sc: 13, st: 12, ews: 14.5 },
    gs:        { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
    reasoning: { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
    english:   { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
  },
  mts: {
    maths:     { general: 15, obc: 14, sc: 13, st: 12, ews: 14.5 },
    gs:        { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
    reasoning: { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
    english:   { general: 40, obc: 38, sc: 36, st: 34, ews: 39 },
  }
};


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

export const gsMixedTests: MixedTest[] = Array.from({ length: 10 }, (_, i) => ({
    id: `test-${i + 1}`,
    name: `Test ${i + 1}`
}));


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
    mixedTests: gsMixedTests
  },
  { id: 'reasoning', name: 'Reasoning', icon: BrainCircuit },
  { id: 'english', name: 'English', icon: Mic2 },
];

const allGsQuestions: Question[] = [
    // History
    { id: 2300, question: 'Who founded the Maurya Empire?', options: ['Ashoka', 'Chandragupta Maurya', 'Bindusara', 'Samudragupta'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'History', translation: { question: 'मौर्य साम्राज्य की स्थापना किसने की?', options: ['अशोक', 'चंद्रगुप्त मौर्य', 'बिन्दुसार', 'समुद्रगुप्त'] } },
    { id: 2301, question: 'The first battle of Panipat was fought between Babur and whom?', options: ['Rana Sanga', 'Ibrahim Lodi', 'Sher Shah Suri', 'Akbar'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'History', translation: { question: 'पानीपत की पहली लड़ाई बाबर और किसके बीच लड़ी गई थी?', options: ['राणा सांगा', 'इब्राहिम लोदी', 'शेर शाह सूरी', 'अकबर'] } },
    { id: 2302, question: 'Who started the policy of "Doctrine of Lapse"?', options: ['Lord Dalhousie', 'Lord Curzon', 'Lord Canning', 'Lord Wellesley'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'History', translation: { question: '"व्यपगत का सिद्धांत" की नीति किसने शुरू की?', options: ['लॉर्ड डलहौजी', 'लॉर्ड कर्जन', 'लॉर्ड कैनिंग', 'लॉर्ड वेलेस्ली'] } },
    // Economics
    { id: 2400, question: 'Who is known as the father of Economics?', options: ['Adam Smith', 'John Maynard Keynes', 'Karl Marx', 'Milton Friedman'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Economics', translation: { question: 'अर्थशास्त्र का जनक किसे कहा जाता है?', options: ['एडम स्मिथ', 'जॉन मेनार्ड कीन्स', 'कार्ल मार्क्स', 'मिल्टन फ्रीडमैन'] } },
    { id: 2401, question: 'What does GDP stand for?', options: ['Gross Domestic Product', 'General Domestic Product', 'Gross Development Product', 'General Development Product'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Economics', translation: { question: 'जीडीपी का क्या अर्थ है?', options: ['सकल घरेलू उत्पाद', 'सामान्य घरेलू उत्पाद', 'सकल विकास उत्पाद', 'सामान्य विकास उत्पाद'] } },
    { id: 2402, question: 'Which body is responsible for monetary policy in India?', options: ['Ministry of Finance', 'NITI Aayog', 'Reserve Bank of India', 'Securities and Exchange Board of India'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Economics', translation: { question: 'भारत में मौद्रिक नीति के लिए कौन सी संस्था जिम्मेदार है?', options: ['वित्त मंत्रालय', 'नीति आयोग', 'भारतीय रिजर्व बैंक', 'भारतीय प्रतिभूति और विनिमय बोर्ड'] } },
    // Science
    { id: 2500, question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondrion', 'Ribosome', 'Lysosome'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Science', translation: { question: 'कोशिका का पावरहाउस क्या है?', options: ['नाभिक', 'माइटोकॉन्ड्रियन', 'राइबोसोम', 'लाइसोसोम'] } },
    { id: 2501, question: 'What is the chemical symbol for Gold?', options: ['Ag', 'Au', 'Gd', 'Go'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Science', translation: { question: 'सोने का रासायनिक प्रतीक क्या है?', options: ['Ag', 'Au', 'Gd', 'Go'] } },
    { id: 2502, question: 'Which gas is most abundant in the Earth\'s atmosphere?', options: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Nitrogen'], correctAnswerIndex: 3, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Science', translation: { question: 'पृथ्वी के वायुमंडल में कौन सी गैस सबसे प्रचुर मात्रा में है?', options: ['ऑक्सीजन', 'हाइड्रोजन', 'कार्बन डाइऑक्साइड', 'नाइट्रोजन'] } },
    // Static GK
    { id: 2600, question: 'Which country is known as the "Land of the Midnight Sun"?', options: ['Norway', 'Sweden', 'Finland', 'Canada'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Static GK', translation: { question: '"मध्यरात्रि के सूर्य की भूमि" के रूप में किस देश को जाना जाता है?', options: ['नॉर्वे', 'स्वीडन', 'फिनलैंड', 'कनाडा'] } },
    { id: 2601, question: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Static GK', translation: { question: 'ऑस्ट्रेलिया की राजधानी क्या है?', options: ['सिडनी', 'मेलबर्न', 'कैनबरा', 'पर्थ'] } },
    { id: 2602, question: 'Where is the headquarters of UNESCO located?', options: ['New York, USA', 'Geneva, Switzerland', 'Paris, France', 'London, UK'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Static GK', translation: { question: 'यूनेस्को का मुख्यालय कहाँ स्थित है?', options: ['न्यूयॉर्क, यूएसए', 'जिनेवा, स्विट्जरलैंड', 'पेरिस, फ्रांस', 'लंदन, यूके'] } },
    // Geography
    { id: 2700, question: 'Which is the largest planet in our solar system?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Geography', translation: { question: 'हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?', options: ['पृथ्वी', 'मंगल', 'बृहस्पति', 'शनि'] } },
    { id: 2701, question: 'The "Ring of Fire" is located in which ocean?', options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'], correctAnswerIndex: 3, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Geography', translation: { question: '"रिंग ऑफ फायर" किस महासागर में स्थित है?', options: ['अटलांटिक महासागर', 'हिंद महासागर', 'आर्कटिक महासागर', 'प्रशांत महासागर'] } },
    { id: 2702, question: 'Which imaginary line divides the Earth into the Northern and Southern Hemispheres?', options: ['Tropic of Cancer', 'Equator', 'Tropic of Capricorn', 'Prime Meridian'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Geography', translation: { question: 'कौन सी काल्पनिक रेखा पृथ्वी को उत्तरी और दक्षिणी गोलार्ध में विभाजित करती है?', options: ['कर्क रेखा', 'भूमध्य रेखा', 'मकर रेखा', 'प्रधान मध्याह्न रेखा'] } },
    // Computer
    { id: 2800, question: 'What does "CPU" stand for?', options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Unit', 'Control Processing Unit'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Computer', translation: { question: '"सीपीयू" का क्या अर्थ है?', options: ['सेंट्रल प्रोसेसिंग यूनिट', 'कंप्यूटर पर्सनल यूनिट', 'सेंट्रल प्रोग्राम यूनिट', 'कंट्रोल प्रोसेसिंग यूनिट'] } },
    { id: 2801, question: 'Which of the following is a volatile memory?', options: ['ROM', 'RAM', 'SSD', 'HDD'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Computer', translation: { question: 'निम्नलिखित में से कौन एक अस्थिर मेमोरी है?', options: ['ROM', 'RAM', 'SSD', 'HDD'] } },
    { id: 2802, question: 'What is the full form of "URL"?', options: ['Uniform Resource Locator', 'Universal Resource Locator', 'Uniform Resource Link', 'Universal Resource Link'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Computer', translation: { question: '"यूआरएल" का पूर्ण रूप क्या है?', options: ['यूनिफॉर्म रिसोर्स लोकेटर', 'यूनिवर्सल रिसोर्स लोकेटर', 'यूनिफॉर्म रिसोर्स लिंक', 'यूनिवर्सल रिसोर्स लिंक'] } },
    // Polity
    { id: 2900, question: 'Who is the head of the Indian state?', options: ['Prime Minister', 'President', 'Chief Justice of India', 'Vice President'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Polity', translation: { question: 'भारतीय राज्य का प्रमुख कौन होता है?', options: ['प्रधानमंत्री', 'राष्ट्रपति', 'भारत के मुख्य न्यायाधीश', 'उपराष्ट्रपति'] } },
    { id: 2901, question: 'How many Fundamental Rights are there in the Indian Constitution?', options: ['5', '6', '7', '8'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Polity', translation: { question: 'भारतीय संविधान में कितने मौलिक अधिकार हैं?', options: ['5', '6', '7', '8'] } },
    { id: 2902, question: 'The concept of "Directive Principles of State Policy" was borrowed from which country\'s constitution?', options: ['USA', 'UK', 'Ireland', 'Canada'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Polity', translation: { question: '"राज्य के नीति निदेशक सिद्धांतों" की अवधारणा किस देश के संविधान से ली गई थी?', options: ['यूएसए', 'यूके', 'आयरलैंड', 'कनाडा'] } },
    // Current Affairs
    { id: 3000, question: 'Who won the Nobel Peace Prize in 2025?', options: ['Climate Activist Group', 'Journalist Collective', 'Human Rights Lawyer', 'UN Peacekeeping Force'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Current Affairs', translation: { question: '2025 में नोबेल शांति पुरस्कार किसने जीता?', options: ['जलवायु कार्यकर्ता समूह', 'पत्रकार समूह', 'मानवाधिकार वकील', 'संयुक्त राष्ट्र शांति सेना'] } },
    { id: 3001, question: 'Which country hosted the 2026 Winter Olympics?', options: ['Italy', 'Sweden', 'Switzerland', 'France'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Current Affairs', translation: { question: '2026 के शीतकालीन ओलंपिक की मेजबानी किस देश ने की?', options: ['इटली', 'स्वीडन', 'स्विट्जरलैंड', 'फ्रांस'] } },
    { id: 3002, question: 'India\'s "Gaganyaan" mission, successfully launched in 2025, was a:', options: ['Lunar Mission', 'Mars Orbiter Mission', 'Human Spaceflight Mission', 'Solar Probe Mission'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', chapter: 'Current Affairs', translation: { question: 'भारत का "गगनयान" मिशन, जिसे 2025 में सफलतापूर्वक लॉन्च किया गया, एक था:', options: ['चंद्र मिशन', 'मंगल ऑर्बिटर मिशन', 'मानव अंतरिक्ष उड़ान मिशन', 'सौर जांच मिशन'] } },
    { id: 3003, question: 'The 2026 FIFA World Cup was won by which country?', options: ['Brazil', 'Argentina', 'Germany', 'USA'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CHSL', chapter: 'Current Affairs', translation: { question: '2026 फीफा विश्व कप किस देश ने जीता?', options: ['ब्राजील', 'अर्जेंटीना', 'जर्मनी', 'यूएसए'] } },
];


// Function to shuffle an array
function shuffle(array: any[]) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const fullTestQuestions = (questions: Question[], count: number) => {
    return shuffle([...questions]).slice(0, count);
}

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
    question: `If sin(A) = ${(0.3+i/20).toFixed(2)}, what is the value of cos(A)?`,
    options: [`${Math.sqrt(1 - (0.3+i/20)**2).toFixed(2)}`, `${Math.sqrt(1 - ((0.3+i/20)+0.1)**2).toFixed(2)}`, `${Math.sqrt(1 - ((0.3+i/20)+0.2)**2).toFixed(2)}`, `${Math.sqrt(1 - ((0.3+i/20)-0.1)**2).toFixed(2)}`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC MTS',
    chapter: 'Trigonometry',
    translation: {
      question: `यदि sin(A) = ${(0.3+i/20).toFixed(2)}, तो cos(A) का मान क्या है?`,
      options: [`${Math.sqrt(1 - (0.3+i/20)**2).toFixed(2)}`, `${Math.sqrt(1 - ((0.3+i/20)+0.1)**2).toFixed(2)}`, `${Math.sqrt(1 - ((0.3+i/20)+0.2)**2).toFixed(2)}`, `${Math.sqrt(1 - ((0.3+i/20)-0.1)**2).toFixed(2)}`]
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
  ...gsMixedTests.reduce((acc, test, index) => {
    // For each test, take 25 questions from the shuffled allGsQuestions
    const startIndex = index * 25;
    const endIndex = startIndex + 25;
    const testQuestions = shuffle([...allGsQuestions]).slice(0, 25);
    acc[`gs-${test.id}`] = testQuestions;
    return acc;
  }, {} as { [key: string]: Question[] }),
  'reasoning': fullTestQuestions([
    { id: 900, question: 'In a certain coding system, if the word ‘PERFUME’ is coded as ‘SHUIXPH’, how will the word ‘SCENTED’ be coded? The logic involves shifting letters forward by a specific pattern.', options: ['VFHQWHG', 'VFHQWIG', 'VGHQWIG', 'VHHQWIH'], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: 'एक निश्चित कोडिंग प्रणाली में, यदि ‘PERFUME’ शब्द को ‘SHUIXPH’ के रूप में कोडित किया जाता है, तो ‘SCENTED’ शब्द को कैसे कोडित किया जाएगा? तर्क में एक विशिष्ट पैटर्न द्वारा अक्षरों को आगे बढ़ाना शामिल है।', options: ['VFHQWHG', 'VFHQWIG', 'VGHQWIG', 'VHHQWIH'] } },
    { id: 901, question: 'Choose the word that is least like the other words in the group, based on the category they belong to: Sparrow, Swan, Parrot, Koel.', options: ['Sparrow', 'Swan', 'Parrot', 'Koel'], correctAnswerIndex: 1, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: 'उस शब्द को चुनें जो समूह के अन्य शब्दों से सबसे कम मिलता-जुलता है, जिस श्रेणी से वे संबंधित हैं: गौरैया, हंस, तोता, कोयल।', options: ['गौरैया', 'हंस', 'तोता', 'कोयल'] } },
    { id: 902, question: 'Find the next term in the following alphanumeric series: Z1A, X2D, V6G, T21J, R88M, P445P, ? This is a long and complex series combining letters and numbers with a recursive pattern.', options: ['N2676S', 'N2670S', 'T2676S', 'N2676T'], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: 'निम्नलिखित अल्फ़ान्यूमेरिक श्रृंखला में अगला पद खोजें: Z1A, X2D, V6G, T21J, R88M, P445P, ? यह एक लंबी और जटिल श्रृंखला है जिसमें एक पुनरावर्ती पैटर्न के साथ अक्षर और संख्याएं मिलती हैं।', options: ['N2676S', 'N2670S', 'T2676S', 'N2676T'] } },
    { id: 903, question: 'In a code language, ‘SYSTEM’ is written as ‘SYSMET’. How will ‘FRACTION’ be written in that same language, if the logic involves rearranging the last three letters of the word?', options: ['CARFNOIT', 'CARFTION', 'FRACNOIT', 'CARFNOIT'], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC MTS', translation: { question: 'एक कूट भाषा में, ‘SYSTEM’ को ‘SYSMET’ लिखा जाता है। उसी भाषा में ‘FRACTION’ कैसे लिखा जाएगा, यदि तर्क में शब्द के अंतिम तीन अक्षरों को पुनर्व्यवस्थित करना शामिल है?', options: ['CARFNOIT', 'CARFTION', 'FRACNOIT', 'CARFNOIT'] } },
    { id: 904, question: 'A man starts from point A, walks 10 km towards the east, then turns right and walks 5 km. He again turns right and walks 10 km. Finally, he turns to his left and walks 10 km to reach point B. What is the distance and direction of point B from point A? This is a multi-step direction problem.', options: ['15 km South', '10 km North', '15 km West', '20 km East'], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: 'एक व्यक्ति बिंदु A से शुरू होता है, पूर्व की ओर 10 किमी चलता है, फिर दाएं मुड़ता है और 5 किमी चलता है। वह फिर से दाएं मुड़ता है और 10 किमी चलता है। अंत में, वह अपनी बाईं ओर मुड़ता है और बिंदु B तक पहुंचने के लिए 10 किमी चलता है। बिंदु A से बिंदु B की दूरी और दिशा क्या है? यह एक बहु-चरणीय दिशा समस्या है।', options: ['15 किमी दक्षिण', '10 किमी उत्तर', '15 किमी पश्चिम', '20 किमी पूर्व'] } },
    { id: 905, question: 'Select the option that is related to the third term in the same way as the second term is related to the first term. Analogy: Doctor : Hospital :: Teacher : ?', options: ['Office', 'School', 'Laboratory', 'Library'], correctAnswerIndex: 1, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: 'उस विकल्प का चयन करें जो तीसरे पद से उसी तरह संबंधित है जैसे दूसरा पद पहले पद से संबंधित है। सादृश्य: डॉक्टर : अस्पताल :: शिक्षक : ?', options: ['कार्यालय', 'स्कूल', 'प्रयोगशाला', 'पुस्तकालय'] } },
    { id: 906, question: 'Introducing a boy, a girl said, "His mother is the only daughter of my mother." How is the girl related to the boy? This is a question on blood relations.', options: ['Mother', 'Sister', 'Aunt', 'Cousin'], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC MTS', translation: { question: 'एक लड़के का परिचय देते हुए, एक लड़की ने कहा, "उसकी माँ मेरी माँ की इकलौती बेटी है।" लड़की लड़के से कैसे संबंधित है? यह रक्त संबंधों पर एक प्रश्न है।', options: ['माँ', 'बहन', 'मौसी', 'चचेरी बहन'] } },
    { id: 907, question: 'Arrange the following words in a logical and meaningful order to represent a process: 1. Application, 2. Selection, 3. Interview, 4. Advertisement, 5. Job Offer.', options: ['4, 1, 3, 2, 5', '4, 1, 2, 3, 5', '1, 4, 3, 5, 2', '4, 2, 3, 1, 5'], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: 'एक प्रक्रिया का प्रतिनिधित्व करने के लिए निम्नलिखित शब्दों को एक तार्किक और सार्थक क्रम में व्यवस्थित करें: 1. आवेदन, 2. चयन, 3. साक्षात्कार, 4. विज्ञापन, 5. नौकरी का प्रस्ताव।', options: ['4, 1, 3, 2, 5', '4, 1, 2, 3, 5', '1, 4, 3, 5, 2', '4, 2, 3, 1, 5'] } },
    { id: 908, question: 'Identify the number that completes the series: 3, 7, 16, 35, ?, 153. The pattern involves multiplication and addition, making it a moderately complex series.', options: ['74', '78', '84', '88'], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: 'श्रृंखला को पूरा करने वाली संख्या को पहचानें: 3, 7, 16, 35, ?, 153. पैटर्न में गुणा और जोड़ शामिल है, जो इसे एक मध्यम रूप से जटिल श्रृंखला बनाता है।', options: ['74', '78', '84', '88'] } },
    { id: 909, question: 'Among five friends, A is heavier than B. C is lighter than A. D is lighter than B but heavier than E. Who is the heaviest? This is a ranking and ordering problem with multiple conditions.', options: ['A', 'B', 'D', 'Cannot be determined'], correctAnswerIndex: 3, subject: 'Reasoning', exam: 'SSC MTS', translation: { question: 'पांच दोस्तों में, A, B से भारी है। C, A से हल्का है। D, B से हल्का है लेकिन E से भारी है। सबसे भारी कौन है? यह कई शर्तों के साथ एक रैंकिंग और ऑर्डरिंग समस्या है।', options: ['A', 'B', 'D', 'निर्धारित नहीं किया जा सकता'] } },
    { id: 910, question: 'Looking at a portrait of a man, Harsh said, "His mother is the wife of my father\'s son. I have no brothers or sisters." At whose portrait was Harsh looking? A classic blood relation puzzle.', options: ["His son", "His cousin", "His uncle", "His nephew"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: 'एक व्यक्ति के चित्र को देखते हुए, हर्ष ने कहा, "उसकी माँ मेरे पिता के बेटे की पत्नी है। मेरे कोई भाई या बहन नहीं हैं।" हर्ष किसके चित्र को देख रहा था? एक क्लासिक रक्त संबंध पहेली।', options: ["उसका बेटा", "उसका चचेरा भाई", "उसके चाचा", "उसका भतीजा"] } },
    { id: 911, question: "From the given options, select the word that cannot be formed using the letters of the word 'INFRASTRUCTURE'. The task is to check for available letters.", options: ["RESTRAIN", "FRACTURE", "CHARTER", "NATURE"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: "दिए गए विकल्पों में से, उस शब्द का चयन करें जिसे 'INFRASTRUCTURE' शब्द के अक्षरों का उपयोग करके नहीं बनाया जा सकता है। कार्य उपलब्ध अक्षरों की जांच करना है।", options: ["RESTRAIN", "FRACTURE", "CHARTER", "NATURE"] } },
    { id: 912, question: "If in a certain language, 'pen' is called 'pencil', 'pencil' is called 'eraser', 'eraser' is called 'book', and 'book' is called 'school', then what will be used to erase something?", options: ["pencil", "book", "eraser", "school"], correctAnswerIndex: 1, subject: 'Reasoning', exam: 'SSC MTS', translation: { question: "यदि किसी निश्चित भाषा में, 'कलम' को 'पेंसिल' कहा जाता है, 'पेंसिल' को 'रबड़' कहा जाता है, 'रबड़' को 'किताब' कहा जाता है, और 'किताब' को 'स्कूल' कहा जाता है, तो कुछ मिटाने के लिए क्या उपयोग किया जाएगा?", options: ["पेंसिल", "किताब", "रबड़", "स्कूल"] } },
    { id: 913, question: "In a secret code, '278' means 'run very fast', '853' means 'come back fast', and '397' means 'run and come'. What is the code for 'back'? This is a decoding problem that requires comparing multiple coded messages.", options: ["5", "8", "3", "9"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: "एक गुप्त कोड में, '278' का अर्थ है 'बहुत तेज दौड़ो', '853' का अर्थ है 'जल्दी वापस आओ', और '397' का अर्थ है 'दौड़ो और आओ'। 'वापस' के लिए कोड क्या है? यह एक डिकोडिंग समस्या है जिसके लिए कई कोडित संदेशों की तुलना करने की आवश्यकता होती है।", options: ["5", "8", "3", "9"] } },
    { id: 914, question: "Find the missing term in the series: B, E, J, Q, ? The pattern is based on the increasing difference between the positions of consecutive letters in the alphabet.", options: ["Z", "A", "Y", "B"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: "श्रृंखला में लुप्त पद ज्ञात करें: B, E, J, Q, ? यह पैटर्न वर्णमाला में लगातार अक्षरों की स्थिति के बीच बढ़ते अंतर पर आधारित है।", options: ["Z", "A", "Y", "B"] } },
    { id: 915, question: "If 8 * 7 = 30 and 5 * 2 = 14, then based on the same logic, what should 9 * 5 be? The logic is not standard multiplication but a custom defined operation: a * b = (a+b) + (a-b).", options: ["54", "44", "38", "28"], correctAnswerIndex: 3, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: "यदि 8 * 7 = 30 और 5 * 2 = 14, तो उसी तर्क के आधार पर, 9 * 5 क्या होना चाहिए? तर्क मानक गुणा नहीं है, बल्कि एक कस्टम परिभाषित ऑपरेशन है: a * b = (a+b) + (a-b)।", options: ["54", "44", "38", "28"] } },
    { id: 916, question: "Analogy: 'Mountain' is to 'Height' as 'River' is to what? This tests the relationship between objects and their primary measurable attribute.", options: ["Water", "Length", "Bank", "Fish"], correctAnswerIndex: 1, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: "सादृश्य: 'पहाड़' का संबंध 'ऊंचाई' से है, वैसे ही 'नदी' का संबंध किससे है? यह वस्तुओं और उनके प्राथमिक मापने योग्य गुण के बीच संबंध का परीक्षण करता है।", options: ["पानी", "लंबाई", "किनारा", "मछली"] } },
    { id: 917, question: 'Statement is given followed by two assumptions.\nStatement: "The government has decided to increase the price of petrol and diesel."\nAssumption I: People will protest against the government\'s decision.\nAssumption II: The government will get more revenue.', options: ["Only I is implicit", "Only II is implicit", "Both I and II are implicit", "Neither I nor II is implicit"], correctAnswerIndex: 1, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: 'एक कथन के बाद दो धारणाएँ दी गई हैं।\nकथन: "सरकार ने पेट्रोल और डीजल की कीमत बढ़ाने का फैसला किया है।"\nधारणा I: लोग सरकार के फैसले का विरोध करेंगे।\nधारणा II: सरकार को अधिक राजस्व मिलेगा।', options: ["केवल I निहित है", "केवल II निहित है", "I और II दोनों निहित हैं", "न तो I और न ही II निहित है"] } },
    { id: 918, question: "If 'P' means '+', 'Q' means '-', 'R' means '×', and 'S' means '÷', what is the value of the following long expression: 48 S 12 R 10 P 8 Q 6?", options: ["42", "44", "48", "52"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC MTS', translation: { question: "यदि 'P' का अर्थ '+', 'Q' का अर्थ '-', 'R' का अर्थ '×', और 'S' का अर्थ '÷' है, तो निम्नलिखित लंबी अभिव्यक्ति का मान क्या है: 48 S 12 R 10 P 8 Q 6?", options: ["42", "44", "48", "52"] } },
    { id: 919, question: "Select the related number from the given alternatives. 6 : 222 :: 7 : ? This analogy is based on the logic n : (n^3 + n).", options: ["350", "343", "336", "210"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: "दिए गए विकल्पों में से संबंधित संख्या का चयन करें। 6 : 222 :: 7 : ? यह सादृश्यता n : (n^3 + n) के तर्क पर आधारित है।", options: ["350", "343", "336", "210"] } },
    { id: 920, question: 'Sunita walks 20 meters towards North. She then turns right and walks 30 meters. Then she again turns right and walks 35 meters. After this, she turns left and walks 15 meters. Finally, she turns left again and walks 15 meters. In which direction and how many meters is she from her starting position? This is a lengthy, multi-step direction sense problem.', options: ['45 meters East', '45 meters West', '30 meters East', '30 meters West'], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: 'सुनीता उत्तर की ओर 20 मीटर चलती है। फिर वह दाएं मुड़ती है और 30 मीटर चलती है। फिर वह फिर से दाएं मुड़ती है और 35 मीटर चलती है। इसके बाद, वह बाएं मुड़ती है और 15 मीटर चलती है। अंत में, वह फिर से बाएं मुड़ती है और 15 मीटर चलती है। वह अपनी शुरुआती स्थिति से किस दिशा में और कितने मीटर की दूरी पर है? यह एक लंबी, बहु-चरणीय दिशा ज्ञान समस्या है।', options: ['45 मीटर पूर्व', '45 मीटर पश्चिम', '30 मीटर पूर्व', '30 मीटर पश्चिम'] } },
    { id: 921, question: "Find the odd one out from the given alternatives, considering the properties of the numbers. The numbers are 144, 169, 196, 210. The logic is based on perfect squares.", options: ["144", "169", "196", "210"], correctAnswerIndex: 3, subject: 'Reasoning', exam: 'SSC MTS', translation: { question: 'संख्याओं के गुणों को ध्यान में रखते हुए, दिए गए विकल्पों में से विषम का पता लगाएं। संख्याएँ 144, 169, 196, 210 हैं। तर्क पूर्ण वर्गों पर आधारित है।', options: ['144', '169', '196', '210'] } },
    { id: 922, question: "In a code, 'CLEVER' is written as 'BMDUDS'. Following the same logic of shifting each letter one step backward, how is 'STUPID' written in that code?", options: ["RSVHQC", "RTTOJC", "RSVНQC", "RSVHPC"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: "एक कोड में, 'CLEVER' को 'BMDUDS' लिखा जाता है। प्रत्येक अक्षर को एक कदम पीछे ले जाने के उसी तर्क का पालन करते हुए, उस कोड में 'STUPID' कैसे लिखा जाता है?", options: ["RSVHQC", "RTTOJC", "RSVНQC", "RSVHPC"] } },
    { id: 923, question: "Anu is Ram's sister. Ram is Neha's brother. Neha is Bina's daughter. How is Bina related to Anu? A puzzle on family relationships involving multiple members.", options: ["Mother", "Sister", "Daughter", "Grandmother"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: "अनु राम की बहन है। राम नेहा का भाई है। नेहा बीना की बेटी है। बीना अनु से कैसे संबंधित है? कई सदस्यों को शामिल करते हुए पारिवारिक रिश्तों पर एक पहेली।", options: ["माँ", "बहन", "बेटी", "दादी"] } },
    { id: 924, question: "If '+' means 'divided by', '−' means 'add', '×' means 'minus' and '÷' means 'multiplied by', then what will be the value of the following complex expression? [{(17 × 12) − (4 × 2)} + (23 − 6)] ÷ 1. This requires careful application of BODMAS rules with substituted operators.", options: ["7", "9", "5", "3"], correctAnswerIndex: 1, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: "यदि '+' का अर्थ 'से विभाजित', '−' का अर्थ 'जोड़', '×' का अर्थ 'घटा' और '÷' का अर्थ 'से गुणा' है, तो निम्नलिखित जटिल अभिव्यक्ति का मान क्या होगा? [{(17 × 12) − (4 × 2)} + (23 − 6)] ÷ 1. इसके लिए प्रतिस्थापित ऑपरेटरों के साथ BODMAS नियमों का सावधानीपूर्वक अनुप्रयोग आवश्यक है।", options: ["7", "9", "5", "3"] } },
    { id: 925, question: 'Statement is given followed by two conclusions.\nStatement: All dogs are cats. All cats are animals.\n\nConclusion I: All dogs are animals.\nConclusion II: Some animals are dogs.', options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both I and II follow', 'Neither I nor II follows'], correctAnswerIndex: 2, subject: 'Reasoning', exam: 'SSC CGL', chapter: 'Statement & Conclusion', translation: { question: 'कथन के बाद दो निष्कर्ष दिए गए हैं।\nकथन: सभी कुत्ते बिल्लियाँ हैं। सभी बिल्लियाँ जानवर हैं।\n\nनिष्कर्ष I: सभी कुत्ते जानवर हैं।\nनिष्कर्ष II: कुछ जानवर कुत्ते हैं।', options: ['केवल निष्कर्ष I अनुसरण करता है', 'केवल निष्कर्ष II अनुसरण करता है', 'I और II दोनों अनुसरण करते हैं', 'न तो I और न ही II अनुसरण करता है'] } },
    { id: 926, question: 'Statement is given followed by two conclusions.\nStatement: In a one-day cricket match, the total runs made by a team were 200. Out of these 200 runs, 160 runs were made by spinners.\n\nConclusion I: 80% of the team consists of spinners.\nConclusion II: The opening batsmen were spinners.', options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both I and II follow', 'Neither I nor II follows'], correctAnswerIndex: 3, subject: 'Reasoning', exam: 'SSC CHSL', chapter: 'Statement & Conclusion', translation: { question: 'कथन के बाद दो निष्कर्ष दिए गए हैं।\nकथन: एक दिवसीय क्रिकेट मैच में, एक टीम द्वारा बनाए गए कुल रन 200 थे। इन 200 रनों में से 160 रन स्पिनरों द्वारा बनाए गए थे।\n\nनिष्कर्ष I: टीम का 80% हिस्सा स्पिनरों का है।\nनिष्कर्ष II: सलामी बल्लेबाज स्पिनर थे।', options: ['केवल निष्कर्ष I अनुसरण करता है', 'केवल निष्कर्ष II अनुसरण करता है', 'I और II दोनों अनुसरण करते हैं', 'न तो I और न ही II अनुसरण करता है'] } },
    { id: 927, question: 'Statement is given followed by two conclusions.\nStatement: Some actors are singers. All singers are dancers.\n\nConclusion I: Some actors are dancers.\nConclusion II: No singer is an actor.', options: ['Only Conclusion I follows', 'Only Conclusion II follows', 'Both I and II follow', 'Neither I nor II follows'], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL', chapter: 'Statement & Conclusion', translation: { question: 'कथन के बाद दो निष्कर्ष दिए गए हैं।\nकथन: कुछ अभिनेता गायक हैं। सभी गायक नर्तक हैं।\n\nनिष्कर्ष I: कुछ अभिनेता नर्तक हैं।\nनिष्कर्ष II: कोई भी गायक अभिनेता नहीं है।', options: ['केवल निष्कर्ष I अनुसरण करता है', 'केवल निष्कर्ष II अनुसरण करता है', 'I और II दोनों अनुसरण करते हैं', 'न तो I और न ही II अनुसरण करता है'] } }
  ], 25),
  'english': fullTestQuestions([
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
    { id: 1010, question: 'Find the synonym for "Lucid".', options: ['Unclear', 'Clear', 'Confusing', 'Murky'], correctAnswerIndex: 1, subject: 'English', exam: 'SSC CGL', translation: { question: '"Lucid" का पर्यायवाची शब्द खोजें।', options: ['अस्पष्ट', 'स्पष्ट', 'भ्रमित करने वाला', 'गंदा'] } },
    { id: 1011, question: 'Choose the antonym for "Fragile".', options: ['Delicate', 'Weak', 'Robust', 'Brittle'], correctAnswerIndex: 2, subject: 'English', exam: 'SSC CHSL', translation: { question: '"Fragile" के लिए विलोम शब्द चुनें।', options: ['नाजुक', 'कमजोर', 'मजबूत', 'भंगुर'] } },
    { id: 1012, question: 'One-word substitution for "A place where birds are kept".', options: ['Aquarium', 'Zoo', 'Apiary', 'Aviary'], correctAnswerIndex: 3, subject: 'English', exam: 'SSC MTS', translation: { question: '"एक जगह जहाँ पक्षी रखे जाते हैं" के लिए एक शब्द प्रतिस्थापन।', options: ['मछलीघर', 'चिड़ियाघर', 'मधुमक्खी पालन', 'पक्षीशाला'] } },
    { id: 1013, question: 'Select the correctly spelt word.', options: ['Separate', 'Seperate', 'Saperate', 'Sepparate'], correctAnswerIndex: 0, subject: 'English', exam: 'SSC CGL', translation: { question: 'सही वर्तनी वाले शब्द का चयन करें।', options: ['Separate', 'Seperate', 'Saperate', 'Sepparate'] } },
    { id: 1014, question: 'Idiom: "To fish in troubled waters".', options: ['To go fishing in a stormy sea', 'To make a profit out of a disturbance', 'To try to find something in a difficult situation', 'To create problems for others'], correctAnswerIndex: 1, subject: 'English', exam: 'SSC CHSL', translation: { question: 'मुहावरा: "To fish in troubled waters"।', options: ['तूफानी समुद्र में मछली पकड़ने जाना', 'एक अशांति से लाभ कमाना', 'एक कठिन परिस्थिति में कुछ खोजने की कोशिश करना', 'दूसरों के लिए समस्याएं पैदा करना'] } },
    { id: 1015, question: 'Choose the correct preposition: "She is afraid ___ spiders."', options: ['from', 'of', 'with', 'about'], correctAnswerIndex: 1, subject: 'English', exam: 'SSC MTS', translation: { question: 'सही पूर्वसर्ग चुनें: "She is afraid ___ spiders."', options: ['from', 'of', 'with', 'about'] } },
    { id: 1016, question: 'Change to passive voice: "Someone has stolen my purse."', options: ['My purse has been stolen.', 'My purse was stolen.', 'I have been stolen my purse.', 'My purse had been stolen.'], correctAnswerIndex: 0, subject: 'English', exam: 'SSC CGL', translation: { question: 'निष्क्रिय आवाज में बदलें: "Someone has stolen my purse."', options: ['My purse has been stolen.', 'My purse was stolen.', 'I have been stolen my purse.', 'My purse had been stolen.'] } },
    { id: 1017, question: 'Find the synonym for "Diligent".', options: ['Lazy', 'Hardworking', 'Careless', 'Idle'], correctAnswerIndex: 1, subject: 'English', exam: 'SSC CHSL', translation: { question: '"Diligent" का पर्यायवाची शब्द खोजें।', options: ['आलसी', 'मेहनती', 'लापरवाह', 'निष्क्रिय'] } },
    { id: 1018, question: 'Choose the antonym for "Victory".', options: ['Success', 'Triumph', 'Defeat', 'Win'], correctAnswerIndex: 2, subject: 'English', exam: 'SSC MTS', translation: { question: '"Victory" के लिए विलोम शब्द चुनें।', options: ['सफलता', 'विजय', 'हार', 'जीत'] } },
    { id: 1019, question: 'One-word substitution for "That which cannot be corrected".', options: ['Incorrigible', 'Incurable', 'Indelible', 'Illegible'], correctAnswerIndex: 0, subject: 'English', exam: 'SSC CGL', translation: { question: '"जिसे सुधारा नहीं जा सकता" के लिए एक शब्द प्रतिस्थापन।', options: ['असुधार्य', 'असाध्य', 'अमिट', 'अपठनीय'] } },
    { id: 1020, question: 'Select the correctly spelt word.', options: ['Accomodate', 'Acommodate', 'Accommodate', 'Acomodate'], correctAnswerIndex: 2, subject: 'English', exam: 'SSC CHSL', translation: { question: 'सही वर्तनी वाले शब्द का चयन करें।', options: ['Accomodate', 'Acommodate', 'Accommodate', 'Acomodate'] } },
    { id: 1021, question: 'Idiom: "A dime a dozen".', options: ['Very expensive', 'Very rare', 'Very common and of little value', 'A dozen of dimes'], correctAnswerIndex: 2, subject: 'English', exam: 'SSC MTS', translation: { question: 'मुहावरा: "A dime a dozen"।', options: ['बहुत महंगा', 'बहुत दुर्लभ', 'बहुत आम और कम मूल्य का', 'एक दर्जन सिक्के'] } },
    { id: 1022, question: 'Fill in the blank: "The committee ___ decided to postpone the meeting."', options: ['has', 'have', 'are', 'is'], correctAnswerIndex: 0, subject: 'English', exam: 'SSC CGL', translation: { question: 'रिक्त स्थान भरें: "The committee ___ decided to postpone the meeting."', options: ['has', 'have', 'are', 'is'] } },
    { id: 1023, question: 'Change to indirect speech: He said, "I am unwell."', options: ['He said that he was unwell.', 'He said that he is unwell.', 'He said that I was unwell.', 'He says that he is unwell.'], correctAnswerIndex: 0, subject: 'English', exam: 'SSC CHSL', translation: { question: 'अप्रत्यक्ष भाषण में बदलें: He said, "I am unwell."', options: ['He said that he was unwell.', 'He said that he is unwell.', 'He said that I was unwell.', 'He says that he is unwell.'] } },
    { id: 1024, question: 'Find the synonym for "Obsolete".', options: ['Modern', 'Current', 'Outdated', 'New'], correctAnswerIndex: 2, subject: 'English', exam: 'SSC MTS', translation: { question: '"Obsolete" का पर्यायवाची शब्द खोजें।', options: ['आधुनिक', 'वर्तमान', 'पुराना', 'नया'] } },
  ], 25),
};

export const getQuestions = (subjectId: string, chapterId?: string): Question[] => {
  const key = chapterId ? `${subjectId}-${chapterId}` : subjectId;
  const questions = staticQuestions[key] || [];
  // For non-chapter maths tests, return 10 random questions from all chapters
  if (subjectId === 'maths' && !chapterId) {
       const allMathQuestions = allMathsChapters.flatMap(c => staticQuestions[`maths-${c.id}`] || []);
       return shuffle(allMathQuestions).slice(0, 10);
  }

  // Shuffle questions to make them appear in a random order
  return [...questions].sort(() => Math.random() - 0.5);
}

export const getExamById = (id: string) => exams.find(e => e.id === id);
export const getSubjectById = (id: string) => subjects.find(s => s.id === id);
export const getChapterById = (subjectId: string, chapterId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject) return undefined;
    
    if (subject.id === 'gs' && subject.mixedTests) {
        return subject.mixedTests.find(t => t.id === chapterId);
    }

    if (subject.chapterGroups) {
        return subject.chapterGroups.flatMap(g => g.chapters).find(c => c.id === chapterId);
    }
    return subject.chapters?.find(c => c.id === chapterId);
};

    
    