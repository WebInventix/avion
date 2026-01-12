import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const structurePrinciples = [
  {
    subtitle: "Philanthropic Institution",
    title: "The Junabys Foundation",
    logo: "/images/white-logo.svg",
    description:
      "The family's charitable foundation dedicated to strategic philanthropic initiatives and community impact. Governed under the Arvion mandate with independent operational authority.",
  },
  {
    subtitle: "Strategic Advisory",
    title: "Beytonix Group",
    logo: "/Beytonix_Horizontal_Black.png",
    description:
      "An advisory entity providing governance, capital markets, and restructuring expertise to select public corporations. Operates independently with alignment to Arvion principles.",
  },
];

const StructurePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-5 sm:pt-28 sm:pb-14 lg:pt-40 lg:pb-5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs sm:text-sm tracking-[0.25em] text-primary uppercase mb-5 sm:mb-6 block">
                Structure
              </span>

              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-5 sm:mb-6">
                Governance Framework
              </h1>

              <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-5 sm:py-14 lg:py-9">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="space-y-4 sm:space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Arvion serves as the unified governance layer across a network
                  of specialized entities. Each operates with the independence
                  required for effective execution while adhering to central
                  oversight.
                </p>

                <p className="text-sm text-foreground/80">
                  This structure enables operational autonomy within a framework
                  of aligned governance—each entity benefits from institutional
                  resources while maintaining distinct legal and operational
                  identity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Governed Entities */}
        <section className="py-14 sm:py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-xs sm:text-sm tracking-[0.25em] text-primary uppercase block">
                Governed Entities
              </span>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
              {structurePrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="text-center p-5 sm:p-6 lg:p-10 bg-card/50 border border-border/50"
                >
                  {principle.logo && (
                    <div className="mb-4 sm:mb-5 flex justify-center">
                      <Link
                        to="https://www.beytonix.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={principle.logo}
                          alt={principle.title + " Logo"}
                          className="h-14 sm:h-10 lg:h-20 object-contain brightness-0 invert"
                        />
                      </Link>
                    </div>
                  )}

                  <h3 className="font-serif text-sm sm:text-base text-foreground mb-1">
                    {principle.subtitle}
                  </h3>

                  <h3 className="font-serif text-lg lg:text-xl text-foreground mb-3">
                    {principle.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 sm:mt-10 text-muted-foreground text-xs sm:text-sm text-center leading-relaxed max-w-3xl mx-auto">
              Additional holdings and affiliations are maintained with
              appropriate discretion. The entities listed above represent
              primary governed holdings with public acknowledgment.
            </p>
          </div>
        </section>

        {/* Governance Note */}
        <section className="py-8 sm:py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mx-auto text-center max-w-3xl">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                The entities described operate as independent legal entities.
                Reference to governance relationship does not imply joint
                liability or combined operations. See{" "}
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

export default StructurePage;














// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { Shield, Lock, Eye } from "lucide-react";
// import { Link } from "react-router-dom";

// const structurePrinciples = [
//   {
//     subtitle: "Philanthropic Institution",
//     title: "The Junabys Foundation",
//     description:
//       "The family's charitable foundation dedicated to strategic philanthropic initiatives and community impact. Governed under the Arvion mandate with independent operational authority.",
//   },
//   {
//     subtitle: "Strategic Advisory",
//     title: "Beytonix Group",
//     logo: "/Beytonix_Horizontal_Black.png",
//     description:
//       "An advisory entity providing governance, capital markets, and restructuring expertise to select public corporations. Operates independently with alignment to Arvion principles.",
//   },
// ];

// const StructurePage = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       <main>
//         {/* Hero Section */}
//         <section className="pt-28 pb-14 lg:pt-40 lg:pb-5">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="max-w-4xl mx-auto text-center">
//               <span className="text-xs sm:text-sm tracking-[0.25em] text-primary uppercase mb-6 block">
//                 Structure
//               </span>

//               <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
//                 Governance Framework
//               </h1>

//               <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
//             </div>
//           </div>
//         </section>

//         {/* Overview Section */}
//         <section className="py-14 lg:py-9">
//           <div className="container mx-auto px-6 lg:px-10">
//             <div className="max-w-3xl mx-auto text-center">
//               <div className="space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
//                 <p>
//                   Arvion serves as the unified governance layer across a network
//                   of specialized entities. Each operates with the independence
//                   required for effective execution while adhering to central
//                   oversight.
//                 </p>

//                 <p className="text-sm text-foreground/80">
//                   This structure enables operational autonomy within a framework
//                   of aligned governance—each entity benefits from institutional
//                   resources while maintaining distinct legal and operational
//                   identity.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Governed Entities */}
//         <section className="py-16 lg:py-24 bg-secondary/30">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="text-center mb-14">
//               <span className="text-xs sm:text-sm tracking-[0.25em] text-primary uppercase block">
//                 Governed Entities
//               </span>
//             </div>

//             <div className="grid gap-8 lg:gap-12 max-w-5xl mx-auto">
//               {structurePrinciples.map((principle) => (
//                 <div
//                   key={principle.title}
//                   className="text-center p-6 lg:p-10 bg-card/50 border border-border/50"
//                 >
//                   {principle.logo && (
//                     <div className="mb-5 flex justify-center">
//                       <Link
//                         to="https://www.beytonix.com/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <img
//                           src={principle.logo}
//                           alt={principle.title + " Logo"}
//                           className="h-10 lg:h-14 object-contain brightness-0 invert"
//                         />
//                       </Link>
//                     </div>
//                   )}

//                   <h3 className="font-serif text-sm sm:text-base text-foreground mb-1">
//                     {principle.subtitle}
//                   </h3>

//                   <h3 className="font-serif text-lg lg:text-xl text-foreground mb-3">
//                     {principle.title}
//                   </h3>

//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     {principle.description}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <p className="mt-10 text-muted-foreground text-xs sm:text-sm text-center leading-relaxed max-w-3xl mx-auto">
//               Additional holdings and affiliations are maintained with
//               appropriate discretion. The entities listed above represent
//               primary governed holdings with public acknowledgment.
//             </p>
//           </div>
//         </section>

//         {/* Governance Note */}
//         <section className="py-10">
//           <div className="container mx-auto px-6 lg:px-12">
//             <div className="mx-auto text-center max-w-3xl">
//               <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
//                 The entities described operate as independent legal entities.
//                 Reference to governance relationship does not imply joint
//                 liability or combined operations. See{" "}
//                 <Link to="/legal" className="underline">
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


// export default StructurePage;
