import React from 'react';

import burguer from '@/assets/images/Burguer.webp';
import clapper from '@/assets/images/vectorAdClapperclaqueta_3.webp';
import devui from '@/assets/images/devUI.webp';

import { useAboutMeTranslations } from './translations.hook';
import { SectionTagTitle } from '@/common/components/section-Tag-Title';
import { Button } from '@/common';

import styles from './modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  languageSelected: 'en' | 'es';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, languageSelected }) => {
  const { personal, professionalBackground, currentEndeavors } =
    useAboutMeTranslations();

  if (!isOpen) return null;

  const images = [burguer, clapper, devui];
  const imagesAlt = ['buguer', 'clapper', 'developer UI'];

  return (
    <div className={styles.overlay}>
      <article className={`${styles.modal}`}>
        <div className={styles.imageBg}>
          <div className={styles.paddingStyle}>
            <button className={styles.closeButton} onClick={onClose}>
              &times;
            </button>

            <section className={styles.content}>
              <SectionTagTitle
                languageSelected={languageSelected}
                labelEn="PERSONAL"
                labelEs="PERSONAL"
              />

              <p>{personal[languageSelected]}</p>
            </section>

            <section className={styles.content}>
              <SectionTagTitle
                languageSelected={languageSelected}
                labelEn="PROFESSIONAL BACKGROUND"
                labelEs="TRAYECTORIA PROFESIONAL"
              />

              {professionalBackground[languageSelected].map((text, index) => (
                <div
                  key={`professionalBackground-${index}`}
                  className={`${styles.styledParagraph} ${
                    index % 2 !== 0 ? styles.reverseParagraph : ''
                  }`}
                >
                  <img
                    src={images[index]}
                    alt={imagesAlt[index]}
                    className={styles[`imageClass${index}`]}
                  />
                  <div className={styles.outlinedParagraph}>
                    <p>
                      {text.split('\n').map((line, subIndex) => (
                        <React.Fragment key={subIndex}>
                          {line}
                          {subIndex < text.split('\n').length - 1 && (
                            <span className={styles.lineBreak}>
                              <br />
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </section>

            <section className={styles.content}>
              <SectionTagTitle
                languageSelected={languageSelected}
                labelEn="CURRENT ENDEAVORS"
                labelEs="ACTUALIDAD"
              />
              <p>{currentEndeavors[languageSelected]}</p>
            </section>

            <section>
              {languageSelected === 'en' ? (
                <span className={styles.closingQuote}>
                  I am
                  <span className={styles.secondaryText}>full of energy</span>
                  and motivation to take on new challenges and
                  <span className={styles.secondaryText}>give my best</span>
                  in every project.
                </span>
              ) : (
                <span className={styles.closingQuote}>
                  Estoy
                  <span className={styles.secondaryText}>lleno de energía</span>
                  y motivación para enfrentar nuevos retos y
                  <span className={styles.secondaryText}>dar lo mejor</span>
                  de mí en cada proyecto.
                </span>
              )}
            </section>

            <div className={styles.closeButtonContainer}>
              <Button
                label={languageSelected === 'en' ? 'CLOSE' : 'CERRAR'}
                color="white"
                onClick={onClose}
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Modal;
