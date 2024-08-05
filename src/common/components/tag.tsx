import styles from './tag.module.css';

interface Props {
  label: string;
  style: 'primary' | 'secondary' | 'primaryDark' | 'primaryBorder' | 'outlined';
}

export const Tag: React.FC<Props> = ({ label, style }) => {
  return <div className={`${styles.tag} ${styles[style]}`}>{label}</div>;
};
