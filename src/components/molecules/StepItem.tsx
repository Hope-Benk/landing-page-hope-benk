import React from "react";
import Icon from "../atoms/Icon";

interface StepItemProps {
	icon: string;
	title: string;
	description: string;
}

export default function StepItem({ icon, title, description }: StepItemProps) {
	return (
		<div className="text-center group">
			<div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
				<Icon name={icon} className="text-3xl" />
			</div>
			<h3 className="font-bold text-lg mb-3">{title}</h3>
			<p className="text-on-surface-variant text-sm leading-relaxed">
				{description}
			</p>
		</div>
	);
}
