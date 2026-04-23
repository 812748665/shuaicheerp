"use client";

import { Car, ChevronRight } from "lucide-react";
import type { Invoice } from "@/types/invoice";
import { StatusBadge } from "./status-badge";
import Link from "next/link";

interface InvoiceCardProps {
  invoice: Invoice;
}

export function InvoiceCard({ invoice }: InvoiceCardProps) {
  const formatAmount = (amount: number) => {
    return amount.toLocaleString("zh-CN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="mx-4 mb-3 bg-card rounded-xl card-shadow overflow-hidden">
      {/* 卡片头部 */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border-light">
        <div className="flex items-center gap-2 text-xs text-foreground-tertiary">
          <span>{invoice.createdAt}</span>
          <span className="w-1 h-1 rounded-full bg-muted" />
          <span>{invoice.createdBy}</span>
        </div>
        <StatusBadge status={invoice.status} size="sm" />
      </div>

      {/* 卡片主体 */}
      <Link href={`/invoice/${invoice.id}`} className="block">
        <div className="flex gap-4 p-4">
          {/* 车辆图片 */}
          <div className="w-20 h-20 flex-shrink-0 bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
            {invoice.vehicleInfo.image ? (
              <img
                src={invoice.vehicleInfo.image}
                alt={invoice.vehicleInfo.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <Car className="w-8 h-8 text-muted-foreground" />
            )}
          </div>

          {/* 车辆信息 */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-foreground truncate leading-relaxed">
              {invoice.vehicleInfo.name}
            </h3>
            <div className="mt-2 space-y-1.5">
              <p className="text-xs text-foreground-secondary truncate">
                VIN：{invoice.vin}
              </p>
              <p className="text-xs text-foreground-secondary truncate">
                {invoice.partyLabel}：{invoice.partyName}
              </p>
            </div>
          </div>

          {/* 箭头 */}
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </Link>

      {/* 卡片底部 */}
      <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-t border-border-light">
        <div className="flex items-baseline gap-1">
          <span className="text-xs text-foreground-secondary">开票金额</span>
          <span className="text-base font-bold text-primary">
            ¥{formatAmount(invoice.amount)}
          </span>
        </div>

        {invoice.status === "待开票" && (
          <Link
            href={`/invoice/apply/${invoice.id}`}
            className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary-dark transition-colors btn-press"
          >
            申请开票
          </Link>
        )}
      </div>
    </div>
  );
}
