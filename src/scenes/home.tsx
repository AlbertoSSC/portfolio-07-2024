import {
  HeroComponent,
  AboutMeComponent,
  MyProjectsComponent,
  ContactComponent,
} from '@/pods';
import { HeaderComponent } from '@/pods/header/header.component';

import globalStyles from '@/styles/global-styles.module.css';

export const HomeComponent: React.FC = () => {
  return (
    <div className={globalStyles.homeLayout}>
      <header className={globalStyles.languageTopHeader}>
        <HeaderComponent />
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
