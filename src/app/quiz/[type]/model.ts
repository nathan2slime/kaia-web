import { QuestionType } from '@/types/quiz.types';

export type QuizParams = {
  type: QuestionType;
};

export type QuizProps = {
  params: QuizParams;
};
