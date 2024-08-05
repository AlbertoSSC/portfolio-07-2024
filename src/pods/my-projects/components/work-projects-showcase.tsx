import { ArrowUp } from '@/assets/images/icons/component/arrow';
import { Button, Tag } from '@/common';

import { ProjectComponent } from './project.component';
import testImage from '@/assets/images/api.png';

import globalStyles from '@/styles/global-styles.module.css';
import styles from './project.component.module.css';

export const WorkProjectsShowcase = () => {
  const project01_Imgs = [testImage, testImage];

  return (
    <>
      <div className={`${styles.projectsFrameContainer} ${styles.frameWhite}`}>
        <section className={styles.descriptionContainer}>
          <span className={styles.bgFrameTitle}>02-WORK</span>
          <span className={styles.bgFrameChar}>W</span>

          <div className={styles.descriptionContent}>
            <Button
              label="CHECK IT OUT"
              endIcon={<ArrowUp color="#00ffff" height="32" rotate={45} />}
              color="accent"
              onClick={() => {}}
            />

            <ul className={styles.descriptionList}>
              <li
                className={`${styles.descriptionText} ${globalStyles.skewItalic}`}
              >
                Context
              </li>
              <li
                className={`${styles.descriptionText} ${globalStyles.skewItalic}`}
              >
                Testing
              </li>
              <li
                className={`${styles.descriptionText} ${globalStyles.skewItalic}`}
              >
                Hooks
              </li>
              <li
                className={`${styles.descriptionText} ${globalStyles.skewItalic}`}
              >
                Material-UI
              </li>
              <li
                className={`${styles.descriptionText} ${globalStyles.skewItalic}`}
              >
                Emotion/css
              </li>
              <li
                className={`${styles.descriptionText} ${globalStyles.skewItalic}`}
              >
                Git & GitHub
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.techStackContainer}>
          <div>
            <span className={styles.techStackNumber}>02</span>
            <div className={styles.techStackOutlineShape}></div>
            <div className={styles.techStackBlueBg}>
              <div className={styles.techStackWhiteShape}>
                <div className={styles.techStackTitle}>
                  <span className={globalStyles.skewItalic}>TECH</span>
                  <span className={globalStyles.skewItalic}>STACK</span>
                </div>
                <ul className={styles.ulGap}>
                  <li>
                    <Tag label="HTML" style="outlined" />
                  </li>
                  <li>
                    <Tag label="CSS" style="outlined" />
                  </li>
                  <li>
                    <Tag label="TYPESCRIPT" style="primaryBorder" />
                  </li>
                  <li>
                    <Tag label="REACT" style="primaryDark" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.projectsContainer}>
          <ProjectComponent
            title01="ADOPTION"
            title02="STORE"
            description={`Simulador web para la adopc de máscotas
                Simulador web para la adopc de máscotas
                Simulador web para la adopció de máscotas`}
            images={project01_Imgs}
          />
        </section>
      </div>
    </>
  );
};
