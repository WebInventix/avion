export function Mandate() {
  return (
    <section id="mandate" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Label */}
          <span className="text-sm tracking-[0.2em] text-primary uppercase mb-6 block">
            Our Mandate
          </span>

          {/* Heading */}
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-8 leading-tight">
            Capital preservation through disciplined allocation and principled oversight.
          </h2>

          {/* Decorative border */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10" />

          {/* Quote */}
          <blockquote className="font-serif text-xl lg:text-2xl italic text-foreground/80 mb-8">
            "Continuity through stewardship.<br />
            Alignment across generations."
          </blockquote>

          {/* Description */}
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            We do not seek clients. We cultivate enduring alignments with principals who 
            share our commitment to discretion, discipline, and long-term orientation.
          </p>
        </div>
      </div>
    </section>
  );
}
