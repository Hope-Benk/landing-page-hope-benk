import React from "react";
import Icon from "../atoms/Icon";

interface BenefitCardProps {
	variant: "agility" | "rates" | "security" | "grace-period";
}

export default function BenefitCard({ variant }: BenefitCardProps) {
	if (variant === "agility") {
		return (
			<div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-4xl flex flex-col justify-between group overflow-hidden relative border border-slate-100">
				<div className="relative z-10">
					<Icon name="bolt" className="text-primary text-4xl mb-4" />
					<h3 className="text-2xl font-bold mb-4">
						Agilidade Incomparável
					</h3>
					<p className="text-on-surface-variant max-w-md">
						Análise de crédito concluída em até 24 horas úteis, sem pilhas
						de documentos físicos ou idas ao banco.
					</p>
				</div>
				<div className="absolute right-[-5%] bottom-[-10%] w-64 opacity-5 group-hover:scale-110 transition-transform">
					<Icon name="bolt" className="text-[200px] text-primary" />
				</div>
			</div>
		);
	}

	if (variant === "rates") {
		return (
			<div className="bg-primary text-white p-10 rounded-4xl flex flex-col justify-center shadow-lg shadow-blue-500/10">
				<h3 className="text-2xl font-bold mb-4">Taxas Competitivas</h3>
				<p className="opacity-80">
					Juros personalizados baseados na saúde real do seu negócio, não
					apenas em tabelas fixas.
				</p>
			</div>
		);
	}

	if (variant === "security") {
		return (
			<div className="bg-surface-container-lowest p-10 rounded-4xl flex flex-col justify-end border border-slate-100">
				<Icon name="verified_user" className="text-primary text-4xl mb-4" />
				<h3 className="text-xl font-bold mb-2">Segurança Bancária</h3>
				<p className="text-on-surface-variant text-sm">
					Instituição autorizada pelo Banco Central do Brasil, operando
					com os mais altos padrões de criptografia.
				</p>
			</div>
		);
	}

	if (variant === "grace-period") {
		return (
			<div className="md:col-span-2 bg-surface-container-highest p-10 rounded-4xl flex flex-col md:flex-row items-center gap-10">
				<div className="flex-1">
					<h3 className="text-2xl font-bold mb-4">Carência Flexível</h3>
					<p className="text-on-surface-variant">
						Comece a pagar quando sua empresa já estiver colhendo os
						frutos do investimento. Oferecemos carência de até 90 dias.
					</p>
				</div>
				<div className="shrink-0">
					<div className="w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center bg-white shadow-sm">
						<span className="text-3xl font-black text-primary">90D</span>
					</div>
				</div>
			</div>
		);
	}

	return null;
}
