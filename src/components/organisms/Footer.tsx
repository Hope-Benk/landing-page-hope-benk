"use client";

import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import Link from "next/link";

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5599999999999", "_blank");
  };

  return (
    <footer className="relative w-full pt-16 pb-8 bg-surface-container-low border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="text-xl font-display font-extrabold text-primary mb-6">
              Hope Benk
            </div>
            <p className="text-sm text-on-surface-variant mb-6 font-body leading-relaxed">
              Transformando o acesso ao crédito para impulsionar a economia real
              através de tecnologia e empatia.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
                aria-label="Acessar website público"
              >
                <Icon name="public" className="text-lg" aria-hidden="true" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors duration-200"
                href="#"
                aria-label="Compartilhar"
              >
                <Icon name="share" className="text-lg" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-on-surface mb-6 font-body">
              Empresa
            </h3>
            <ul className="space-y-4 text-sm font-body">
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-all duration-200"
                  href="#"
                >
                  Quem Somos
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-all duration-200"
                  href="#"
                >
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-all duration-200"
                  href="#"
                >
                  Imprensa
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-on-surface mb-6 font-body">
              Legal &amp; Suporte
            </h3>
            <ul className="space-y-4 text-sm font-body">
              <li>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-all duration-200"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-all duration-200"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-all duration-200"
                  href="#"
                >
                  Security Center
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-all duration-200"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-primary transition-all duration-200"
                  href="#"
                >
                  Help Desk
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
            <h3 className="font-bold text-primary mb-4 font-body">
              Atendimento Especializado
            </h3>
            <p className="text-xs text-on-surface-variant mb-6 font-body leading-relaxed">
              Fale com um consultor agora mesmo via WhatsApp para dúvidas
              rápidas.
            </p>
            <Button variant="whatsapp" onClick={handleWhatsAppClick}>
              <Icon name="chat" /> WhatsApp
            </Button>
          </div>
        </div>
        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-xs text-slate-500 text-center md:text-left leading-relaxed">
            © 2024 Hope Benk S.A. CNPJ: 00.000.000/0001-00. Authorized by the
            Central Bank of Brazil.
            <br />
            Av. Brigadeiro Faria Lima, 3477 - Itaim Bibi, São Paulo - SP,
            04538-133.
          </p>
          <div className="text-xs text-slate-500 flex gap-4 font-body">
            <span>DPO: dpo@hopesolut.com.br</span>
            <span>Ouvidoria: 0800 123 4567</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
