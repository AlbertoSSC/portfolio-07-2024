import { Tag } from '@/common';

export const AboutTags = () => {
  return (
    <div className="tags-container">
      <div className="tag-row">
        <Tag label="FRONT-END" style="secondary" />
        <Tag label="UI-DESIGN" style="secondary" />
      </div>

      <div className="tag-row">
        <Tag label="RWD" style="primary" />
        <Tag label="PWA" style="primary" />
        <Tag label="SPA" style="primary" />
      </div>

      <div className="tag-row">
        <Tag label="HTML" style="primary" />
        <Tag label="CSS" style="primary" />
        <Tag label="JavaScript" style="primary" />
        <Tag label="TypeScript" style="primary" />
      </div>

      <div className="tag-row">
        <Tag label="Figma" style="primary" />
        <Tag label="Git" style="primary" />
        <Tag label="GitHub" style="primary" />
      </div>

      <div className="tag-row">
        <Tag label="Accessibility" style="primary" />
        <Tag label="Testing" style="primary" />
      </div>
    </div>
  );
};
