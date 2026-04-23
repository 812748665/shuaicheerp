"use client";

import { FileText } from "lucide-react";
import type { Invoice } from "@/types/invoice";
import { InvoiceCard } from "./invoice-card";

interface InvoiceListProps {
  invoices: Invoice[];
}

export function InvoiceList({ invoices }: InvoiceListProps) {
  if (invoices.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
          <FileText className="w-8 h-8 text-muted-foreground" />
        </div>
        <p className="text-sm text-foreground-secondary">暂无发票数据</p>
      </div>
    );
  }

  return (
    <div className="py-3">
      {invoices.map((invoice) => (
        <InvoiceCard key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
}
