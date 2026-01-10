export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <span className="text-sm tracking-[0.2em] text-primary uppercase mb-6 block">
            Our Purpose
          </span>

          {/* Heading */}
          <h2 className="font-serif text-1xl text-base lg:text-3xl xl:text-3xl text-foreground mb-8 leading-tight">
            Stewardship of Capital.Continuity of Strategy.
          </h2>

          {/* Description */}
          <div className="space-y-6 text-muted-foreground text-base lg:text-sm leading-relaxed">
            <p>
              Arvion exists to protect and perpetuate the assets, interests, and
              legacy of our principals. Our <br /> mandate is governance—not
              growth at any cost. We prioritize stability, discretion, and
              long-term <br />
              preservation over short-term performance.
            </p>
            <p className="text-foreground/70 italic">
              All engagements are by direct introduction only. We do not accept
              unsolicited inquiries or <br /> investment proposals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
              className="group text-center p-8 lg:p-10 bg-card/50 border border-border/50"
            >
              {/* Icon */}
              {/* <div className="mb-6 inline-flex items-center justify-center w-14 h-14 border border-primary/30 group-hover:border-primary/50 transition-colors duration-500">
                <principle.icon className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors duration-500" />
              </div> */}

              {/* Title */}
              <h3 className="font-serif text-xl lg:text-1xl text-foreground mb-4">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm lg:text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <section className="mt-5 py-5 lg:py-5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mx-auto text-center">
              <p className="text-base">
                This website is for informational purposes only and does not
                constitute an offer to sell or solicitation of an offer to buy
                any <br /> securities. Arvion is a private entity and does not
                provide investment advisory services to the general public See{" "}
                <Link to={"/legal"} className="underline">
                  full legal <br /> disclosures.
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}