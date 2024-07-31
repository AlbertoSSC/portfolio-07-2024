import { Button } from '@/common';
import { AboutTags } from './components/about-tags';

export const AboutMeComponent: React.FC = () => {
  return (
    <section className="component-container">
      <header className="about-me-header">
        <h3 className="shape">ABOUT ME</h3>
      </header>

      <main className="component-size about-me">
        <section className="content-container">
          <p>
            Hello! I'm Alberto, a front-end developer with a background in
            design and audio-visual production, enabling me to creatively
            transform ideas into reality.
          </p>

          <div className="gap">
            <Button label="LEARN MORE" color="white" onClick={() => {}} />
          </div>

          <p>
            Let's work together to bring your vision to <span>life</span> and
            create a <span>stand out</span> digital presence.
          </p>
        </section>

        <section>
          <AboutTags />
        </section>
      </main>
    </section>
  );
};
