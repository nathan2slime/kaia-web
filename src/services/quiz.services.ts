import { api } from '@/api';
import { CreateQuiz, Question, QuizType } from '@/types/quiz.types';

export const getQuizService = (type: string) =>
  api.post<Question[]>('/get_quiz', { type });

export const createQuizService = (data: CreateQuiz) =>
  api.post<QuizType>('/create_quiz', data);
