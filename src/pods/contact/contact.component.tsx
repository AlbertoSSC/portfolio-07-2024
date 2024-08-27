import React from 'react';

import { useLanguageContext } from '@/core/language.context';
import { copyToClipboard } from '@/common/components/copy-to-clipBoard';
import { SectionTagTitle } from '@/common/components/section-Tag-Title';

import CopyIcon from '@/assets/images/icons/copy-icon.svg';
import ErathGlobeIcon from '@/assets/images/icons/internet-icon.svg';
import ArrowUp from '@/assets/images/icons/component/arrow-up.svg';

import globalStyles from '@/styles/global-styles.module.css';
import styles from './contact.module.css';

export const ContactComponent: React.FC = () => {
  const { languageState } = useLanguageContext();

  const [showPopover, setShowPopover] = React.useState(false);

  return (
    <section
      className={`${globalStyles.componentContainer} ${styles.contactContainer}`}
    >
      <SectionTagTitle
        languageSelected={languageState}
        labelEn="CONTACT"
        labelEs="CONTACTO"
        secondary
      />

      <main className={`${globalStyles.centerContent} ${styles.contactStyle}`}>
        <div className={styles.contactContent}>
          <h4 className={styles.contactTitle}>
            {languageState === 'en'
              ? 'TO MEET ME OR PROPOSE A PROJECT'
              : 'PARA CONOCERME O PROPONERME UN PROYECTO'}
          </h4>
          <section className={styles.contactLinks}>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                copyToClipboard('ALBERTOSSC@GMAIL.COM', setShowPopover);
              }}
            >
              ALBERTOSSC@GMAIL.COM
              <img
                className={styles.contactImg}
                src={CopyIcon}
                alt="Copy Icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/albertos2c/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
              <img
                className={styles.contactImg}
                src={ErathGlobeIcon}
                alt="Internet Icon"
              />
            </a>

            {showPopover && (
              <div className={globalStyles.popover}>
                {languageState === 'en' ? 'EMAIL COPIED!' : '¡EMAIL COPIADO!'}
              </div>
            )}
          </section>

          <section className={styles.contactDescription}>
            <p>
              {languageState === 'en'
                ? "I'm open to new opportunities and projects."
                : 'Estoy abierto a las nuevas oportunidades y proyectos.'}{' '}
            </p>
            <p>
              {languageState === 'en'
                ? "If you have something in mind and want to work together, don't hesitate, contact me!"
                : 'Si tiene algo en mente y quiere que trabajemos juntos, no dude en contactarme!'}
            </p>
          </section>
        </div>
      </main>

      <footer className={styles.footerStyle}>
        <div className={styles.glassAnimation}>
          <div className={styles.glassShape} />
        </div>
        <div className={styles.footerContent}>
          <div
            className={styles.goUp}
            onClick={() =>
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
            }
          >
            <div className={styles.goUpLine} />
            <img src={ArrowUp} alt="arrow up" height={40} />

            <div className={styles.homeText}>
              <span>{languageState === 'en' ? 'HOME' : 'INICIO'}</span>
              <span>{languageState === 'en' ? 'HOME' : 'INICIO'}</span>
              <span>{languageState === 'en' ? 'HOME' : 'INICIO'}</span>
              <span>{languageState === 'en' ? 'HOME' : 'INICIO'}</span>
            </div>
          </div>

          <div className={styles.divider} />
          <div className={styles.footerThanks}>
            <span className={styles.footerDate}>
              {languageState === 'en'
                ? 'THANKS FOR VISITING!'
                : '¡GRACIAS POR SU VISITA!'}
            </span>
            <div className={styles.nameText}>
              <span>Alberto Santiago</span>
              <span>Sánchez Cisneros</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
