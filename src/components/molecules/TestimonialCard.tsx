import React from "react";
import Image from "next/image";
import Icon from "../atoms/Icon";

interface TestimonialCardProps {
	name: string;
	role: string;
	text: string;
	avatar: string;
}

export default function TestimonialCard({
	name,
	role,
	text,
	avatar,
}: TestimonialCardProps) {
	return (
		<div className="max-w-2xl bg-surface-container-lowest p-8 rounded-4xl shadow-sm border border-slate-100">
			<div
				className="flex gap-1 mb-6 text-primary"
				role="img"
				aria-label="Avaliação: 5 de 5 estrelas"
			>
				{[...Array(5)].map((_, i) => (
					<Icon key={i} name="star" fill={true} aria-hidden="true" />
				))}
			</div>
			<p className="text-on-surface text-lg mb-8 italic">{text}</p>
			<div className="flex items-center gap-4">
				<div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden relative">
					<Image
						width={48}
						height={48}
						className="w-full h-full object-cover"
						alt={name}
						src={avatar}
					/>
				</div>
				<div>
					<p className="font-bold">{name}</p>
					<p className="text-sm text-on-surface-variant">{role}</p>
				</div>
			</div>
		</div>
	);
}
