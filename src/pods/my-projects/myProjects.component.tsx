import React from 'react';

import { useLanguageContext } from '@/core/language.context';
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
import { SectionTagTitle } from '@/common/components/section-Tag-Title';

export const MyProjectsComponent: React.FC = () => {
  const { languageState } = useLanguageContext();

  const initializeAnimations = () => {
    const screenWidth = window.innerWidth;
    const targetValue = screenWidth < 1200 ? -screenWidth : -1200;

    if (screenWidth < 576) {
      const sequence: [
        ElementOrSelector,
        MotionKeyframesDefinition,
        AnimationListOptions
      ][] = [
        [
          '#components-container',
          { display: ['none', 'flex'] },
          { at: 0, duration: 0.1 },
        ],
        ['#projects-tag', { y: [], x: [-200, 0] }, { at: 0, duration: 0.004 }],
        ['#work', { x: [300, 0], opacity: [1] }, { at: '<', duration: 0.006 }],
        [
          '#studies',
          { x: [-300, 0], opacity: [1] },
          { at: '<', duration: 0.01 },
        ],
      ];
      scroll(timeline(sequence, { duration: 0.3 }));

      return;
    }

    const sequence: [
      ElementOrSelector,
      MotionKeyframesDefinition,
      AnimationListOptions
    ][] = [
      ['#components-container', { display: ['none', 'flex'] }, { at: 0.145 }],
      [
        '#projects-tag',
        { y: [1200, 0] },
        { at: 0.08, easing: 'ease-in-out', duration: 0.12 },
      ],
      [
        '#progress-divider',
        { x: [targetValue, 0] },
        { at: 0.1, easing: 'ease-in-out', duration: 0.12 },
      ],
      [
        '#progress-divider',
        { scaleX: [0, 1] },
        { at: 0.15, easing: 'ease-in-out', duration: 0.35 },
      ],
      [
        '#progress-guide',
        { scale: [0, 1] },
        { at: 0.15, easing: 'ease-in-out', duration: 0.07 },
      ],
      [
        '#professional-work',
        { opacity: [0, 1], y: [400, 0] },
        { at: 0.15, easing: 'ease-in-out', duration: 0.05 },
      ],
      [
        '#work',
        { x: [-targetValue, 0], opacity: [0, 1] },
        { at: 0.12, easing: 'ease-in-out', duration: 0.1 },
      ],
      [
        '#work',
        { x: [0, targetValue], opacity: [1, 0] },
        { at: 0.3, easing: 'ease-in-out', duration: 0.1 },
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
        { x: [0, '-100%'], opacity: [0, 1] },
        { at: 0.3, easing: 'ease-in-out', duration: 0.05 },
      ],
      [
        '#work',
        { x: [targetValue, null] },
        { easing: 'ease-in-out', duration: 0.2 },
      ],
    ];

    const animation = timeline(sequence, { duration: 1 });
    scroll(animation);
  };

  React.useEffect(() => {
    initializeAnimations();

    const handleResize = () => {
      initializeAnimations();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <article
      className={`${globalStyles.componentContainer} ${styles.workProjectsContainer} ${styles.height}`}
    >
      <div
        id="components-container"
        className={`${globalStyles.componentContainer} ${styles.sticky}`}
      >
        <SectionTagTitle
          id="projects-tag"
          languageSelected={languageState}
          labelEn="PROJECTS"
          labelEs="PROYECTOS"
        />
        <div className={`${styles.projectsDivider}`}>
          <h4 id="professional-work" className={`${globalStyles.skewItalic}`}>
            {languageState === 'en'
              ? 'Professional work'
              : 'Experiencia laboral'}
          </h4>
          <h4 id="in-training" className={`${globalStyles.skewItalic}`}>
            {languageState === 'en' ? 'In trainig' : 'En formación'}
          </h4>
          <div id="progress-divider" className={styles.divider}></div>
          <div
            id="progress-guide"
            className={`${styles.divider} ${styles.divider2}`}
          ></div>
        </div>
        <main className={`${styles.projectsMain} `}>
          <section
            id="work"
            className={`${globalStyles.centerContent} ${styles.flex}`}
          >
            <WorkProjectsShowcase />
          </section>

          <section
            id="studies"
            className={`${globalStyles.centerContent} ${styles.flex} ${styles.studies}`}
          >
            <StudiesProjectsShowcase />
          </section>
        </main>
      </div>
    </article>
  );
};
