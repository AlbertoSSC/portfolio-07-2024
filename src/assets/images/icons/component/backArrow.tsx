import type { SVGProps } from 'react';

export function ArrowGoBack(props: SVGProps<SVGSVGElement>) {
  const { color, rotate = 0 } = props;

  return (
    <div
      style={{
        transform: `rotate(${rotate}deg) translateY(1px)`,
        transition: 'transform 0.5s ease',
        paddingRight: '0.5rem',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
        <path
          fill={color}
          fillRule="evenodd"
          d="m2.87 7.75l1.97 1.97a.75.75 0 1 1-1.06 1.06L.53 7.53L0 7l.53-.53l3.25-3.25a.75.75 0 0 1 1.06 1.06L2.87 6.25h9.88a3.25 3.25 0 0 1 0 6.5h-2a.75.75 0 0 1 0-1.5h2a1.75 1.75 0 1 0 0-3.5z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}
