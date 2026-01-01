import React from "react";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
const Legal = () => {
  return (
    <>
      <Header />
      <section className="mt-20 py-20 lg:py-28 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center transition-all duration-600 opacity-100 translate-y-0">
            <p className="text-sm tracking-[0.2em] text-primary uppercase mb-6 block animate-fade-in">
              Legal
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
              Disclosures &amp; Terms
            </h1>
            <div className="w-16 h-px bg-border mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl space-y-12">
          <div className="p-6 md:p-8 border-2 border-foreground bg-card">
            <h2 className="text-lg font-display font-medium text-foreground mb-4">
              Important Notice
            </h2>
            <p className="text-base text-foreground leading-relaxed">
              Arvion Holdings is a private entity. This website and its contents
              do not constitute an offer to sell, a solicitation of an offer to
              buy, or a recommendation of any security, investment product, or
              advisory service. Arvion does not provide investment advisory,
              legal, tax, or accounting services to the general public.
            </p>
          </div>
          <div id="nature">
            <h2 className="text-base font-display font-medium text-foreground mb-4 pb-2 border-b border-border">
              Nature of Entity
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Arvion operates as a single-family office engaged in the
              management and governance of family assets, holdings, and related
              strategic initiatives. The entity does not function as a
              registered investment adviser, broker-dealer, investment company,
              or any form of financial services provider subject to registration
              requirements under applicable securities laws.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Arvion does not hold itself out as providing investment advice for
              compensation and does not manage assets on behalf of third
              parties.
            </p>
          </div>
          <div id="solicitation">
            <h2 className="text-base font-display font-medium text-foreground mb-4 pb-2 border-b border-border">
              No Solicitation
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Nothing contained on this website constitutes an offer to sell or
              a solicitation of an offer to purchase any security, investment
              product, or service. No offer or solicitation may be made prior to
              the delivery of appropriate offering documents and other
              materials.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Any investment-related information provided herein is for
              informational purposes only and should not be construed as
              investment advice. No representation is made regarding the
              suitability of any investment strategy, product, or service for
              any particular person or entity.
            </p>
          </div>
          <div id="forward-looking">
            <h2 className="text-base font-display font-medium text-foreground mb-4 pb-2 border-b border-border">
              Forward-Looking Statements
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Certain statements on this website may constitute forward-looking
              statements. These statements involve known and unknown risks,
              uncertainties, and other factors that may cause actual results,
              performance, or achievements to be materially different from any
              future results, performance, or achievements expressed or implied.
              Arvion undertakes no obligation to update or revise any
              forward-looking statements.
            </p>
          </div>
          <div id="confidentiality">
            <h2 className="text-base font-display font-medium text-foreground mb-4 pb-2 border-b border-border">
              Confidentiality
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All information exchanged with Arvion and its representatives is
              treated with strict confidentiality. We do not disclose
              information regarding our principals, holdings, transactions, or
              internal operations except as required by applicable law or with
              explicit written consent of the relevant parties.
            </p>
          </div>
          <div id="relationship">
            <h2 className="text-base font-display font-medium text-foreground mb-4 pb-2 border-b border-border">
              No Advisory Relationship
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Visiting this website, reading its contents, or attempting to
              contact Arvion does not establish any attorney-client, fiduciary,
              advisory, or other professional relationship. No such relationship
              shall be deemed to exist unless and until a written engagement
              agreement is executed by authorized representatives.
            </p>
          </div>
          <div id="privacy">
            <h2 className="text-base font-display font-medium text-foreground mb-4 pb-2 border-b border-border">
              Privacy Policy
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              This website may collect limited technical information such as IP
              addresses and browser types for operational purposes. This
              information is not used to identify individual visitors and is not
              shared with third parties except as required by law.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We do not collect personal information through this website. Any
              personal information provided through other means is handled in
              accordance with applicable privacy laws and our internal
              confidentiality policies.
            </p>
          </div>
          <div id="ip">
            <h2 className="text-base font-display font-medium text-foreground mb-4 pb-2 border-b border-border">
              Intellectual Property
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All content on this website, including but not limited to text,
              graphics, logos, images, and design elements, is the property of
              Arvion Holdings and is protected by applicable intellectual
              property laws. Reproduction, distribution, modification, or use of
              any content without express written permission is strictly
              prohibited.
            </p>
          </div>
          <div id="terms">
            <h2 className="text-base font-display font-medium text-foreground mb-4 pb-2 border-b border-border">
              Terms of Use
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              By accessing this website, you acknowledge that you have read,
              understood, and agree to be bound by these terms and disclosures.
              If you do not agree to these terms, you should not access or use
              this website.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Arvion reserves the right to modify these terms at any time
              without notice. Continued use of this website following any
              changes constitutes acceptance of the modified terms.
            </p>
          </div>
          <div id="law">
            <h2 className="text-base font-display font-medium text-foreground mb-4 pb-2 border-b border-border">
              Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              These disclosures and the use of this website shall be governed by
              and construed in accordance with the laws of the applicable
              jurisdiction, without regard to conflict of law principles. Any
              disputes arising from or relating to this website shall be subject
              to the exclusive jurisdiction of the courts in the appropriate
              venue.
            </p>
          </div>
          <div id="liability">
            <h2 className="text-base font-display font-medium text-foreground mb-4 pb-2 border-b border-border">
              Limitation of Liability
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Arvion and its affiliates,
              officers, directors, employees, and agents shall not be liable for
              any direct, indirect, incidental, consequential, special, or
              exemplary damages arising from or relating to the use of this
              website or reliance on any information contained herein.
            </p>
          </div>
          <div className="pt-8 border-t border-border">
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
