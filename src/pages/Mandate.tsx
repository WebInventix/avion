import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye } from "lucide-react";

const mandatePrinciples = [
  {
    icon: Shield,
    title: "Governance",
    description: "Institutional oversight of holdings and strategic direction across all entities."
  },
  {
    icon: Lock,
    title: "Preservation",
    description: "Capital protection and risk management designed for multi-generational continuity."
  },
  {
    icon: Eye,
    title: "Discretion",
    description: "Absolute confidentiality in all matters. No public disclosure of holdings or principals."
  }
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
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-8 animate-fade-in-delay">
                Stewardship of Capital.<br />
                <span className="text-gradient-gold">Continuity of Strategy.</span>
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-fade-in-delay-2" />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Arvion exists to protect and perpetuate the assets, interests, and legacy of our principals. 
                  Our mandate is governance—not growth at any cost. We prioritize stability, discretion, 
                  and long-term preservation over short-term performance.
                </p>
                <p className="text-foreground/70 italic">
                  All engagements are by direct introduction only. We do not accept unsolicited inquiries 
                  or investment proposals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="text-sm tracking-[0.2em] text-primary uppercase block">
                Foundational Principles
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {mandatePrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="group text-center p-8 lg:p-10 bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 border border-primary/30 group-hover:border-primary/50 transition-colors duration-500">
                    <principle.icon className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="font-serif text-2xl lg:text-3xl italic text-foreground/80 mb-6">
                "Continuity through stewardship.<br />
                Alignment across generations."
              </blockquote>
              <div className="w-16 h-px bg-primary/50 mx-auto" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MandatePage;