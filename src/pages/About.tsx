import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// import { ShieldLogo } from "@/components/ShieldLogo";
import { Link } from "react-router-dom";
import Logo from "../../public/images/white-logo.svg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-36 sm:pt-32 pb-0 sm:pb-16 lg:pt-40 lg:pb-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs sm:text-sm tracking-[0.2em] text-primary uppercase mb-4 sm:mb-6 block animate-fade-in">
                About
              </span>

              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6 sm:mb-8 animate-fade-in-delay">
                Private Family Office
              </h1>

              <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-fade-in-delay-2" />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-5 sm:py-16 lg:py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                {/* <ShieldLogo className="w-16 h-20 sm:w-20 sm:h-24 mx-auto glow-purple" /> */}
                <img
                  src={Logo}
                  alt="Arvion Logo"
                  className="mx-auto w-40 sm:w-40 md:w-40 h-auto object-contain"
                />
              </div>

              <div className="space-y-6 sm:space-y-8 text-center">
                <p className="text-base sm:text-lg font-serif leading-relaxed text-muted-foreground">
                  Arvion is a single-family office established to manage,
                  preserve, and govern the capital, holdings, and strategic
                  interests of our principals.
                </p>

                <p className="text-base sm:text-lg font-serif leading-relaxed text-muted-foreground">
                  We are not an investment fund. We do not accept outside
                  capital. We do not provide advisory services to third parties.
                  Our sole obligation is to the family we serve.
                </p>

                <p className="text-base sm:text-lg font-serif leading-relaxed text-muted-foreground">
                  The office provides centralized oversight of diverse holdings
                  including operating companies, real assets, financial
                  instruments, and philanthropic initiatives.
                </p>

                <p className="text-base sm:text-lg font-serif leading-relaxed text-muted-foreground">
                  Our approach emphasizes preservation over speculation,
                  stability over growth, and discretion above all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground text-center mb-10 sm:mb-16">
                Guiding Principles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                {[
                  {
                    title: "Principal Alignment",
                    description:
                      "All decisions are made in the exclusive interest of the principals. No external shareholders. No conflicting mandates.",
                  },
                  {
                    title: "Institutional Permanence",
                    description:
                      "Structures designed to endure. Governance frameworks built for decades, not quarters.",
                  },
                  {
                    title: "Deliberate Action",
                    description:
                      "We move with intention. Speed is subordinate to diligence and thorough analysis.",
                  },
                  {
                    title: "Absolute Confidentiality",
                    description:
                      "Complete discretion in all matters. No public disclosure of holdings, transactions, or principals.",
                  },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="p-6 sm:p-8 border border-border/50 bg-card/30"
                  >
                    <h3 className="font-serif text-base sm:text-lg text-foreground mb-3 sm:mb-4">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-12 sm:py-16 lg:py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Arvion Holdings is a private entity. Nothing on this website
                constitutes an offer, solicitation, or recommendation. See{" "}
                <Link to="/legal" className="underline">
                  full disclosures.
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { ShieldLogo } from "@/components/ShieldLogo";
// import { Link } from "react-router-dom";
// const AboutPage = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         {/* Hero Section */}
//         <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="max-w-4xl mx-auto text-center">
//               <span className="text-sm tracking-[0.2em] text-primary uppercase mb-6 block animate-fade-in">
//                 About
//               </span>
//               <h1 className="font-serif text-4xl lg:text-4xl xl:text-4xl text-foreground mb-8 animate-fade-in-delay">
//                 {/* A Legacy of <span className="text-gradient-gold">Stewardship</span> */}
//                 Private Family Office
//               </h1>
//               <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-fade-in-delay-2" />
//             </div>
//           </div>
//         </section>

//         {/* Philosophy Section */}
//         <section className="py-16 lg:py-10">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="max-w-3xl mx-auto">
//               <div className="text-center mb-12">
//                 <ShieldLogo className="w-20 h-24 mx-auto glow-purple" />
//               </div>

//               <div className="space-y-8 text-center">
//                 <p className="text-lg font-serif leading-relaxed text-foreground mb-6 text-muted-foreground">
//                   Arvion is a single-family office established to manage,
//                   preserve, and govern the capital, <br /> holdings, and
//                   strategic interests of our principals.
//                 </p>

//                 <p className="text-1xl font-serif leading-relaxed text-foreground mb-6 text-muted-foreground">
//                   We are not an investment fund. We do not accept outside
//                   capital. We do not provide advisory services <br /> to third
//                   parties. Our sole obligation is to the family we serve.
//                 </p>

//                 <p className="text-1xl font-serif leading-relaxed text-foreground mb-6 text-muted-foreground">
//                   The office provides centralized oversight of diverse holdings
//                   including operating companies, real assets, financial
//                   instruments, and philanthropic initiatives. Each entity
//                   operates independently while remaining aligned with the
//                   governance framework established by Arvion.
//                 </p>

//                 <p className="text-1xl font-serif leading-relaxed text-foreground mb-6 text-muted-foreground">
//                   Our approach emphasizes preservation over speculation,
//                   stability over growth, and discretion above all.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Values Section */}
//         <section className="py-16 lg:py-24 bg-secondary/30">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="max-w-4xl mx-auto">
//               <h2 className="font-serif text-3xl lg:text-3xl text-foreground text-center mb-16">
//                 Guiding Principles
//               </h2>

//               <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//                 {[
//                   {
//                     title: "Principal Alignment",
//                     description:
//                       "All decisions are made in the exclusive interest of the principals. No external shareholders. No conflicting mandates.",
//                   },
//                   {
//                     title: "Institutional Permanence",
//                     description:
//                       "Structures designed to endure. Governance frameworks built for decades, not quarters.",
//                   },
//                   {
//                     title: "Deliberate Action",
//                     description:
//                       "We move with intention. Speed is subordinate to diligence and thorough analysis.",
//                   },
//                   {
//                     title: "Absolute Confidentiality",
//                     description:
//                       "Complete discretion in all matters. No public disclosure of holdings, transactions, or principals.",
//                   },
//                 ].map((value) => (
//                   <div
//                     key={value.title}
//                     className="p-8 border border-border/50 bg-card/30"
//                   >
//                     <h3 className="font-serif text-lg text-foreground mb-4">
//                       {value.title}
//                     </h3>
//                     <p className="text-sm text-muted-foreground leading-relaxed">
//                       {value.description}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Closing Statement */}
//         <section className="py-16 lg:py-10">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="max-w-2xl mx-auto text-center">
//               <p className="text-sm">
//                 Arvion Holdings is a private entity. Nothing on this website
//                 constitutes an offer, solicitation, or recommendation. See{" "}
//                 <Link to={"/legal"} className="underline">
//                   full disclosures.
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default AboutPage;
