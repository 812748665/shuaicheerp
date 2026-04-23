import type { InvoiceStatus } from "@/types/invoice";

interface StatusBadgeProps {
  status: InvoiceStatus;
}

const statusConfig: Record<
  InvoiceStatus,
  { color: string; bgColor?: string }
> = {
  待开票: { color: "text-primary" },
  开票中: { color: "text-primary" },
  已开票: { color: "text-success" },
  已作废: { color: "text-destructive" },
  已红冲: { color: "text-destructive" },
  已取消: { color: "text-muted" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span className={`text-sm font-medium ${config.color}`}>
      {status}
    </span>
  );
}
