"use client";

import React from "react";
import SolutionCard from "../molecules/SolutionCard";

const SOLUTIONS = [
	{
		title: "Capital de Giro",
		description: "Mantenha seu estoque em dia e garanta o fôlego necessário para as operações diárias sem sufocar o caixa.",
		imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCrLAnNdyT4TgqA2zmXYFsZvSPafp3IU_gSTYcv6GCVHyEWrHSoL8y0tS_c1_LQx6vBTmZTNtyRmxeQf5Z4SXaIh8AccMSuNjYnXEJ3dmNBgAywPSZaj1bFBOd_nD-3wpdbmEQ_JXg4aBIwA7fL8EstpnLUzbWwiV8sErjQ5LuVYDUqbvDlnQ7vrJPb8nZA6b4KW1LHcVYcGyQOR6d_20J8s2NSh8nggOS8cTdD7zVyt9IbLzPQMXjVypXlcNUKc_v5gNBDb6pOK7q",
	},
	{
		title: "Equipamentos",
		description: "Atualize sua infraestrutura tecnológica ou maquinário pesado com linhas específicas de financiamento.",
		imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlCSe6j_FCvavfsIOoHnt8kzd3jaV2gIpNIYFhb8qva4lnsD4m1yEkP2dv44gmHqCyfboCoYwv0dNHhpXc8dnWY2J6Dbry_wcpJPSDElMtuT_2uV0kcYyri_TD3coVZWbCQUSMvS4c6wKwfR5I9h8vwo5wnkXfqzVsaJk77aVQgqdG0SP2fq63TYm0dYrd-W2z4wd-3LSxnredETH9x2cDscRHM247Sd077olF_F9x91tmNnumqkBLixS8j5XL2LIqcVacWAH8xYWG",
	},
	{
		title: "Expansão",
		description: "Crédito estruturado para abertura de novas unidades, franquias ou entrada em novos mercados estratégicos.",
		imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmSOLIhNS1xINHcrwsoy0luoyKJQpsGdCS0fuvPuczLbuWJvsRIAzRRtgmz5Noqt6eNUGohC5X9-JCBC7EbxvMmELyLUWKfAmgdgYZOoERO3QFX_E2nZY8ChX1FuoqvUO3R3AtuJ_pBSF7gV97g5zuh3V89ZtUCNnc0AXulDsmAqZSSgEC1vrR8lNq_JyonYQ0Qr9l9i9UvzjTVtoQm5B9IW-CE3jrtkOjfuM_niiMh62GiCoGD7u6A-V4M2l-rdf7RRbCNSxYlyGn",
	},
];

export default function Solutions() {
	const handleWhatsAppClick = () => {
		window.open("https://wa.me/5599999999999", "_blank");
	};

	return (
		<section className="py-24 px-8 bg-surface-container-lowest" id="solutions">
			<div className="max-w-7xl mx-auto">
				<div className="mb-16">
					<h2 className="text-3xl font-extrabold text-on-surface font-display">
						Soluções para cada momento
					</h2>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					{SOLUTIONS.map((solution) => (
						<SolutionCard
							key={solution.title}
							title={solution.title}
							description={solution.description}
							imageSrc={solution.imageSrc}
							onActionClick={handleWhatsAppClick}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
