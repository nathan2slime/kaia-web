import { NextPage } from 'next';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

import { Question } from '@/components/core/question';

import { getQuizService } from '@/services/quiz.services';
import { QuestionType } from '@/types/quiz.types';
import { disciplines } from '@/app/data';

import { QuizProps } from './model';
import { styles } from './styles';

const Quiz: NextPage<QuizProps> = async ({ params }) => {
  const style = styles();

  const type = params.type.toUpperCase();
  const { data } = await getQuizService(type);

  const discipline = disciplines.find(discipline => type == discipline.type);

  return (
    <div className={style.wrapper()}>
      <div className={style.header()}>
        <Link href="/">
          <ChevronLeft width={30} height={30} className={style.back()} />
        </Link>

        <h1 className={style.title()}>
          {type == QuestionType.NONE ? 'Quiz' : 'Quiz de'}&nbsp;
          {discipline && discipline.title}
        </h1>

        <div />
      </div>

      <Question questions={data} />

    </div>
  );
};

export default Quiz;
