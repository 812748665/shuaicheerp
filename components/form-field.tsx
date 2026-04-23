"use client";

import { ChevronRight } from "lucide-react";

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
    <div className="flex items-center py-3.5 border-b border-border-light last:border-b-0">
      <label className="w-28 flex-shrink-0 text-sm text-foreground-secondary pl-4">
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </label>
      <div className="flex-1 pr-4">
        {isSelect ? (
          <button
            type="button"
            onClick={onClick}
            className="w-full flex items-center justify-between text-sm text-left"
          >
            <span className={value ? "text-foreground" : "text-muted-foreground"}>
              {value || placeholder || "请选择"}
            </span>
            <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          </button>
        ) : isReadonly ? (
          <div className="text-sm text-foreground">
            {value || "-"}
          </div>
        ) : (
          <input
            type="text"
            value={value}
            placeholder={placeholder || "请输入"}
            onChange={(e) => onChange?.(e.target.value)}
            className="w-full text-sm text-foreground bg-transparent placeholder:text-muted-foreground focus:outline-none"
          />
        )}
      </div>
    </div>
  );
}
