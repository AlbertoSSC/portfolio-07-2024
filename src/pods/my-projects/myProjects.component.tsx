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
        '#work',
        { x: [0, targetValue], opacity: [1, 0] },
        { at: 0.3, easing: 'ease-in-out', duration: 0.1 },
      ],
      [
        '#progress-divider',
        { scaleX: [0, 1] },
        { at: 0.15, easing: 'ease-in-out', duration: 0.3 },
      ],
    
      [
        '#professional-work',
        { opacity: [1, 0], x: [0, -585] },
        { at: 0.3, easing: 'ease-in-out', duration: 0.05 },
      ],
      [
        '#in-training',
        { opacity: [0, 1], x: [585, 0] },
        { at: 0.3, easing: 'ease-in-out', duration: 0.05 },
      ],
      [
        '#studies',
        { x: [0, targetValue], opacity: [0, 1] },
        { at: 0.3, easing: 'ease-in-out', duration: 0.05 },
      ],
      [
        '#work',
        { x: [targetValue, null] },
        { easing: 'ease-in-out', duration: 0.2 },
      ],
    ];

    scroll(timeline(sequence, { duration: 1}));
  }, []);

  return (
    <article
      className={`${globalStyles.componentContainer} ${styles.workProjectsContainer} ${styles.height}`}
    >
      <div className={`${globalStyles.componentContainer} ${styles.sticky}`}>
        <header className={globalStyles.sectionTitleHeader}>
          <h3 className={globalStyles.sectionTitleShape}>PROJECTS</h3>
        </header>

        <div className={styles.projectsDivider}>
          <h4 id="professional-work" className={globalStyles.skewItalic}>
            Professional work
          </h4>
          <h4 id="in-training" className={globalStyles.skewItalic}>
            In trainig
          </h4>
          <div id="progress-divider" className={styles.divider}></div>
          <div className={`${styles.divider} ${styles.divider2}`}></div>
        </div>
        <main className={`${styles.projectsMain}`}>
          <div className={`${styles.flex}`}>
            <section
              id="work"
              className={`${globalStyles.centerContent} ${styles.flex}`}
            >
              <WorkProjectsShowcase />
            </section>

            <section
              id="studies"
              className={`${globalStyles.centerContent} ${styles.flex}`}
            >
              <StudiesProjectsShowcase />
            </section>
          </div>
        </main>
      </div>
    </article>
  );
};
