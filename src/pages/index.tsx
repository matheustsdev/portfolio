import { AboutCard } from '../components/AboutCard';
import { BackgroundImage } from '../components/BackgroundImage';
import { BasicProjectCard } from '../components/BasicProjectCard';
import { Button } from '../components/Button';
import { Header } from '../components/Header';

import starredProjects from '../../public/data/starredProjects.json';

import styles from './home.module.scss';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.homeSections}>
      <Header />
      <BackgroundImage imgUrl="/img/hero.jpg">
        <section id="home" className={styles.heroSection}>
          <h1>Matheus Teixeira</h1>
          <h2>Desenvolvedor Frontend</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis nibh vitae ultrices varius. Curabitur
            sit amet eleifend felis. Pellentesque ipsum lacus, semper vitae dui eget, ornare rhoncus nulla. Cras
            scelerisque ante ac ex convallis lacinia. Nam convallis nulla eget cursus maximus. Nam fringilla, ex eget
            pharetra vehicula, felis massa rhoncus augue, vel accumsan arcu lacus vel felis. Fusce blandit quis libero
            id luctus.
          </p>
          <div>
            <Button>Sobre mim</Button>
            <Button category="tertiary">Contate-me</Button>
          </div>
        </section>
      </BackgroundImage>
      <section id="about" className={styles.aboutSection}>
        <h1>SOBRE MIM</h1>
        <AboutCard />
        <Button category="secondary">Saiba mais</Button>
      </section>
      <section id="projects" className={styles.projectsSection}>
        <h1>PROJETOS</h1>
        <div className={styles.projectsGrid}>
          {starredProjects.map((project) => (
            <BasicProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Button category="secondary">Ver mais projetos</Button>
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
