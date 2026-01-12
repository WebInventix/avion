import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        
        {/* Important Notice */}
        <div className="mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-border">
          <p className="text-xs sm:text-sm lg:text-base legal-text max-w-full sm:max-w-3xl leading-relaxed">
            <strong>Important Notice:</strong> Arvion is a private holding
            entity. This website does not constitute an offer, solicitation, or
            recommendation to buy or sell any securities or investment products.
            Arvion does not provide investment advisory, legal, or tax services
            to the general public.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-8">
          
          {/* Arvion Info */}
          <div className="md:col-span-2 text-left md:text-left">
            <p className="text-sm sm:text-base text-foreground tracking-wide-custom font-display font-medium uppercase mb-2 sm:mb-3">
              Arvion
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-full sm:max-w-sm mx-auto md:mx-0">
              Private Family Office &amp; Strategic Holdings
            </p>
          </div>

          {/* Navigation */}
          <div className="text-left md:text-left">
            <p className="text-xs sm:text-sm tracking-editorial uppercase text-muted-foreground mb-3 sm:mb-4 font-sans">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              <Link className="text-sm sm:text-base hover:text-secondary" to="/about">About</Link>
              <Link className="text-sm sm:text-base hover:text-secondary" to="/mandate">Mandate</Link>
              <Link className="text-sm sm:text-base hover:text-secondary" to="/structure">Structure</Link>
              <Link className="text-sm sm:text-base hover:text-secondary" to="/contact">Contact</Link>
            </div>
          </div>

          {/* Legal */}
          <div className="text-left md:text-left">
            <p className="text-xs sm:text-sm tracking-editorial uppercase text-muted-foreground mb-3 sm:mb-4 font-sans">
              Legal
            </p>
            <div className="flex flex-col gap-2">
              <Link className="text-sm sm:text-base hover:text-secondary" to="/legal">
                Disclosures
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-border text-left md:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2026 Arvion Holdings. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
