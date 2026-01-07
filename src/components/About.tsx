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
          <h2 className="font-serif text-2xl lg:text-3xl xl:text-3xl text-foreground mb-8 leading-tight">
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
