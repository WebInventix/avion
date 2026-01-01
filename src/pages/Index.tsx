import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Principles } from "@/components/Principles";
import { Mandate } from "@/components/Mandate";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Mandate />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
