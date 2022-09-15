import Link from 'next/link';
import styles from './styles.module.scss';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { useEffect, useState } from 'react';

export function Desktop() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setPosition(window.scrollY);
    });
  }, [position]);

  return (
    <header className={styles.desktopHeader}>
      <nav>
        <Link href="#" className={position >= 0 && position < 615 ? styles.active : styles.desactive}>
          HOME
        </Link>
        <Link href="#about">SOBRE</Link>
        <Link href="#projects">PROJETOS</Link>
        <Link href="#contact">CONTATO</Link>
      </nav>
      <nav>
        <a href="https://github.com/matheustsdev" target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
        <a href="mailto:matheustsdev@gmail.com" target="_blank" rel="noopener noreferrer">
          <FiMail />
        </a>
        <a href="https://www.linkedin.com/in/matheustsdev/" target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
        </a>
        <a href="https://www.wa.link/39vawy" target="_blank" rel="noopener noreferrer">
          <BsWhatsapp />
        </a>
      </nav>
    </header>
  );
}
