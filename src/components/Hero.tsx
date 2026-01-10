import { ShieldLogo } from "./ShieldLogo";

export function Hero() { return ( <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"> {/* Subtle background gradient */} <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

  {/* Content */}
  <div className="container mx-auto px-6 lg:px-12 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      {/* Shield Logo */}
      <div className="animate-fade-in mb-8 lg:mb-12">
        <ShieldLogo className="w-24 h-28 lg:w-32 lg:h-36 mx-auto glow-purple" />
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-6 leading-tight">
        Arvion
      </h1>

      {/* Tagline */}
      <p className="animate-fade-in-delay-2 font-serif text-lg lg:text-1xl xl:text-1xl italic text-gradient-gold mb-8">
        Private Family Office & Strategic Holdings
      </p>

      {/* Decorative line */}
      <div className="animate-fade-in-delay-2 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10" />

      {/* Description */}
      <p className="animate-fade-in-delay-3 text-muted-foreground text-base lg:text-1xl max-w-2xl mx-auto leading-relaxed">
        Arvion is a private holding entity established to manage, preserve,
        and govern family capital across generations. We do not solicit
        external investment or provide advisory services to the public.
      </p>
      <br />
      <br />
      <div className="flex justify-center items-center gap-5">
        <a
          href="mailto:info@arvion.us"
          className="inline-flex items-center gap-3 px-8 py-4 border border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
        >
          <span className="text-foreground tracking-wider text-sm">
            LEARN MORE
          </span>
        </a>
        <a
          href="mailto:info@arvion.us"
          className="inline-flex items-center gap-3 px-8 py-4 border border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
        >
          <span className="text-foreground tracking-wider text-sm">
            LEGAL DISCLOSURES
          </span>
        </a>
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-delay-3">
    <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
  </div>
</section>
); }