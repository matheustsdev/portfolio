import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  category?: 'primary' | 'secondary' | 'tertiary';
}

export function Button({ category = 'primary', children, ...rest }: ButtonProps) {
  if (category === 'primary') {
    return (
      <a className={styles.primaryBtn} {...rest}>
        {children}
      </a>
    );
  } else if (category === 'secondary') {
    return (
      <a className={styles.secondaryBtn} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a className={styles.tertiaryBtn} {...rest}>
      {children}
    </a>
  );
}
