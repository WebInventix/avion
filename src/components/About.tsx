export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">

          {/* Section Label */}
          <span className="text-xs sm:text-sm tracking-[0.25em] text-primary uppercase mb-6 block">
            Our Purpose
          </span>

          {/* Heading */}
          <h2 className="font-serif text-lg sm:text-xl lg:text-3xl text-foreground mb-6 leading-snug">
            Stewardship of Capital. Continuity of Strategy.
          </h2>

          {/* Description */}
          <div className="space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              Arvion exists to protect and perpetuate the assets, interests, and
              legacy of our principals. Our mandate is governance—not growth at
              any cost. We prioritize stability, discretion, and long-term
              preservation over short-term performance.
            </p>

            <p className="text-foreground/70 italic text-sm">
              All engagements are by direct introduction only. We do not accept
              unsolicited inquiries or investment proposals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
