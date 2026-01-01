import { Shield, Lock, Eye } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Governance",
    description: "Institutional oversight of holdings and strategic direction across all entities.",
  },
  {
    icon: Lock,
    title: "Preservation",
    description: "Capital protection and risk management designed for multi-generational continuity.",
  },
  {
    icon: Eye,
    title: "Discretion",
    description: "Absolute confidentiality in all matters. No public disclosure of holdings or principals.",
  },
];

export function Principles() {
  return (
    <section id="structure" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-sm tracking-[0.2em] text-primary uppercase mb-6 block">
            Foundational Principles
          </span>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group text-center p-8 lg:p-10 bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 border border-primary/30 group-hover:border-primary/50 transition-colors duration-500">
                <principle.icon className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors duration-500" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
