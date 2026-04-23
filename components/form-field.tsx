"use client";

import { ChevronDown } from "lucide-react";

interface FormFieldProps {
  label: string;
  value?: string;
  placeholder?: string;
  type?: "text" | "select" | "readonly";
  required?: boolean;
  onChange?: (value: string) => void;
  onClick?: () => void;
}

export function FormField({
  label,
  value = "",
  placeholder,
  type = "text",
  required = false,
  onChange,
  onClick,
}: FormFieldProps) {
  const isReadonly = type === "readonly";
  const isSelect = type === "select";

  return (
    <div className="flex items-center py-3 border-b border-border bg-card">
      <label className="w-24 flex-shrink-0 text-sm text-foreground pl-4">
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}：
      </label>
      <div className="flex-1 pr-4">
        {isSelect ? (
          <button
            type="button"
            onClick={onClick}
            className="w-full flex items-center justify-between h-9 px-3 text-sm bg-input border border-border rounded-lg text-left"
          >
            <span className={value ? "text-foreground" : "text-muted"}>
              {value || placeholder}
            </span>
            <ChevronDown className="w-4 h-4 text-muted flex-shrink-0" />
          </button>
        ) : isReadonly ? (
          <div className="h-9 px-3 flex items-center text-sm text-foreground bg-secondary border border-border rounded-lg">
            {value || "-"}
          </div>
        ) : (
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
            className="w-full h-9 px-3 text-sm text-foreground bg-input border border-border rounded-lg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        )}
      </div>
    </div>
  );
}
