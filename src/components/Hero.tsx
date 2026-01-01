import { ShieldLogo } from "./ShieldLogo";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Shield Logo */}
          <div className="animate-fade-in mb-8 lg:mb-12">
            <ShieldLogo className="w-24 h-28 lg:w-32 lg:h-36 mx-auto glow-purple" />
          </div>

          {/* Title */}
          <h1 className="animate-fade-in-delay font-serif text-5xl lg:text-7xl xl:text-8xl tracking-[0.2em] text-foreground font-normal mb-6">
            Arvion
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-delay-2 font-serif text-lg lg:text-xl xl:text-2xl italic text-gradient-gold mb-8">
            Private Family Office & Strategic Holdings
          </p>

          {/* Decorative line */}
          <div className="animate-fade-in-delay-2 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10" />

          {/* Description */}
          <p className="animate-fade-in-delay-3 text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Arvion is a private holding entity established to manage, preserve, and govern 
            family capital across generations. We do not solicit external investment or 
            provide advisory services to the public.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-delay-3">
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
}
