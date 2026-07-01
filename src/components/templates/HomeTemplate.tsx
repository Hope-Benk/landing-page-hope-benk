"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "../organisms/Header";
import Hero from "../organisms/Hero";

// Dynamic imports with loading skeletons for below-the-fold components
const Simulator = dynamic(() => import("../organisms/Simulator"), {
  loading: () => <div className="h-[400px] animate-pulse bg-surface-container-low rounded-4xl my-8 mx-8" />,
});

const HowItWorks = dynamic(() => import("../organisms/HowItWorks"), {
  loading: () => <div className="h-[400px] animate-pulse bg-surface rounded-4xl my-8 mx-8" />,
});

const Benefits = dynamic(() => import("../organisms/Benefits"), {
  loading: () => <div className="h-[400px] animate-pulse bg-surface rounded-4xl my-8 mx-8" />,
});

const Solutions = dynamic(() => import("../organisms/Solutions"), {
  loading: () => <div className="h-[400px] animate-pulse bg-surface rounded-4xl my-8 mx-8" />,
});

const Testimonials = dynamic(() => import("../organisms/Testimonials"), {
  loading: () => <div className="h-[300px] animate-pulse bg-surface rounded-4xl my-8 mx-8" />,
});

const Faq = dynamic(() => import("../organisms/Faq"), {
  loading: () => <div className="h-[400px] animate-pulse bg-surface rounded-4xl my-8 mx-8" />,
});

const Footer = dynamic(() => import("../organisms/Footer"), {
  loading: () => <div className="h-[200px] animate-pulse bg-surface rounded-t-4xl my-8 mx-8" />,
});

// Client-only load for interactive registration modal
const PreRegisterModal = dynamic(() => import("../organisms/PreRegisterModal"), {
  ssr: false,
});

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
