import styles from './project.component.module.css';

interface Props {
  title01: string;
  title02: string;
  description: string;
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
    <div className={`${styles.projectWhiteBg} ${styles.projectWhiteShape}`}>
      <div
        className={`${styles.contentProject} 
          ${reverse ? styles.reverseProjectDisplay : ''}`}
      >
        <section className={styles.projectDescription}>
          <div>
            <h4 style={{ color: '#263440' }}>{title01}</h4>
            <h4 style={{ color: '#506e86' }}>{title02}</h4>
          </div>

          <p style={{ color: 'black' }}>{description}</p>
        </section>

        <section className={styles.projectImages}>
          {images!.map((image, index) => {
            return <img key={`image ${index}`} src={image} alt="work-01" />;
          })}
        </section>
      </div>
    </div>
  );
};
