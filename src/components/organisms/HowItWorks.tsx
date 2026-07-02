import React from "react";
import StepItem from "../molecules/StepItem";

const STEPS = [
	{
		icon: "analytics",
		title: "Simulação",
		description: "Defina o valor e prazo que melhor se adaptam ao seu fluxo de caixa.",
	},
	{
		icon: "badge",
		title: "Dados CNPJ",
		description: "Insira as informações básicas da sua empresa com total segurança.",
	},
	{
		icon: "speed",
		title: "Análise de Crédito",
		description: "Nossa IA analisa seu perfil em tempo real para oferecer as melhores taxas.",
	},
	{
		icon: "account_balance_wallet",
		title: "Dinheiro na Conta",
		description: "Após aprovação, o recurso é liberado rapidamente na conta da empresa.",
	},
];

export default function HowItWorks() {
	return (
		<section className="py-24 px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-20">
					<h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-4 tracking-tight font-display">
						O caminho mais curto para o seu capital
					</h2>
					<p className="text-on-surface-variant text-lg font-body">
						Processo 100% digital e transparente do início ao fim.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
					{/* Connectors for Desktop */}
					<div className="hidden lg:block absolute top-12 left-1/4 right-12 h-[2px] bg-outline-variant/30 -z-10" />
					{STEPS.map((step) => (
						<StepItem
							key={step.title}
							icon={step.icon}
							title={step.title}
							description={step.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
