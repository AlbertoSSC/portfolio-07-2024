import React from 'react';

import { ArrowGoBack } from '@/assets/images/icons/component/backArrow';
import testImage from '@/assets/images/api.png';

import { Button } from '@/common';
import { ProjectComponent } from '../project.component';
import { WorkDescriptionComponent } from './work.description';
import { WorkTechStackComponent } from './work.techStack';

import styles from '../project.component.module.css';
import animation from '../animation.module.css';

export const WorkProjectsShowcase = () => {
  const project02_Imgs = [testImage, testImage];

  const [showProjects, setShowProjects] = React.useState(true);

  /* --styles-- */
  const projectsFrameContainerStyles = `${styles.projectsFrameContainer} ${
    styles.frameWhite
  } ${showProjects ? animation.outlineHeight : ''}`;

  const projectsContainerStyles = `${styles.projectsContainer} ${
    !showProjects ? animation.displayNone : ''
  }`;

  const descriptionStyles = `${styles.descriptionContainer} ${
    showProjects ? (animation.displayNone, animation.animateDescription) : ''
  }`;

  const techStackStyles = `${styles.techStackContainer} ${
    showProjects ? animation.displayNone : ''
  }`;

  const projectsOutlineShapeStyles = `${styles.projectsOutlineShape} ${
    !showProjects ? animation.displayNone : ''
  }`;

  const projectsNumberBgStyles = `${styles.numberBg} ${
    animation.projectsNumberBgAnimation
  } ${!showProjects ? animation.displayNone : ''}`;

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
          <WorkTechStackComponent />
        </section>

        <div className={styles.reverseProjectDisplay}>
          <span className={projectsNumberBgStyles}>02</span>
          <div className={projectsOutlineShapeStyles}></div>
          <section className={projectsContainerStyles}>
            <ProjectComponent
              title01="ADOPTION"
              title02="STORE"
              description={`Simulador web para la adopc de máscotas
              Simulador web para la adopc de máscotas
              Simulador web para la adopció de máscotas`}
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
