import Link from 'next/link';
import styles from './styles.module.scss';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="#">HOME</Link>
        <Link href="#about">SOBRE</Link>
        <Link href="#">PROJETOS</Link>
        <Link href="#">CONTATO</Link>
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
