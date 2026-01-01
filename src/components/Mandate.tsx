import { Link } from "react-router-dom";

export function Mandate() {
  return (
    <section id="mandate" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Section Label */}
          <span className="text-sm text-muted-foreground/50 uppercase tracking-wider mb-6 block">
            Our Mandate
          </span>

          {/* Heading */}
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-8 leading-tight">
            Capital preservation through disciplined allocation and principled oversight.
          </h2>

          {/* Link */}
          <Link 
            to="/mandate"
            className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors group"
          >
            <span className="border-b border-foreground/30 group-hover:border-foreground transition-colors">
              Explore Mandate
            </span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
