import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AccessPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl">
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-8">
                Access
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Arvion operates on a private, invitation-only basis. We do not maintain 
                public intake processes or respond to unsolicited inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Access Philosophy */}
        <section className="py-16 lg:py-24 border-t border-border/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Arvion's relationships are formed through direct introduction and mutual 
                  alignment—not through application or outreach. This approach is not 
                  exclusionary for its own sake; it reflects the nature of the commitments 
                  we undertake and the discretion required to fulfill them.
                </p>
                <p>
                  We do not accept new principals through public channels. Those who are 
                  invited to engage with Arvion arrive through established networks of 
                  trust and shared values. This ensures that every relationship begins 
                  with the foundation of mutual understanding that our work requires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Existing Relationships */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6">
                Existing Relationships
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
                <p>
                  Principals and partners with established relationships may contact their 
                  designated representatives through existing secure channels.
                </p>
                <p>
                  If you believe you should have access to Arvion's private communication 
                  infrastructure but have not received credentials, please coordinate 
                  through your introducing party.
                </p>
              </div>
              
              <p className="text-foreground/80 italic">
                Inquiries by introduction only.
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Partners */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6">
                Strategic Partners & Advisors
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  For professionals, institutions, or advisors who believe there may be 
                  strategic alignment with Arvion's mandate, we recommend engagement 
                  through shared professional networks.
                </p>
                <p>
                  Arvion does not respond to cold outreach, but we maintain awareness 
                  of the broader professional landscape through trusted intermediaries 
                  and established institutional relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 border-t border-border/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm text-muted-foreground/50">
                This is a private entity. Arvion Holdings does not solicit public investment, 
                accept unsolicited business proposals, or provide financial advisory services 
                to the general public.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AccessPage;
