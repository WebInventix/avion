import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail } from "lucide-react";

const AccessPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm tracking-[0.2em] text-primary uppercase mb-6 block animate-fade-in">
                Access
              </span>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-8 animate-fade-in-delay">
                By <span className="text-gradient-gold">Introduction</span> Only
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-fade-in-delay-2" />
            </div>
          </div>
        </section>

        {/* Access Info Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Arvion operates on a private, invitation-only basis. We do not maintain 
                  public intake processes or accept unsolicited inquiries.
                </p>
                <p className="text-foreground/70 italic">
                  All engagements are by direct introduction only. We do not accept unsolicited inquiries 
                  or investment proposals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-sm tracking-[0.2em] text-primary uppercase mb-6 block">
                Inquiries
              </span>
              
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6">
                Inquiries by introduction only.
              </h2>

              <p className="text-muted-foreground mb-10">
                For parties with a formal introduction, please direct correspondence to:
              </p>

              {/* Email Contact */}
              <a
                href="mailto:info@arvion.us"
                className="inline-flex items-center gap-3 px-8 py-4 border border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                <span className="text-foreground tracking-wider">info@arvion.us</span>
              </a>

              {/* Note */}
              <p className="text-sm text-muted-foreground/60 mt-10 italic">
                We do not respond to unsolicited inquiries or investment proposals.
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