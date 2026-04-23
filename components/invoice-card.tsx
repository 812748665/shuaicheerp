"use client";

import { Image as ImageIcon } from "lucide-react";
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
    <div className="bg-card border-b border-border">
      {/* 卡片头部 - 时间和创建人 */}
      <div className="flex items-center justify-between px-4 py-2 text-xs text-muted">
        <span>{invoice.createdAt}  {invoice.createdBy} 创建</span>
        <StatusBadge status={invoice.status} />
      </div>

      {/* 卡片主体 */}
      <Link href={`/invoice/${invoice.id}`} className="block">
        <div className="flex gap-3 px-4 pb-4">
          {/* 车辆图片 */}
          <div className="w-20 h-20 flex-shrink-0 bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
            {invoice.vehicleInfo.image ? (
              <img
                src={invoice.vehicleInfo.image}
                alt={invoice.vehicleInfo.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <ImageIcon className="w-8 h-8 text-muted" />
            )}
          </div>

          {/* 车辆信息 */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-foreground truncate">
              {invoice.vehicleInfo.name}
            </h3>
            <p className="mt-1 text-xs text-muted truncate">
              VIN: {invoice.vin}
            </p>
            <p className="mt-1 text-xs text-muted truncate">
              {invoice.partyLabel}名称：{invoice.partyName}
            </p>
            <p className="mt-1 text-xs text-muted truncate">
              交易方：{invoice.tradingCompany}
            </p>
            <p className="mt-1 text-xs text-muted">
              开票金额：
              <span className="text-foreground font-medium">
                {formatAmount(invoice.amount)}元
              </span>
            </p>
          </div>
        </div>
      </Link>

      {/* 待开票状态显示开票申请按钮 */}
      {invoice.status === "待开票" && (
        <div className="flex justify-end px-4 pb-3">
          <Link
            href={`/invoice/apply/${invoice.id}`}
            className="px-4 py-1.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            开票申请
          </Link>
        </div>
      )}
    </div>
  );
}
