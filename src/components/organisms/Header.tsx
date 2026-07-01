"use client";

import { useEffect, useState } from "react";
import Button from "../atoms/Button";

interface HeaderProps {
  onOpenPreRegister: () => void;
}

export default function Header({ onOpenPreRegister }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/80 backdrop-blur-md border-b border-slate-200/40 shadow-[0_8px_24px_0_rgba(25,28,29,0.06)]"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-8">
        <button
          onClick={() => scrollToIntoView("hero")}
          className="text-2xl font-display font-extrabold text-primary tracking-[-0.04em] cursor-pointer bg-transparent border-none outline-none"
        >
          Hope Benk
        </button>
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToIntoView("solutions")}
            className="text-on-surface-variant font-semibold hover:text-primary transition-colors duration-300 cursor-pointer bg-transparent border-none outline-none"
          >
            Soluções
          </button>
          <button
            onClick={() => scrollToIntoView("simulator")}
            className="text-on-surface-variant font-semibold hover:text-primary transition-colors duration-300 cursor-pointer bg-transparent border-none outline-none"
          >
            Simulador
          </button>
          <button
            onClick={() => scrollToIntoView("benefits")}
            className="text-on-surface-variant font-semibold hover:text-primary transition-colors duration-300 cursor-pointer bg-transparent border-none outline-none"
          >
            Beneficios
          </button>
          <button
            onClick={() => scrollToIntoView("faq")}
            className="text-on-surface-variant font-semibold hover:text-primary transition-colors duration-300 cursor-pointer bg-transparent border-none outline-none"
          >
            FAQ
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToIntoView("simulator")}
            className="text-on-surface-variant font-semibold hover:text-primary transition-colors duration-300 cursor-pointer bg-transparent border-none outline-none mr-2 hidden sm:block"
          >
            Simular
          </button>
          <Button variant="nav" onClick={onOpenPreRegister}>
            Pré-registro
          </Button>
        </div>
      </div>
    </nav>
  );
}
