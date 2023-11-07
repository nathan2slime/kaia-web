import { ButtonProps } from './model';
import { styles } from './styles';

export const Button = ({
  children,
  disabled,
  className,
  variant,
  type = 'button',
  ...props
}: ButtonProps) => {
  const style = styles({ disabled, variant });

  return (
    <button className={style.wrapper({ className })} {...props}>
      {children}
    </button>
  );
};
