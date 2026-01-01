export function ShieldLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Shield outline */}
        <path
          d="M50 5L10 25V55C10 80 30 100 50 115C70 100 90 80 90 55V25L50 5Z"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          fill="none"
          className="opacity-60"
        />
        
        {/* Inner shield */}
        <path
          d="M50 15L20 30V55C20 75 35 90 50 102C65 90 80 75 80 55V30L50 15Z"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          fill="none"
          className="opacity-30"
        />

        {/* Letter A */}
        <text
          x="50"
          y="68"
          textAnchor="middle"
          className="font-serif text-3xl fill-foreground"
          style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px' }}
        >
          A
        </text>

        {/* Decorative dots */}
        <circle cx="30" cy="50" r="2" fill="hsl(var(--primary))" className="opacity-40" />
        <circle cx="70" cy="50" r="2" fill="hsl(var(--primary))" className="opacity-40" />
        <circle cx="50" cy="85" r="2" fill="hsl(var(--accent))" className="opacity-60" />
      </svg>
    </div>
  );
}
