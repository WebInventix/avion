export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Heading */}
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-foreground mb-8 leading-tight">
            Long-term capital stewardship for principals and their legacy.
          </h2>

          {/* Description */}
          <div className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed max-w-3xl">
            <p>
              Arvion operates as a privately held governance and holdings platform, serving 
              as the structural foundation for multi-generational wealth preservation and 
              strategic capital deployment.
            </p>
            <p>
              We do not seek clients. We cultivate enduring alignments with principals who 
              share our commitment to discretion, discipline, and long-term orientation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
