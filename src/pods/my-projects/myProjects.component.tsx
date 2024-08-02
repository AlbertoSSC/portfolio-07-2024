import { ArrowUp } from '@/assets/images/icons/component/arrow';
import { Button, Tag } from '@/common';

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
          <article className="content-container">
            <section className="projects-frame-container frame-white">
              <div className="description-container">
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
                    <li className="description-text skew-italic">
                      Material-UI
                    </li>
                    <li className="description-text skew-italic">
                      Emotion/css
                    </li>
                    <li className="description-text skew-italic">
                      Git & GitHub
                    </li>
                  </ul>
                </div>
              </div>

              <div className="tech-stack-container">
                <div>
                  <span className="tech-stack-number">02</span>
                  <div className="tech-stack-outline-shape"></div>
                  <div className="tech-stack-blue-bg">
                    <div className="tech-stack-white-bg">
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
              </div>
            </section>
          </article>
        </div>
      </main>
    </section>
  );
};
