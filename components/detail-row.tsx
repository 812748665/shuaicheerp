import { ChevronRight } from "lucide-react";

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
    <div className="flex items-start py-3.5 border-b border-border-light last:border-b-0">
      <span className="w-28 flex-shrink-0 text-sm text-foreground-secondary pl-4">
        {label}
      </span>
      <div className="flex-1 flex items-start justify-between pr-4 min-w-0">
        <span className="text-sm text-foreground break-all leading-relaxed flex-1">
          {value}
        </span>
        {showArrow && (
          <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2 mt-0.5" />
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
