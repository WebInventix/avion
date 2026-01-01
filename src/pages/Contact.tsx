import React from "react";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="mt-20 py-20 lg:py-28 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center transition-all duration-600 opacity-100 translate-y-0">
            <p className="text-sm tracking-[0.2em] text-primary uppercase mb-6 block animate-fade-in">
              Contact
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
              Engagement Protocol
            </h1>
            <div className="w-16 h-px bg-border mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="transition-all duration-600 opacity-100 translate-y-0">
            <p className="text-lg font-serif leading-relaxed text-foreground mb-6">
              Arvion is a private entity. We do not solicit external engagement.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              All relationships are established through direct introduction and
              mutual alignment of interests. We do not respond to unsolicited
              inquiries, investment proposals, or service offerings.
            </p>
            <div className="p-6 md:p-8 border border-border bg-card mb-8">
              <h2 className="text-base font-display font-medium text-foreground mb-4">
                Inquiries by Introduction Only
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                If you wish to establish contact with Arvion, we encourage you
                to seek introduction through a mutual acquaintance who maintains
                an existing relationship with our office.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We do not maintain a public inquiry form, email address, or
                telephone line for general contact.
              </p>
            </div>
            <div className="p-6 md:p-8 border border-secondary/30 bg-card">
              <p className="text-xs tracking-editorial uppercase text-secondary mb-3 font-sans">
                For Existing Principals
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Principals and authorized representatives should contact their
                designated liaison via established secure channels. Do not use
                this website for confidential communications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border/30 last:border-b-0"></div>

      <section className="py-10 lg:py-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto text-center">
            <p className="text-sm">
              No attorney-client, fiduciary, or advisory relationship is
              established by visiting this website or attempting to contact
              Arvion. <br /> See{" "}
              <Link className="underline">full disclosures.</Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
