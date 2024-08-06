import { Button } from '@/common';
import { AboutTags } from './components/about-tags';
import { ArrowUp } from '@/assets/images/icons/component/arrow';

import globalStyles from '@/styles/global-styles.module.css';
import styles from './aboutMe.module.css';

export const AboutMeComponent: React.FC = () => {
  return (
    <section className={`${globalStyles.componentContainer} ${styles.aboutMeContainer}`}>
      <header className={globalStyles.sectionTitleHeader}>
        <h3 className={globalStyles.sectionTitleShape}>ABOUT ME</h3>
      </header>

      <main
        className={`${globalStyles.componentSize}
          ${globalStyles.centerContent}
          ${styles.aboutMe}`}
      >
        <p className={globalStyles.gap}>
          Hello! I'm Alberto, a front-end developer with a background in design
          and audio-visual production, enabling me to creatively transform ideas
          into reality.
        </p>

        <Button
          label="To know more about me"
          color="white"
          endIcon={<ArrowUp color="white" height="32" rotate={45} />}
          onClick={() => {}}
        />

        <p className={globalStyles.gap}>
          Let's work together to bring your vision to <span>life</span> and
          create a <span>stand out</span> digital presence.
        </p>

        <AboutTags />
      </main>
    </section>
  );
};
