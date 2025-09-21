export type Exam = {
  id: string;
  name: string;
  description: string;
};

export type Subject = {
  id: string;
  name: string;
  icon: React.ElementType;
};

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  subject: string;
  exam: string;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: number | null;
}

export type ScoreDetails = {
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  score: number;
  totalScore: number;
  accuracy: number;
};

export interface Attempt {
  id: string;
  examId: string;
  subjectId: string;
  examName: string;
  subjectName: string;
  date: number;
  scoreDetails: ScoreDetails;
  answers: UserAnswer[];
}
