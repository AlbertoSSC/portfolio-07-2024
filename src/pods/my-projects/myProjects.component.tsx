import { WorkProjectsShowcase } from './components';

export const MyProjectsComponent: React.FC = () => {
  return (
    <section className="component-container">
      <header className="section-title-header">
        <h3 className="shape">PROJECTS</h3>
      </header>

      <div className="projects-divider">
        <h4 className="skew-italic">Professional work</h4>
        <div className="divider"></div>
      </div>

      <main className="component-size projects-main">
        <div className="center-content projects">
          <WorkProjectsShowcase />
        </div>
      </main>
    </section>
  );
};
