import type { SVGProps } from 'react';

export function ArrowUp(props: SVGProps<SVGSVGElement>) {
  const { color, rotate = 0 } = props;

  return (
    <div
      style={{
        transform: `rotate(${rotate}deg)`,
        transition: 'transform 0.5s ease',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path
          fill={color}
          d="m13 5.586l-4.707 4.707a.999.999 0 1 0 1.414 1.414L12 9.414V17a1 1 0 1 0 2 0V9.414l2.293 2.293a.997.997 0 0 0 1.414 0a.999.999 0 0 0 0-1.414z"
        ></path>
      </svg>
    </div>
  );
}
