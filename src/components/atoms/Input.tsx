import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  iconName?: string;
  error?: string;
  containerClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, iconName, error, className = "", containerClassName = "", ...props }, ref) => {
    return (
      <div className={`space-y-1 ${containerClassName}`}>
        {label && <label className="text-xs font-bold text-on-surface-variant ml-1">{label}</label>}
        <div className="relative">
          {iconName && (
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg select-none">
              {iconName}
            </span>
          )}
          <input
            ref={ref}
            className={`w-full py-3 bg-surface-container-high border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-sm ${
              iconName ? "pl-12 pr-4" : "px-4"
            } ${error ? "ring-2 ring-red-500 bg-red-50/10" : ""} ${className}`}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-500 font-semibold ml-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
