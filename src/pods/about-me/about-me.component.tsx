import React from 'react';

import Modal from './components/modal';
import { Button } from '@/common';
import { useLanguageContext } from '@/core/language.context';
import { AboutTags } from './components/about-tags';
import {
  AboutMeTranslations,
  CallToActionAboutMeTranslations,
  resumeAboutMeTranslations,
} from './components/translations';

import { ArrowUp } from '@/assets/images/icons/component/arrow';

import globalStyles from '@/styles/global-styles.module.css';
import styles from './aboutMe.module.css';
import modalStyles from './components/modal.module.css';

export const AboutMeComponent: React.FC = () => {
  const { languageState } = useLanguageContext();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className={`${globalStyles.componentContainer} ${styles.aboutMeContainer}`}
    >
      <header className={globalStyles.sectionTitleHeader}>
        <h3 className={globalStyles.sectionTitleShape}>
          {languageState === 'en' ? 'ABOUT ME' : 'SOBRE MÍ'}
        </h3>
      </header>

      <main
        className={`${globalStyles.componentSize}
          ${globalStyles.centerContent}
          ${styles.aboutMe}`}
      >
        <p className={globalStyles.gap}>
          {resumeAboutMeTranslations[languageState]}
        </p>

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

        <CallToActionAboutMeTranslations languageSelected={languageState} />

        <AboutTags />
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AboutMeTranslations languageSelected={languageState} />
        <div className={modalStyles.closeButtonContainer}>
          <Button
            label={languageState === 'en' ? 'CLOSE' : 'CERRAR'}
            color="white"
            onClick={closeModal}
          />
        </div>
      </Modal>
    </section>
  );
};
