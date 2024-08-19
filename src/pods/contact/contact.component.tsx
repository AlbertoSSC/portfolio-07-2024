import React from 'react';

import { copyToClipboard } from '@/common/components/copy-to-clipBoard';

import CopyIcon from '../../assets/images/icons/copy-icon.svg';
import ErathGlobeIcon from '../../assets/images/icons/internet-icon.svg';

import globalStyles from '@/styles/global-styles.module.css';
import styles from './contact.module.css';

export const ContactComponent: React.FC = () => {
  const [showPopover, setShowPopover] = React.useState(false);

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

            {showPopover && <div className={globalStyles.popover}>EMAIL COPIED!</div>}
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
