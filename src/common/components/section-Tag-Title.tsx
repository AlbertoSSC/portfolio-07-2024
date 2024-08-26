import globalStyles from '@/styles/global-styles.module.css';

interface Props {
  languageSelected: 'en' | 'es';
  labelEn: string;
  labelEs: string;
  secondary?: boolean;
}

export const SectionTagTitle: React.FC<Props> = ({
  languageSelected,
  labelEn,
  labelEs,
  secondary,
}) => {
  return (
    <section
      className={`${
        secondary
          ? globalStyles.sectionTitleHeaderSecondary
          : globalStyles.sectionTitleHeader
      }`}
    >
      <h3
        className={`${globalStyles.sectionTitleShape} ${
          secondary ? globalStyles.secondary : ''
        }`}
      >
        {languageSelected === 'en' ? labelEn : labelEs}
      </h3>
    </section>
  );
};
