import React from 'react';
import { SVGProps } from 'react';

import { copyToClipboard } from '@/common/components/copy-to-clipBoard';

import globalStyles from '@/styles/global-styles.module.css';

interface Props extends SVGProps<SVGSVGElement> {
  color: string;
}

export function MailIcon({ color, ...props }: Props) {
  const [showPopover, setShowPopover] = React.useState(false);

  return (
    <a
      href="#"
      style={{
        position: 'relative',
        color: color || 'currentColor',
        display: 'flex',
        cursor: 'pointer',
      }}
      onClick={e => {
        e.preventDefault();
        copyToClipboard('ALBERTOSSC@GMAIL.COM', setShowPopover);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 100 100"
        role="img"
        aria-label="email icon"
        {...props}
      >
        <path
          fill={`${color || 'currentColor'}`}
          d="M85.944 20.189H14.056a2.56 2.56 0 0 0-2.556 2.557v5.144c0 .237.257.509.467.619l37.786 21.583a.63.63 0 0 0 .318.083a.63.63 0 0 0 .324-.088L87.039 28.53c.206-.115.752-.419.957-.559c.248-.169.504-.322.504-.625v-4.601a2.56 2.56 0 0 0-2.556-2.556m2.237 15.457a.64.64 0 0 0-.645.004L66.799 47.851a.637.637 0 0 0-.145.985l20.74 22.357a.63.63 0 0 0 .467.204a.64.64 0 0 0 .639-.639V36.201a.64.64 0 0 0-.319-.555M60.823 51.948a.636.636 0 0 0-.791-.118l-8.312 4.891a3.24 3.24 0 0 1-3.208.021l-7.315-4.179a.64.64 0 0 0-.751.086L12.668 78.415a.64.64 0 0 0 .114 1.02c.432.254.849.375 1.273.375h71.153a.64.64 0 0 0 .585-.385a.64.64 0 0 0-.118-.689zm-26.489-2.347a.64.64 0 0 0-.115-1.023L12.453 36.146a.638.638 0 0 0-.953.556v32.62a.637.637 0 0 0 1.073.468z"
        />
      </svg>
      {showPopover && (
        <div
          id="copyHeaderMail"
          className={`${globalStyles.popover} ${globalStyles.copyHeaderMail}`}
        >
          EMAIL COPIED!
        </div>
      )}
    </a>
  );
}
