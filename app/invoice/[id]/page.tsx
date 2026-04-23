"use client";

import { use } from "react";
import { Image as ImageIcon } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { DetailSection } from "@/components/detail-section";
import { DetailRow } from "@/components/detail-row";
import { mockInvoices, mockSalesInvoices } from "@/types/invoice";
import Link from "next/link";

export default function InvoiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  // 从模拟数据中查找发票
  const invoice =
    mockInvoices.find((inv) => inv.id === id) ||
    mockSalesInvoices.find((inv) => inv.id === id);

  if (!invoice) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <PageHeader title="发票详情" />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted">发票不存在</p>
        </div>
      </div>
    );
  }

  const formatAmount = (amount: number) => {
    return amount.toLocaleString("zh-CN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const canVoidOrCancel =
    invoice.status === "已开票" || invoice.status === "开票中";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader title="发票详情" />

      <main className="flex-1 overflow-auto pb-20">
        {/* 订单基本信息 */}
        <DetailSection title="订单基本信息">
          <DetailRow label="发票申请编号" value={invoice.applicationNumber} />
          <DetailRow label="库存号" value={invoice.stockNumber} />
          <DetailRow
            label="发票来源"
            value={invoice.source}
            showArrow
          />
          <DetailRow label="开票金额" value={invoice.stockNumber} />
          <DetailRow label="税率" value={invoice.taxRate} />
          <DetailRow
            label="发票类型"
            value={invoice.invoiceType}
            showArrow
          />
          <DetailRow
            label="发票类别"
            value="请输入发票类别"
            showArrow
          />
          <DetailRow
            label="开票方类型"
            value={invoice.billingPartyType}
            showArrow
          />
          <DetailRow label="登记证号" value={invoice.registrationNumber || "请输入登记证号"} />
          <DetailRow label="车牌号" value={invoice.licensePlate} />
          <DetailRow label="VIN码" value={invoice.vin} />
          <DetailRow label="车辆类型" value={invoice.vehicleType} />
          <DetailRow label="转入地车管所" value={invoice.transferLocation || "请输入转入地车管所名称"} />
          <DetailRow label="品牌车型" value={invoice.brandModel} />
          <DetailRow label="税盘号" value={invoice.taxNumber} />
          <DetailRow label="卖方税号" value={invoice.sellerTaxNumber || "请输入销方税号"} />
          <DetailRow
            label="推送方式"
            value={invoice.deliveryMethod}
            showArrow
          />
        </DetailSection>

        {/* 买方信息 */}
        <DetailSection title="买方信息">
          <DetailRow label="买方名称" value={invoice.buyerName} />
          <DetailRow label="身份证号码/税号" value={invoice.buyerIdNumber} />
          <DetailRow label="买方地址" value={invoice.buyerAddress} />
          <DetailRow label="买方" value={invoice.buyerPhone} />
        </DetailSection>

        {/* 卖方信息 */}
        <DetailSection title="卖方信息">
          <DetailRow label="卖方名称" value={invoice.sellerName} />
          <DetailRow label="卖方地址" value={invoice.sellerAddress} />
          <DetailRow label="身份证号码/税号" value={invoice.sellerIdNumber} />
          <DetailRow label="卖方" value={invoice.sellerPhone} />
        </DetailSection>

        {/* 查看发票 */}
        <DetailSection title="查看发票">
          <div className="px-4 py-4">
            <div className="w-20 h-20 bg-warning/20 rounded-lg flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-muted" />
            </div>
          </div>
        </DetailSection>
      </main>

      {/* 底部操作按钮 */}
      {canVoidOrCancel && (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 safe-area-inset-bottom">
          <button className="w-full h-11 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors">
            作废/取消
          </button>
        </div>
      )}
    </div>
  );
}
