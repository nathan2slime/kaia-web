export enum QuestionType {
  MATH = 'MATH',
  PORTUGUESE = 'PORTUGUESE',
  SCIENCE = 'SCIENCE',
  LOGIC = 'LOGIC',
  NONE = 'NONE',
}

export type CreateQuiz = {
  user_id: number;
  type: QuestionType | string;
  points: number;
  time: number;
};

export type QuizType = {
  user_id: number;
  time: number;
  created_at: string;
  updated_at?: string;
  id: number;
  type: QuestionType;
  points: number;
  avatar?: string;
  username?: string;
  deleted_at?: string;
};

export type Answer = {
  correct: boolean;
  id: number;
  deleted_at?: string;
  created_at: string;
  title: string;
  question_id: number;
  updated_at?: string;
};

export type Question = {
  type: string;
  thumb?: string;
  tip: string;
  created_at: string;
  updated_at?: string;
  title: string;
  points: number;
  id: number;
  deleted_at?: string;
  answers: Answer[];
};

export type QuizState = {
  elapsed: number;
  points: number;
  type: QuestionType;
  started: boolean;
  voice: boolean;
  question: number;
};
