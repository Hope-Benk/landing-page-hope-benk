import React from "react";
import Image from "next/image";
import Icon from "../atoms/Icon";

interface SolutionCardProps {
	title: string;
	description: string;
	imageSrc: string;
	onActionClick: () => void;
}

export default function SolutionCard({
	title,
	description,
	imageSrc,
	onActionClick,
}: SolutionCardProps) {
	return (
		<div className="p-8 rounded-4xl border border-outline-variant/30 hover:border-primary transition-all group bg-white">
			<div className="w-full h-48 rounded-2xl mb-6 overflow-hidden relative">
				<Image
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover group-hover:scale-105 transition-transform duration-500"
					alt={title}
					src={imageSrc}
				/>
			</div>
			<h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
				{title}
			</h3>
			<p className="text-on-surface-variant text-sm leading-relaxed mb-6">
				{description}
			</p>
			<button
				onClick={onActionClick}
				className="text-primary font-bold flex items-center gap-2 cursor-pointer"
			>
				Saiba mais <Icon name="arrow_forward" className="text-sm" />
			</button>
		</div>
	);
}
