"use client";

import React, { useState } from "react";
import FaqItem from "../molecules/FaqItem";

interface FaqItemData {
	question: string;
	answer: string;
}

const FAQ_ITEMS: FaqItemData[] = [
	{
		question: "Preciso de garantias reais para o empréstimo?",
		answer:
			"Depende da linha de crédito escolhida. Oferecemos opções com e sem garantias reais, focando na saúde financeira e faturamento da sua empresa.",
	},
	{
		question: "Quanto tempo leva para o dinheiro cair na conta?",
		answer:
			"Após a aprovação final e assinatura digital do contrato, o desembolso costuma ocorrer em até 24 horas úteis diretamente na conta PJ informada.",
	},
	{
		question: "Quais são as taxas médias aplicadas?",
		answer:
			"As taxas variam conforme o perfil de risco da empresa, iniciando em 1.2% ao mês. A simulação inicial já apresenta uma estimativa real baseada nos dados fornecidos.",
	},
];

export default function Faq() {
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenFaq((prev) => (prev === index ? null : index));
	};

	return (
		<section className="py-24 px-8" id="faq">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-3xl font-extrabold text-on-surface mb-12 text-center tracking-tight font-display">
					Perguntas Frequentes
				</h2>
				<div className="space-y-4">
					{FAQ_ITEMS.map((item, index) => (
						<FaqItem
							key={item.question}
							question={item.question}
							answer={item.answer}
							isOpen={openFaq === index}
							onToggle={() => handleToggle(index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
