import React from "react";

interface SliderProps {
	id: string;
	min: number;
	max: number;
	step: number;
	value: number;
	onChange: (value: number) => void;
	className?: string;
}

export default function Slider({
	id,
	min,
	max,
	step,
	value,
	onChange,
	className = "",
}: SliderProps) {
	return (
		<input
			className={`w-full h-2 rounded-lg cursor-pointer ${className}`}
			id={id}
			type="range"
			min={min}
			max={max}
			step={step}
			value={value}
			onChange={(e) => onChange(Number(e.target.value))}
		/>
	);
}
