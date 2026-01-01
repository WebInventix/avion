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
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-foreground mb-8 leading-tight">
            Stewardship of Capital.<br />
            <span className="text-gradient-gold">Continuity of Strategy.</span>
          </h2>

          {/* Description */}
          <div className="space-y-6 text-muted-foreground text-base lg:text-lg leading-relaxed">
            <p>
              Arvion exists to protect and perpetuate the assets, interests, and legacy of our principals. 
              Our mandate is governance—not growth at any cost. We prioritize stability, discretion, 
              and long-term preservation over short-term performance.
            </p>
            <p className="text-foreground/70 italic">
              All engagements are by direct introduction only. We do not accept unsolicited inquiries 
              or investment proposals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
