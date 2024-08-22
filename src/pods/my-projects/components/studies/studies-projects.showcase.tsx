import React from 'react';

import { ArrowGoBack } from '@/assets/images/icons/component/backArrow';

import { Button } from '@/common';
import { useLanguageContext } from '@/core/language.context';
import { ProjectComponent } from '../project.component';
import { StudiesTechStackComponent } from './studies.techStack';
import { StudiesDescriptionComponent } from './studies.description';
import { useStudiesProjectsImgs } from './components/imgs.hook';

import {
  project01Translations,
  project02Translations,
  project03Translations,
} from './components/translations';

import styles from '../project.component.module.css';
import animation from '../animation.module.css';

export const StudiesProjectsShowcase = () => {
  const { apiProjectImages, invoiceProjectImages, adoptionProjectImages } =
    useStudiesProjectsImgs();

  const { languageState } = useLanguageContext();

  const [showProjects, setShowProjects] = React.useState(false);

  //* --styles-- */

  const projectsFrameContainerStyles = `${styles.projectsFrameContainer} 
  ${styles.frameDark} ${animation.studies}
  ${showProjects ? animation.outlineHeight : ''}`;

  const descriptionStyles = `${styles.descriptionContainer} ${
    showProjects ? (animation.displayNone, animation.animateDescription) : ''
  }`;

  const techStackStyles = `${styles.techStackContainer} ${
    showProjects ? animation.animateTechStack : ''
  }`;

  const projectsContainerStyles = `${styles.projectsContainer} ${
    !showProjects ? animation.displayNone : ''
  }`;

  const projectsOutlineShapeStyles = `${styles.projectsOutlineShape} ${
    !showProjects ? animation.displayNone : ''
  }`;

  const projectsNumberBgStyles = `${styles.numberBg} ${styles.dark} ${
    animation.projectsNumberBgAnimationDark
  } ${!showProjects ? animation.displayNone : ''}`;

  /* --styles-- */ //

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
          <StudiesTechStackComponent showProjects={showProjects} />
        </section>

        <div className={styles.reverseProjectDisplay}>
          <span className={projectsNumberBgStyles}>01</span>
          <div className={projectsOutlineShapeStyles}></div>
          <section className={projectsContainerStyles}>
            <ProjectComponent
              textContent={project01Translations[languageState]}
              images={invoiceProjectImages}
              link="https://invoice-manager-eight.vercel.app/"
            />

            <ProjectComponent
              reverse
              textContent={project02Translations[languageState]}
              images={adoptionProjectImages}
              link="https://adoption-store.vercel.app/"
            />

            <ProjectComponent
              textContent={project03Translations[languageState]}
              images={apiProjectImages}
              link="https://api-lists.vercel.app/"
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
