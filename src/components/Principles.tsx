const principles = [
  {
    title: "Governance",
    description: "Institutional frameworks that endure beyond individual mandates.",
  },
  {
    title: "Stewardship",
    description: "Preservation and cultivation of capital across generations.",
  },
  {
    title: "Discretion",
    description: "Private operations by design, not by circumstance.",
  },
];

export function Principles() {
  return (
    <section id="principles" className="py-24 lg:py-32 border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {principles.map((principle) => (
            <div key={principle.title}>
              {/* Title */}
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
