"use client";

import { SlidersHorizontal } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFilter?: () => void;
}

export function SearchBar({
  placeholder = "请输入车辆名称/车架号/库存号/买卖方",
  value = "",
  onChange,
  onFilter,
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-card">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full h-9 px-3 text-sm bg-secondary border border-border rounded-lg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>
      <button
        onClick={onFilter}
        className="flex items-center justify-center w-9 h-9 text-muted hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
        aria-label="筛选"
      >
        <SlidersHorizontal className="w-5 h-5" />
      </button>
    </div>
  );
}
