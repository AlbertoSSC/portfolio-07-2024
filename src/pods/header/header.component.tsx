import React from 'react';

import { useLanguageContext } from '@/core/language.context';

import { LinkedInIcon } from '@/assets/images/icons/linkedin';
import { GithubIcon } from '@/assets/images/icons/github';
import { MailIcon } from '@/assets/images/icons/mail';
import SpanishFlag from '@/assets/images/es.png';
import EnglishFlag from '@/assets/images/en.png';

import globalStyles from '@/styles/global-styles.module.css';

export const HeaderComponent: React.FC = () => {
  const { languageState, setLanguageState } = useLanguageContext();

  const [showPopoverEn, setShowPopoverEn] = React.useState(false);
  const [showPopoverEs, setShowPopoverEs] = React.useState(false);

  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const cvToDownload = (): string => {
    return languageState === 'es' ? '/Alberto_cv_es.pdf' : '/Alberto_cv_en.pdf';
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvToDownload();
    link.download = `AlbertoSSC_CV_${languageState}.pdf`;
    link.click();
  };

  const handleLanguageSelection = (languageSelected: 'en' | 'es') => {
    setLanguageState(languageSelected);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (languageSelected === 'en') {
      setShowPopoverEn(true);
      setShowPopoverEs(false);

      timeoutRef.current = setTimeout(() => {
        setShowPopoverEn(false);
      }, 1500);
    } else {
      setShowPopoverEs(true);
      setShowPopoverEn(false);

      timeoutRef.current = setTimeout(() => {
        setShowPopoverEs(false);
      }, 1500);
    }
  };

  return (
    <>
      <div className={globalStyles.headerContact}>
        <span>A S S C</span>
        <span> = </span>
        <div className={globalStyles.contactLinks}>
          [
          <LinkedInIcon color="" />,
          <GithubIcon color="" />,
          <MailIcon color="" />,<span onClick={handleDownloadCV}>CV</span>]
        </div>
      </div>
      <div className={globalStyles.languageSelector}>
        <div
          onClick={() => handleLanguageSelection('es')}
          className={globalStyles.language}
        >
          <span
            className={`${languageState === 'es' ? globalStyles.selected : ''}`}
          >
            ES
          </span>
          <img src={SpanishFlag} alt="spanish" className={globalStyles.flags} />
        </div>
        <span> || </span>
        <div
          onClick={() => handleLanguageSelection('en')}
          className={globalStyles.language}
        >
          <span
            className={`${languageState === 'en' ? globalStyles.selected : ''}`}
          >
            EN
          </span>
          <img src={EnglishFlag} alt="english" className={globalStyles.flags} />
        </div>
        {showPopoverEn && (
          <div
            className={`${globalStyles.popover} ${globalStyles.languagePopover}`}
          >
            English selected
          </div>
        )}
        {showPopoverEs && (
          <div
            className={`${globalStyles.popover} ${globalStyles.languagePopover}`}
          >
            Spanish selected
          </div>
        )}
      </div>
    </>
  );
};
