import { Button } from '@/common';
import { AboutTags } from './components/about-tags';
import { ArrowUp } from '@/assets/images/icons/component/arrow';

export const AboutMeComponent: React.FC = () => {
  return (
    <section className="component-container">
      <header className="section-title-header">
        <h3 className="shape">ABOUT ME</h3>
      </header>

      <main className="component-size center-content about-me">
        <section className="content-container">
          <p className="gap">
            Hello! I'm Alberto, a front-end developer with a background in
            design and audio-visual production, enabling me to creatively
            transform ideas into reality.
          </p>

          <Button
            label="To know more about me"
            color="white"
            endIcon={<ArrowUp color="white" height="32" rotate={45}/>}
            onClick={() => {}}
          />

          <p className="gap">
            Let's work together to bring your vision to <span>life</span> and
            create a <span>stand out</span> digital presence.
          </p>
        </section>

        <AboutTags />
      </main>
    </section>
  );
};
