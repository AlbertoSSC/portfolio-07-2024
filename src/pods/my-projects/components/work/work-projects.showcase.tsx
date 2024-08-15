import React from 'react';

import { ArrowGoBack } from '@/assets/images/icons/component/backArrow';
import learningApp_01 from '@/assets/images/learningApps_01.jpg';
import learningApp_02 from '@/assets/images/learningApps_02.jpg';

import { Button } from '@/common';
import { useLanguageContext } from '@/core/language.context';
import { ProjectComponent } from '../project.component';
import { WorkDescriptionComponent } from './work.description';
import { WorkTechStackComponent } from './work.techStack';
import { project01Translations } from './components/translations';

import styles from '../project.component.module.css';
import animation from '../animation.module.css';

export const WorkProjectsShowcase = () => {
  const project02_Imgs = [learningApp_01, learningApp_02];

  const { languageState } = useLanguageContext();
  const [showProjects, setShowProjects] = React.useState(false);

  /* --styles-- */

  const projectsFrameContainerStyles = `${styles.projectsFrameContainer} ${
    styles.frameWhite
  } ${showProjects ? animation.outlineHeight : ''}`;

  const projectsContainerStyles = `${styles.projectsContainer} ${
    !showProjects ? animation.displayNone : ''
  }`;

  const descriptionStyles = `${styles.descriptionContainer} ${
    showProjects ? animation.animateDescription : ''
  }`;

  const techStackStyles = `${styles.techStackContainer} ${
    showProjects ? animation.animateTechStack : ''
  }`;

  const projectsOutlineShapeStyles = `${styles.projectsOutlineShape} ${
    !showProjects ? animation.displayNone : ''
  }`;

  const projectsNumberBgStyles = `${styles.numberBg} ${
    animation.projectsNumberBgAnimation
  } ${!showProjects ? animation.displayNone : ''}`;

  /* --styles-- */

  return (
    <>
      <div className={projectsFrameContainerStyles}>
        <section className={descriptionStyles}>
          <WorkDescriptionComponent
            showProjects={showProjects}
            setShowProjects={setShowProjects}
          />
        </section>

        <section className={techStackStyles}>
          <WorkTechStackComponent showProjects={showProjects} />
        </section>

        <div className={styles.reverseProjectDisplay}>
          <span className={projectsNumberBgStyles}>02</span>
          <div className={projectsOutlineShapeStyles}></div>
          <section className={projectsContainerStyles}>
            <ProjectComponent
              textContent={project01Translations[languageState]}
              images={project02_Imgs}
            />
          </section>
        </div>
      </div>

      <div
        className={`${styles.buttonPadding} ${
          !showProjects ? animation.displayNone : ''
        }`}
      >
        <Button
          color="white"
          label="BACK"
          onClick={() => {
            setShowProjects(!showProjects);
          }}
          startIcon={<ArrowGoBack color="#fff" height="24" rotate={0} />}
          startIconAnimation
        />
      </div>
    </>
  );
};
