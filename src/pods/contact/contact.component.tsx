import React from 'react';

import CopyIcon from '../../assets/images/icons/copy-icon.svg';
import ErathGlobeIcon from '../../assets/images/icons/internet-icon.svg';

import globalStyles from '@/styles/global-styles.module.css';
import styles from './contact.module.css';

export const ContactComponent: React.FC = () => {
  const [showPopover, setShowPopover] = React.useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text.toLowerCase()).then(
      () => {
        console.log('Text copied to clipboard');
        setShowPopover(true);
        setTimeout(() => setShowPopover(false), 2000);
      },
      err => {
        console.error('Could not copy text: ', err);
      }
    );
  };

  return (
    <section
      className={`${globalStyles.componentContainer} ${styles.contactContainer}`}
    >
      <header className={styles.contactStyle}>
        <h3
          className={`${globalStyles.sectionTitleShape} ${globalStyles.secondary}`}
        >
          CONTACT
        </h3>
      </header>

      <main className={`${globalStyles.centerContent} ${styles.contactStyle}`}>
        <div className={styles.contactContent}>
          <h4 className={styles.contactTitle}>
            TO MEET ME OR PROPOSE A PROJECT
          </h4>
          <section className={styles.contactLinks}>
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                copyToClipboard('ALBERTOSSC@GMAIL.COM');
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

            {showPopover && <div className={styles.popover}>EMAIL COPIED!</div>}
          </section>

          <section className={styles.contactDescription}>
            <p>I'm open to new opportunities and projects. </p>
            <p>
              If you have something in mind and want to work together, don't
              hesitate, contact me!
            </p>
          </section>
        </div>
      </main>
    </section>
  );
};
