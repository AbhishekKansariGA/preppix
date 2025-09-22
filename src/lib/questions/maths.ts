
import { Question } from '../types';

export const mathsQuestions: { [key: string]: Question[] } = {
  'maths-percentages': [
    { id: 100, question: "What is 20% of 150?", options: ["20", "25", "30", "35"], correctAnswerIndex: 2, subject: 'Maths', exam: 'SSC CGL', chapter: 'Percentages' },
    { id: 101, question: "If a number is increased from 40 to 50, what is the percentage increase?", options: ["20%", "25%", "30%", "10%"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CGL', chapter: 'Percentages' },
    { id: 102, question: "A man's salary is Rs. 800. It increases by 10%. What is his new salary?", options: ["810", "880", "900", "980"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CGL', chapter: 'Percentages' },
    { id: 103, question: "Out of 40 students in a class, 30 are present. What percentage of students are absent?", options: ["25%", "75%", "10%", "30%"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CGL', chapter: 'Percentages' },
    { id: 104, question: "If 30% of a number is 60, what is the number?", options: ["180", "200", "210", "18"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CGL', chapter: 'Percentages' },
    { id: 105, question: "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:", options: ["588 apples", "600 apples", "672 apples", "700 apples"], correctAnswerIndex: 3, subject: 'Maths', exam: 'SSC CGL', chapter: 'Percentages' },
    { id: 106, question: "If the price of a book is first decreased by 25% and then increased by 20%, then the net change in the price will be:", options: ["10% decrease", "5% decrease", "No change", "5% increase"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CGL', chapter: 'Percentages' },
    { id: 107, question: "In an election between two candidates, one got 55% of the total valid votes, 20% of the votes were invalid. If the total number of votes was 7500, the number of valid votes that the other candidate got, was:", options: ["2700", "2900", "3000", "3100"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CGL', chapter: 'Percentages' },
    { id: 108, question: "A student has to secure 35% marks to pass. He got 80 marks and failed by 60 marks. The maximum marks are:", options: ["200", "300", "400", "500"], correctAnswerIndex: 2, subject: 'Maths', exam: 'SSC CGL', chapter: 'Percentages' },
    { id: 109, question: "If A's income is 50% less than that of B, then B's income is what percent more than that of A?", options: ["125%", "100%", "75%", "50%"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CGL', chapter: 'Percentages' },
  ],
  'maths-profit-loss-discount': [
    { id: 200, question: "A man buys a toy for Rs. 25 and sells it for Rs. 30. Find his gain percent.", options: ["20%", "25%", "15%", "30%"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CGL', chapter: 'Profit, Loss and Discount' },
    { id: 201, question: "If the cost price of 12 pens is equal to the selling price of 8 pens, the gain percent is:", options: ["25%", "33.33%", "50%", "66.66%"], correctAnswerIndex: 2, subject: 'Maths', exam: 'SSC CGL', chapter: 'Profit, Loss and Discount' },
    { id: 202, question: "A shopkeeper sells an article at a loss of 12.5%. If the selling price is Rs. 630, find the cost price.", options: ["Rs. 700", "Rs. 720", "Rs. 750", "Rs. 800"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CGL', chapter: 'Profit, Loss and Discount' },
    { id: 203, question: "The marked price of a shirt is Rs. 940 and the shopkeeper allows a discount of 15%. Find the selling price of the shirt.", options: ["Rs. 799", "Rs. 800", "Rs. 819", "Rs. 829"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CGL', chapter: 'Profit, Loss and Discount' },
    { id: 204, question: "A trader marks his goods at 20% above the cost price. He allows his customers a discount of 8% on marked price. Find out his profit percent.", options: ["10.4%", "11.4%", "12.4%", "13.4%"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CGL', chapter: 'Profit, Loss and Discount' },
    { id: 205, question: "By selling an article for Rs. 100, a man gains Rs. 15. Then, his gain % is:", options: ["15%", "12.5%", "17.64%", "18.75%"], correctAnswerIndex: 2, subject: 'Maths', exam: 'SSC CGL', chapter: 'Profit, Loss and Discount' },
    { id: 206, question: "A dishonest dealer professes to sell his goods at cost price, but he uses a weight of 960 g for the kg weight. Find his gain percent.", options: ["4%", "4.16%", "5%", "3.84%"], correctAnswerIndex: 1, subject: 'Maths', exam: 'SSC CGL', chapter: 'Profit, Loss and Discount' },
    { id: 207, question: "Find a single discount equivalent to a series of discounts of 20%, 10% and 5%.", options: ["31.6%", "32.4%", "33.2%", "34.5%"], correctAnswerIndex: 0, subject: 'Maths', exam: 'SSC CGL', chapter: 'Profit, Loss and Discount' },
    { id: 208, question: "If the cost price is 95% of the selling price, what is the profit percent?", options: ["4%", "4.75%", "5%", "5.26%"], correctAnswerIndex: 3, subject: 'Maths', exam: 'SSC CGL', chapter: 'Profit, Loss and Discount' },
    { id: 209, question: "A person sold a horse at a gain of 15%. Had he bought it for 25% less and sold it for Rs. 60 less, he would have made a profit of 32%. The cost price of the horse was:", options: ["Rs. 370", "Rs. 372", "Rs. 375", "Rs. 378"], correctAnswerIndex: 2, subject: 'Maths', exam: 'SSC CGL', chapter: 'Profit, Loss and Discount' },
  ],
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
};
