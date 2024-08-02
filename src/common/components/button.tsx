type Color = 'white' | 'black' | 'accent';

interface Props {
  label: string;
  onClick: () => void;
  color: Color;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button: React.FC<Props> = props => {
  const { label, onClick, color, startIcon, endIcon } = props;
  return (
    <button
      onClick={onClick}
      className={`custom-button ${color} ${startIcon && 'smallPaddingLeft'}
      ${endIcon && 'smallPaddingRight'}
      }`}
    >
      {startIcon && <span className="icon">{startIcon}</span>}
      {label}
      {endIcon && <span className="icon">{endIcon}</span>}
    </button>
  );
};
