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
          Sou um estudante de Ciência da Computação no IFCE de Maracanaú e possuo experiência com desenvolvimento usando
          HTML/CSS/JS, ReactJs/NextJs, NodeJs+Express, Python. <br /> <br />
          Desenvolvi diversas habilidades nos meus 24 anos, como as citadas abaixo, e tenho o objetivo evoluir muito
          mais na área de tecnologia. Para isso sigo meus estudos na faculdade, no curso ofertado pela Rocketseat e por
          diversos outros meios em que eu possa adquirir conhecimento, como: vídeos, livros e podcasts.
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
