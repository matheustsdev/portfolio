import Image from 'next/image';
import styles from './styles.module.scss';

export function AboutCard() {
  return (
    <div className={styles.aboutCard}>
      <div className={styles.imgContainer}>
        <Image src="/img/profile.jpg" alt="Profile photo of me" layout="fill" />
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.personalInfos}>
          <div>
            <div>
              <span>Nome:</span>
              <span> Matheus Teixeira da Silva</span>
            </div>
            <div>
              <span>Telefone:</span>
              <span> (85) 989764833</span>
            </div>
          </div>
          <div>
            <div>
              <span>Área:</span>
              <span> Desenvolvedor Frontend</span>
            </div>
            <div>
              <span>Email:</span>
              <span> matheusts.dev@gmail.com</span>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis nibh vitae ultrices varius. Curabitur
          sit amet eleifend felis. Pellentesque ipsum lacus, semper vitae dui eget, ornare rhoncus nulla. Cras
          scelerisque ante ac ex convallis lacinia. Nam convallis nulla eget cursus maximus. Nam fringilla, ex eget
          pharetra vehicula, felis massa rhoncus augue, vel accumsan arcu lacus vel felis. Fusce blandit quis libero id
          luctus.
        </p>
        <div className={styles.skills}>
          <h3>Habilidades</h3>
          <div>
            <ul>
              <li>React intermediário</li>
              <li>React Native básico</li>
              <li>Node básico</li>
              <li>Javascript intermediário</li>
              <li>Typescript básico</li>
            </ul>
            <ul>
              <li>Adaptabilidade</li>
              <li>Autodidata</li>
              <li>Trabalho em equipe</li>
              <li>Proatividade</li>
              <li>Cultura de feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
