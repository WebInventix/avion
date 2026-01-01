import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldLogo } from "@/components/ShieldLogo";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl">
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-8">
                About Arvion
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                A private institution founded on the principles of enduring stewardship, 
                deliberate governance, and intergenerational continuity.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 lg:py-24 border-t border-border/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column - Philosophy */}
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-8">
                  Philosophy
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Arvion was established with a singular conviction: that true wealth 
                    stewardship requires institutional permanence, not transactional 
                    relationships. We exist not to grow assets quarter by quarter, but 
                    to preserve and cultivate capital across the arc of generations.
                  </p>
                  <p>
                    Our approach is rooted in patience. We do not chase returns or respond 
                    to market noise. Instead, we maintain disciplined allocation frameworks 
                    designed to weather uncertainty and compound value through time—measured 
                    not in fiscal years, but in decades.
                  </p>
                  <p>
                    This orientation attracts principals who share our commitment to legacy 
                    over liquidity, and governance over growth for its own sake.
                  </p>
                </div>
              </div>

              {/* Right Column - Quote */}
              <div className="lg:pt-16">
                <div className="mb-8">
                  <ShieldLogo className="w-20 h-24 glow-purple" />
                </div>
                <blockquote className="border-l-2 border-primary/50 pl-6">
                  <p className="font-serif text-xl lg:text-2xl italic text-foreground/80">
                    "We do not measure success in annual returns, but in generational continuity."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Guiding Principles Section */}
        <section className="py-16 lg:py-24 border-t border-border/30">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-12">
              Guiding Principles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {[
                {
                  title: "Principal Alignment",
                  description: "Our interests are structurally bound to those of the families and principals we serve. There are no external shareholders or competing incentives."
                },
                {
                  title: "Institutional Permanence",
                  description: "We are structured to outlast any individual tenure. Governance frameworks ensure continuity regardless of personnel transitions."
                },
                {
                  title: "Deliberate Pace",
                  description: "We move with intention, not urgency. Decisions are made with consideration for long-term consequence, not short-term convenience."
                },
                {
                  title: "Absolute Discretion",
                  description: "Privacy is not a feature—it is foundational. We do not publicize relationships, strategies, or outcomes."
                }
              ].map((principle) => (
                <div key={principle.title} className="flex gap-4">
                  <span className="text-primary/50 text-xl">●</span>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-3">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Structure */}
        <section className="py-16 lg:py-24 border-t border-border/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-8">
                Governance Structure
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Arvion operates with a governance model designed for permanence. Our structure 
                  separates strategic oversight from operational execution, ensuring that 
                  long-term orientation is never compromised by short-term pressures.
                </p>
                <p>
                  Key decisions require deliberation across multiple governance bodies, 
                  each with distinct mandates and accountability structures. This layered 
                  approach provides resilience and continuity while maintaining the capacity 
                  for decisive action when circumstances demand.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
