import React from 'react';
import styles from './project.component.module.css';

interface Props {
  title01: string;
  title02: string;
  description: string | JSX.Element;
  images: string[];
  reverse?: boolean;
}

export const ProjectComponent: React.FC<Props> = props => {
  const {
    title01 = 'title 01',
    title02 = 'title02',
    description = 'description goes here',
    images,
    reverse,
  } = props;

  return (
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
          <section className={styles.projectDescription}>
            <div>
              <h4 style={{ color: '#263440' }}>{title01}</h4>
              <h4 style={{ color: '#506e86' }}>{title02}</h4>
            </div>

            <span style={{ color: 'black' }}>{description}</span>
          </section>

          {images.length <= 2 ? (
            <section className={styles.projectImages}>
              {images!.map((image, index) => {
                return <img key={`image ${index}`} src={image} alt="work-01" />;
              })}
            </section>
          ) : (
            <section className={`${styles.projectImages} ${styles.biggerThanTwo}`}>
              {images!.map((image, index) => {
                return <img key={`image ${index}`} src={image} alt="work-01" />;
              })}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
