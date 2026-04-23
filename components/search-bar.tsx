"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFilter?: () => void;
}

export function SearchBar({
  placeholder = "搜索车辆名称/车架号/库存号",
  value = "",
  onChange,
  onFilter,
}: SearchBarProps) {
  return (
    <div className="px-4 py-3 bg-card">
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Search className="w-4 h-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="w-full h-10 pl-9 pr-4 text-sm bg-input border border-input-border rounded-lg placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <button
          onClick={onFilter}
          className="flex items-center justify-center w-10 h-10 text-foreground-secondary bg-secondary hover:bg-muted rounded-lg transition-colors btn-press"
          aria-label="筛选"
        >
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
