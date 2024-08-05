import globalStyles from '@/styles/global-styles.module.css';

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

  const buttonClasses = `${globalStyles.customButton} ${globalStyles[color]} ${
    startIcon ? globalStyles.smallPaddingLeft : ''
  } ${endIcon ? globalStyles.smallPaddingRight : ''}`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {startIcon && <span className={globalStyles.icon}>{startIcon}</span>}
      {label}
      {endIcon && <span className={globalStyles.icon}>{endIcon}</span>}
    </button>
  );
};
