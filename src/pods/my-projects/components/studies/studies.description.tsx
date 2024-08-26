import { ArrowUp } from '@/assets/images/icons/component/arrow';

import { Button } from '@/common';
import { useLanguageContext } from '@/core/language.context';

import styles from '../project.component.module.css';

interface Props {
  showProjects: boolean;
  setShowProjects: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StudiesDescriptionComponent: React.FC<Props> = props => {
  const { showProjects, setShowProjects } = props;

  const { languageState } = useLanguageContext();

  return (
    <>
      <span className={`${styles.bgFrameTitle} ${styles.dark}`}>
        01-{languageState === 'en' ? 'STUDIES' : 'ESTUDIOS'}
      </span>
      <span className={`${styles.bgFrameChar}`}>
        {languageState === 'en' ? 'S' : 'E'}
      </span>

      <div className={`${styles.descriptionContent} ${styles.dark}`}>
        <Button
          label={languageState === 'en' ? 'CHECK IT OUT' : 'VER PROYECTOS'}
          endIconAnimation
          endIcon={<ArrowUp color="#263440" height="32" rotate={45} />}
          color="primaryDarkBlack"
          onClick={() => {
            setShowProjects(!showProjects);
          }}
        />
        <div className={`${styles.descriptionText} ${styles.studies}`}>
          <span>{languageState === 'en' ? 'BOOTCAMP' : 'WEB APPS'}</span>
          <span>{languageState === 'en' ? '& MASTER' : 'DE MÁSTER'}</span>
          <span>{languageState === 'en' ? 'PROJECTS' : 'Y BOOTCAMP'}</span>
        </div>

        <div className={styles.line}>
          <div className={styles.line} />
        </div>
      </div>
    </>
  );
};
