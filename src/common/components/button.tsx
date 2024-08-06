import globalStyles from '@/styles/global-styles.module.css';

type Color = 'white' | 'primaryDark' | 'accent';

interface Props {
  label: string;
  onClick: () => void;
  color: Color;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  startIconAnimation?: boolean;
  endIconAnimation?: boolean;
}

export const Button: React.FC<Props> = props => {
  const {
    label,
    onClick,
    color,
    startIcon,
    endIcon,
    endIconAnimation,
    startIconAnimation,
  } = props;

  const buttonClasses = `${globalStyles.customButton} ${globalStyles[color]} ${
    startIcon ? globalStyles.smallPaddingLeft : ''
  } ${endIcon ? globalStyles.smallPaddingRight : ''}`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {startIcon && (
        <span
          className={`${globalStyles.icon} ${
            startIconAnimation ? globalStyles.startIconAnimation : ''
          }`}
        >
          {startIcon}
        </span>
      )}
      {label}
      {endIcon && (
        <span
          className={`${globalStyles.icon} ${
            endIconAnimation ? globalStyles.endIconAnimation : ''
          }`}
        >
          {endIcon}
        </span>
      )}
    </button>
  );
};
