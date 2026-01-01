import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Label */}
          <span className="text-sm tracking-[0.2em] text-primary uppercase mb-6 block">
            Inquiries
          </span>

          {/* Heading */}
          <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6">
            Arvion operates on a private, invitation-only basis.
          </h2>

          {/* Description */}
          <p className="text-muted-foreground mb-10">
            Inquiries by introduction only.
          </p>

          {/* Email */}
          <a
            href="mailto:info@arvion.us"
            className="inline-flex items-center gap-3 px-8 py-4 border border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
            <span className="text-foreground tracking-wider">info@arvion.us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
