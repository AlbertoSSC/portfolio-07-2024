import { ArrowUp } from '@/assets/images/icons/component/arrow';
import { Button, Tag } from '@/common';

// import { ProjectComponent } from './project.component';
// import testImage from '@/assets/images/api.png';

export const WorkProjectsShowcase = () => {
  // const project01_Imgs = [testImage, testImage, testImage];

  return (
    <div className="content-container">
      <div className="projects-frame-container frame-white">
        <section className="description-container">
          <span className="bg-frame-title">02-WORK</span>
          <span className="bg-frame-char">W</span>

          <div className="description-content">
            <Button
              label="CHECK IT OUT"
              endIcon={<ArrowUp color="#00ffff" height="32" rotate={45} />}
              color="accent"
              onClick={() => {}}
            />

            <ul className="description-list">
              <li className="description-text skew-italic">Context</li>
              <li className="description-text skew-italic">Testing</li>
              <li className="description-text skew-italic">Hooks</li>
              <li className="description-text skew-italic">Material-UI</li>
              <li className="description-text skew-italic">Emotion/css</li>
              <li className="description-text skew-italic">Git & GitHub</li>
            </ul>
          </div>
        </section>

        <section className="tech-stack-container">
          <div>
            <span className="tech-stack-number">02</span>
            <div className="tech-stack-outline-shape"></div>
            <div className="tech-stack-blue-bg">
              <div className="white-shape">
                <div className="tech-stack-title">
                  <span className="skew-italic">TECH</span>
                  <span className="skew-italic">STACK</span>
                </div>
                <ul className="ul-gap">
                  <li>
                    <Tag label="HTML" style="outlined" />
                  </li>
                  <li>
                    <Tag label="CSS" style="outlined" />
                  </li>
                  <li>
                    <Tag label="TYPESCRIPT" style="primary-border" />
                  </li>
                  <li>
                    <Tag label="REACT" style="primary-dark" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-container">
          {/* <ProjectComponent
            title01="Holaaaa"
            title02="q tal"
            description="muy bien y tu ¿qué tal andas?"
            images={project01_Imgs}
          /> */}
        </section>
      </div>
    </div>
  );
};
