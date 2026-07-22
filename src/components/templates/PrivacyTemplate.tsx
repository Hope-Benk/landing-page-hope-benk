"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const SECTIONS = [
  { id: "intro", label: "1. Introdução e Controlador" },
  { id: "collection", label: "2. Coleta de Dados" },
  { id: "purpose", label: "3. Finalidade do Tratamento" },
  { id: "sharing", label: "4. Compartilhamento de Dados" },
  { id: "security", label: "5. Medidas de Segurança" },
  { id: "rights", label: "6. Direitos do Usuário (LGPD)" },
  { id: "cookies", label: "7. Uso de Cookies" },
  { id: "contact", label: "8. Contato do Encarregado" },
];

export default function PrivacyTemplate() {
  const [activeSection, setActiveSection] = useState<string>("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex-1 bg-surface flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_8px_24px_0_rgba(25,28,29,0.06)] h-20 px-8 flex justify-between items-center">
        <div className="flex items-center gap-12 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="text-2xl font-display font-extrabold text-primary tracking-[-0.04em]"
            >
              Hope Benk
            </Link>
            <div className="hidden lg:flex gap-8 items-center">
              <Link
                href="/#solutions"
                className="text-on-surface-variant font-medium hover:text-primary transition-colors"
              >
                Soluções
              </Link>
              <Link
                href="/#simulator"
                className="text-on-surface-variant font-medium hover:text-primary transition-colors"
              >
                Simulador
              </Link>
              <Link
                href="/#benefits"
                className="text-on-surface-variant font-medium hover:text-primary transition-colors"
              >
                Benefícios
              </Link>
              <Link
                href="/#faq"
                className="text-on-surface-variant font-medium hover:text-primary transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/#simulator"
              className="px-6 py-2.5 rounded-full bg-linear-to-br from-primary to-primary-container text-white font-semibold text-sm active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              Simular
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-24 grow">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Side Navigation (Sticky Hierarchy) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-2">
              <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-on-surface-variant/60 mb-6">
                Seções
              </h4>
              {SECTIONS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleSmoothScroll(e, id)}
                  className={`block px-4 py-2 text-sm font-medium transition-all rounded-r-lg ${
                    activeSection === id
                      ? "text-primary border-l-2 border-primary bg-primary/5"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </aside>

          {/* Main Document Content */}
          <article className="lg:col-span-9">
            <header className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <span className="material-symbols-outlined text-sm">
                  verified_user
                </span>
                Atualizado em Outubro de 2024
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-6">
                Política de Privacidade
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed max-w-3xl">
                No Hope Benk, a sua privacidade financeira é o nosso compromisso
                mais elevado. Este documento detalha como processamos e
                protegemos seus dados pessoais como seu parceiro de fomento mercantil e crédito.
              </p>
            </header>

            {/* Document Content Sections */}
            <div className="space-y-12">
              <section id="intro" className="scroll-mt-28">
                <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">
                  1. Introdução e Controlador de Dados
                </h2>
                <p className="font-body text-base text-on-surface-variant leading-relaxed mb-5">
                  A ALVORADA CREDITO INDEPENDENTE LTDA. (&quot;Hope Benk&quot;), inscrita sob o CNPJ:
                  28.297.373/0001-95, com sede no Brasil, atua como Controladora
                  de seus dados pessoais. Estamos comprometidos com a
                  transparência e a segurança de suas informações, seguindo
                  estritamente a Lei Geral de Proteção de Dados (LGPD) e os
                  principais padrões de segurança do mercado.
                </p>
                <p className="font-body text-base text-on-surface-variant leading-relaxed mb-5">
                  Ao utilizar nossos serviços, aplicativos ou site, você
                  reconhece os termos desta Política de Privacidade. Esta
                  política se aplica a todos os clientes individuais e
                  corporativos atuais, anteriores e futuros da Hope Benk.
                </p>
              </section>

              <section id="collection" className="scroll-mt-28">
                <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">
                  2. Coleta de Dados
                </h2>
                <p className="font-body text-base text-on-surface-variant leading-relaxed mb-5">
                  Coletamos informações necessárias para fornecer uma
                  experiência bancária premium, categorizadas da seguinte forma:
                </p>
                <ul className="list-none pl-0 mb-6 space-y-3">
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong>Dados de Registro:</strong> Nome, CPF, RG, data de
                    nascimento, endereço, e-mail, número de telefone e dados de
                    reconhecimento facial para verificação de identidade.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong>Dados Financeiros:</strong> Informações de
                    rendimento, histórico de transações, pontuação de crédito,
                    perfis de investimento e saldos de conta.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong>Dados de Navegação e Dispositivo:</strong> Endereço
                    IP, geolocalização (quando autorizada), tipo de dispositivo,
                    sistema operacional e padrões de interação na plataforma
                    Hope Benk.
                  </li>
                </ul>
              </section>

              {/* Callout Box */}
              <div className="my-12 p-8 bg-surface-container-low rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-headline font-bold text-lg text-primary mb-2">
                    Nosso Compromisso de Privacidade
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed italic">
                    &quot;Tratamos seus dados com a mesma precisão e segurança
                    com que gerenciamos seus ativos. Nenhum dado é processado
                    sem uma base legal clara e um propósito específico.&quot;
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <span
                    className="material-symbols-outlined text-8xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    security
                  </span>
                </div>
              </div>

              <section id="purpose" className="scroll-mt-28">
                <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">
                  3. Finalidade do Tratamento
                </h2>
                <p className="font-body text-base text-on-surface-variant leading-relaxed mb-5">
                  Utilizamos seus dados estritamente para propósitos de negócios
                  legítimos e legais, incluindo:
                </p>
                <ul className="list-none pl-0 mb-6 space-y-3">
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong>Execução Contratual:</strong> Abertura e manutenção
                    de sua conta bancária e processamento de transações
                    financeiras solicitadas.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong>Análise de Crédito:</strong> Avaliação de capacidade
                    financeira para concessão de limites de empréstimo e
                    produtos de crédito adequados.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong>Prevenção a Fraudes:</strong> Monitoramento de
                    transações para proteger seus ativos contra acessos não
                    autorizados ou atividades suspeitas.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong>Conformidade Regulatória:</strong> Atendimento a
                    obrigações emitidas pelo Banco Central do Brasil (BACEN) e
                    regulamentos de Prevenção à Lavagem de Dinheiro (PLD).
                  </li>
                </ul>
              </section>

              <section id="sharing" className="scroll-mt-28">
                <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">
                  4. Compartilhamento de Dados
                </h2>
                <p className="font-body text-base text-on-surface-variant leading-relaxed mb-5">
                  O Hope Benk não comercializa seus dados pessoais. Nós apenas
                  compartilhamos informações quando estritamente necessário com:
                </p>
                <ul className="list-none pl-0 mb-6 space-y-3">
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong>Autoridades Reguladoras:</strong> Banco Central do
                    Brasil, CVM e outros órgãos públicos conforme exigido por
                    lei.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong>Bureaus de Crédito:</strong> Entidades como Serasa e
                    Boa Vista para fins de análise de risco de crédito e
                    prevenção de fraudes.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <strong>Parceiros Estratégicos:</strong> Fornecedores de
                    tecnologia, processadoras de cartão e infraestrutura em
                    nuvem (como AWS), sob rígidos acordos de confidencialidade.
                  </li>
                </ul>
              </section>

              <section id="security" className="scroll-mt-28">
                <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">
                  5. Medidas de Segurança
                </h2>
                <p className="font-body text-base text-on-surface-variant leading-relaxed mb-5">
                  Empregamos serenidade arquitetônica em nosso design e rigor
                  técnico em nossa segurança. Nossa infraestrutura conta com:
                </p>
                <ul className="list-none pl-0 mb-6 space-y-3">
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    Criptografia de ponta a ponta para todas as transmissões de
                    dados financeiros.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    Firewalls avançados e sistemas de detecção de intrusão
                    monitorados 24 horas por dia.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    Arquitetura de acesso zero-trust para nossos colaboradores
                    internos.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    Auditorias contínuas de segurança e testes de intrusão
                    recorrentes.
                  </li>
                </ul>
              </section>

              <section id="rights" className="scroll-mt-28">
                <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">
                  6. Direitos do Usuário (LGPD)
                </h2>
                <p className="font-body text-base text-on-surface-variant leading-relaxed mb-5">
                  Sob a LGPD, você mantém total controle sobre seus dados
                  pessoais. Você pode solicitar a qualquer momento:
                </p>
                <ul className="list-none pl-0 mb-6 space-y-3">
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    Confirmação da existência de tratamento de dados pessoais.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    Acesso facilitado aos seus dados armazenados por nós.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    Correção de dados incompletos, inexatos ou desatualizados.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    Anonimização, bloqueio ou eliminação de dados
                    desnecessários.
                  </li>
                  <li className="relative pl-7 text-on-surface-variant font-body before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    Portabilidade de seus dados a outro prestador de serviços
                    financeiros.
                  </li>
                </ul>
              </section>

              <section id="cookies" className="scroll-mt-28">
                <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">
                  7. Uso de Cookies
                </h2>
                <p className="font-body text-base text-on-surface-variant leading-relaxed mb-5">
                  Utilizamos cookies para aprimorar sua experiência de
                  navegação. Eles incluem <strong>Cookies Essenciais</strong>{" "}
                  para o funcionamento seguro do site,{" "}
                  <strong>Cookies Analíticos</strong> para entender o
                  comportamento de tráfego, e{" "}
                  <strong>Cookies Funcionais</strong> para lembrar suas escolhas
                  (como idioma ou preferências regionais).
                </p>
              </section>

              <section
                id="contact"
                className="scroll-mt-28 bg-surface-container-highest/30 p-8 rounded-2xl border border-outline-variant/20 mt-16"
              >
                <h2 className="mt-0 font-headline font-bold text-2xl text-on-surface mb-4">
                  8. Contato do Encarregado (DPO)
                </h2>
                <p className="font-body text-base text-on-surface-variant leading-relaxed mb-5">
                  Caso tenha dúvidas sobre esta política ou queira exercer seus
                  direitos legais sob a LGPD, entre em contato com nosso
                  Encarregado de Proteção de Dados (DPO):
                </p>
                <div className="flex flex-col md:flex-row gap-6 mt-6">
                  <div className="flex-1 p-6 bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 flex flex-col">
                    <span className="material-symbols-outlined text-primary mb-2 text-2xl">
                      mail
                    </span>
                    <span className="font-bold text-on-surface mb-1">
                      Endereço de E-mail
                    </span>
                    <a
                      className="text-primary font-medium hover:underline text-sm break-all"
                      href="mailto:arcoverdeferreira@hotmail.com"
                    >
                      arcoverdeferreira@hotmail.com
                    </a>
                  </div>
                  <div className="flex-1 p-6 bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 flex flex-col">
                    <span className="material-symbols-outlined text-primary mb-2 text-2xl">
                      location_on
                    </span>
                    <span className="font-bold text-on-surface mb-1">
                      Correspondência
                    </span>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      A/C Depto. de Privacidade, ALVORADA CREDITO INDEPENDENTE LTDA. | Rua Martins Junior, nº 14, Bairro São Geraldo, Arcoverde - PE, CEP: 56.515-330
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low relative w-full pt-16 pb-8 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xs">
              <Link
                href="/"
                className="text-xl font-display font-bold text-primary tracking-tight"
              >
                Hope Benk
              </Link>
              <p className="mt-4 text-sm text-on-surface-variant leading-relaxed font-body">
                Redefinindo o crédito empresarial através de agilidade,
                transparência e precisão tecnológica.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="flex flex-col gap-3 font-body">
                <h5 className="font-headline font-bold text-sm text-on-surface">
                  Recursos
                </h5>
                <Link
                  href="/#faq"
                  className="text-sm text-on-surface-variant hover:text-primary transition-all"
                >
                  Ajuda
                </Link>
                <Link
                  href="/#benefits"
                  className="text-sm text-on-surface-variant hover:text-primary transition-all"
                >
                  Segurança
                </Link>
              </div>
              <div className="flex flex-col gap-3 font-body">
                <h5 className="font-headline font-bold text-sm text-on-surface">
                  Legal
                </h5>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-primary underline font-semibold"
                >
                  Política de Privacidade
                </Link>
                <Link
                  href="/#faq"
                  className="text-sm text-on-surface-variant hover:text-primary transition-all"
                >
                  Termos de Uso
                </Link>
              </div>
              <div className="flex flex-col gap-3 font-body">
                <h5 className="font-headline font-bold text-sm text-on-surface">
                  Empresa
                </h5>
                <Link
                  href="/#hero"
                  className="text-sm text-on-surface-variant hover:text-primary transition-all"
                >
                  Sobre
                </Link>
                <Link
                  href="/#footer"
                  className="text-sm text-on-surface-variant hover:text-primary transition-all"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-on-surface-variant">
              © 2026 ALVORADA CREDITO INDEPENDENTE LTDA. CNPJ: 28.297.373/0001-95.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
