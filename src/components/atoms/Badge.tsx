import React from "react";

interface BadgeProps {
	children: React.ReactNode;
	className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
	return (
		<span
			className={`inline-block py-1.5 px-4 rounded-full bg-primary-container text-white font-bold text-xs tracking-wide uppercase ${className}`}
		>
			{children}
		</span>
	);
}
