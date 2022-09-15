import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

import styles from './styles.module.scss';
import { useState } from 'react';

export function Mobile() {
  const [isMenuOpen, setIsOpenMenu] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  function handleToogleMenu() {
    setIsOpenMenu(!isMenuOpen);
    setIsFirstRender(false);
  }

  return (
    <header className={styles.mobileHeader}>
      <FiMenu onClick={() => handleToogleMenu()} />

      <nav className={`${styles.mobileMenu} ${!isFirstRender && (isMenuOpen ? styles.slideIn : styles.slideOut)}`}>
        <Link href="#">
          <p onClick={() => handleToogleMenu()}>HOME</p>
        </Link>
        <Link href="#about">
          <p onClick={() => handleToogleMenu()}>SOBRE</p>
        </Link>
        <Link href="#projects">
          <p onClick={() => handleToogleMenu()}>PROJETOS</p>
        </Link>
        <Link href="#contact">
          <p onClick={() => handleToogleMenu()}>CONTATO</p>
        </Link>
        <hr />
        <a href="https://github.com/matheustsdev" target="_blank" rel="noopener noreferrer">
          GITHUB
        </a>
        <a href="mailto:matheustsdev@gmail.com" target="_blank" rel="noopener noreferrer">
          EMAIL
        </a>
        <a href="https://www.linkedin.com/in/matheustsdev/" target="_blank" rel="noopener noreferrer">
          LINKEDIN
        </a>
        <a href="https://www.wa.link/39vawy" target="_blank" rel="noopener noreferrer">
          WHATSAPP
        </a>
      </nav>
    </header>
  );
}
