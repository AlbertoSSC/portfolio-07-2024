import {
  HeroComponent,
  AboutMeComponent,
  MyProjectsComponent,
  ContactComponent,
} from '@/pods';

import globalStyles from '@/styles/global-styles.module.css';

export const HomeComponent: React.FC = () => (
  <div className={globalStyles.homeLayout}>
    <header className={globalStyles.languageTopHeader}>
      <span>A S S C</span>
      <span className={globalStyles.languageSalector}>SP || EN</span>
    </header>
    <main className={globalStyles.homeMain}>
      <HeroComponent />
      <AboutMeComponent />
      <MyProjectsComponent />
      <ContactComponent />
    </main>
  </div>
);
