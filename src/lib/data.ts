

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
    { id: 910, question: "Pointing to a photograph, a man said, 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?", options: ["His own", "His Son's", "His Father's", "His Nephew's"], correctAnswerIndex: 1, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: "एक तस्वीर की ओर इशारा करते हुए, एक व्यक्ति ने कहा, 'मेरा कोई भाई या बहन नहीं है, लेकिन उस आदमी का पिता मेरे पिता का बेटा है।' यह किसकी तस्वीर थी?", options: ["उसकी अपनी", "उसके बेटे की", "उसके पिता की", "उसके भतीजे की"] } },
    { id: 911, question: "From the given alternatives, select the word which cannot be formed using the letters of the given word: 'CONSTITUTIONAL'", options: ["TALENT", "TUTION", "LOCATION", "CONSULT"], correctAnswerIndex: 3, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: "दिए गए विकल्पों में से, उस शब्द का चयन करें जिसे दिए गए शब्द के अक्षरों का उपयोग करके नहीं बनाया जा सकता है: 'CONSTITUTIONAL'", options: ["TALENT", "TUTION", "LOCATION", "CONSULT"] } },
    { id: 912, question: "If 'sky' is 'star', 'star' is 'cloud', 'cloud' is 'earth', 'earth' is 'tree' and 'tree' is 'book', then where do the birds fly?", options: ["Cloud", "Sky", "Star", "Earth"], correctAnswerIndex: 2, subject: 'Reasoning', exam: 'SSC MTS', translation: { question: "यदि 'आसमान' 'तारा' है, 'तारा' 'बादल' है, 'बादल' 'पृथ्वी' है, 'पृथ्वी' 'पेड़' है और 'पेड़' 'किताब' है, तो पक्षी कहाँ उड़ते हैं?", options: ["बादल", "आसमान", "तारा", "पृथ्वी"] } },
    { id: 913, question: "In a certain code, '253' means 'books are old'; '546' means 'man is old'; '378' means 'buy good books'. What stands for 'are' in that code?", options: ["2", "5", "3", "6"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: "एक निश्चित कोड में, '253' का अर्थ है 'किताबें पुरानी हैं'; '546' का अर्थ है 'आदमी बूढ़ा है'; '378' का अर्थ है 'अच्छी किताबें खरीदें'। उस कोड में 'हैं' के लिए क्या है?", options: ["2", "5", "3", "6"] } },
    { id: 914, question: "Find the missing character: A, D, I, P, ?", options: ["V", "W", "X", "Y"], correctAnswerIndex: 3, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: "लुप्त अक्षर ज्ञात करें: A, D, I, P, ?", options: ["V", "W", "X", "Y"] } },
    { id: 915, question: "Which of the following diagrams indicates the best relation between Travelers, Train and Bus?", options: ["Two circles inside a larger circle", "Two overlapping circles", "Three separate circles", "Two separate circles inside a larger circle"], correctAnswerIndex: 3, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: "निम्नलिखित में से कौन सा आरेख यात्रियों, ट्रेन और बस के बीच सबसे अच्छा संबंध दर्शाता है?", options: ["एक बड़े वृत्त के अंदर दो वृत्त", "दो अतिव्यापी वृत्त", "तीन अलग-अलग वृत्त", "एक बड़े वृत्त के अंदर दो अलग-अलग वृत्त"] } },
    { id: 916, question: "If 5 * 3 = 19 and 8 * 5 = 49, then what should 6 * 4 be?", options: ["24", "28", "32", "22"], correctAnswerIndex: 1, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: "यदि 5 * 3 = 19 और 8 * 5 = 49, तो 6 * 4 क्या होना चाहिए?", options: ["24", "28", "32", "22"] } },
    { id: 917, question: "Water is to Pipe as Electricity is to ...?", options: ["Wire", "Bulb", "Switch", "Power"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: "पानी का पाइप से वही संबंध है जो बिजली का ... से है?", options: ["तार", "बल्ब", "स्विच", "शक्ति"] } },
    { id: 918, question: "Choose the mirror image of the word 'REASONING'.", options: ["GNINOSAER", "ЯƎAƧOИIИG", "GNINOSAEЯ", "REASONING"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: "'REASONING' शब्द की दर्पण छवि चुनें।", options: ["GNINOSAER", "ЯƎAƧOИIИG", "GNINOSAEЯ", "REASONING"] } },
    { id: 919, question: "Count the number of triangles in the given figure.", options: ["10", "12", "14", "16"], correctAnswerIndex: 3, subject: 'Reasoning', exam: 'SSC MTS', translation: { question: "दी गई आकृति में त्रिभुजों की संख्या गिनें।", options: ["10", "12", "14", "16"] } },
    { id: 920, question: "Select the related word/letters/number from the given alternatives. Flow : River :: Stagnant : ?", options: ["Rain", "Stream", "Pool", "Canal"], correctAnswerIndex: 2, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: "दिए गए विकल्पों में से संबंधित शब्द/अक्षर/संख्या का चयन करें। प्रवाह : नदी :: स्थिर : ?", options: ["बारिश", "धारा", "तालाब", "नहर"] } },
    { id: 921, question: "A statement is given followed by two conclusions. You have to consider the statement to be true. Statement: All artists are whimsical. Conclusion I: All whimsical people are artists. Conclusion II: Some artists are whimsical.", options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"], correctAnswerIndex: 1, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: "एक कथन दिया गया है जिसके बाद दो निष्कर्ष दिए गए हैं। आपको कथन को सत्य मानना है। कथन: सभी कलाकार मनमौजी होते हैं। निष्कर्ष I: सभी मनमौजी लोग कलाकार होते हैं। निष्कर्ष II: कुछ कलाकार मनमौजी होते हैं।", options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "I और II दोनों अनुसरण करते हैं", "न तो I और न ही II अनुसरण करता है"] } },
    { id: 922, question: "How many cubes are there in the given figure?", options: ["6", "8", "10", "12"], correctAnswerIndex: 2, subject: 'Reasoning', exam: 'SSC MTS', translation: { question: "दी गई आकृति में कितने घन हैं?", options: ["6", "8", "10", "12"] } },
    { id: 923, question: "If 'P' denotes '÷', 'Q' denotes '×', 'R' denotes '+' and 'S' denotes '−', then what is the value of 18 Q 12 P 4 R 5 S 6?", options: ["36", "53", "59", "65"], correctAnswerIndex: 1, subject: 'Reasoning', exam: 'SSC CGL', translation: { question: "यदि 'P' का अर्थ '÷', 'Q' का अर्थ '×', 'R' का अर्थ '+' और 'S' का अर्थ '−' है, तो 18 Q 12 P 4 R 5 S 6 का मान क्या है?", options: ["36", "53", "59", "65"] } },
    { id: 924, question: "Identify the figure that completes the pattern.", options: ["A", "B", "C", "D"], correctAnswerIndex: 0, subject: 'Reasoning', exam: 'SSC CHSL', translation: { question: "पैटर्न को पूरा करने वाली आकृति को पहचानें।", options: ["A", "B", "C", "D"] } },
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

    
