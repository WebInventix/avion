import { ShieldLogo } from "./ShieldLogo";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 text-center">
      <div className="max-w-3xl w-full">

        {/* Shield Logo */}
        <div className="flex justify-center mb-6">
          <ShieldLogo />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide mb-3">
          Arvion
        </h1>

        {/* Tagline */}
        <p className="text-sm sm:text-base md:text-lg tracking-wide mb-6">
          Private Family Office & Strategic Holdings
        </p>

        {/* Decorative line */}
        <div className="w-16 h-px bg-primary mx-auto mb-6"></div>

        {/* Description */}
        <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-10">
          Arvion is a private holding entity established to manage, preserve,
          and govern family capital across generations. We do not solicit
          external investment or provide advisory services to the public.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="@arvion.us"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <span className="text-sm tracking-wider">LEARN MORE</span>
          </a>

          <a
            href="mailto:info@arvion.us"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <span className="text-sm tracking-wider">LEGAL DISCLOSURES</span>
          </a>
        </div>

      </div>
    </section>
  );
}
