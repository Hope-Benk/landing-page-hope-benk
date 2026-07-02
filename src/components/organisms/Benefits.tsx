import React from "react";
import BenefitCard from "../molecules/BenefitCard";

export default function Benefits() {
	return (
		<section className="py-24 px-8 bg-surface-container-low" id="benefits">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-extrabold text-on-surface mb-16 text-center tracking-tight font-display">
					Por que escolher o Hope Benk?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:auto-rows-[280px] auto-rows-auto">
					<BenefitCard variant="agility" />
					<BenefitCard variant="rates" />
					<BenefitCard variant="security" />
					<BenefitCard variant="grace-period" />
				</div>
			</div>
		</section>
	);
}
