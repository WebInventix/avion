import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldLogo } from "@/components/ShieldLogo";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm tracking-[0.2em] text-primary uppercase mb-6 block animate-fade-in">
                About
              </span>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-8 animate-fade-in-delay">
                A Legacy of <span className="text-gradient-gold">Stewardship</span>
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-fade-in-delay-2" />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <ShieldLogo className="w-20 h-24 mx-auto glow-purple" />
              </div>
              
              <div className="space-y-8 text-center">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Arvion was established as a private holding entity to manage, preserve, and govern 
                  family capital across generations. We operate as a privately held governance and 
                  holdings platform, serving as the structural foundation for multi-generational 
                  wealth preservation and strategic capital deployment.
                </p>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Our philosophy centers on institutional discipline, long-term orientation, and 
                  absolute discretion. We do not pursue growth for its own sake—we pursue 
                  continuity, stability, and the perpetuation of legacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground text-center mb-16">
                Our Values
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {[
                  {
                    title: "Long-Term Orientation",
                    description: "We measure success across decades, not quarters. Every decision is made with generational continuity in mind."
                  },
                  {
                    title: "Institutional Discipline",
                    description: "Rigorous frameworks and governance structures ensure consistency beyond any individual mandate."
                  },
                  {
                    title: "Absolute Discretion",
                    description: "Privacy is not a preference—it is a foundational principle that guides all our operations."
                  },
                  {
                    title: "Principal Alignment",
                    description: "We cultivate enduring relationships with those who share our commitment to preservation and prudence."
                  }
                ].map((value) => (
                  <div key={value.title} className="p-8 border border-border/50 bg-card/30">
                    <h3 className="font-serif text-xl text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <blockquote className="font-serif text-2xl lg:text-3xl italic text-foreground/80 mb-8">
                "We do not seek clients. We cultivate enduring alignments."
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

export default AboutPage;