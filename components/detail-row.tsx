import { ChevronDown } from "lucide-react";

interface DetailRowProps {
  label: string;
  value?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

export function DetailRow({
  label,
  value = "-",
  showArrow = false,
  onClick,
}: DetailRowProps) {
  const content = (
    <div className="flex items-start py-3 border-b border-border bg-card">
      <span className="w-24 flex-shrink-0 text-sm text-muted pl-4">
        {label}：
      </span>
      <div className="flex-1 flex items-start justify-between pr-4">
        <span className="text-sm text-foreground break-all">{value}</span>
        {showArrow && (
          <ChevronDown className="w-4 h-4 text-muted flex-shrink-0 ml-2" />
        )}
      </div>
    </div>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="w-full text-left hover:bg-secondary/50 transition-colors"
      >
        {content}
      </button>
    );
  }

  return content;
}
