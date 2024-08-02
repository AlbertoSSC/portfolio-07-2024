import CopyIcon from '../../assets/images/icons/copy-icon.svg';
import ErathGlobeIcon from '../../assets/images/icons/internet-icon.svg';

export const ContactComponent: React.FC = () => {
  return (
    <section className="contact-container">
      <header className="contact-style">
        <h3 className="shape secondary">CONTACT</h3>
      </header>

      <main className="center-content contact-style">
        <div className="contact-content">
          <h4 className="contact-title">TO MEET ME OR PROPOSE A PROJECT</h4>
          <section className="contact-links">
            <a href="">
              ALBERTOSSC@GMAIL.COM
              <img src={CopyIcon} />
            </a>
            <a href="">
              LINKEDIN
              <img src={ErathGlobeIcon} />
            </a>
          </section>

          <section className="contact-description">
            <p>
              I'm open to new opportunities and projects. <br /> If you have
              something in mind and want to work together, don't hesitate,
              contact me!
            </p>
          </section>
        </div>
      </main>
    </section>
  );
};
