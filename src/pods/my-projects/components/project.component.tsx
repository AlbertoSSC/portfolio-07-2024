interface Props {
  title01: string;
  title02: string;
  description: string;
  images: string[];
  reverse?: boolean;
}

export const ProjectComponent: React.FC<Props> = props => {
  const {
    title01 = 'title 01',
    title02 = 'title02',
    description = 'description goes here',
    images,
    reverse,
  } = props;

  return (
    <div className="project-display  blue-bg">
      <div
        className={`white-shape ${
          reverse ? 'reverse-project-display' : ''
        }`}
      >
        <section className="content-project">
          <div>
            <h4 style={{ color: 'black' }}>{title01}</h4>
            <h4 style={{ color: 'black' }}>{title02}</h4>
          </div>

          <p style={{ color: 'black' }}>{description}</p>
        </section>

        <section className="project-images">
          {images!.map((image, index) => {
            return <img key={`image ${index}`} src={image} alt="work-01" />;
          })}
        </section>
      </div>
    </div>
  );
};
