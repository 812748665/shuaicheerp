"use client";

import { ChevronLeft, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
  showDepartment?: boolean;
  departmentName?: string;
  onDepartmentClick?: () => void;
}

export function PageHeader({
  title,
  showBack = true,
  showDepartment = false,
  departmentName = "部门",
  onDepartmentClick,
}: PageHeaderProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="flex items-center justify-between h-12 px-4">
        <div className="flex items-center gap-2">
          {showBack && (
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center w-8 h-8 -ml-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
              aria-label="返回"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {showDepartment && (
            <button
              onClick={onDepartmentClick}
              className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors"
            >
              {departmentName}
              <ChevronDown className="w-4 h-4" />
            </button>
          )}
        </div>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-base font-medium text-foreground">
          {title}
        </h1>
        <div className="w-8" />
      </div>
    </header>
  );
}
