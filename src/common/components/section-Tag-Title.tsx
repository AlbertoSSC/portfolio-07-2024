import globalStyles from '@/styles/global-styles.module.css';

interface Props {
  id?: string;
  languageSelected: 'en' | 'es';
  labelEn: string;
  labelEs: string;
  secondary?: boolean;
}

export const SectionTagTitle: React.FC<Props> = ({
  id,
  languageSelected,
  labelEn,
  labelEs,
  secondary,
}) => {
  return (
    <section
      id={id}
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
