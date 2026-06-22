import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Hope Benk | Crédito Inteligente para PMEs",
	description:
		"A solução financeira definitiva para PMEs que buscam agilidade, segurança e as melhores taxas do mercado brasileiro.",
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
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
				/>
			</head>
			<body className="min-h-full flex flex-col bg-surface text-on-surface" suppressHydrationWarning>
				{children}
			</body>
		</html>
	);
}
