import { ArrowUp } from '@/assets/images/icons/component/arrow';

import { Button } from '@/common';

import globalStyles from '@/styles/global-styles.module.css';
import styles from '../project.component.module.css';

interface Props {
  showProjects: boolean;
  setShowProjects: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WorkDescriptionComponent: React.FC<Props> = props => {
  const { showProjects, setShowProjects } = props;

  return (
    <>
      <span className={styles.bgFrameTitle}>02-WORK</span>
      <span className={styles.bgFrameChar}>W</span>

      <div className={styles.descriptionContent}>
        <Button
          label="CHECK IT OUT"
          endIconAnimation
          endIcon={<ArrowUp color="#00ffff" height="32" rotate={45} />}
          color="accent"
          onClick={() => {
            setShowProjects(!showProjects);
          }}
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
    </>
  );
};
