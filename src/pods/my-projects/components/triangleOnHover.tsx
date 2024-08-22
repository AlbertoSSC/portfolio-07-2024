import styles from './triangleOnHover.module.css';

const TriangleOnHover = ({ languageSelected = 'en' }) => {
  return (
    <div className={styles.container}>
      <div className={styles.shapeContainer}></div>
      <div className={styles.shapeContainer2}></div>
      <span className={`${styles.text} ${languageSelected === 'en' ? '' : styles.spanish}`}>
        {languageSelected === 'en' ? 'View project' : 'Ver proyecto'}
      </span>
    </div>
  );
};

export default TriangleOnHover;
