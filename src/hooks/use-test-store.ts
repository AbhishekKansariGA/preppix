
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Attempt, UserAnswer, Question } from '@/lib/types';
import { getExamById, getSubjectById, getChapterById } from '@/lib/data';

const STORE_KEY = 'examPrepAceAttempts';

const calculateScore = (answers: UserAnswer[], allQuestions: Question[], subjectId: string) => {
  let correct = 0;
  let incorrect = 0;
  let attempted = 0;

  answers.forEach(answer => {
    if (answer.selectedOption !== null) {
      attempted++;
      // Find the question in the provided list of all questions for the attempt
      const question = allQuestions.find(q => q.id === answer.questionId);
      if (question) {
        if (answer.selectedOption === question.correctAnswerIndex) {
          correct++;
        } else {
          incorrect++;
        }
      }
    }
  });
  
  const totalQuestions = allQuestions.length > 0 ? allQuestions.length : answers.length;
  
  let score = 0;
  let totalScore = 0;

  if (subjectId === 'maths') {
    // Maths: +2 for correct, 0 for incorrect
    score = correct * 2;
    totalScore = totalQuestions * 2;
  } else {
    // Other subjects: +2 for correct, -0.5 for incorrect
    score = correct * 2 - incorrect * 0.5;
    totalScore = totalQuestions * 2;
  }
  
  const accuracy = attempted > 0 ? (correct / attempted) * 100 : 0;

  return { totalQuestions, attempted, correct, incorrect, score, totalScore, accuracy };
};

export function useTestStore() {
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedAttempts = localStorage.getItem(STORE_KEY);
      if (storedAttempts) {
        setAttempts(JSON.parse(storedAttempts));
      }
    } catch (error) {
      console.error("Failed to parse attempts from localStorage", error);
    }
    setIsInitialized(true);
  }, []);

  const saveAttempts = useCallback((updatedAttempts: Attempt[]) => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(updatedAttempts));
      setAttempts(updatedAttempts);
    } catch (error) {
      console.error("Failed to save attempts to localStorage", error);
    }
  }, []);
  
  const addAttempt = useCallback((examId: string, subjectId: string, answers: UserAnswer[], chapterId?: string, allQuestions: Question[] = []): string => {
    // Filter out dummy answers before calculating score
    const validAnswers = answers.filter(a => a.questionId > 0);
    const validQuestions = allQuestions.filter(q => validAnswers.some(a => a.questionId === q.id));

    const scoreDetails = calculateScore(validAnswers, validQuestions, subjectId);
    const exam = getExamById(examId);
    const subject = getSubjectById(subjectId);
    const chapter = chapterId ? getChapterById(subjectId, chapterId) : undefined;

    const newAttempt: Attempt = {
      id: `${examId}-${subjectId}-${chapterId || 'all'}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      examId,
      subjectId,
      examName: exam?.name || 'Unknown Exam',
      subjectName: subject?.name || 'Unknown Subject',
      date: Date.now(),
      scoreDetails,
      answers: validAnswers,
      questions: validQuestions, // Store the actual questions with the attempt
      chapterId,
      chapterName: chapter?.name
    };
    
    setAttempts(prevAttempts => {
        const updatedAttempts = [newAttempt, ...prevAttempts];
        saveAttempts(updatedAttempts);
        return updatedAttempts;
    });

    return newAttempt.id;
  }, [saveAttempts]);

  const getAttemptById = useCallback((id: string): Attempt | undefined => {
    return attempts.find(attempt => attempt.id === id);
  }, [attempts]);

  return {
    attempts,
    isInitialized,
    addAttempt,
    getAttemptById,
  };
}
