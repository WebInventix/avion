interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 220 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ height: '32px', width: 'auto' }}
    >
      {/* Circle with B */}
      <g>
        <circle cx="20" cy="20" r="18" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
        <path d="M14 12 L14 28 M14 12 L19 12 C21.5 12 23 13.5 23 16 C23 17.5 22 18.5 20.5 19 C22.5 19.5 24 21 24 23 C24 25.5 22 27 19.5 27 L14 27 M14 19.5 L19 19.5 M14 12 L19 12" 
          stroke="black" 
          strokeWidth="2.5" 
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      
      {/* Beytonix Text */}
      <text 
        x="48" 
        y="28" 
        fontFamily="Georgia, serif" 
        fontSize="24" 
        fontWeight="bold" 
        fill="currentColor" 
        letterSpacing="-0.5"
      >
        Beytonix
      </text>
    </svg>
  );
}
