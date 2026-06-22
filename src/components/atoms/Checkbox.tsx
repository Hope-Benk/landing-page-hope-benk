import React from "react";

interface CheckboxProps {
	id: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
	label: React.ReactNode;
	className?: string;
}

export default function Checkbox({
	id,
	checked,
	onChange,
	label,
	className = "",
}: CheckboxProps) {
	return (
		<div className={`flex items-start gap-3 ${className}`}>
			<input
				className="mt-1 rounded border-white/30 text-primary focus:ring-offset-0 focus:ring-0 cursor-pointer"
				id={id}
				type="checkbox"
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
			/>
			<label
				className="text-[11px] opacity-90 leading-tight cursor-pointer select-none"
				htmlFor={id}
			>
				{label}
			</label>
		</div>
	);
}
