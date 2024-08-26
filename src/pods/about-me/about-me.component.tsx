import React from 'react';

import Modal from './components/modal';
import { Button } from '@/common';
import { useLanguageContext } from '@/core/language.context';
import { AboutTags } from './components/about-tags';
import { useAboutMeTranslations } from './components/translations.hook';

import { ArrowUp } from '@/assets/images/icons/component/arrow';

import globalStyles from '@/styles/global-styles.module.css';
import styles from './aboutMe.module.css';
import { SectionTagTitle } from '@/common/components/section-Tag-Title';

export const AboutMeComponent: React.FC = () => {
  const { languageState } = useLanguageContext();
  const { resume } = useAboutMeTranslations();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className={`${globalStyles.componentContainer} ${styles.aboutMeContainer}`}
    >
      <SectionTagTitle
        languageSelected={languageState}
        labelEn="ABOUT ME"
        labelEs="SOBRE MÍ"
      />

      <main
        className={`${globalStyles.componentSize}
          ${globalStyles.centerContent}
          ${styles.aboutMe}`}
      >
        <p className={globalStyles.gap}>{resume[languageState]}</p>

        <Button
          label={
            languageState === 'en'
              ? 'To know more about me'
              : 'Para conocerme más'
          }
          color="white"
          endIcon={<ArrowUp color="white" height="32" rotate={45} />}
          onClick={openModal}
          endIconAnimation
        />

        {languageState === 'en' ? (
          <p className={globalStyles.gap}>
            Let's work together to bring your vision to{' '}
            <span className={styles.firstChildSpan}>life</span> and create a{' '}
            <span className={styles.secondChildSpan}>stand out</span> digital
          </p>
        ) : (
          <p className={globalStyles.gap}>
            Trabajemos juntos para dar <span>vida</span> a su visión y crear una
            presencia digital <span>destacada.</span>
          </p>
        )}

        <AboutTags />
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        languageSelected={languageState}
      />
    </section>
  );
};
