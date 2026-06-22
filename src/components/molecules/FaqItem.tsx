import React from "react";
import Icon from "../atoms/Icon";

interface FaqItemProps {
	question: string;
	answer: string;
	isOpen: boolean;
	onToggle: () => void;
}

export default function FaqItem({
	question,
	answer,
	isOpen,
	onToggle,
}: FaqItemProps) {
	return (
		<div className="rounded-2xl overflow-hidden">
			<button
				onClick={onToggle}
				className="w-full flex justify-between items-center p-6 bg-surface-container-low text-left hover:bg-surface-container-high transition-colors cursor-pointer"
			>
				<span className="font-bold text-on-surface">{question}</span>
				<Icon
					name="expand_more"
					className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
				/>
			</button>
			<div
				className={`transition-all duration-300 ease-in-out overflow-hidden ${
					isOpen ? "max-h-40 border-t border-slate-200/20" : "max-h-0"
				}`}
			>
				<div className="p-6 bg-surface-container-low text-on-surface-variant text-sm leading-relaxed">
					{answer}
				</div>
			</div>
		</div>
	);
}
