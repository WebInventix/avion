import React from "react";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="mt-20 py-16 lg:py-28 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs sm:text-sm tracking-[0.25em] text-primary uppercase mb-5">
              Contact
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-5">
              Engagement Protocol
            </h1>

            <div className="w-14 h-px bg-border mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-3xl space-y-8 lg:space-y-10">
          <p className="text-sm sm:text-base lg:text-lg font-serif leading-relaxed text-foreground">
            Arvion is a private entity. We do not solicit external engagement.
          </p>

          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            All relationships are established through direct introduction and
            mutual alignment of interests. We do not respond to unsolicited
            inquiries, investment proposals, or service offerings.
          </p>

          <div className="p-5 sm:p-8 border border-border bg-card rounded-lg shadow-sm">
            <h2 className="text-sm sm:text-base lg:text-lg font-display font-medium text-foreground mb-4">
              Inquiries by Introduction Only
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              If you wish to establish contact with Arvion, we encourage you
              to seek introduction through a mutual acquaintance who maintains
              an existing relationship with our office.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We do not maintain a public inquiry form, email address, or
              telephone line for general contact.
            </p>
          </div>

          <div className="p-5 sm:p-8 border border-secondary/30 bg-card rounded-lg shadow-sm">
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-secondary mb-3 font-sans">
              For Existing Principals
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Principals and authorized representatives should contact their
              designated liaison via established secure channels. Do not use
              this website for confidential communications.
            </p>
          </div>
        </div>
      </section>

      <div className="border-b border-border/30"></div>

      {/* Legal Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            No attorney-client, fiduciary, or advisory relationship is
            established by visiting this website or attempting to contact
            Arvion. See{" "}
            <Link to="/legal" className="underline">
              full disclosures.
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
