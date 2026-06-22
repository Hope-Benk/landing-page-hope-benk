"use client";

import React, { useState } from "react";
import Slider from "../atoms/Slider";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";

export default function Simulator() {
	const [amount, setAmount] = useState<number>(50000);
	const [installments, setInstallments] = useState<number>(12);
	const [privacyAccepted, setPrivacyAccepted] = useState<boolean>(false);

	const rate = 0.0149; // 1.49% a.m.
	const pmt = (rate * amount) / (1 - Math.pow(1 + rate, -installments));

	const formatCurrency = (value: number) => {
		return value.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
		});
	};

	const handleWhatsAppClick = () => {
		window.open("https://wa.me/5599999999999", "_blank");
	};

	return (
		<section className="py-24 px-8 bg-surface-container-low" id="simulator">
			<div className="max-w-5xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4 tracking-tight font-display">
						Simule seu crédito em segundos
					</h2>
					<p className="text-on-surface-variant text-lg font-body">
						Transparência total: você sabe exatamente quanto vai pagar.
					</p>
				</div>
				<div className="grid lg:grid-cols-5 gap-8">
					<div className="lg:col-span-3 bg-surface-container-lowest p-10 rounded-4xl shadow-sm border border-outline-variant/10">
						<div className="space-y-12">
							{/* Amount Slider */}
							<div className="space-y-6">
								<div className="flex justify-between items-end font-body">
									<label className="text-on-surface-variant font-semibold text-sm uppercase tracking-wider">
										Valor desejado
									</label>
									<span className="text-3xl font-extrabold text-primary font-display">
										{formatCurrency(amount)}
									</span>
								</div>
								<Slider
									id="amount-range"
									min={5000}
									max={500000}
									step={5000}
									value={amount}
									onChange={setAmount}
								/>
								<div className="flex justify-between text-xs font-bold text-on-surface-variant/60 font-body">
									<span>R$ 5.000</span>
									<span>R$ 500.000</span>
								</div>
							</div>
							{/* Installments Slider */}
							<div className="space-y-6">
								<div className="flex justify-between items-end font-body">
									<label className="text-on-surface-variant font-semibold text-sm uppercase tracking-wider">
										Quantidade de parcelas
									</label>
									<span className="text-3xl font-extrabold text-primary font-display">
										{installments}x
									</span>
								</div>
								<Slider
									id="installments-range"
									min={6}
									max={60}
									step={6}
									value={installments}
									onChange={setInstallments}
								/>
								<div className="flex justify-between text-xs font-bold text-on-surface-variant/60 font-body">
									<span>6 meses</span>
									<span>60 meses</span>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:col-span-2 bg-primary p-10 rounded-4xl text-white flex flex-col justify-between shadow-xl">
						<div>
							<p className="text-blue-100 font-medium mb-2 font-body text-sm">
								Estimativa da parcela
							</p>
							<h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 font-display">
								{formatCurrency(pmt)}
							</h3>
							<div className="space-y-4 pt-8 border-t border-white/20 font-body">
								<div className="flex justify-between">
									<span className="opacity-80 text-sm">Taxa de juros</span>
									<span className="font-bold text-sm">1.49% a.m.</span>
								</div>
								<div className="flex justify-between">
									<span className="opacity-80 text-sm">CET Anual</span>
									<span className="font-bold text-sm">19.5%</span>
								</div>
							</div>
						</div>
						<div className="mt-12 space-y-4">
							<Checkbox
								id="privacy"
								checked={privacyAccepted}
								onChange={setPrivacyAccepted}
								label="Li e concordo com a Política de Privacidade e autorizo o contato."
							/>
							<Button
								variant="simulator-action"
								onClick={handleWhatsAppClick}
							>
								Solicitar Agora
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
