import {
  HeroComponent,
  AboutMeComponent,
  MyProjectsComponent,
  ContactComponent,
} from '@/pods';

export const HomeComponent: React.FC = () => (
  <div className="home-layout">
    <header className="language-top-header">
      <span>A S S C</span>
      <span className="language-salector">SP || EN</span>
    </header>
    <main className='home-main'>
      <HeroComponent />
      <AboutMeComponent />
      <MyProjectsComponent />
      <ContactComponent />
    </main>
  </div>
);
