import styles from './styles.module.scss';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h1> CONTATOS </h1>
      <div>
        <div>
          <FiGithub />
          <span>Github: </span>
          <p> matheustsdev</p>
        </div>
        <div>
          <FiMail />
          <span>Email:</span>
          <p> matheustsdev@gmail</p>
        </div>
        <div>
          <FiLinkedin />
          <span>Linkedin:</span>
          <p> matheustsdev</p>
        </div>
        <div>
          <BsWhatsapp />
          <span>Whatsapp:</span>
          <p> (85) 98976-4833</p>
        </div>
      </div>
      <p>Desenvolvido por Matheus Teixeira</p>
    </div>
  );
}
