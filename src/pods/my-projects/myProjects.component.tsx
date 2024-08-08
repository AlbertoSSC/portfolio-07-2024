import { WorkProjectsShowcase } from './components';
// import { StudiesProjectsShowcase } from './components/studies/studies-projects.showcase';

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

      <main className={`${globalStyles.componentSize} ${styles.projectsMain}`}>
        <div className={globalStyles.centerContent}>
          <section className={globalStyles.centerContent}>
            <div className={styles.projectsDivider}>
              <h4 className={globalStyles.skewItalic}>Professional work</h4>
              <div className={styles.divider}></div>
            </div>
            <WorkProjectsShowcase />
          </section>

          {/* <section className={globalStyles.centerContent}>
            <div className={styles.projectsDivider}>
              <h4 className={globalStyles.skewItalic}>In trainig</h4>
              <div className={styles.divider}></div>
            </div>
            <StudiesProjectsShowcase />
          </section> */}
        </div>
      </main>
    </section>
  );
};
