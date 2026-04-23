"use client";

import { ChevronLeft, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
  showDepartment?: boolean;
  departmentName?: string;
  onDepartmentClick?: () => void;
  variant?: "default" | "primary";
}

export function PageHeader({
  title,
  showBack = true,
  showDepartment = false,
  departmentName = "部门",
  onDepartmentClick,
  variant = "default",
}: PageHeaderProps) {
  const router = useRouter();

  const isPrimary = variant === "primary";

  return (
    <header
      className={`sticky top-0 z-50 ${
        isPrimary
          ? "gradient-primary text-primary-foreground"
          : "bg-card border-b border-border"
      }`}
    >
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2 min-w-[80px]">
          {showBack && (
            <button
              onClick={() => router.back()}
              className={`flex items-center justify-center w-9 h-9 -ml-2 rounded-full transition-colors btn-press ${
                isPrimary
                  ? "text-primary-foreground/90 hover:bg-white/10"
                  : "text-foreground hover:bg-secondary"
              }`}
              aria-label="返回"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {showDepartment && (
            <button
              onClick={onDepartmentClick}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                isPrimary
                  ? "text-primary-foreground/90 hover:text-primary-foreground"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {departmentName}
              <ChevronDown className="w-4 h-4" />
            </button>
          )}
        </div>
        <h1
          className={`absolute left-1/2 -translate-x-1/2 text-base font-semibold ${
            isPrimary ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h1>
        <div className="w-[80px]" />
      </div>
    </header>
  );
}
