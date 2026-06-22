"use client";

import React, { useState } from "react";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import TestimonialCard from "../molecules/TestimonialCard";

interface Testimonial {
	name: string;
	role: string;
	text: string;
	avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
	{
		name: "Ricardo Silva",
		role: "CEO, TechStore Brasil",
		text: '"O Hope Benk entendeu o timing do meu negócio. Recebemos o aporte em 48h e conseguimos fechar uma compra de estoque crucial."',
		avatar:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuApicnCjI8cSdna1N85gdhlEc-fpYx787BfUBKHdO__aOrerNr1euHdVmfEsN6VjBjJHdbSXvQEWknYEXqjZGs3b2Bzvj2li66b-7NyB3iqRt58bJTonAsoj8cVgi1ULjiM-KMet-WZzqYcN6Z5mED-6ICdt1JpumJp_yQr0laPDUtZDUYCvYMS4yuc1OI4S6pyo1t_W83-4719ja0gw3MPdq1lW1SIfY7Ebpxh9-kVc-gqSPpybGHmgRGg7lzgmqNbdQamqR7gdfwU",
	},
	{
		name: "Ana Martins",
		role: "Fundadora, Rede Leve",
		text: '"A carência de 90 dias foi o diferencial. Tivemos tempo de inaugurar a nova unidade antes de começar a pagar as parcelas."',
		avatar:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuBwC1KnyUdk63OK2tLv9BGPMk2wSXQqNdKm6mDuo7tVVzzecZo25uP1Q8ADd4928kKjK6AoXotuXAgGeE-3qQq5qsZ5XzEq2KIbr4ZZTzTwyiHzAjfDUtO2YABdkgnUWERU1Y_QW_1Gi6q7H0GIHHePH6co-m91MNfnBP0qpNxe26VzzXg8bixPqZH2MI3F5htMzSMY_T_55MuiSX42LQqlLs7hJn6az1LkZOmQ0FKNI84naBfYDcHmhRxf0sXWinkWALwaXRHxIHj-",
	},
];

export default function Testimonials() {
	const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

	const handlePrev = () => {
		setActiveTestimonial((prev) =>
			prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
		);
	};

	const handleNext = () => {
		setActiveTestimonial((prev) =>
			prev === TESTIMONIALS.length - 1 ? 0 : prev + 1,
		);
	};

	return (
		<section className="py-24 px-8 bg-surface-container-low overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
					<div className="max-w-xl">
						<h2 className="text-3xl font-extrabold text-on-surface mb-4 font-display">
							Quem cresce com a gente
						</h2>
						<p className="text-on-surface-variant text-lg font-body">
							Histórias reais de empreendedores que transformaram seus
							negócios com o Hope Benk.
						</p>
					</div>
					<div className="flex gap-4">
						<Button variant="icon-only" onClick={handlePrev}>
							<Icon name="chevron_left" />
						</Button>
						<Button variant="icon-only" onClick={handleNext}>
							<Icon name="chevron_right" />
						</Button>
					</div>
				</div>

				{/* Testimonials View */}
				<div className="relative w-full overflow-hidden h-72">
					{TESTIMONIALS.map((testimonial, idx) => (
						<div
							key={testimonial.name}
							className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out transform ${
								idx === activeTestimonial
									? "opacity-100 translate-x-0 scale-100"
									: "opacity-0 translate-x-full scale-95 pointer-events-none"
							}`}
						>
							<TestimonialCard
								name={testimonial.name}
								role={testimonial.role}
								text={testimonial.text}
								avatar={testimonial.avatar}
							/>
						</div>
					))}
				</div>

				<div className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale font-display font-extrabold text-xl tracking-wider text-slate-500 select-none">
					<span>CLIENT_LOGO_1</span>
					<span>CLIENT_LOGO_2</span>
					<span>CLIENT_LOGO_3</span>
					<span>CLIENT_LOGO_4</span>
					<span>CLIENT_LOGO_5</span>
				</div>
			</div>
		</section>
	);
}
