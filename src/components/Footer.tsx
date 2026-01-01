export function Footer() {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo */}
          <span className="font-serif text-sm tracking-[0.2em] text-muted-foreground">
            ARVION
          </span>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
