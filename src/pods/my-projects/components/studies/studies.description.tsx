import { ArrowUp } from '@/assets/images/icons/component/arrow';

import styles from '../project.component.module.css';
import { Button } from '@/common';

interface Props {
  showProjects: boolean;
  setShowProjects: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StudiesDescriptionComponent: React.FC<Props> = props => {
  const { showProjects, setShowProjects } = props;

  return (
    <>
      <span className={`${styles.bgFrameTitle} ${styles.dark}`}>
        01-STUDIES
      </span>
      <span className={`${styles.bgFrameChar}`}>S</span>

      <div className={`${styles.descriptionContent} ${styles.dark}`}>
        <Button
          label="CHECK IT OUT"
          endIconAnimation
          endIcon={<ArrowUp color="#263440" height="32" rotate={45} />}
          color="primaryDarkBlack"
          onClick={() => {
            setShowProjects(!showProjects);
          }}
        />
        <div className={`${styles.descriptionText} ${styles.studies}`}>
          <span>BOOTCAMP</span>
          <span>& MASTER</span>
          <span>PROJECTS</span>
        </div>
      </div>
    </>
  );
};
