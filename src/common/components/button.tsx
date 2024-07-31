type Color = 'white' | 'black' | 'accent';

interface Props {
  label: string;
  onClick: () => void;
  color: Color;
}

export const Button: React.FC<Props> = props => {
  const { label, onClick, color } = props;
  return (
    <button onClick={onClick} className={`custom-button ${color}`}>
      {label}
    </button>
  );
};
