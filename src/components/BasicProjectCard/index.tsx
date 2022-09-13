import { useRouter } from 'next/router';
import { FiChevronRight } from 'react-icons/fi';

import { Button } from '../Button';
import styles from './styles.module.scss';

interface ProjectsProps {
  id: string;
  name: string;
  tecnologies: string;
  description: string;
  href: {
    website: string;
    repository: string;
  };
  status: string;
}

interface BasicProjectCardProps {
  project: ProjectsProps;
}

export function BasicProjectCard({ project }: BasicProjectCardProps) {
  const router = useRouter();

  function goToWebsite() {
    router.push(project.href.website);
  }

  return (
    <div className={styles.cardContainer}>
      <div>
        <div onClick={goToWebsite}>
          <h2>{project.name}</h2>
          <h3>{project.tecnologies}</h3>
        </div>
        <p>{project.description}</p>
        <Button category="tertiary" href={project.href.repository}>
          Repositório
        </Button>
      </div>
      <div>
        <FiChevronRight onClick={goToWebsite} />
      </div>
    </div>
  );
}
