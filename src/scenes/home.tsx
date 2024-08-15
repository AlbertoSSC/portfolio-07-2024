import { useLanguageContext } from '@/core/language.context';
import {
  HeroComponent,
  AboutMeComponent,
  MyProjectsComponent,
  ContactComponent,
} from '@/pods';

import { LinkedInIcon } from '@/assets/images/icons/linkedin';
import { GithubIcon } from '@/assets/images/icons/github';
import { MailIcon } from '@/assets/images/icons/mail';

import globalStyles from '@/styles/global-styles.module.css';

export const HomeComponent: React.FC = () => {
  const { languageState, setLanguageState } = useLanguageContext();
  return (
    <div className={globalStyles.homeLayout}>
      <header className={globalStyles.languageTopHeader}>
        <div className={globalStyles.headerContact}>
          <span>A S S C</span>
          <span> = </span>
          <div className={globalStyles.contactLinks}>
            [
            <LinkedInIcon color="" />,
            <GithubIcon color="" />,
            <MailIcon color="" />,<span>CV</span>]
          </div>
        </div>
        <div className={globalStyles.languageSelector}>
          <div
            onClick={() => setLanguageState('es')}
            className={globalStyles.language}
          >
            <span
              className={`${
                languageState === 'es' ? globalStyles.selected : ''
              }`}
            >
              SP
            </span>
            <img
              src="src/assets/images/flags/es.png"
              alt="spanish"
              className={globalStyles.flags}
            />
          </div>
          <span> || </span>
          <div
            onClick={() => setLanguageState('en')}
            className={globalStyles.language}
          >
            <span
              className={`${
                languageState === 'en' ? globalStyles.selected : ''
              }`}
            >
              EN
            </span>
            <img
              src="src/assets/images/flags/en.png"
              alt="english"
              className={globalStyles.flags}
            />
          </div>
        </div>
      </header>
      <main className={globalStyles.homeMain}>
        <HeroComponent />
        <AboutMeComponent />
        <MyProjectsComponent />
        <ContactComponent />
      </main>
    </div>
  );
};
