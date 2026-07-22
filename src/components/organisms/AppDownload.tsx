"use client";

import React from "react";

export default function AppDownload() {
	const handleAppStoreClick = () => {
		window.open("https://apps.apple.com", "_blank");
	};

	const handlePlayStoreClick = () => {
		window.open("https://play.google.com", "_blank");
	};

	return (
		<section className="py-24 px-8 bg-surface" id="download">
			<div className="max-w-7xl mx-auto">
				<div className="relative bg-slate-900 rounded-4xl overflow-hidden border border-slate-800 shadow-2xl p-8 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-12">
					{/* Background Glows */}
					<div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
					<div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none" />

					{/* Left Side: Content */}
					<div className="flex-1 text-left relative z-10">
						<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
							<span className="material-symbols-outlined text-sm">
								smartphone
							</span>
							Aplicativo Hope Benk
						</span>
						<h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight font-display">
							Tudo o que sua empresa precisa, direto no celular
						</h2>
						<p className="text-slate-400 text-base md:text-lg mb-10 max-w-xl leading-relaxed font-body">
							Monitore seu fluxo de caixa, realize transações Pix, emita cobranças e solicite capital de giro com apenas alguns toques. Rápido, seguro e sem complicações.
						</p>

						{/* Store Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 items-start">
							{/* App Store */}
							<button
								onClick={handleAppStoreClick}
								className="w-full sm:w-auto h-14 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-white rounded-xl px-5 flex items-center justify-center gap-3 transition-all active:scale-95 duration-200 cursor-pointer shadow-lg"
							>
								{/* Apple Icon */}
								<svg
									className="w-6 h-6 fill-current"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.13.67-2.85 1.51-.62.73-1.16 1.87-1.01 2.98 1.1.09 2.21-.62 2.87-1.43z" />
								</svg>
								<div className="text-left">
									<p className="text-[10px] text-slate-400 uppercase font-medium leading-none mb-1">
										Baixar na
									</p>
									<p className="text-sm font-bold font-display leading-none">
										App Store
									</p>
								</div>
							</button>

							{/* Google Play */}
							<button
								onClick={handlePlayStoreClick}
								className="w-full sm:w-auto h-14 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-white rounded-xl px-5 flex items-center justify-center gap-3 transition-all active:scale-95 duration-200 cursor-pointer shadow-lg"
							>
								{/* Google Play Icon */}
								<svg
									className="w-6 h-6 fill-current"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M3 22.25V1.75c0-.4.18-.76.49-1L13.8 11.06 3.49 21.25c-.31-.24-.49-.6-.49-1zM14.74 12l2.67 2.67-11.83 6.83c-.31.18-.68.18-.99 0l10.15-9.5zM21 12c0 .4-.18.76-.49 1l-2.67-2.67L20.51 11c.31.24.49.6.49 1zm-6.26-1L14.74 12 4.59 2.5c.31-.18.68-.18.99 0l9.16 8.5z" />
								</svg>
								<div className="text-left">
									<p className="text-[10px] text-slate-400 uppercase font-medium leading-none mb-1">
										Disponível no
									</p>
									<p className="text-sm font-bold font-display leading-none">
										Google Play
									</p>
								</div>
							</button>
						</div>
					</div>

					{/* Right Side: Interactive CSS Phone Mockup */}
					<div className="flex-1 flex justify-center items-center relative z-10 w-full">
						<div className="w-[280px] h-[550px] bg-slate-950 rounded-[48px] border-4 border-slate-800 relative shadow-2xl p-3 flex flex-col justify-between select-none">
							{/* Phone Camera & Notch */}
							<div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-950 rounded-full flex items-center justify-center gap-2 border border-slate-800/40 z-30">
								<div className="w-12 h-1 bg-slate-800 rounded-full" />
								<div className="w-2.5 h-2.5 bg-indigo-950 rounded-full border-2 border-slate-800" />
							</div>

							{/* Screen Content Container */}
							<div className="w-full h-full bg-slate-900 rounded-[38px] overflow-hidden p-4 pt-10 flex flex-col gap-4 font-sans text-white border border-slate-800">
								{/* Mock Status Bar */}
								<div className="flex justify-between items-center text-[10px] text-slate-400 px-2 font-medium">
									<span>09:41</span>
									<div className="flex items-center gap-1.5">
										<span className="material-symbols-outlined text-[10px]">
											signal_cellular_4_bar
										</span>
										<span className="material-symbols-outlined text-[10px]">
											wifi
										</span>
										<span className="material-symbols-outlined text-[10px]">
											battery_5_bar
										</span>
									</div>
								</div>

								{/* Mock Header */}
								<div className="flex justify-between items-center px-1">
									<div className="flex items-center gap-2">
										<div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center font-bold text-slate-950 text-xs">
											H
										</div>
										<span className="font-semibold text-xs font-display">
											Hope Benk
										</span>
									</div>
									<div className="relative">
										<span className="material-symbols-outlined text-slate-400 text-lg hover:text-white cursor-pointer">
											notifications
										</span>
										<span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
									</div>
								</div>

								{/* Balance Card */}
								<div className="bg-linear-to-br from-primary to-primary-container p-4 rounded-2xl flex flex-col gap-1 text-slate-950 shadow-lg shadow-primary/20">
									<span className="text-[10px] font-semibold uppercase tracking-wider opacity-80">
										Saldo Disponível
									</span>
									<span className="text-2xl font-bold font-display leading-none mb-1">
										R$ 48.750,20
									</span>
									<div className="h-px bg-slate-950/10 my-2" />
									<div className="flex justify-between items-center text-[9px] font-semibold opacity-90">
										<span>Limite Pré-Aprovado</span>
										<span>R$ 120.000,00</span>
									</div>
								</div>

								{/* Quick Action Grid */}
								<div className="grid grid-cols-4 gap-2 text-center text-[9px] text-slate-300 font-medium">
									<div className="flex flex-col items-center gap-1 bg-slate-800/40 p-2 rounded-xl border border-slate-700/20 hover:bg-slate-800 cursor-pointer">
										<span className="material-symbols-outlined text-primary text-base">
											payments
										</span>
										<span>Pix</span>
									</div>
									<div className="flex flex-col items-center gap-1 bg-slate-800/40 p-2 rounded-xl border border-slate-700/20 hover:bg-slate-800 cursor-pointer">
										<span className="material-symbols-outlined text-primary text-base">
											receipt_long
										</span>
										<span>Extrato</span>
									</div>
									<div className="flex flex-col items-center gap-1 bg-slate-800/40 p-2 rounded-xl border border-slate-700/20 hover:bg-slate-800 cursor-pointer">
										<span className="material-symbols-outlined text-primary text-base">
											monetization_on
										</span>
										<span>Crédito</span>
									</div>
									<div className="flex flex-col items-center gap-1 bg-slate-800/40 p-2 rounded-xl border border-slate-700/20 hover:bg-slate-800 cursor-pointer">
										<span className="material-symbols-outlined text-primary text-base">
											support_agent
										</span>
										<span>Ajuda</span>
									</div>
								</div>

								{/* Recent Activity */}
								<div className="flex-1 flex flex-col gap-2 overflow-hidden">
									<span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider px-1">
										Atividade recente
									</span>
									<div className="flex flex-col gap-2 overflow-y-auto max-h-[160px] pr-1">
										<div className="flex justify-between items-center bg-slate-800/25 p-2 rounded-xl border border-slate-800/50">
											<div className="flex items-center gap-2">
												<div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center">
													<span className="material-symbols-outlined text-emerald-500 text-xs font-bold">
														call_received
													</span>
												</div>
												<div className="flex flex-col">
													<span className="font-semibold text-[10px]">
														Pix Recebido
													</span>
													<span className="text-[8px] text-slate-500">
														Alvorada Crédito
													</span>
												</div>
											</div>
											<span className="text-emerald-500 font-bold text-[10px]">
												+R$ 1.500,00
											</span>
										</div>

										<div className="flex justify-between items-center bg-slate-800/25 p-2 rounded-xl border border-slate-800/50">
											<div className="flex items-center gap-2">
												<div className="w-6 h-6 rounded-lg bg-red-500/10 flex items-center justify-center">
													<span className="material-symbols-outlined text-red-500 text-xs font-bold">
														call_made
													</span>
												</div>
												<div className="flex flex-col">
													<span className="font-semibold text-[10px]">
														Pagamento Realizado
													</span>
													<span className="text-[8px] text-slate-500">
														Fornecedor PE
													</span>
												</div>
											</div>
											<span className="text-slate-300 font-bold text-[10px]">
												-R$ 890,00
											</span>
										</div>
									</div>
								</div>

								{/* Mock Tabbar */}
								<div className="flex justify-around items-center border-t border-slate-800/80 pt-3 mt-auto text-slate-400">
									<span className="material-symbols-outlined text-primary text-base cursor-pointer">
										home
									</span>
									<span className="material-symbols-outlined text-slate-500 text-base cursor-pointer hover:text-slate-300">
										bar_chart
									</span>
									<span className="material-symbols-outlined text-slate-500 text-base cursor-pointer hover:text-slate-300">
										wallet
									</span>
									<span className="material-symbols-outlined text-slate-500 text-base cursor-pointer hover:text-slate-300">
										settings
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
