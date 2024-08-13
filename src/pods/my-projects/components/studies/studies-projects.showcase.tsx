import React from 'react';

import { ArrowGoBack } from '@/assets/images/icons/component/backArrow';

import { Button } from '@/common';
import { ProjectComponent } from '../project.component';
import { StudiesTechStackComponent } from './studies.techStack';
import { StudiesDescriptionComponent } from './studies.description';
import { useProjectsImgs } from './components/imgs.hook';

import styles from '../project.component.module.css';
import animation from '../animation.module.css';

export const StudiesProjectsShowcase = () => {
  const { apiProjectImages, invoiceProjectImages, adoptionProjectImages } =
    useProjectsImgs();

  const [showProjects, setShowProjects] = React.useState(false);

  /* --styles-- */
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

  /* --styles-- */

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
              title01="Invoice"
              title02="Manager"
              description={
                <>
                  <p>
                    Control de estados en la validación de una orden de pedido.
                  </p>
                </>
              }
              images={invoiceProjectImages}
            />

            <ProjectComponent
              reverse
              title01="Adoption"
              title02="Store"
              description={
                <>
                  <p>
                    Con el contexto gestionamos estados y la cesta de adopción.
                  </p>
                </>
              }
              images={adoptionProjectImages}
            />

            <ProjectComponent
              title01="API"
              title02="Explorer"
              description={
                <>
                  <p>
                    Usamos las APIs de GitHub y R&M para presentar información.
                  </p>
                </>
              }
              images={apiProjectImages}
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
