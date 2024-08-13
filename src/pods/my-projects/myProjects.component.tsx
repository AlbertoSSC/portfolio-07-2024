import { WorkProjectsShowcase } from './components';
import { StudiesProjectsShowcase } from './components/studies/studies-projects.showcase';
import {
  AnimationListOptions,
  ElementOrSelector,
  MotionKeyframesDefinition,
  scroll,
  timeline,
} from 'motion';

import globalStyles from '@/styles/global-styles.module.css';
import styles from './projects.module.css';
import React from 'react';

export const MyProjectsComponent: React.FC = () => {
  React.useEffect(() => {
    const screenWidth = window.innerWidth;
    const targetValue = screenWidth < 1200 ? -screenWidth : -1200;

    if (screenWidth < 576) {
      return;
    }

    const sequence: [
      ElementOrSelector,
      MotionKeyframesDefinition,
      AnimationListOptions
    ][] = [
      [
        '#projects-container',
        { x: [0, targetValue] },
        { at: 0.8, easing: 'ease-in-out', duration: 0.4 },
      ],
      [
        '#projects-container',
        { x: [targetValue, null] },
        { easing: 'ease-in-out', duration: 0.4 },
      ],
    ];

    scroll(timeline(sequence, {endDelay: 0.5}));
  }, []);

  return (
    <article
      className={`${globalStyles.componentContainer} ${styles.workProjectsContainer} ${styles.height}`}
    >
      <div
        id="toProgress"
        className={`${globalStyles.componentContainer} ${styles.sticky}`}
      >
        <header className={globalStyles.sectionTitleHeader}>
          <h3 className={globalStyles.sectionTitleShape}>PROJECTS</h3>
        </header>

        <main className={`${styles.projectsMain}`}>
          <div id="projects-container" className={styles.flex}>
            <section className={`${globalStyles.centerContent} ${styles.flex}`}>
              <div className={styles.projectsDivider}>
                <h4 className={globalStyles.skewItalic}>Professional work</h4>
                <div className={styles.divider}></div>
              </div>
              <WorkProjectsShowcase />
            </section>

            <section className={`${globalStyles.centerContent} ${styles.flex}`}>
              <div className={styles.projectsDivider}>
                <h4 className={globalStyles.skewItalic}>In trainig</h4>
                <div className={styles.divider}></div>
              </div>
              <StudiesProjectsShowcase />
            </section>
          </div>
        </main>
      </div>
    </article>
  );
};
