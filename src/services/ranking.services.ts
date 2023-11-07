import { api } from '@/api';

import { QuizType } from '@/types/quiz.types';

export const getRanking = async () => await api.get<QuizType[]>('/ranking');
