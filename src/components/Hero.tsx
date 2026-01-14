// import { ShieldLogo } from "./ShieldLogo";
import Logo from "../../public/images/white-logo.svg"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Shield Logo */}
          <div className="animate-fade-in mb-5 sm:mb-8 lg:mb-5">
            {/* <ShieldLogo className="w-20 h-24 sm:w-24 sm:h-28 lg:w-32 lg:h-36 mx-auto glow-purple" /> */}
            <img src={Logo} alt="ShieldLogo" className="w-48 h-auto md:w-48 md:h-90 lg:w-48 lg:h-90 mx-auto"/>
          </div>

          {/* Title */}
          {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-4 sm:mb-6 leading-tight">
            Arvion
          </h1> */}

          {/* Tagline */}
          <p className="animate-fade-in-delay-2 font-serif text-base sm:text-lg lg:text-xl italic text-gradient-gold mb-6 sm:mb-8">
            Private Family Office & Strategic Holdings
          </p>

          {/* Decorative line */}
          <div className="animate-fade-in-delay-2 w-20 sm:w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 sm:mb-10" />

          {/* Description */}
          <p className="animate-fade-in-delay-3 text-muted-foreground text-sm sm:text-base lg:text-1xl max-w-2xl mx-auto leading-relaxed px-1">
            Arvion is a private holding entity established to manage, preserve,
            and govern family capital across generations. We do not solicit
            external investment or provide advisory services to the public.
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
            <a
              href="mailto:info@arvion.us"
              className="inline-flex justify-center items-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <span className="text-foreground tracking-wider text-sm">
                LEARN MORE
              </span>
            </a>

            <a
              href="mailto:info@arvion.us"
              className="inline-flex justify-center items-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <span className="text-foreground tracking-wider text-sm">
                LEGAL DISCLOSURES
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (hide on very small screens optional) */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-delay-3 hidden sm:block">
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
}












// import { ShieldLogo } from "./ShieldLogo";

// export function Hero() { return ( <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"> {/* Subtle background gradient */} <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

//   {/* Content */}
//   <div className="container mx-auto px-6 lg:px-12 relative z-10">
//     <div className="max-w-4xl mx-auto text-center">
//       {/* Shield Logo */}
//       <div className="animate-fade-in mb-8 lg:mb-12">
//         <ShieldLogo className="w-24 h-28 lg:w-32 lg:h-36 mx-auto glow-purple" />
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-6 leading-tight">
//         Arvion
//       </h1>

//       {/* Tagline */}
//       <p className="animate-fade-in-delay-2 font-serif text-lg lg:text-1xl xl:text-1xl italic text-gradient-gold mb-8">
//         Private Family Office & Strategic Holdings
//       </p>

//       {/* Decorative line */}
//       <div className="animate-fade-in-delay-2 w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10" />

//       {/* Description */}
//       <p className="animate-fade-in-delay-3 text-muted-foreground text-base lg:text-1xl max-w-2xl mx-auto leading-relaxed">
//         Arvion is a private holding entity established to manage, preserve,
//         and govern family capital across generations. We do not solicit
//         external investment or provide advisory services to the public.
//       </p>
//       <br />
//       <br />
//       <div className="flex justify-center items-center gap-5">
//         <a
//           href="mailto:info@arvion.us"
//           className="inline-flex items-center gap-3 px-8 py-4 border border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
//         >
//           <span className="text-foreground tracking-wider text-sm">
//             LEARN MORE
//           </span>
//         </a>
//         <a
//           href="mailto:info@arvion.us"
//           className="inline-flex items-center gap-3 px-8 py-4 border border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
//         >
//           <span className="text-foreground tracking-wider text-sm">
//             LEGAL DISCLOSURES
//           </span>
//         </a>
//       </div>
//     </div>
//   </div>

//   {/* Scroll indicator */}
//   <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-delay-3">
//     <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
//   </div>
// </section>
// ); }