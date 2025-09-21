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

const allQuestions: Question[] = [
  // Maths - Percentage
  { id: 3, exam: 'chsl', subject: 'maths', chapter: 'percentage', question: 'If 30% of A is added to 40% of B, the answer is 80% of B. What percentage of A is B?', options: ['75%', '60%', '70%', '50%'], correctAnswerIndex: 0 },
  { id: 21, exam: 'cgl', subject: 'maths', chapter: 'percentage', question: 'If 20% of a = b, then b% of 20 is the same as:', options: ['4% of a', '5% of a', '20% of a', 'None of these'], correctAnswerIndex: 0 },
  { id: 101, exam: 'cgl', subject: 'maths', chapter: 'percentage', question: 'A number is increased by 10% and then decreased by 10%. The net change is:', options: ['1% increase', '1% decrease', 'No change', '2% decrease'], correctAnswerIndex: 1 },
  { id: 102, exam: 'chsl', subject: 'maths', chapter: 'percentage', question: 'If the price of sugar increases by 25%, by how much percent must a household reduce its consumption to keep the expenditure the same?', options: ['20%', '25%', '18%', '22%'], correctAnswerIndex: 0 },
  { id: 103, exam: 'mts', subject: 'maths', chapter: 'percentage', question: 'In an election, a candidate who gets 84% of the votes is elected by a majority of 476 votes. What is the total number of votes polled?', options: ['672', '700', '749', '810'], correctAnswerIndex: 1 },
  { id: 104, exam: 'cgl', subject: 'maths', chapter: 'percentage', question: 'A student has to score 40% marks to pass. He gets 178 marks and fails by 22 marks. The maximum marks are:', options: ['400', '500', '450', '600'], correctAnswerIndex: 1 },
  { id: 105, exam: 'chsl', subject: 'maths', chapter: 'percentage', question: 'If the length of a rectangle is increased by 20% and its breadth is decreased by 20%, its area will:', options: ['Increase by 4%', 'Decrease by 4%', 'Remain unchanged', 'Decrease by 1%'], correctAnswerIndex: 1 },
  { id: 106, exam: 'mts', subject: 'maths', chapter: 'percentage', question: 'The population of a town was 1,60,000 three years ago. If it increased by 3%, 2.5% and 5% respectively in the last three years, then the present population is:', options: ['177,366', '175,466', '170,000', '180,000'], correctAnswerIndex: 0 },
  { id: 107, exam: 'cgl', subject: 'maths', chapter: 'percentage', question: 'Out of her total income, Neha spends 20% on house rent and 70% of the rest on household expenditure. If she saves Rs. 3600, what is her total income?', options: ['15000', '18000', '20000', '22000'], correctAnswerIndex: 0 },
  { id: 108, exam: 'chsl', subject: 'maths', chapter: 'percentage', question: 'A number is first increased by 16.66% and then decreased by 14.28%. Find the net percentage change.', options: ['2.38% increase', 'No change', '2.38% decrease', '1% increase'], correctAnswerIndex: 1 },
  { id: 109, exam: 'mts', subject: 'maths', chapter: 'percentage', question: 'If the radius of a circle is increased by 50%, find the percentage increase in its area.', options: ['125%', '100%', '75%', '50%'], correctAnswerIndex: 0 },
  
  // Maths - Profit & Loss
  { id: 1, exam: 'cgl', subject: 'maths', chapter: 'profit-loss', question: 'A man bought an article for Rs. 490 and sold it for Rs. 465.50. Find his loss percent.', options: ['5%', '4%', '6%', '4.5%'], correctAnswerIndex: 0 },
  { id: 4, exam: 'mts', subject: 'maths', chapter: 'profit-loss', question: 'A man buys a toy for Rs. 25 and sells it for Rs. 30. Find his gain percent.', options: ['20%', '25%', '15%', '10%'], correctAnswerIndex: 0 },
  { id: 110, exam: 'chsl', subject: 'maths', chapter: 'profit-loss', question: 'By selling an article for Rs. 72, there is a loss of 10%. At what price should it be sold to gain 5%?', options: ['Rs. 84', 'Rs. 80', 'Rs. 90', 'Rs. 82'], correctAnswerIndex: 0 },
  { id: 111, exam: 'cgl', subject: 'maths', chapter: 'profit-loss', question: 'A shopkeeper professes to sell his goods at cost price, but uses a weight of 960 gm for a kg. weight. Find his gain percent.', options: ['4%', '4.16%', '3.84%', '5%'], correctAnswerIndex: 1 },
  { id: 112, exam: 'mts', subject: 'maths', chapter: 'profit-loss', question: 'If the cost price is 95% of the selling price, what is the profit percent?', options: ['4%', '4.75%', '5%', '5.26%'], correctAnswerIndex: 3 },
  { id: 113, exam: 'chsl', subject: 'maths', chapter: 'profit-loss', question: 'A dealer sold a radio at a loss of 2.5%. Had he sold it for Rs. 100 more, he would have gained 7.5%. For what value should he sell it in order to gain 12.5%?', options: ['Rs. 1125', 'Rs. 1080', 'Rs. 1200', 'Rs. 1150'], correctAnswerIndex: 0 },
  { id: 114, exam: 'cgl', subject: 'maths', chapter: 'profit-loss', question: 'A dishonest dealer uses a scale of 90 cm instead of a meter scale and claims to sell at cost price. His profit is:', options: ['9%', '10%', '11.11%', '12.5%'], correctAnswerIndex: 2 },
  { id: 115, exam: 'mts', subject: 'maths', chapter: 'profit-loss', question: 'If selling price is doubled, the profit triples. Find the profit percent.', options: ['66.66%', '100%', '105.33%', '120%'], correctAnswerIndex: 1 },
  { id: 116, exam: 'chsl', subject: 'maths', chapter: 'profit-loss', question: 'The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:', options: ['15', '16', '18', '25'], correctAnswerIndex: 1 },
  { id: 117, exam: 'cgl', subject: 'maths', chapter: 'profit-loss', question: 'An article is sold at a certain price. By selling it at 2/3 of that price, one loses 10%. The gain percent at original price is:', options: ['20%', '35%', '40%', '45%'], correctAnswerIndex: 1 },
  { id: 118, exam: 'mts', subject: 'maths', chapter: 'profit-loss', question: 'A man buys 12 articles for Rs. 12 and sells them at the rate of Rs. 1.25 per article. His gain percentage is:', options: ['20%', '25%', '15%', '18%'], correctAnswerIndex: 1 },

  // Maths - Average
  { id: 2, exam: 'cgl', subject: 'maths', chapter: 'average', question: 'The average of 5 numbers is 27. If one number is excluded, the average becomes 25. The excluded number is?', options: ['35', '25', '45', '55'], correctAnswerIndex: 0 },
  { id: 22, exam: 'chsl', subject: 'maths', chapter: 'average', question: 'The average of first 50 natural numbers is ?', options: ['25.30', '25.5', '25.00', '26'], correctAnswerIndex: 1 },
  { id: 119, exam: 'mts', subject: 'maths', chapter: 'average', question: 'The average of 7 consecutive numbers is 20. The largest of these numbers is:', options: ['20', '22', '23', '24'], correctAnswerIndex: 2 },
  { id: 120, exam: 'cgl', subject: 'maths', chapter: 'average', question: 'The average age of a class of 39 students is 15 years. If the age of the teacher be included, then the average increases by 3 months. Find the age of the teacher.', options: ['25 years', '24 years', '30 years', '28 years'], correctAnswerIndex: 0 },
  { id: 121, exam: 'chsl', subject: 'maths', chapter: 'average', question: 'The average weight of 16 boys in a class is 50.25 kg and that of the remaining 8 boys is 45.15 kg. Find the average weight of all the boys in the class.', options: ['48.55 kg', '49.25 kg', '47.55 kg', '48.00 kg'], correctAnswerIndex: 0 },
  { id: 122, exam: 'mts', subject: 'maths', chapter: 'average', question: 'The average of five consecutive odd numbers is 61. What is the difference between the highest and lowest numbers?', options: ['2', '5', '8', 'Cannot be determined'], correctAnswerIndex: 2 },
  { id: 123, exam: 'cgl', subject: 'maths', chapter: 'average', question: 'The average score of a cricketer for ten matches is 38.9 runs. If the average for the first six matches is 42, then find the average for the last four matches.', options: ['33.25', '33.5', '34.25', '35'], correctAnswerIndex: 2 },
  { id: 124, exam: 'chsl', subject: 'maths', chapter: 'average', question: 'The average of 30 results is 20 and the average of other 20 results is 30. What is the average of all the results?', options: ['24', '25', '26', '27'], correctAnswerIndex: 0 },
  { id: 125, exam: 'mts', subject: 'maths', chapter: 'average', question: 'The average temperature of a town in the first four days of a month was 58 degrees. The average for the second, third, fourth and fifth days was 60 degrees. If the temperatures of the first and fifth days were in the ratio 7 : 8, then what is the temperature on the fifth day?', options: ['64 degrees', '62 degrees', '56 degrees', 'None of these'], correctAnswerIndex: 0 },
  { id: 126, exam: 'cgl', subject: 'maths', chapter: 'average', question: 'The average monthly income of P and Q is Rs. 5050. The average monthly income of Q and R is Rs. 6250 and the average monthly income of P and R is Rs. 5200. The monthly income of P is:', options: ['3500', '4000', '4050', '5000'], correctAnswerIndex: 1 },
  { id: 127, exam: 'chsl', subject: 'maths', chapter: 'average', question: 'The average age of husband, wife and their child 3 years ago was 27 years and that of wife and the child 5 years ago was 20 years. The present age of the husband is:', options: ['35 years', '40 years', '50 years', 'None of these'], correctAnswerIndex: 1 },
  
  // Maths - Simple & Compound Interest
  { id: 5, exam: 'cgl', subject: 'maths', chapter: 'si-ci', question: 'Simple interest on a certain sum for 2 years at 10% per annum is Rs. 1600. The sum is?', options: ['Rs. 8000', 'Rs. 10000', 'Rs. 4000', 'Rs. 16000'], correctAnswerIndex: 0 },
  { id: 128, exam: 'chsl', subject: 'maths', chapter: 'si-ci', question: 'What will be the compound interest on a sum of Rs. 25,000 after 3 years at the rate of 12% p.a.?', options: ['Rs. 10123.20', 'Rs. 9000', 'Rs. 12000', 'Rs. 9876.80'], correctAnswerIndex: 0 },
  { id: 129, exam: 'mts', subject: 'maths', chapter: 'si-ci', question: 'A sum of money amounts to Rs. 9800 after 5 years and Rs. 12005 after 8 years at the same rate of simple interest. The rate of interest per annum is:', options: ['5%', '8%', '12%', '15%'], correctAnswerIndex: 2 },
  { id: 130, exam: 'cgl', subject: 'maths', chapter: 'si-ci', question: 'The difference between simple and compound interests compounded annually on a certain sum of money for 2 years at 4% per annum is Re. 1. The sum (in Rs.) is:', options: ['625', '630', '640', '650'], correctAnswerIndex: 0 },
  { id: 131, exam: 'chsl', subject: 'maths', chapter: 'si-ci', question: 'A sum of money doubles itself in 7 years at simple interest. In how many years will it become four times?', options: ['14 years', '21 years', '28 years', '35 years'], correctAnswerIndex: 1 },
  { id: 132, exam: 'mts', subject: 'maths', chapter: 'si-ci', question: 'At what rate of compound interest per annum will a sum of Rs. 1200 become Rs. 1348.32 in 2 years?', options: ['6%', '6.5%', '7%', '7.5%'], correctAnswerIndex: 0 },
  { id: 133, exam: 'cgl', subject: 'maths', chapter: 'si-ci', question: 'The compound interest on Rs. 30,000 at 7% per annum is Rs. 4347. The period (in years) is:', options: ['2', '2.5', '3', '4'], correctAnswerIndex: 0 },
  { id: 134, exam: 'chsl', subject: 'maths', chapter: 'si-ci', question: 'A man took a loan from a bank at the rate of 12% p.a. simple interest. After 3 years he had to pay Rs. 5400 interest only for the period. The principal amount borrowed by him was:', options: ['Rs. 2000', 'Rs. 10,000', 'Rs. 15,000', 'Rs. 20,000'], correctAnswerIndex: 2 },
  { id: 135, exam: 'mts', subject: 'maths', chapter: 'si-ci', question: 'A certain sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:', options: ['Rs. 650', 'Rs. 690', 'Rs. 698', 'Rs. 700'], correctAnswerIndex: 2 },
  { id: 136, exam: 'cgl', subject: 'maths', chapter: 'si-ci', question: 'What is the difference between the compound interests on Rs. 5000 for 1.5 years at 4% per annum compounded yearly and half-yearly?', options: ['Rs. 2.04', 'Rs. 3.06', 'Rs. 4.80', 'Rs. 8.30'], correctAnswerIndex: 0 },
  
  // Maths - Discount
  { id: 23, exam: 'mts', subject: 'maths', chapter: 'discount', question: 'A shopkeeper offers a 10% discount and still makes a profit of 26%. What is the cost price if the marked price is Rs. 280?', options: ['Rs. 200', 'Rs. 220', 'Rs. 250', 'Rs. 180'], correctAnswerIndex: 0 },
  { id: 137, exam: 'cgl', subject: 'maths', chapter: 'discount', question: 'The marked price of a shirt is Rs. 940 and the shopkeeper allows a discount of 15%. The selling price of the shirt is:', options: ['Rs. 799', 'Rs. 800', 'Rs. 795', 'Rs. 809'], correctAnswerIndex: 0 },
  { id: 138, exam: 'chsl', subject: 'maths', chapter: 'discount', question: 'A single discount equivalent to a series of discounts of 20%, 10% and 5% is:', options: ['31.6%', '32%', '30%', '31%'], correctAnswerIndex: 0 },
  { id: 139, exam: 'mts', subject: 'maths', chapter: 'discount', question: 'A fan is listed at Rs. 1500 and a discount of 20% is offered on the list price. What additional discount must be offered to the customer to bring the net price to Rs. 1104?', options: ['8%', '10%', '12%', '15%'], correctAnswerIndex: 0 },
  { id: 140, exam: 'cgl', subject: 'maths', chapter: 'discount', question: 'A trader marks his goods at 20% above the cost price. He allows a discount of 10% on the marked price. His gain percent is:', options: ['10%', '8%', '12%', '9%'], correctAnswerIndex: 1 },
  { id: 141, exam: 'chsl', subject: 'maths', chapter: 'discount', question: 'The marked price of an article is 10% higher than the cost price. A discount of 10% is given on the marked price. In this kind of sale, the seller:', options: ['bears no loss, no gain', 'gains 1%', 'loses 1%', 'gains 5%'], correctAnswerIndex: 2 },
  { id: 142, exam: 'mts', subject: 'maths', chapter: 'discount', question: 'To attract more visitors, Zoo authority announces a 20% discount on every ticket which costs 25 paise. For this reason, sale of tickets increases by 28%. Find the percentage of increase in the number of visitors.', options: ['40%', '50%', '60%', 'No change'], correctAnswerIndex: 1 },
  { id: 143, exam: 'cgl', subject: 'maths', chapter: 'discount', question: 'A shopkeeper gives two successive discounts of 10% and 20%. Find the single equivalent discount.', options: ['28%', '30%', '25%', '27%'], correctAnswerIndex: 0 },
  { id: 144, exam: 'chsl', subject: 'maths', chapter: 'discount', question: 'If an article is sold for Rs. 178 at a loss of 11%, what should be its selling price in order to earn a profit of 11%?', options: ['Rs. 222.50', 'Rs. 267', 'Rs. 222', 'Rs. 220'], correctAnswerIndex: 2 },
  { id: 145, exam: 'mts', subject: 'maths', chapter: 'discount', question: 'The price of a chair is marked at Rs. 500. It is sold at two successive discounts of 10% and 10%. The selling price is:', options: ['Rs. 400', 'Rs. 405', 'Rs. 415', 'Rs. 425'], correctAnswerIndex: 1 },

  // Maths - Boat and Stream
  { id: 24, exam: 'cgl', subject: 'maths', chapter: 'boat-stream', question: 'A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream.', options: ['4 hours', '5 hours', '3 hours', '2 hours'], correctAnswerIndex: 0 },
  { id: 146, exam: 'chsl', subject: 'maths', chapter: 'boat-stream', question: 'A boat running downstream covers a distance of 16 km in 2 hours while for covering the same distance upstream, it takes 4 hours. What is the speed of the boat in still water?', options: ['4 km/hr', '6 km/hr', '8 km/hr', 'Data inadequate'], correctAnswerIndex: 1 },
  { id: 147, exam: 'mts', subject: 'maths', chapter: 'boat-stream', question: 'The speed of a boat in still water is 15 km/hr and the rate of current is 3 km/hr. The distance travelled downstream in 12 minutes is:', options: ['3.6 km', '2.4 km', '1.2 km', '1.8 km'], correctAnswerIndex: 0 },
  { id: 148, exam: 'cgl', subject: 'maths', chapter: 'boat-stream', question: 'A boat takes 90 minutes less to travel 36 miles downstream than to travel the same distance upstream. If the speed of the boat in still water is 10 mph, the speed of the stream is:', options: ['2 mph', '2.5 mph', '3 mph', '4 mph'], correctAnswerIndex: 0 },
  { id: 149, exam: 'chsl', subject: 'maths', chapter: 'boat-stream', question: 'A man can row at 5 kmph in still water. If the velocity of current is 1 kmph and it takes him 1 hour to row to a place and come back, how far is the place?', options: ['2.4 km', '2.5 km', '3 km', '3.5 km'], correctAnswerIndex: 0 },
  { id: 150, exam: 'mts', subject: 'maths', chapter: 'boat-stream', question: 'A man rows to a place 48 km distant and back in 14 hours. He finds that he can row 4 km with the stream in the same time as 3 km against the stream. The rate of the stream is:', options: ['1 km/hr', '1.5 km/hr', '2 km/hr', '2.5 km/hr'], correctAnswerIndex: 0 },
  { id: 151, exam: 'cgl', subject: 'maths', chapter: 'boat-stream', question: 'A boat covers a certain distance downstream in 1 hour, while it comes back in 1.5 hours. If the speed of the stream be 3 kmph, what is the speed of the boat in still water?', options: ['12 kmph', '13 kmph', '14 kmph', '15 kmph'], correctAnswerIndex: 3 },
  { id: 152, exam: 'chsl', subject: 'maths', chapter: 'boat-stream', question: 'A man can row three-quarters of a kilometre against the stream in 11.25 minutes and returns in 7.5 minutes. The speed of the man in still water is:', options: ['4 km/hr', '5 km/hr', '6 km/hr', '7 km/hr'], correctAnswerIndex: 1 },
  { id: 153, exam: 'mts', subject: 'maths', chapter: 'boat-stream', question: 'Speed of a boat in standing water is 9 kmph and the speed of the stream is 1.5 kmph. A man rows to a place at a distance of 105 km and comes back to the starting point. The total time taken by him is:', options: ['16 hours', '18 hours', '20 hours', '24 hours'], correctAnswerIndex: 3 },
  { id: 154, exam: 'cgl', subject: 'maths', chapter: 'boat-stream', question: 'The speed of a boat in still water is 10 km/hr. If it can travel 26 km downstream and 14 km upstream in the same time, the speed of the stream is:', options: ['2 km/hr', '2.5 km/hr', '3 km/hr', '4 km/hr'], correctAnswerIndex: 2 },
  
  // Maths - Data Interpretation
  { id: 25, exam: 'chsl', subject: 'maths', chapter: 'di', question: 'The pie chart shows the percentage of students in different classes. If total students are 1000, how many are in class 10? (Assume Class 10 is 25%)', options: ['250', '300', '200', '350'], correctAnswerIndex: 0 },
  { id: 155, exam: 'cgl', subject: 'maths', chapter: 'di', question: 'Bar chart shows sales of books (in thousand numbers) from six branches of a publishing company during two consecutive years 2000 and 2001. If B1 sales in 2000 was 80 and 2001 was 105, what is the ratio of sales?', options: ['16:21', '15:19', '14:23', '12:17'], correctAnswerIndex: 0 },
  { id: 156, exam: 'mts', subject: 'maths', chapter: 'di', question: 'Based on the bar chart, what is the total sales of branch B6 for both years? (B6 sales: 70 in 2000, 80 in 2001)', options: ['150', '160', '140', '170'], correctAnswerIndex: 0 },
  { id: 157, exam: 'chsl', subject: 'maths', chapter: 'di', question: 'A pie chart shows a company\'s expenditure. If 15% is spent on \'Raw Material\', and the total expenditure is 1,000,000, how much is spent on Raw Material?', options: ['150,000', '100,000', '200,000', '125,000'], correctAnswerIndex: 0 },
  { id: 158, exam: 'cgl', subject: 'maths', chapter: 'di', question: 'From the given line graph showing runs scored by two batsmen, what is the average run of Batsman A over all matches? (Scores: 50, 65, 40, 70, 90)', options: ['63', '65', '60', '68'], correctAnswerIndex: 0 },
  { id: 159, exam: 'mts', subject: 'maths', chapter: 'di', question: 'The table shows the number of candidates appeared and qualified in a competitive examination from different states. Which state has the maximum percentage of qualified candidates? (State A: App-5200, Q-720; State B: App-7500, Q-840)', options: ['State A', 'State B', 'Both are equal', 'Cannot be determined'], correctAnswerIndex: 0 },
  { id: 160, exam: 'chsl', subject: 'maths', chapter: 'di', question: 'In a pie chart representing student population, the central angle for the \'Science\' stream is 120 degrees. What is the percentage of students in the Science stream?', options: ['33.33%', '30%', '40%', '35%'], correctAnswerIndex: 0 },
  { id: 161, exam: 'cgl', subject: 'maths', chapter: 'di', question: 'The line graph shows the production of a company (in tonnes) over 6 years. What is the percentage increase in production from year 2012 to 2013? (2012: 25 tonnes, 2013: 40 tonnes)', options: ['60%', '50%', '55%', '65%'], correctAnswerIndex: 0 },
  { id: 162, exam: 'mts', subject: 'maths', chapter: 'di', question: 'From the table showing monthly expenditure of a family, what is the ratio of expenditure on Food to Savings? (Food: 4000, Savings: 1500)', options: ['8:3', '3:8', '4:1', '1:4'], correctAnswerIndex: 0 },
  { id: 163, exam: 'chsl', subject: 'maths', chapter: 'di', question: 'The bar chart shows the foreign exchange reserves of a country. The reserves in 1997-98 were how many times that in 1994-95? (1997-98: 5040, 1994-95: 3360)', options: ['1.5', '2', '2.5', '1.2'], correctAnswerIndex: 0 },

  // General Studies
  { id: 6, exam: 'cgl', subject: 'gs', question: 'Who is known as the "Father of the Indian Constitution"?', options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Dr. B.R. Ambedkar', 'Sardar Patel'], correctAnswerIndex: 2 },
  { id: 7, exam: 'chsl', subject: 'gs', question: 'The metal whose salts are sensitive to light is?', options: ['Zinc', 'Silver', 'Copper', 'Aluminum'], correctAnswerIndex: 1 },
  { id: 8, exam: 'mts', subject: 'gs', question: 'Which is the largest river basin in India?', options: ['Godavari Basin', 'Narmada Basin', 'Yamuna Basin', 'Ganga Basin'], correctAnswerIndex: 3 },
  { id: 9, exam: 'cgl', subject: 'gs', question: 'Which vitamin is obtained from Sun rays?', options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'], correctAnswerIndex: 2 },
  { id: 10, exam: 'chsl', subject: 'gs', question: 'What is the capital of Japan?', options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'], correctAnswerIndex: 2 },
  
  // Reasoning
  { id: 11, exam: 'cgl', subject: 'reasoning', question: 'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?', options: ['(1/3)', '(1/8)', '(2/8)', '(1/16)'], correctAnswerIndex: 1 },
  { id: 12, exam: 'chsl', subject: 'reasoning', question: 'If FRIEND is coded as HUMJTK, how is CANDLE written in that code?', options: ['EDRIRL', 'DCQGKP', 'ESJFME', 'FYOBOC'], correctAnswerIndex: 0 },
  { id: 13, exam: 'mts', subject: 'reasoning', question: 'Find the odd one out: Car, Bus, Scooter, Aeroplane.', options: ['Car', 'Bus', 'Scooter', 'Aeroplane'], correctAnswerIndex: 3 },
  { id: 14, exam: 'cgl', subject: 'reasoning', question: 'A is B\'s sister. C is B\'s mother. D is C\'s father. E is D\'s mother. Then, how is A related to D?', options: ['Grandfather', 'Grandmother', 'Daughter', 'Granddaughter'], correctAnswerIndex: 3 },
  { id: 15, exam: 'mts', subject: 'reasoning', question: 'Which word does NOT belong with the others?', options: ['inch', 'ounce', 'centimeter', 'yard'], correctAnswerIndex: 1 },

  // English
  { id: 16, exam: 'cgl', subject: 'english', question: 'Choose the word which is the exact OPPOSITE of the word: "Malice"', options: ['Goodwill', 'Envy', 'Spite', 'Hate'], correctAnswerIndex: 0 },
  { id: 17, exam: 'chsl', subject: 'english', question: 'Find the correctly spelt word.', options: ['Embarass', 'Embarrass', 'Embaras', 'Emberrass'], correctAnswerIndex: 1 },
  { id: 18, exam: 'mts', subject: 'english', question: 'The idiom "A hot potato" means:', options: ['A delicious dish', 'A very hot food item', 'A controversial issue', 'A useless person'], correctAnswerIndex: 2 },
  { id: 19, exam: 'cgl', subject: 'english', question: 'Select the synonym of "Abundant".', options: ['Scarce', 'Plentiful', 'Few', 'Limited'], correctAnswerIndex: 1 },
  { id: 20, exam: 'chsl', subject: 'english', question: 'Fill in the blank: He is afraid ___ the dog.', options: ['from', 'with', 'of', 'at'], correctAnswerIndex: 2 },
];


export const getQuestions = (examId: string, subjectId: string, chapterId?: string): Question[] => {
    if (subjectId === 'maths' && chapterId) {
        return allQuestions.filter(q => q.subject === subjectId && q.chapter === chapterId).slice(0, 10);
    }
  return allQuestions.filter(q => q.exam === examId && q.subject === subjectId);
};

export const getQuestionById = (id: number): Question | undefined => {
  return allQuestions.find(q => q.id === id);
}

export const getExamById = (id: string) => exams.find(e => e.id === id);
export const getSubjectById = (id: string) => subjects.find(s => s.id === id);
export const getChapterById = (subjectId: string, chapterId: string) => {
    if (subjectId !== 'maths') return undefined;
    return mathsChapters.find(c => c.id === chapterId);
};
