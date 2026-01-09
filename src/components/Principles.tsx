import { Shield, Lock, Eye } from "lucide-react";
import { Link } from "react-router-dom";
const principles = [
  {
    // icon: Shield,
    title: "Governance",
    description:
      "Institutional oversight of holdings and strategic direction across all entities.",
  },
  {
    // icon: Lock,
    title: "Preservation",
    description:
      "Capital protection and risk management designed for multi-generational continuity.",
  },
  {
    // icon: Eye,
    title: "Discretion",
    description:
      "Absolute confidentiality in all matters. No public disclosure of holdings or principals.",
  },
];

export function Principles() {
  return (
    <section id="structure" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-20">
          <span className="text-xs sm:text-sm tracking-[0.25em] text-primary uppercase block">
            Foundational Principles
          </span>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="text-center p-6 lg:p-10 bg-card/50 border border-border/50"
            >
              {/* Title */}
              <h3 className="font-serif text-lg lg:text-xl text-foreground mb-3">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Legal */}
        <section className="mt-10">
          <div className="mx-auto text-center max-w-3xl">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              This website is for informational purposes only and does not
              constitute an offer to sell or solicitation of an offer to buy any
              securities. Arvion is a private entity and does not provide
              investment advisory services to the general public. See{" "}
              <Link to="/legal" className="underline">
                full legal disclosures.
              </Link>
            </p>
          </div>
        </section>

      </div>
    </section>
  );
}

