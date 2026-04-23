"use client";

import { Mail, ChevronDown } from "lucide-react";

interface WorkspaceHeaderProps {
  storeName: string;
  companyName: string;
}

export function WorkspaceHeader({ storeName, companyName }: WorkspaceHeaderProps) {
  return (
    <div className="bg-primary px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center shadow-sm">
          <Mail className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="font-semibold text-primary-foreground text-base truncate">
            {storeName}
          </h1>
          <p className="text-sm text-primary-foreground/70 truncate flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-primary-foreground/30" />
            {companyName}
          </p>
        </div>
        <ChevronDown className="w-5 h-5 text-primary-foreground/70" />
      </div>
    </div>
  );
}
