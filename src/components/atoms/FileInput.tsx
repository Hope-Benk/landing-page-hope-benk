import React, { forwardRef, useRef } from "react";

interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  label?: string;
  error?: string;
  value?: File | null;
  onChange?: (file: File | null) => void;
  containerClassName?: string;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ label, error, value, onChange, containerClassName = "", className = "", ...props }, ref) => {
    const fallbackRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || fallbackRef;

    const handleContainerClick = () => {
      inputRef.current?.click();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        inputRef.current?.click();
      }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      if (onChange) {
        onChange(file);
      }
    };

    const handleRemove = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      if (onChange) {
        onChange(null);
      }
    };

    return (
      <div className={`space-y-1 ${containerClassName}`}>
        {label && <label className="text-xs font-bold text-on-surface-variant ml-1">{label}</label>}
        <div
          onClick={handleContainerClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label={label || "Carregar arquivo"}
          className={`border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all relative min-h-[140px] bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
            error
              ? "border-red-500 bg-red-50/5"
              : "border-outline-variant hover:border-primary"
          } ${className}`}
        >
          <input
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
            className="hidden"
            tabIndex={-1}
            {...props}
          />
          {value ? (
            <div className="flex flex-col items-center z-10">
              <span className="material-symbols-outlined text-primary text-3xl mb-1">
                check_circle
              </span>
              <span className="text-xs font-semibold text-on-surface truncate max-w-[200px]">
                {value.name}
              </span>
              <button
                type="button"
                onClick={handleRemove}
                className="text-[10px] text-red-500 hover:underline mt-2 font-bold cursor-pointer"
              >
                Remover arquivo
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center text-outline-variant">
              <span className="material-symbols-outlined text-outline text-3xl mb-1">
                upload_file
              </span>
              <span className="text-xs font-bold text-on-surface-variant">
                Carregar Arquivo
              </span>
              <span className="text-[10px] text-outline mt-0.5">
                JPEG, PNG ou PDF
              </span>
            </div>
          )}
        </div>
        {error && <p className="text-xs text-red-500 font-semibold ml-1">{error}</p>}
      </div>
    );
  }
);

FileInput.displayName = "FileInput";

export default FileInput;
