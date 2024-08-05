import { WorkProjectsShowcase } from './components';

import globalStyles from '@/styles/global-styles.module.css';
import styles from './projects.module.css';

export const MyProjectsComponent: React.FC = () => {
  return (
    <section
      className={`${globalStyles.componentContainer} ${styles.workProjectsContainer}`}
    >
      <header className={globalStyles.sectionTitleHeader}>
        <h3 className={globalStyles.sectionTitleShape}>PROJECTS</h3>
      </header>

      <div className={styles.projectsDivider}>
        <h4 className={globalStyles.skewItalic}>Professional work</h4>
        <div className={styles.divider}></div>
      </div>

      <main className={`${globalStyles.componentSize} ${styles.projectsMain}`}>
        <div className={globalStyles.centerContent}>
          <WorkProjectsShowcase />
        </div>
      </main>
    </section>
  );
};
