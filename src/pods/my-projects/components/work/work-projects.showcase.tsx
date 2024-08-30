import React from 'react';

import { ArrowGoBack } from '@/assets/images/icons/component/backArrow';
import workIllustration from '@/assets/images/work illustration.webp';

import { Button } from '@/common';
import { useLanguageContext } from '@/core/language.context';
import { useWorkProjectsImgs } from './components/imgs.hook';
import { ProjectComponent } from '../project.component';
import { WorkDescriptionComponent } from './work.description';
import { WorkTechStackComponent } from './work.techStack';
import {
  project01Translations,
  project02Translations,
} from './components/translations';

import styles from '../project.component.module.css';
import animation from '../animation.module.css';

export const WorkProjectsShowcase = () => {
  const { languageState } = useLanguageContext();
  const { learningAppProjectImages } = useWorkProjectsImgs();

  const [showProjects, setShowProjects] = React.useState(false);

  /* --styles-- */

  const projectsFrameContainerStyles = `${styles.projectsFrameContainer} ${
    styles.frameWhite
  } ${showProjects ? animation.outlineHeight : ''}`;

  const descriptionStyles = `${styles.descriptionContainer} ${
    showProjects ? animation.animateDescription : ''
  }`;

  const techStackStyles = `${styles.techStackContainer} ${
    showProjects ? animation.animateTechStack : ''
  }`;

  const projectsContainerStyles = `${styles.projectsContainer}  ${
    !showProjects ? animation.displayNone : ''
  }`;

  const projectsOutlineShapeStyles = `${styles.projectsOutlineShape} ${
    !showProjects ? animation.displayNone : ''
  }`;

  const projectsNumberBgStyles = `${styles.numberBg} ${
    animation.projectsNumberBgAnimation
  } ${!showProjects ? animation.displayNone : ''}`;

  const illustrationStyles = `${styles.workIllust} ${
    showProjects ? animation.animateWorkIllustration : ''
  }`;

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

        <div className={illustrationStyles}>
          <img src={workIllustration} alt="person coding" />
        </div>

        <section className={techStackStyles}>
          <WorkTechStackComponent showProjects={showProjects} />
        </section>

        <div className={styles.reverseProjectDisplay}>
          <span className={projectsNumberBgStyles}>02</span>
          <div className={projectsOutlineShapeStyles}></div>
          <section className={projectsContainerStyles}>
            <ProjectComponent
              textContent={project01Translations[languageState]}
              images={learningAppProjectImages}
              link="https://e-learning-apps.vercel.app/"
              languageState={languageState}
            />
            <ProjectComponent
              reverse
              textContent={project02Translations[languageState]}
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
          label={languageState === 'en' ? 'BACK' : 'VOLVER'}
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
