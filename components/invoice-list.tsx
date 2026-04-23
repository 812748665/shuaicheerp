"use client";

import type { Invoice } from "@/types/invoice";
import { InvoiceCard } from "./invoice-card";

interface InvoiceListProps {
  invoices: Invoice[];
}

export function InvoiceList({ invoices }: InvoiceListProps) {
  if (invoices.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-muted text-sm">暂无发票数据</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {invoices.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
}
