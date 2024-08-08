import { Tag } from '@/common';

import globalStyles from '@/styles/global-styles.module.css';
import styles from '../project.component.module.css';

export const WorkTechStackComponent = () => {
  return (
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
  );
};
