interface Props {
  label: string;
  style:
    | 'primary'
    | 'secondary'
    | 'primary-dark'
    | 'primary-border'
    | 'outlined';
}

export const Tag: React.FC<Props> = ({ label, style }) => {
  return <div className={`tag ${style}`}>{label}</div>;
};
