import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const mandateAreas = [
  {
    number: "01",
    title: "Capital Stewardship",
    description: "Preservation and disciplined growth of principal capital through diversified, long-horizon strategies. We prioritize stability over speculation, compounding over trading."
  },
  {
    number: "02",
    title: "Strategic Holdings Oversight",
    description: "Governance of operating entities, real assets, and strategic investments. Active participation in fundamental direction while respecting operational autonomy."
  },
  {
    number: "03",
    title: "Intergenerational Planning",
    description: "Structural frameworks ensuring continuity of governance, values, and capital across family generations. Succession is not an event—it is an ongoing process."
  },
  {
    number: "04",
    title: "Risk Governance",
    description: "Systematic identification, assessment, and mitigation of risks across the portfolio. We plan for scenarios that most prefer not to contemplate."
  },
  {
    number: "05",
    title: "Philanthropic Alignment",
    description: "Strategic charitable positioning that reflects principal values while maintaining appropriate institutional distance and governance discipline."
  }
];

const MandatePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl">
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-8">
                Mandate
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Our areas of focus reflect a commitment to permanence, discipline, and the 
                long-term cultivation of capital and legacy.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 lg:py-24 border-t border-border/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Arvion's mandate is not defined by asset classes or return targets. It is 
                defined by an unwavering commitment to the principals we serve and the 
                generations who will follow them. Every decision is evaluated against this 
                standard: does it strengthen or weaken our capacity for enduring stewardship?
              </p>
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="space-y-0">
              {mandateAreas.map((area) => (
                <div 
                  key={area.number}
                  className="grid lg:grid-cols-12 gap-6 lg:gap-12 py-10 border-b border-border/30 last:border-b-0"
                >
                  <div className="lg:col-span-1">
                    <span className="text-sm text-muted-foreground/50">{area.number}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="font-serif text-xl lg:text-2xl text-foreground">
                      {area.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Orientation Quote */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-sm text-muted-foreground/50 uppercase tracking-wider mb-6 block">
                Orientation
              </span>
              <blockquote className="border-l-2 border-primary/50 pl-6">
                <p className="font-serif text-xl lg:text-2xl italic text-foreground/80">
                  "We do not optimize for the next quarter. We optimize for the next century."
                </p>
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MandatePage;
