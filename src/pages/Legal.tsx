import React from "react";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";

const Legal = () => {
  const sections = [
    [
      "Nature of Entity",
      "Arvion operates as a single-family office engaged in the management and governance of family assets, holdings, and related strategic initiatives. The entity does not function as a registered investment adviser, broker-dealer, investment company, or any form of financial services provider subject to registration requirements under applicable securities laws.",
      "Arvion does not hold itself out as providing investment advice for compensation and does not manage assets on behalf of third parties."
    ],
    [
      "No Solicitation",
      "Nothing contained on this website constitutes an offer to sell or a solicitation of an offer to purchase any security, investment product, or service. No offer or solicitation may be made prior to the delivery of appropriate offering documents and other materials.",
      "Any investment-related information provided herein is for informational purposes only and should not be construed as investment advice."
    ],
    [
      "Forward-Looking Statements",
      "Certain statements on this website may constitute forward-looking statements. These statements involve known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially. Arvion undertakes no obligation to update such statements."
    ],
    [
      "Confidentiality",
      "All information exchanged with Arvion and its representatives is treated with strict confidentiality except as required by law or with explicit written consent."
    ],
    [
      "No Advisory Relationship",
      "Visiting this website does not establish any attorney-client, fiduciary, advisory, or other professional relationship unless a written agreement is executed."
    ],
    [
      "Privacy Policy",
      "This website may collect limited technical information for operational purposes and does not collect personal data."
    ],
    [
      "Intellectual Property",
      "All website content is the property of Arvion Holdings and protected by applicable intellectual property laws."
    ],
    [
      "Terms of Use",
      "By accessing this website, you agree to be bound by these terms. Arvion reserves the right to modify them without notice."
    ],
    [
      "Governing Law & Jurisdiction",
      "These disclosures are governed by applicable law and subject to exclusive jurisdiction."
    ],
    [
      "Limitation of Liability",
      "To the fullest extent permitted by law, Arvion shall not be liable for damages arising from use of this website."
    ]
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="mt-16 py-16 lg:py-28 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm tracking-[0.25em] text-primary uppercase mb-5">
            Legal
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-5">
            Disclosures &amp; Terms
          </h1>

          <div className="w-14 h-px bg-border mx-auto"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-3xl space-y-10">

          {/* Important Notice */}
          <div className="p-5 sm:p-8 border-2 border-foreground bg-card rounded-lg shadow-sm">
            <h2 className="text-base sm:text-lg font-display font-medium text-foreground mb-3">
              Important Notice
            </h2>
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              Arvion Holdings is a private entity. This website and its contents
              do not constitute an offer to sell, a solicitation of an offer to
              buy, or a recommendation of any security, investment product, or
              advisory service. Arvion does not provide investment advisory,
              legal, tax, or accounting services to the general public.
            </p>
          </div>

          {/* Other Sections */}
          {sections.map(([title, p1, p2]) => (
            <div key={title} className="space-y-4">
              <h2 className="text-sm sm:text-base font-display font-medium text-foreground mb-2 pb-2 border-b border-border">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {p1}
              </p>
              {p2 && (
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {p2}
                </p>
              )}
            </div>
          ))}

          {/* Last Updated */}
          <div className="pt-6 border-t border-border text-left">
            <p className="text-xs text-muted-foreground">
              Last Updated: December 2026
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Legal;
