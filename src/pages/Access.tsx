import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldLogo } from "@/components/ShieldLogo";
import Logo from "../../public/images/white-logo.svg";

const AccessPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* First Section */}
        <section className="py-32 sm:py-24 lg:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl">
              <h1 className="font-serif text-4xl sm:text-4xl lg:text-5xl xl:text-7xl text-foreground mb-6 sm:mb-8 lg:mb-12">
                Access
              </h1>
              <p className="text-base sm:text-lg lg:text-body-lg text-muted-foreground leading-relaxed animate-fade-in opacity-0 animate-delay-200">
                Arvion operates on a private, invitation-only basis. We do not
                maintain public intake processes or respond to unsolicited
                inquiries.
              </p>
            </div>
          </div>
        </section>

        <hr />

        {/* Second Section */}
        <section className="py-12 sm:py-16 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg lg:text-body-lg text-muted-foreground leading-relaxed animate-fade-in opacity-0 animate-delay-200">
                  Arvion's relationships are formed through direct introduction
                  and mutual alignment—not through application or outreach. This
                  approach is not exclusionary for its own sake; it reflects the
                  nature of the commitments we undertake and the discretion
                  required to fulfill them.
                </p>

                <p className="text-base sm:text-lg lg:text-body-lg text-muted-foreground leading-relaxed animate-fade-in opacity-0 animate-delay-200">
                  We do not accept new principals through public channels. Those
                  who are invited to engage with Arvion arrive through
                  established networks of trust and shared values. This ensures
                  that every relationship begins with the foundation of mutual
                  understanding that our work requires.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr />

        {/* Third Section - Existing Relationships */}
        <section className="py-12 sm:py-16 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 max-w-6xl">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6 sm:mb-8">
                  Existing Relationships
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Principals and partners with established relationships may
                    contact their designated representatives through existing
                    secure channels.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    If you believe you should have access to Arvion's private
                    communication infrastructure but have not received
                    credentials, please coordinate through your introducing
                    party.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="text-center">
                  <img
                    src={Logo}
                    alt="ShieldLogo"
                    className="w-32 h-auto sm:w-40 md:w-48 lg:w-48 mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <hr />
        
        {/* Fourth Section - Strategic Partners */}
        <section className="py-12 sm:py-16 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-3xl text-foreground mb-6 sm:mb-8">
                Strategic Partners & Advisors
              </h2>
              <div className="space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  For professionals, institutions, or advisors who believe there
                  may be strategic alignment with Arvion's mandate, we recommend
                  engagement through shared professional networks.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Arvion does not respond to cold outreach, but we maintain
                  awareness of the broader professional landscape through
                  trusted intermediaries and established institutional
                  relationships.
                </p>
              </div>

              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/30">
                <p className="text-xs sm:text-sm text-muted-foreground/50 italic leading-relaxed">
                  This is a private entity. Arvion Holdings does not solicit
                  public investment, accept unsolicited business proposals, or
                  provide financial advisory services to the general public.
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

export default AccessPage;