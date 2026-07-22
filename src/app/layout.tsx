import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hopesolut.com.br"),
  title: "Empréstimo PJ em Arcoverde e Pernambuco | Hope Benk",
  description:
    "Empréstimo PJ e conta digital para empresas em Arcoverde e Pernambuco. Simule seu crédito empresarial sem burocracia com a Hope Benk!",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.hopesolut.com.br",
    title: "Empréstimo PJ em Arcoverde e Pernambuco | Hope Benk",
    description:
      "Empréstimo PJ e conta digital para empresas em Arcoverde e Pernambuco. Simule seu crédito empresarial sem burocracia com a Hope Benk!",
    siteName: "Hope Benk",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hope Benk - Empréstimo PJ e Crédito para PMEs em Arcoverde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empréstimo PJ em Arcoverde e Pernambuco | Hope Benk",
    description:
      "Empréstimo PJ e conta digital para empresas em Arcoverde e Pernambuco. Simule seu crédito empresarial sem burocracia com a Hope Benk!",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.hopesolut.com.br/#organization",
                  name: "Hope Benk",
                  url: "https://www.hopesolut.com.br",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.hopesolut.com.br/logo.png",
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/hopesolut",
                    "https://www.instagram.com/hopesolut",
                    "https://www.facebook.com/hopesolut",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.hopesolut.com.br/#website",
                  url: "https://www.hopesolut.com.br",
                  name: "Hope Benk",
                  publisher: {
                    "@id": "https://www.hopesolut.com.br/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://www.hopesolut.com.br/?s={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.hopesolut.com.br/#webpage",
                  url: "https://www.hopesolut.com.br",
                  name: "Empréstimo PJ em Arcoverde e Pernambuco | Hope Benk",
                  isPartOf: {
                    "@id": "https://www.hopesolut.com.br/#website",
                  },
                  about: {
                    "@id": "https://www.hopesolut.com.br/#organization",
                  },
                  description:
                    "Empréstimo PJ e conta digital para empresas em Arcoverde e Pernambuco. Simule seu crédito empresarial sem burocracia com a Hope Benk!",
                },
                {
                  "@type": "FinancialService",
                  "@id": "https://www.hopesolut.com.br/#service",
                  name: "Hope Benk",
                  url: "https://www.hopesolut.com.br",
                  telephone: "+55-81-99999-9999",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Rua Major Braz, 288 - Centro",
                    addressLocality: "Arcoverde",
                    addressRegion: "PE",
                    postalCode: "56400-000",
                    addressCountry: "BR",
                  },
                  serviceType: "Empréstimo PJ e Conta Digital",
                  areaServed: [
                    {
                      "@type": "AdministrativeArea",
                      name: "Arcoverde",
                    },
                    {
                      "@type": "AdministrativeArea",
                      name: "Pernambuco",
                    },
                  ],
                  provider: {
                    "@id": "https://www.hopesolut.com.br/#organization",
                  },
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.hopesolut.com.br/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Preciso de garantias reais para o empréstimo?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Depende da linha de crédito escolhida. Oferecemos opções com e sem garantias reais, focando na saúde financeira e faturamento da sua empresa.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Quanto tempo leva para o dinheiro cair na conta?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Após a aprovação final e assinatura digital do contrato, o desembolso costuma ocorrer em até 24 horas úteis diretamente na conta PJ informada.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Quais são as taxas médias aplicadas?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "As taxas variam conforme o perfil de risco da empresa, iniciando em 1.2% ao mês. A simulação inicial já apresenta uma estimativa real baseada nos dados fornecidos.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-surface text-on-surface"
        suppressHydrationWarning
      >
        <QueryProvider>{children}</QueryProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
