
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
  'maths-percentage': [
    {
      id: 100,
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
    },
    {
      id: 101,
      question: 'A man\'s salary is decreased by 50%. By what percent should his new salary be increased to restore the original salary?',
      options: ['50%', '100%', '75%', '80%'],
      correctAnswerIndex: 1,
      subject: 'Maths',
      exam: 'SSC CGL',
      chapter: 'Percentage',
      translation: {
        question: 'एक आदमी का वेतन 50% कम हो जाता है। मूल वेतन को बहाल करने के लिए उसके नए वेतन में कितने प्रतिशत की वृद्धि की जानी चाहिए?',
        options: ['50%', '100%', '75%', '80%']
      }
    },
    {
      id: 102,
      question: 'What is 20% of 50% of 300?',
      options: ['30', '15', '60', '45'],
      correctAnswerIndex: 0,
      subject: 'Maths',
      exam: 'SSC CGL',
      chapter: 'Percentage',
      translation: {
        question: '300 का 50% का 20% क्या है?',
        options: ['30', '15', '60', '45']
      }
    },
    {
        id: 103,
        question: 'If 40% of a number is 240, what is the number?',
        options: ['600', '500', '480', '720'],
        correctAnswerIndex: 0,
        subject: 'Maths',
        exam: 'SSC CGL',
        chapter: 'Percentage',
        translation: {
            question: 'यदि किसी संख्या का 40% 240 है, तो वह संख्या क्या है?',
            options: ['600', '500', '480', '720']
        }
    },
    {
        id: 104,
        question: 'A student has to secure 40% marks to pass. He gets 40 marks and fails by 40 marks. What are the maximum marks?',
        options: ['100', '150', '200', '250'],
        correctAnswerIndex: 2,
        subject: 'Maths',
        exam: 'SSC CHSL',
        chapter: 'Percentage',
        translation: {
            question: 'एक छात्र को पास होने के लिए 40% अंक प्राप्त करने होते हैं। उसे 40 अंक मिलते हैं और वह 40 अंकों से फेल हो जाता है। अधिकतम अंक क्या हैं?',
            options: ['100', '150', '200', '250']
        }
    },
    {
        id: 105,
        question: 'The price of sugar is increased by 20%. By how much percent must a family reduce its consumption to keep the expenditure the same?',
        options: ['20%', '25%', '16.66%', '15%'],
        correctAnswerIndex: 2,
        subject: 'Maths',
        exam: 'SSC MTS',
        chapter: 'Percentage',
        translation: {
            question: 'चीनी की कीमत में 20% की वृद्धि होती है। एक परिवार को खर्च को समान रखने के लिए अपनी खपत में कितने प्रतिशत की कमी करनी चाहिए?',
            options: ['20%', '25%', '16.66%', '15%']
        }
    },
    {
        id: 106,
        question: 'In an election, a candidate who gets 60% of the votes is elected by a majority of 120 votes. What is the total number of votes polled?',
        options: ['300', '400', '500', '600'],
        correctAnswerIndex: 3,
        subject: 'Maths',
        exam: 'SSC CGL',
        chapter: 'Percentage',
        translation: {
            question: 'एक चुनाव में, 60% वोट पाने वाला उम्मीदवार 120 वोटों के बहुमत से चुना जाता है। डाले गए वोटों की कुल संख्या क्या है?',
            options: ['300', '400', '500', '600']
        }
    },
    {
        id: 107,
        question: 'If the length of a rectangle is increased by 10% and the breadth is decreased by 10%, what is the change in its area?',
        options: ['1% increase', '1% decrease', 'No change', '2% decrease'],
        correctAnswerIndex: 1,
        subject: 'Maths',
        exam: 'SSC CHSL',
        chapter: 'Percentage',
        translation: {
            question: 'यदि एक आयत की लंबाई में 10% की वृद्धि होती है और चौड़ाई में 10% की कमी होती है, तो उसके क्षेत्रफल में क्या परिवर्तन होता है?',
            options: ['1% वृद्धि', '1% कमी', 'कोई परिवर्तन नहीं', '2% कमी']
        }
    },
    {
        id: 108,
        question: 'Out of 80 students, 30% are girls. How many boys are there?',
        options: ['24', '56', '30', '50'],
        correctAnswerIndex: 1,
        subject: 'Maths',
        exam: 'SSC MTS',
        chapter: 'Percentage',
        translation: {
            question: '80 छात्रों में से 30% लड़कियां हैं। कितने लड़के हैं?',
            options: ['24', '56', '30', '50']
        }
    },
    {
        id: 109,
        question: 'A number is first increased by 20% and then decreased by 20%. What is the net change in the number?',
        options: ['4% increase', '4% decrease', 'No change', '2% increase'],
        correctAnswerIndex: 1,
        subject: 'Maths',
        exam: 'SSC CGL',
        chapter: 'Percentage',
        translation: {
            question: 'एक संख्या में पहले 20% की वृद्धि की जाती है और फिर 20% की कमी की जाती है। संख्या में शुद्ध परिवर्तन क्या है?',
            options: ['4% वृद्धि', '4% कमी', 'कोई परिवर्तन नहीं', '2% वृद्धि']
        }
    },
  ],
  'maths-profit-loss': Array.from({ length: 10 }, (_, i) => ({
    id: 200 + i,
    question: `A shopkeeper sells an item for Rs. ${550 + i*10} at a profit of 10%. What is the cost price?`,
    options: [`Rs. ${500 + i*10}`, `Rs. ${525 + i*10}`, `Rs. ${475 + i*10}`, `Rs. ${450 + i*10}`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Profit & Loss',
     translation: {
        question: `एक दुकानदार 10% के लाभ पर एक वस्तु को ${550 + i*10} रुपये में बेचता है। लागत मूल्य क्या है?`,
        options: [`रु. ${500 + i*10}`, `रु. ${525 + i*10}`, `रु. ${475 + i*10}`, `रु. ${450 + i*10}`]
    }
  })),
  'maths-average': Array.from({ length: 10 }, (_, i) => ({
    id: 300 + i,
    question: `The average of 5 consecutive numbers is ${15 + i}. What is the largest number?`,
    options: [`${16+i}`, `${17+i}`, `${18+i}`, `${19+i}`],
    correctAnswerIndex: 1,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Average',
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
   'maths-discount': Array.from({ length: 10 }, (_, i) => ({
    id: 500 + i,
    question: `A shopkeeper gives a 20% discount on an item marked at Rs. ${1000 + i * 50}. What is the selling price?`,
    options: [`Rs. ${800 + i*40}`, `Rs. ${900 + i*40}`, `Rs. ${750 + i*40}`, `Rs. ${850 + i*40}`],
    correctAnswerIndex: 0,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Discount',
    translation: {
        question: `एक दुकानदार ${1000 + i * 50} रुपये की चिह्नित वस्तु पर 20% की छूट देता है। विक्रय मूल्य क्या है?`,
        options: [`रु. ${800 + i*40}`, `रु. ${900 + i*40}`, `रु. ${750 + i*40}`, `रु. ${850 + i*40}`]
    }
  })),
  'maths-boat-stream': Array.from({ length: 10 }, (_, i) => ({
    id: 600 + i,
    question: `A boat goes ${10 + i*2} km upstream in 2 hours. The speed of the stream is 1 km/h. What is the speed of the boat in still water?`,
    options: [`${4 + i} km/h`, `${5 + i} km/h`, `${6 + i} km/h`, `${7 + i} km/h`],
    correctAnswerIndex: 2,
    subject: 'Maths',
    exam: 'SSC CGL',
    chapter: 'Boat and Stream',
    translation: {
        question: `एक नाव 2 घंटे में ${10 + i*2} किमी धारा के प्रतिकूल जाती है। धारा की गति 1 किमी/घंटा है। शांत जल में नाव की गति क्या है?`,
        options: [`${4 + i} किमी/घंटा`, `${5 + i} किमी/घंटा`, `${6 + i} किमी/घंटा`, `${7 + i} किमी/घंटा`]
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
  'gs': [
    { id: 800, question: 'Who is known as the "Father of the Indian Constitution"?', options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Dr. B.R. Ambedkar', 'Sardar Patel'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', translation: { question: '"भारतीय संविधान के जनक" के रूप में किसे जाना जाता है?', options: ['महात्मा गांधी', 'जवाहरलाल नेहरू', 'डॉ. बी.आर. अंबेडकर', 'सरदार पटेल'] } },
    { id: 801, question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], correctAnswerIndex: 1, subject: 'General Studies', exam: 'SSC CGL', translation: { question: 'किस ग्रह को लाल ग्रह के नाम से जाना जाता है?', options: ['पृथ्वी', 'मंगल', 'बृहस्पति', 'शुक्र'] } },
    { id: 802, question: 'What is the capital of Japan?', options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CHSL', translation: { question: 'जापान की राजधानी क्या है?', options: ['बीजिंग', 'सियोल', 'टोक्यो', 'बैंकॉक'] } },
    { id: 803, question: 'Who wrote the national anthem of India?', options: ['Rabindranath Tagore', 'Bankim Chandra Chatterjee', 'Sarojini Naidu', 'Subramania Bharati'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC MTS', translation: { question: 'भारत का राष्ट्रगान किसने लिखा?', options: ['रवींद्रनाथ टैगोर', 'बंकिम चंद्र चटर्जी', 'सरोजिनी नायडू', 'सुब्रमनिया भारती'] } },
    { id: 804, question: 'The famous "Ganges" river flows through which country?', options: ['China', 'Nepal', 'India', 'Bangladesh'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', translation: { question: 'प्रसिद्ध "गंगा" नदी किस देश से होकर बहती है?', options: ['चीन', 'नेपाल', 'भारत', 'बांग्लादेश'] } },
    { id: 805, question: 'Which is the largest bone in the human body?', options: ['Femur', 'Humerus', 'Tibia', 'Fibula'], correctAnswerIndex: 0, subject: 'General Studies', exam: 'SSC CHSL', translation: { question: 'मानव शरीर की सबसे बड़ी हड्डी कौन सी है?', options: ['फीमर', 'ह्यूमरस', 'टिबिया', 'फाइबुला'] } },
    { id: 806, question: 'Who discovered Penicillin?', options: ['Marie Curie', 'Louis Pasteur', 'Alexander Fleming', 'Albert Einstein'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC MTS', translation: { question: 'पेनिसिलिन की खोज किसने की?', options: ['मैरी क्यूरी', 'लुई पाश्चर', 'अलेक्जेंडर फ्लेमिंग', 'अल्बर्ट आइंस्टीन'] } },
    { id: 807, question: 'What is the currency of the United Kingdom?', options: ['Euro', 'Dollar', 'Pound Sterling', 'Yen'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC CGL', translation: { question: 'यूनाइटेड किंगडम की मुद्रा क्या है?', options: ['यूरो', 'डॉलर', 'पाउंड स्टर्लिंग', 'येन'] } },
    { id: 808, question: 'Which gas is most abundant in the Earth\'s atmosphere?', options: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Nitrogen'], correctAnswerIndex: 3, subject: 'General Studies', exam: 'SSC CHSL', translation: { question: 'पृथ्वी के वायुमंडल में कौन सी गैस सबसे प्रचुर मात्रा में है?', options: ['ऑक्सीजन', 'हाइड्रोजन', 'कार्बन डाइऑक्साइड', 'नाइट्रोजन'] } },
    { id: 809, question: 'The "Mona Lisa" was painted by which artist?', options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'], correctAnswerIndex: 2, subject: 'General Studies', exam: 'SSC MTS', translation: { question: '"मोना लिसा" को किस कलाकार ने चित्रित किया था?', options: ['विंसेंट वैन गॉग', 'पाब्लो पिकासो', 'लियोनार्डो दा विंची', 'माइकल एंजेलो'] } },
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
    return mathsChapters.find(c => c.id === chapterId);
};
