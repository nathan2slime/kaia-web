import { useEffect, useState } from 'react';
import { VariantProps } from 'tailwind-variants';

import { AnswerProps } from './model';
import { styles } from './styles';

export const Answer = ({ onAnswer, correct, title }: AnswerProps) => {
  const [color, setColor] =
    useState<VariantProps<typeof styles>['color']>('default');

  const onAnswered = () => {
    correct ? setColor('success') : setColor('wrong');

    const timeout = setTimeout(() => {
      onAnswer();
    }, 400);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    setColor('default');
  }, [title]);

  return (
    <div className={styles({ color }).answer()} onClick={onAnswered}>
      {title}
    </div>
  );
};
