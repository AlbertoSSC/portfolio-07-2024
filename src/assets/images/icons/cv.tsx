import type { SVGProps } from 'react';

interface UserCurriculumProps extends SVGProps<SVGSVGElement> {
  color: string;
}

export function UserCurriculum({ color, ...props }: UserCurriculumProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...props}>
      <g fill="none" stroke={color} strokeLinecap="round">
        <path
          strokeLinejoin="round"
          d="M4.098 3.65a1.15 1.15 0 1 0 2.3 0a1.15 1.15 0 0 0-2.3 0"
        ></path>
        <path
          strokeLinejoin="round"
          d="M3.5 5.94a2.2 2.2 0 0 1 .746-.834c.306-.2.652-.304 1.003-.304s.697.104 1.003.304c.307.199.563.486.746.834"
        ></path>
        <path
          strokeLinejoin="round"
          d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"
        ></path>
        <path d="M3.5 8.5h7m-7 2.5h4"></path>
      </g>
    </svg>
  );
}
