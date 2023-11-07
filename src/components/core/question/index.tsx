'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { useSnapshot } from 'valtio';

import { Progress } from '@/components/core/progress';
import { Answer } from '@/components/core/answer';
import { Modal } from '@/components/core/modal';

import { proxyQuizState } from '@/store/quiz.state';
import { createQuizService } from '@/services/quiz.services';
import { proxyAuthState } from '@/store/auth.state';

import { styles } from './styles';
import { QuestionProps } from './model';

export const Question = ({ questions }: QuestionProps) => {
  const [modal, setModal] = useState(false);
  const [answered, setAnswered] = useState<boolean>(false);
  const router = useRouter();
  const ref = useRef(null);

  const style = styles();

  const { elapsed, points, voice, question } = useSnapshot(proxyQuizState);
  const auth = useSnapshot(proxyAuthState);

  useEffect(() => {
    const interval = setInterval(() => proxyQuizState.elapsed++, 1000);

    return () => {
      clearInterval(interval);
      proxyQuizState.elapsed = 0;
      proxyQuizState.points = 0;
      proxyQuizState.question = 0;
      proxyQuizState.started = false;
    };
  }, []);

  const data = questions[question];
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  const setSound = (el: HTMLAudioElement, sound: string) =>
    (el.src = '/assets/sounds/' + sound + '.mp3');

  const onAnswer = async (correct: boolean) => {
    voice && onVoice(correct ? 'Parabéns, você acertou !' : 'Você errou !');

    setAnswered(true);

    const audio = ref.current as unknown as HTMLAudioElement;
    setSound(audio, correct ? 'check' : 'fail');
    audio.play();

    if (correct) {
      proxyQuizState.points += data.points;
    }

    if (question + 1 == questions.length && auth.data) {
      const pts = correct ? data.points + points : points;

      const res = await createQuizService({
        points: pts,
        time: elapsed,
        type: data.type,
        user_id: auth.data.user.id,
      });

      if (res) {
        const { data } = res;

        proxyQuizState.points = data.points;
        setModal(true);
      }
    } else {
      setAnswered(false);
      proxyQuizState.question++;
    }
  };

  const onVoice = (title: string) => {
    const speak = new SpeechSynthesisUtterance(title);
    speak.lang = 'pt-BR';

    speechSynthesis.speak(speak);
  };

  const onSpeakQuestion = () => {
    onVoice(data.title);
    data.answers.forEach(({ title }) => onVoice(title));
  };

  useEffect(() => {
    voice && onSpeakQuestion();
  }, [data]);

  return (
    <div className={style.wrapper()}>
      <Progress value={(100 * question) / questions.length} />

      <Modal open={modal} onNathClose={() => router.push('/')}>
        <div className={style.modal()}>
          <Image src="/assets/svgs/medal.svg" alt="Medalha" width={90} height={90} />

          <h1 className={style.thanks()}>Parabéns</h1>

          <p className={style.points()}>Você ganhou {points} pontos</p>
        </div>
      </Modal>

      <div className={style.timer()}>
        <p className={style.steps()}>
          <span className={style.step()}>{question}</span>/{questions.length}
        </p>

        <p className={style.steps()}>
          <span className={style.step()}>
            {String(minutes).padStart(2, '0')}
          </span>
          :{String(seconds).padStart(2, '0')}
        </p>
      </div>

      <h2 className={style.title()}>{data.title}</h2>

      <div className={styles({ answered: !!answered }).answers()}>
        {data.answers.map(({ title, correct }) => (
          <Answer
            title={title}
            correct={correct}
            onAnswer={() => onAnswer(correct)}
          />
        ))}
      </div>

      <audio ref={ref} />
    </div>
  );
};
