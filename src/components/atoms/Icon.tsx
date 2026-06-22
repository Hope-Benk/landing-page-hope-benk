import React from "react";

interface IconProps {
	name: string;
	className?: string;
	fill?: boolean;
}

export default function Icon({ name, className = "", fill = false }: IconProps) {
	return (
		<span
			className={`material-symbols-outlined ${className}`}
			style={{ fontVariationSettings: fill ? "'FILL' 1" : undefined }}
		>
			{name}
		</span>
	);
}
