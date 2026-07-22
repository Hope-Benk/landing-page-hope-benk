"use client";

import React from "react";
import Image from "next/image";
import Button from "../atoms/Button";
import Badge from "../atoms/Badge";

export default function Hero() {
	const scrollToIntoView = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleWhatsAppClick = () => {
		window.open("https://wa.me/5599999999999", "_blank");
	};

	return (
		<section id="hero" className="relative pt-36 pb-24 px-8 overflow-hidden">
			<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
				<div className="relative z-10">
					<Badge className="mb-6">Parceria Estratégica</Badge>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1] font-display">
						Empréstimo PJ rápido para empresas em Arcoverde e Pernambuco
					</h1>
					<p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-lg leading-relaxed font-body">
						Crédito empresarial sem burocracia e conta digital PJ sob medida para impulsionar a sua PME em Pernambuco com as melhores taxas do mercado.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button
							variant="hero-primary"
							onClick={() => scrollToIntoView("simulator")}
						>
							Simular Empréstimo
						</Button>
						<Button
							variant="hero-outline"
							onClick={handleWhatsAppClick}
						>
							Falar com Especialista
						</Button>
					</div>
					<div className="mt-12 flex items-center gap-6">
						<div className="flex -space-x-3">
							<div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center overflow-hidden relative">
								<Image
									width={40}
									height={40}
									className="w-full h-full object-cover"
									alt="Executive Woman"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeQ49PqF1WqWo74_STyoOK0PFJRXT_m-O_e1SZ6vjczqSJdqf6wqWqDqY4ge2DOzIlh2WlmA1-OrvWKQU86N3JupU-uet-wstkpIwrFF7InIfms6kNA906dqF2_Gm9q4DztCuLCyBbriJH4ydjvMP_DCBFJFv2CctKmYAC-Ovw_HndgG6FxBfQo8OT0vIP7rjTTD_NRQgVTj-7E-wtnPaGrIBBIyg0boj_A6ZOX_T2cj-rKaK5t9CaY-SW1K1ZGqQpBy5uNdEH7Joq"
								/>
							</div>
							<div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center overflow-hidden relative">
								<Image
									width={40}
									height={40}
									className="w-full h-full object-cover"
									alt="Young Entrepreneur"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuCck0rT1bqli6Co3E1Is2w10xSK99sFbELsJje-wGXPBfh5KAu-bR5Yi4hz7fwgIek9cOrlSxiwLfs7RPZbyIVGeBfAczKpAHg7bmABE96zI5yp_xmFwqSoj6BvJD2B-d4t1SXNyGMFYpeHoCV9WFwFAi5_8BSgfT6nNUaUQLwjXJ6o5DMnpDVHbo7rBZg4f2MvuGg8uDh6SDAUZK7rU__Bej-0REhK3ws-uaioRcu2Viw6bWJCaSRlGOe7UAnSKlKRCRalbdTyeC74"
								/>
							</div>
							<div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center overflow-hidden relative">
								<Image
									width={40}
									height={40}
									className="w-full h-full object-cover"
									alt="Senior Executive"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiS_EW3I8_xaNPGCVvAhAHrdC6v7LkbkOWchnVUVtyptLe2tdyhwLZI1E9nR-qrn09TRp_Z5y9q8a5WO-Y5Be7R_i992ckKywepMjs4YyddL2Zs0m0YyxcNbaWlJOOwjhj37T-zH9YSFJBT3tjOcIasGKulQUBK-lfznPLanASqPQPRaB_pGC8Tx5tU0yuqV2rPLK2x3-9BRUjxnNYLhvtSeYvBA5IEgST04ykGP0YfLmOqlllnzGVwPoFhoKR-Kgyu2NbgUyiaUaq"
								/>
							</div>
						</div>
						<p className="text-sm text-on-surface-variant font-medium font-body">
							<span className="text-primary font-bold">+10.000 empresas</span>{" "}
							já impulsionadas
						</p>
					</div>
				</div>
				<div className="relative">
					<div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
					<div className="relative bg-surface-container-lowest p-4 rounded-4xl shadow-2xl border border-white/40 overflow-hidden">
						<Image
							width={600}
							height={400}
							className="rounded-2xl w-full shadow-inner"
							alt="Premium Dashboard Mockup"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcTnYjuhhh_2TO40orjyvcb0h5Dh9cnaJ0RT63Q1HC3f3IpuON-Hvi4D0tv-gMlZ54UlETgvHjYi6x3qMAg-tcCaLY9al5r84QktQgVcUJlOzQ--zw6dUK7jqHsucjNAglC7IikWADkkkR4iFFt2C4UEOxwkpBiDhf7gDdKK52HxHcwV4xJ_StNUcDPgSQYNF7IVYceuh7B6aUynl0_s7X80RIq1_sdlkUErGSec-8Fs2FM4iFHWjfNPqpRoEUib7cQJ54NtUK8OTS"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
