import styles from './hero.module.css';
import globalStyles from '@/styles/global-styles.module.css';

export const HeroComponent: React.FC = () => {
  return (
    <>
      <section
        className={`${globalStyles.componentContainer} ${styles.heroContainer}`}
      >
        <div className={`${globalStyles.componentSize} ${styles.hero}`}>
          <section className={styles.heroTitle}>
            <h1>LET'S GROW YOUR SITE</h1>
            <div className={styles.secondaryFont}>
              <span>together</span>
            </div>
          </section>
          <section className={styles.addon}>
            <div className={globalStyles.sectionTitleShape}>
              <h2>FRONT-END & UI DESIGN</h2>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
