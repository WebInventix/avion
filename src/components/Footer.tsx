export function Footer() {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Disclaimer */}
          <p className="text-xs lg:text-sm text-muted-foreground/70 text-center leading-relaxed mb-8">
            This website is for informational purposes only and does not constitute an offer to sell 
            or solicitation of an offer to buy any securities. Arvion is a private entity and does 
            not provide investment advisory services to the general public.
          </p>

          {/* Copyright */}
          <div className="text-center">
            <span className="font-serif text-sm tracking-[0.2em] text-muted-foreground">
              ARVION
            </span>
            <p className="text-xs text-muted-foreground/50 mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
