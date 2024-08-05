import { Tag } from '@/common';
import styles from './about-tags.module.css';

export const AboutTags = () => {
  return (
    <section className={styles.tagsContainer}>
      <div className={styles.tagRow}>
        <Tag label="FRONT-END" style="secondary" />
        <Tag label="UI-DESIGN" style="secondary" />
      </div>

      <div className={styles.tagRow}>
        <Tag label="HTML" style="primary" />
        <Tag label="CSS" style="primary" />
        <Tag label="JavaScript" style="primary" />
        <Tag label="TypeScript" style="primary" />
      </div>

      <div className={styles.tagRow}>
        <Tag label="Figma" style="primary" />
        <Tag label="Git & GitHub" style="primary" />
        <Tag label="Accessibility" style="primary" />
        <Tag label="Testing" style="primary" />
      </div>
    </section>
  );
};
