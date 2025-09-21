"use client";

import { useState, useEffect, useCallback } from 'react';
import { Attempt, UserAnswer } from '@/lib/types';
import { getQuestionById, getExamById, getSubjectById } from '@/lib/data';

const STORE_KEY = 'examPrepAceAttempts';

const calculateScore = (answers: UserAnswer[]) => {
  let correct = 0;
  let incorrect = 0;
  let attempted = 0;

  answers.forEach(answer => {
    if (answer.selectedOption !== null) {
      attempted++;
      const question = getQuestionById(answer.questionId);
      if (question) {
        if (answer.selectedOption === question.correctAnswerIndex) {
          correct++;
        } else {
          incorrect++;
        }
      }
    }
  });

  const score = correct * 2 - incorrect * 0.5;
  const totalQuestions = answers.length;
  const totalScore = totalQuestions * 2;
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
  
  const addAttempt = useCallback((examId: string, subjectId: string, answers: UserAnswer[]): string => {
    const scoreDetails = calculateScore(answers);
    const exam = getExamById(examId);
    const subject = getSubjectById(subjectId);

    const newAttempt: Attempt = {
      id: `${Date.now()}-${examId}-${subjectId}`,
      examId,
      subjectId,
      examName: exam?.name || 'Unknown Exam',
      subjectName: subject?.name || 'Unknown Subject',
      date: Date.now(),
      scoreDetails,
      answers,
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

  const clearHistory = useCallback(() => {
    saveAttempts([]);
  }, [saveAttempts]);

  return {
    attempts,
    isInitialized,
    addAttempt,
    getAttemptById,
    clearHistory
  };
}
