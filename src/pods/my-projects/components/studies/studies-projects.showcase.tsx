import React from 'react';

import { ArrowGoBack } from '@/assets/images/icons/component/backArrow';
import testImage from '@/assets/images/api.png';

import { Button } from '@/common';
import { ProjectComponent } from '../project.component';
import { StudiesTechStackComponent } from './studies.techStack';
import { StudiesDescriptionComponent } from './studies.description';

import styles from '../project.component.module.css';
import animation from '../animation.module.css';

export const StudiesProjectsShowcase = () => {
  const project01_Imgs = [testImage, testImage];

  const [showProjects, setShowProjects] = React.useState(false);

  /* --styles-- */
  const projectsFrameContainerStyles = `${styles.projectsFrameContainer} ${
    styles.frameDark
  } ${showProjects ? animation.outlineHeight : ''}`;

  const descriptionStyles = `${styles.descriptionContainer} ${
    showProjects ? (animation.displayNone, animation.animateDescription) : ''
  }`;

  const techStackStyles = `${styles.techStackContainer} ${
    showProjects ? animation.displayNone : ''
  }`;

  const projectsContainerStyles = `${styles.projectsContainer} ${
    !showProjects ? animation.displayNone : ''
  }`;

  return (
    <>
      <div className={projectsFrameContainerStyles}>
        <section className={descriptionStyles}>
          <StudiesDescriptionComponent
            showProjects={showProjects}
            setShowProjects={setShowProjects}
          />
        </section>

        <section className={techStackStyles}>
          <StudiesTechStackComponent />
        </section>

        <section className={projectsContainerStyles}>
          <ProjectComponent
            title01="ADOPTION"
            title02="STORE"
            description={`Simulador web para la adopc de máscotas
                Simulador web para la adopc de máscotas
                Simulador web para la adopció de máscotas`}
            images={project01_Imgs}
          />
        </section>

        <div className={`${!showProjects ? animation.displayNone : ''}`}>
          <Button
            color="primaryDark"
            label="BACK"
            onClick={() => {
              setShowProjects(!showProjects);
            }}
            startIcon={<ArrowGoBack color="#263440" height="24" rotate={0} />}
            startIconAnimation
          />
        </div>
      </div>
    </>
  );
};
