import {
  HeroComponent,
  AboutMeComponent,
  MyProjectsComponent,
  ContactComponent,
} from '@/pods';

export const HomeComponent: React.FC = () => (
  <div className="home-layout">
    <HeroComponent />
    <AboutMeComponent />
    <MyProjectsComponent />
    <ContactComponent />
  </div>
);
