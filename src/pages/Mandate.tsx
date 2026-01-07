import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const mandatePrinciples = [
  {
    icon: Shield,
    title: "Governance",
    description:
      "Institutional oversight of holdings and strategic direction across all entities.",
  },
  {
    icon: Lock,
    title: "Preservation",
    description:
      "Capital protection and risk management designed for multi-generational continuity.",
  },
  {
    icon: Eye,
    title: "Discretion",
    description:
      "Absolute confidentiality in all matters. No public disclosure of holdings or principals.",
  },
];

const MandatePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm tracking-[0.2em] text-primary uppercase mb-6 block animate-fade-in">
                Mandate
              </span>
              <h1 className="font-serif text-4xl lg:text-4xl xl:text-4xl text-foreground mb-8 animate-fade-in-delay">
                <span>Scope of Responsibility</span>
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-fade-in-delay-2" />
              <p className="text-sm mt-12">
                The office maintains authority over the following areas of
                strategic importance to <br /> the principals.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding lg:py-24">
          <div className="container">
            <div className="space-y-0">
              <div className="border-b border-border/30 last:border-b-0 py-12 first:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                  <div className="lg:col-span-1">
                    <span className="text-sm text-muted-foreground/50 font-mono">
                      01
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-1xl text-subheading font-serif text-foreground">
                      Capital Stewardship
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Preservation and prudent management of principal through
                      disciplined allocation and rigorous risk assessment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-b border-border/30 last:border-b-0 py-12 first:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                  <div className="lg:col-span-1">
                    <span className="text-sm text-muted-foreground/50 font-mono">
                      02
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-1xl text-subheading font-serif text-foreground">
                      Holdings Oversight
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Governance and strategic direction of operating entities,
                      real property, and financial instruments within the
                      portfolio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-b border-border/30 last:border-b-0 py-12 first:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                  <div className="lg:col-span-1">
                    <span className="text-sm text-muted-foreground/50 font-mono">
                      03
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-1xl text-subheading font-serif text-foreground">
                      Succession Planning
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Development of frameworks, documentation, and education
                      programs to ensure orderly transition across generations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-b border-border/30 last:border-b-0 py-12 first:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                  <div className="lg:col-span-1">
                    <span className="text-sm text-muted-foreground/50 font-mono">
                      04
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-1xl text-subheading font-serif text-foreground">
                      Risk Management
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Identification and mitigation of financial, operational,
                      legal, and reputational risks across all holdings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-b border-border/30 last:border-b-0 py-12 first:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                  <div className="lg:col-span-1">
                    <span className="text-sm text-muted-foreground/50 font-mono">
                      05
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-1xl text-subheading font-serif text-foreground">
                      Philanthropic Direction
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Strategic oversight of charitable activities and
                      foundation governance in alignment with family values.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-b border-border/30 last:border-b-0"></div>

        {/* Quote Section */}
        <section className="py-10 lg:py-10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="text-heading text-1xl font-serif text-foreground italic">
                "We do not optimize for the next quarter. We optimize for the
                next
                <br />
                century."
              </blockquote>
              <br />
              <br />
              <div className="w-16 h-px bg-primary/50 mx-auto" />
            </div>
          </div>
        </section>

        <div className="border-b border-border/30 last:border-b-0"></div>

        {/* Closing Statement */}
        <section className="py-10 lg:py-10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto text-center">
              <p className="text-sm">
                The scope of mandate described herein applies exclusively to
                internal operations and does not constitute an offer of
                services. <br /> See{" "}
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

export default MandatePage;
