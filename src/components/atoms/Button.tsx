import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "hero-primary" | "hero-outline" | "nav" | "whatsapp" | "simulator-action" | "icon-only" | "plain";
	children: React.ReactNode;
	className?: string;
}

export default function Button({
	variant = "hero-primary",
	children,
	className = "",
	...props
}: ButtonProps) {
	const baseStyles = "transition-all duration-200 active:scale-95 cursor-pointer select-none font-bold text-center";

	const variantStyles = {
		"hero-primary": "px-8 py-4 bg-linear-to-br from-primary to-primary-container text-white rounded-xl text-lg hover:shadow-2xl hover:shadow-primary/30",
		"hero-outline": "px-8 py-4 border-2 border-outline-variant text-on-surface rounded-xl text-lg hover:bg-surface-container-low",
		"nav": "px-6 py-2.5 rounded-full bg-primary text-white hover:bg-blue-800 shadow-lg shadow-primary/20",
		"whatsapp": "w-full py-3 bg-[#25D366] text-white rounded-xl flex items-center justify-center gap-2 hover:brightness-110 shadow-md shadow-emerald-500/20",
		"simulator-action": "w-full py-4 bg-surface-container-lowest text-primary rounded-xl font-extrabold text-lg shadow-lg hover:bg-slate-100",
		"icon-only": "w-12 h-12 rounded-full border border-outline flex items-center justify-center bg-white hover:bg-slate-50 active:scale-90",
		"plain": "",
	};

	return (
		<button
			className={`${baseStyles} ${variantStyles[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
