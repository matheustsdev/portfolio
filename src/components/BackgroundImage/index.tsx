import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface BackgroundImageProps {
  children: ReactNode;
  imgUrl: string;
}

export function BackgroundImage({ children, imgUrl }: BackgroundImageProps) {
  return (
    <div className={styles.imgContainer} style={{ backgroundImage: `url(${imgUrl})` }}>
      <div className={styles.imgContent}>{children}</div>
    </div>
  );
}
