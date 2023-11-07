import { QuestionType } from '@/types/quiz.types';

export const disciplines = [
  {
    type: QuestionType.NONE,
    title: 'Misturado',
    icon: 'none',
  },
  {
    type: QuestionType.SCIENCE,
    title: 'Ciência',
    icon: 'science',
  },
  {
    type: QuestionType.MATH,
    title: 'Matemática',
    icon: 'math',
  },

  {
    type: QuestionType.LOGIC,
    title: 'Lógica',
    icon: 'logic',
  },
  {
    type: QuestionType.PORTUGUESE,
    title: 'Português',
    icon: 'portuguese',
  },
];
