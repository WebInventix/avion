import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldLogo } from "@/components/ShieldLogo";

const StructurePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl">
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-8">
                Structure
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Arvion operates across interconnected entities and strategies, unified by 
                common governance and shared principles.
              </p>
            </div>
          </div>
        </section>

        {/* Holding Platform Section */}
        <section className="py-16 lg:py-24 border-t border-border/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column */}
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-8">
                  A Holding & Governance Platform
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Arvion functions as the governance layer across a constellation of 
                    entities, vehicles, and strategic positions. We do not operate as a 
                    single fund or investment manager, but as an institutional framework 
                    that provides coherent oversight, risk management, and strategic 
                    direction across diverse holdings.
                  </p>
                  <p>
                    This structure allows for operational independence at the entity level 
                    while maintaining unified governance, compliance standards, and alignment 
                    with principal objectives.
                  </p>
                </div>
              </div>

              {/* Right Column - Shield */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="p-12 border border-border/30 bg-card/20">
                  <ShieldLogo className="w-24 h-28 lg:w-32 lg:h-36 glow-purple" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Structural Elements */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-serif text-2xl text-muted-foreground/50 mb-12">
              Structural Elements
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  label: "Holdings",
                  title: "Strategic Positions",
                  description: "Direct ownership in operating companies, real assets, and strategic ventures selected for long-term value creation and alignment with principal objectives."
                },
                {
                  label: "Vehicles",
                  title: "Investment Structures",
                  description: "Purpose-built entities for specific mandates—whether geographic, sectoral, or structural—each governed under the unified Arvion framework."
                },
                {
                  label: "Governance",
                  title: "Oversight Bodies",
                  description: "Committees and councils that provide strategic direction, risk oversight, and ensure alignment across all Arvion-governed entities."
                }
              ].map((element) => (
                <div key={element.label} className="space-y-4">
                  <span className="text-xs text-muted-foreground/50 uppercase tracking-wider">
                    {element.label}
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl text-foreground">
                    {element.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {element.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Approach */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-8">
                Operational Approach
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  We do not publish detailed organizational structures, entity relationships, 
                  or operational specifics. This discretion is intentional and reflects our 
                  commitment to privacy for both Arvion and the principals we serve.
                </p>
                <p>
                  Parties engaged with Arvion receive appropriate disclosures within the 
                  context of specific relationships and transactions. Public visibility 
                  serves no purpose in our operating model.
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

export default StructurePage;
