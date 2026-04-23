import type { InvoiceStatus } from "@/types/invoice";

interface StatusBadgeProps {
  status: InvoiceStatus;
  size?: "sm" | "md";
}

const statusConfig: Record<
  InvoiceStatus,
  { textColor: string; bgColor: string; dotColor: string }
> = {
  待开票: {
    textColor: "text-warning",
    bgColor: "bg-warning-light",
    dotColor: "bg-warning",
  },
  开票中: {
    textColor: "text-info",
    bgColor: "bg-info-light",
    dotColor: "bg-info",
  },
  已开票: {
    textColor: "text-success",
    bgColor: "bg-success-light",
    dotColor: "bg-success",
  },
  已作废: {
    textColor: "text-destructive",
    bgColor: "bg-destructive-light",
    dotColor: "bg-destructive",
  },
  已红冲: {
    textColor: "text-destructive",
    bgColor: "bg-destructive-light",
    dotColor: "bg-destructive",
  },
  已取消: {
    textColor: "text-muted-foreground",
    bgColor: "bg-secondary",
    dotColor: "bg-muted-foreground",
  },
};

export function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full ${config.textColor} ${config.bgColor} ${
        size === "sm" ? "text-xs px-2 py-0.5" : "text-xs px-2.5 py-1"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`} />
      {status}
    </span>
  );
}
