import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category?: 'primary' | 'secondary' | 'tertiary';
}

export function Button({ category = 'primary', children, ...rest }: ButtonProps) {
  if (category === 'primary') {
    return <a className={styles.primaryBtn}>{children}</a>;
  } else if (category === 'secondary') {
    return <a className={styles.secondaryBtn}>{children}</a>;
  }

  return <a className={styles.tertiaryBtn}>{children}</a>;
}
