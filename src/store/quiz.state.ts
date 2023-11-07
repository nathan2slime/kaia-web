import { proxy } from 'valtio';

import { QuestionType, QuizState } from '@/types/quiz.types';

export const proxyQuizState = proxy<QuizState>({
  points: 0,
  type: QuestionType.NONE,
  started: false,
  elapsed: 2,
  question: 0,
  voice: false,
});
