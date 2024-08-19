import { SVGProps } from 'react';

interface GithubIconProps extends SVGProps<SVGSVGElement> {
  color: string;
}

export function GithubIcon({ color, ...props }: GithubIconProps) {
  return (
    <a
      style={{
        color: color || 'currentColor',
        display: 'flex',
        cursor: 'pointer',
        paddingBottom: '0.15rem',
      }}
      href="https://github.com/AlbertoSSC/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0.5em"
        height="0.5em"
        viewBox="0 0 24 24"
        role="img"
        aria-label="github icon"
        {...props}
      >
        <path
          fill={`${color || 'currentColor'}`}
          d="M20.116 5.901a4 4 0 0 0-.26-.31a4.4 4.4 0 0 0 .21-.76a5.3 5.3 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.5 12.5 0 0 0-3.35-.45a12.6 12.6 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.26 5.26 0 0 0-.35 2.77a4.2 4.2 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3a8 8 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.56 2.56 0 0 0-.77 1.39a4 4 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.7 5.7 0 0 0-1.834-2.413a1 1 0 0 1-.17-.112a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.5 4.5 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098l.004.268a1 1 0 0 0 1 1h4.714a1 1 0 0 0 1-1s.008-3.16.008-3.69a4 4 0 0 0-.13-1.09l-.002-.006l.004.006c-.009-.035-.022-.063-.032-.097a2.53 2.53 0 0 0-.74-1.293l.012.021l-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a8 8 0 0 0 .04-.85a5.23 5.23 0 0 0-1.11-3.3Z"
        />
      </svg>
    </a>
  );
}
