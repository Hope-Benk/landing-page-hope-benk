import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hopebenk.com.br"),
  title: "Hope Benk | Crédito Inteligente e Conta PJ para PMEs",
  description:
    "Hope Benk: A solução financeira definitiva para PMEs que buscam agilidade, segurança total e as melhores taxas de crédito e conta digital do mercado brasileiro.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://hopebenk.com.br",
    title: "Hope Benk | Crédito Inteligente e Conta PJ para PMEs",
    description:
      "Hope Benk: A solução financeira definitiva para PMEs que buscam agilidade, segurança total e as melhores taxas de crédito e conta digital do mercado brasileiro.",
    siteName: "Hope Benk",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hope Benk - Crédito Inteligente para PMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hope Benk | Crédito Inteligente e Conta PJ para PMEs",
    description:
      "Hope Benk: A solução financeira definitiva para PMEs que buscam agilidade, segurança total e as melhores taxas de crédito e conta digital do mercado brasileiro.",
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
                  "@id": "https://hopebenk.com.br/#organization",
                  name: "Hope Benk",
                  url: "https://hopebenk.com.br",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://hopebenk.com.br/logo.png",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://hopebenk.com.br/#website",
                  url: "https://hopebenk.com.br",
                  name: "Hope Benk",
                  publisher: {
                    "@id": "https://hopebenk.com.br/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://hopebenk.com.br/?s={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
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
      </body>
    </html>
  );
}
