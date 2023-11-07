import { ProgressProps } from './model';
import { styles } from './styles';

export const Progress = ({ value }: ProgressProps) => {
  const style = styles();

  const props = {
    maxWidth: value + '%',
  };

  return (
    <div className={style.wrapper()}>
      <div style={props} className={style.bar()} />
    </div>
  );
};
