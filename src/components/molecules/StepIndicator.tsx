import React from "react";

interface Step {
  number: number;
  label: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="space-y-8">
      {steps.map((step) => {
        const isActive = currentStep === step.number;
        const isCompleted = currentStep > step.number;

        return (
          <div key={step.number} className="flex items-center gap-4">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                isActive
                  ? "bg-white text-primary"
                  : isCompleted
                  ? "bg-white/20 text-white border border-white/40"
                  : "border-2 border-white/30 text-white/50"
              }`}
            >
              {isCompleted ? (
                <span className="material-symbols-outlined text-sm font-bold">check</span>
              ) : (
                step.number
              )}
            </div>
            <div
              className={`text-sm font-semibold transition-opacity duration-300 ${
                isActive ? "opacity-100" : "opacity-50"
              }`}
            >
              {step.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
