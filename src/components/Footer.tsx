import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="mb-10 pb-8 border-b border-border">
          <p className="legal-text max-w-3xl">
            <strong>Important Notice:</strong> Arvion is a private holding
            entity. This website does not constitute an offer, solicitation, or
            recommendation to buy or sell any securities or investment products.
            Arvion does not provide investment advisory, legal, or tax services
            to the general public.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <p className="text-foreground tracking-wide-custom text-sm font-display font-medium uppercase mb-3">
              Arvion
            </p>
            <p className="text-sm text-muted-foreground max-w-sm">
              Private Family Office &amp; Strategic Holdings
            </p>
          </div>
          <div>
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-4 font-sans">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              <a
                className="text-sm text-foreground hover:text-secondary transition-colors"
                href="/about"
              >
                About
              </a>
              <a
                className="text-sm text-foreground hover:text-secondary transition-colors"
                href="/mandate"
              >
                Mandate
              </a>
              <a
                className="text-sm text-foreground hover:text-secondary transition-colors"
                href="/structure"
              >
                Structure
              </a>
              <a
                className="text-sm text-foreground hover:text-secondary transition-colors"
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-editorial uppercase text-muted-foreground mb-4 font-sans">
              Legal
            </p>
            <div className="flex flex-col gap-2">
              <a
                className="text-sm text-foreground hover:text-secondary transition-colors"
                href="/legal"
              >
                Disclosures
              </a>
              <a
                className="text-sm text-foreground hover:text-secondary transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-sm text-foreground hover:text-secondary transition-colors"
                href="#"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 Arvion Holdings. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
