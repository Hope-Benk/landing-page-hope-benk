"use client";

import { useState } from "react";
import Header from "../organisms/Header";
import Hero from "../organisms/Hero";
import HowItWorks from "../organisms/HowItWorks";
import Simulator from "../organisms/Simulator";
import Benefits from "../organisms/Benefits";
import Solutions from "../organisms/Solutions";
import Testimonials from "../organisms/Testimonials";
import Faq from "../organisms/Faq";
import Footer from "../organisms/Footer";
import PreRegisterModal from "../organisms/PreRegisterModal";

export default function HomeTemplate() {
  const [isPreRegisterOpen, setIsPreRegisterOpen] = useState(false);

  return (
    <div className="flex-1 bg-surface flex flex-col min-h-screen">
      <Header onOpenPreRegister={() => setIsPreRegisterOpen(true)} />
      <main className="flex-1">
        <Hero />
        <Simulator />
        <HowItWorks />
        <Benefits />
        <Solutions />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      {isPreRegisterOpen && (
        <PreRegisterModal
          isOpen={isPreRegisterOpen}
          onClose={() => setIsPreRegisterOpen(false)}
        />
      )}
    </div>
  );
}
