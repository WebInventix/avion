import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const structurePrinciples = [
  {
    subtitle: "Philanthropic Institution",
    title: "The Junabys Foundation",
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
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm tracking-[0.2em] text-primary uppercase mb-6 block animate-fade-in">
                Structure
              </span>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-8 animate-fade-in-delay">
                Governance Framework
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-fade-in-delay-2" />
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Arvion serves as the unified governance layer across a network
                  of specialized entities. Each operates with the independence
                  required for effective execution while adhering to central
                  oversight.
                </p>
                <p>
                  This structure enables operational autonomy within a framework
                  of aligned governance—each entity benefits from institutional
                  resources while maintaining distinct legal and operational
                  identity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Central Entity */}
        {/* <section className="py-12">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-8 border-2 border-primary/50 bg-card/50">
                <span className="font-serif text-2xl text-foreground tracking-wider">
                  ARVION
                </span>
                <p className="text-sm text-muted-foreground mt-2">
                  Principal Governance Entity
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Principles Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.2em] text-primary uppercase block">
                Governed Entities
              </span>
            </div>

            <div className="grid md:grid-cols-1 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {structurePrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="group text-center p-8 lg:p-10 bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500"
                >
                  {/* Logo (only renders if exists) */}
                  {principle.logo && (
                    <div className="mb-6 flex justify-center">
                      <Link
                        to={"https://www.beytonix.com/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={principle.logo}
                          alt={principle.title + " Logo"}
                          className="h-12 lg:h-16 object-contain brightness-0 invert"
                        />
                      </Link>
                    </div>
                  )}

                  <h3 className="font-serif text-lg lg:text-2xl text-foreground mb-2">
                    {principle.subtitle}
                  </h3>

                  <h3 className="font-serif text-xl lg:text-1xl text-foreground mb-4">
                    {principle.title}
                  </h3>

                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
            <br />
            {/* <div className="container border-b border-border/30 last:border-b-0 mx-auto mx-6 max-w-5xl mx-auto"></div> */}
            <br />
            <p className="text-muted-foreground text-sm text-center">
              Additional holdings and affiliations are maintained with
              appropriate discretion. The entities listed above <br /> represent
              primary governed holdings with public acknowledgment.
            </p>
          </div>
        </section>

        {/* Governance Note */}
        <section className="py-10 lg:py-10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto text-center">
              <p className="text-sm">
                The entities described operate as independent legal entities.
                Reference to governance relationship does not imply joint <br />
                liability or combined operations. See{" "}
                <Link to={"/legal"} className="underline">
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
