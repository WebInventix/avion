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
        <section className="pt-40 sm:pt-32 pb-12 sm:pb-16 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs sm:text-sm tracking-[0.2em] text-primary uppercase mb-4 sm:mb-6 block animate-fade-in">
                Mandate
              </span>

              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6 sm:mb-8 animate-fade-in-delay">
                <span>Scope of Responsibility</span>
              </h1>

              <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-fade-in-delay-2" />

              <p className="text-xs sm:text-sm mt-8 sm:mt-12 text-muted-foreground">
                The office maintains authority over the following areas of
                strategic importance to the principals.
              </p>
            </div>
          </div>
        </section>

        {/* Mandate List */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="space-y-0">
              {[
                {
                  number: "01",
                  title: "Capital Stewardship",
                  text:
                    "Preservation and prudent management of principal through disciplined allocation and rigorous risk assessment.",
                },
                {
                  number: "02",
                  title: "Holdings Oversight",
                  text:
                    "Governance and strategic direction of operating entities, real property, and financial instruments within the portfolio.",
                },
                {
                  number: "03",
                  title: "Succession Planning",
                  text:
                    "Development of frameworks, documentation, and education programs to ensure orderly transition across generations.",
                },
                {
                  number: "04",
                  title: "Risk Management",
                  text:
                    "Identification and mitigation of financial, operational, legal, and reputational risks across all holdings.",
                },
                {
                  number: "05",
                  title: "Philanthropic Direction",
                  text:
                    "Strategic oversight of charitable activities and foundation governance in alignment with family values.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="border-b border-border/30 last:border-b-0 py-8 sm:py-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12">
                    <div className="lg:col-span-1">
                      <span className="text-xs sm:text-sm text-muted-foreground/50 font-mono">
                        {item.number}
                      </span>
                    </div>

                    <div className="lg:col-span-4">
                      <h3 className="text-base sm:text-lg text-subheading font-serif text-foreground">
                        {item.title}
                      </h3>
                    </div>

                    <div className="lg:col-span-7">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-b border-border/30"></div>

        {/* Quote Section */}
        <section className="py-8 sm:py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="text-base sm:text-xl font-serif text-foreground italic leading-relaxed">
                "We do not optimize for the next quarter. We optimize for the
                next century."
              </blockquote>

              <div className="mt-6 sm:mt-8 w-16 h-px bg-primary/50 mx-auto" />
            </div>
          </div>
        </section>

        <div className="border-b border-border/30"></div>

        {/* Closing Statement */}
        <section className="py-8 sm:py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mx-auto text-center">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                The scope of mandate described herein applies exclusively to
                internal operations and does not constitute an offer of
                services. See{" "}
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

export default MandatePage;
