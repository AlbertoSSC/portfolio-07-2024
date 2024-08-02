import { Tag } from '@/common';

export const AboutTags = () => {
  return (
    <section className="tags-container">
      <div className="tag-row">
        <Tag label="FRONT-END" style="secondary" />
        <Tag label="UI-DESIGN" style="secondary" />
      </div>

      <div className="tag-row">
        <Tag label="HTML" style="primary" />
        <Tag label="CSS" style="primary" />
        <Tag label="JavaScript" style="primary" />
        <Tag label="TypeScript" style="primary" />
      </div>

      <div className="tag-row">
        <Tag label="Figma" style="primary" />
        <Tag label="Git & GitHub" style="primary" />
        <Tag label="Accessibility" style="primary" />
        <Tag label="Testing" style="primary" />
      </div>
    </section>
  );
};
