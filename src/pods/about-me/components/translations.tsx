import globalStyles from '@/styles/global-styles.module.css';
import modalStyles from './modal.module.css';
import styles from '../aboutMe.module.css';

interface Props {
  languageSelected: 'en' | 'es';
}

export const AboutMeTranslations: React.FC<Props> = ({ languageSelected }) => {
  return languageSelected === 'en' ? (
    <>
      <h3>Personal</h3>

      <p>
        Hi! I’m Alberto Santiago Sánchez Cisneros, a front-end developer with a
        professional background that combines design, audiovisual production,
        and web development.
      </p>

      <p>
        I currently reside in my hometown of Málaga, a place I adore and
        consider ideal for living. However, I had the opportunity to live in
        Madrid for almost six years, and I am fully open to new opportunities
        that involve relocating anywhere, always ready to explore and enjoy new
        experiences.
      </p>

      <h3>Professional Background</h3>

      <p>
        During my student years, I worked at Burger King to finance my studies,
        where I learned many things, such as the value of teamwork and how a
        good work environment increases productivity. Although I received
        several offers for promotion to supervisor and later training to become
        a manager, I decided to continue with my studies. I pursued a Higher
        Degree in Audiovisual Technology and later a Degree in Advertising at
        the University of Málaga. After that, I moved to Madrid, where I worked
        as a video editor, graphic designer, and production assistant.
      </p>

      <p>
        These years gave me a great deal of experience where I managed teams,
        controlled project times and budgets, but they also made me realize that
        a sector where projects are short-term was not what I was looking for in
        the long run. This reflection led me to explore how I could transition
        my design profile into the digital world, especially in web
        applications. That’s how I discovered web development.
      </p>

      <p>
        I returned to Málaga and immersed myself in a bootcamp, where I learned
        JavaScript, which led me to complete a Master's in Web Application
        Development. I had the opportunity to work at a language learning
        startup, SoyGuiri, where I contributed to the development of an online
        campus and an intranet for managing courses, students, and teachers from
        scratch. Although the arrival of a new investor led to the closure of
        our department, the experience gave me a better understanding of the
        entire application development cycle and teamwork.
      </p>

      <h3>Current Endeavors</h3>

      <p>
        I am on a path of self-learning and continuous growth. I am developing
        applications as a freelancer and expanding my knowledge through a Full
        Stack Development course at the University of Helsinki. My goal is to
        join an organization where I can contribute and continue to grow as a
        professional.
      </p>

      <span className={modalStyles.closingQuote}>
        I am
        <span className={modalStyles.secondaryText}>full of energy</span>
        and motivation to take on new challenges and
        <span className={modalStyles.secondaryText}>give my best</span>
        in every project.
      </span>
    </>
  ) : (
    <>
      <h3>Personal</h3>

      <p>
        ¡Hola! Soy Alberto Santiago Sánchez Cisneros, un desarrollador front-end
        con una trayectoria profesional que combina el diseño, la producción
        audiovisual y el desarrollo web.
      </p>

      <p>
        Actualmente resido en mi ciudad natal, Málaga, un lugar que adoro y que
        considero ideal para vivir. Sin embargo, he tenido la oportunidad de
        residir en Madrid durante casi seis años, y estoy totalmente abierto a
        nuevas oportunidades que impliquen mudarme a cualquier lugar, siempre
        dispuesto a explorar y disfrutar de nuevas experiencias.
      </p>

      <h3>Trayectoria Profesional</h3>

      <p>
        Durante mis años de estudiante, trabajé en Burger King para costear mis
        estudios, donde aprendí muchas cosas, como el valor del trabajo en
        equipo y cómo un buen ambiente de trabajo aumenta la productividad.
        Aunque recibí varias ofertas de ascenso a encargado y posterior
        formación para gerente, decidí continuar con mis estudios. Así, cursé un
        Grado Superior en Técnico Audiovisual y, más tarde, un Grado en
        Publicidad en la Universidad de Málaga. Tras lo cual me mudé a Madrid,
        donde trabajé como montador de vídeo, diseñador gráfico y ayudante de
        producción.
      </p>

      <p>
        Estos años me brindaron una gran experiencia gestionando equipos,
        controlando tiempos y presupuestos de proyectos, pero también me
        hicieron darme cuenta de que un sector donde los proyectos son de corta
        duración no era lo que buscaba a largo plazo. Esta reflexión me llevó a
        investigar cómo podría trasladar mi perfil de diseño al mundo digital,
        especialmente en aplicaciones web. Así fue como descubrí el desarrollo
        web.
      </p>

      <p>
        Regresé a Málaga y me sumergí en un bootcamp, donde aprendí JavaScript,
        lo que me llevó a completar un Máster en Desarrollo de Aplicaciones Web.
        Tuve la oportunidad de trabajar en una startup de aprendizaje de
        idiomas, SoyGuiri, donde contribuí al desarrollo desde cero de un campus
        online y una intranet para la gestión de cursos, estudiantes y
        profesores. Aunque la llegada de un nuevo inversor provocó el cierre de
        nuestro departamento, la experiencia me brindó una mejor comprensión del
        ciclo completo de desarrollo de aplicaciones y la colaboración en
        equipo.
      </p>

      <h3>Actualidad</h3>

      <p>
        Me encuentro en un camino de autoaprendizaje y crecimiento continuo.
        Estoy desarrollando aplicaciones como freelancer y ampliando mis
        conocimientos a través de un curso de Full Stack Development en la
        Universidad de Helsinki. Mi objetivo es integrarme en una organización
        donde pueda contribuir y seguir creciendo como profesional.
      </p>

      <span className={modalStyles.closingQuote}>
        Estoy
        <span className={modalStyles.secondaryText}>lleno de energía</span>y
        motivación para enfrentar nuevos retos y
        <span className={modalStyles.secondaryText}>dar lo mejor</span>
        de mí en cada proyecto.
      </span>
    </>
  );
};

export const resumeAboutMeTranslations = {
  en: "Hello! I'm Alberto, a front-end developer with a background in design and audio-visual production, enabling me to creatively transform ideas into reality.",
  es: '¡Hola! Soy Alberto, un desarrollador front-end con experiencia en diseño y producción audiovisual, lo que me permite transformar las ideas en realidad de manera creativa.',
};

export const CallToActionAboutMeTranslations: React.FC<Props> = ({
  languageSelected,
}) => {
  return languageSelected === 'en' ? (
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
  );
};
