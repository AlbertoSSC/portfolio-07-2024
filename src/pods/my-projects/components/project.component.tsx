import React from 'react';
import styles from './project.component.module.css';

interface Content {
  title01: string;
  title02: string;
  description: string | JSX.Element;
}
interface Props {
  textContent: Content;
  reverse?: boolean;
  images?: string[];
  link?: string;
}

export const ProjectComponent: React.FC<Props> = props => {
  const {
    textContent = {
      title01: 'title 01',
      title02: 'title02',
      description: 'description goes here',
    },
    images,
    reverse,
    link,
  } = props;

  const projectDescriptionStyles = `${styles.projectDescription} ${
    !images ? styles.noImages : ''
  }`;

  return (
    <a
      className={`${styles.projectsContainer} ${!link ? styles.noLink : ''}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`${styles.projectBlueBg}`}>
        <div
          className={`${styles.projectWhiteBg} ${styles.projectWhiteShape} ${
            reverse ? styles.flipHorizontal : ''
          }`}
        >
          <div
            className={`${styles.contentProject} 
          ${
            reverse
              ? `${styles.reverseProjectDisplay} ${styles.flipHorizontal}`
              : ''
          }`}
          >
            <section className={projectDescriptionStyles}>
              <div>
                <h4 style={{ color: '#263440' }}>{textContent.title01}</h4>
                <h4 style={{ color: '#506e86' }}>{textContent.title02}</h4>
              </div>

              <p style={{ color: 'black' }}>{textContent.description}</p>
            </section>

            {images && (
              <section className={`${styles.projectImages}`}>
                {images!.map((image, index) => {
                  return (
                    <img
                      key={`image ${index}`}
                      src={image}
                      alt={`project image ${index}`}
                    />
                  );
                })}
              </section>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};
