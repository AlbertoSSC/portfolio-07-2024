import { useLanguageContext } from '@/core/language.context';

import globalStyles from '@/styles/global-styles.module.css';
import styles from './hero.module.css';

export const HeroComponent: React.FC = () => {
  const { languageState } = useLanguageContext();
  return (
    <>
      <section
        className={`${globalStyles.componentContainer} ${styles.heroContainer}`}
      >
        <div className={`${styles.hero} ${languageState === 'es' ? styles.heroInSpanish : ''}`}>
          <section
            className={`${styles.heroTitle} ${
              languageState === 'es' ? styles.heroTitleInSpanish : ''
            }`}
          >
            <h1>
              {languageState === 'en'
                ? "LET'S GROW YOUR SITE"
                : 'VAMOS A CREAR SU WEB'}
            </h1>
            <div className={styles.secondaryFont}>
              <span>{languageState === 'en' ? 'together' : 'juntos'}</span>
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
