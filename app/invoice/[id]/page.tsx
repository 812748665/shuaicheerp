"use client";

import { use } from "react";
import { FileImage, AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { DetailSection } from "@/components/detail-section";
import { DetailRow } from "@/components/detail-row";
import { StatusBadge } from "@/components/status-badge";
import { mockInvoices, mockSalesInvoices } from "@/types/invoice";

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
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-foreground-secondary">发票不存在</p>
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

      {/* 顶部状态卡片 */}
      <div className="mx-4 mt-4 mb-2 p-4 bg-card rounded-xl card-shadow">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-foreground truncate flex-1 mr-4">
            {invoice.vehicleInfo.name}
          </h3>
          <StatusBadge status={invoice.status} />
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-foreground-secondary">开票金额</span>
          <span className="text-xl font-bold text-primary">
            ¥{formatAmount(invoice.amount)}
          </span>
        </div>
      </div>

      <main className="flex-1 overflow-auto pb-24">
        {/* 订单基本信息 */}
        <DetailSection title="订单基本信息">
          <DetailRow label="发票申请编号" value={invoice.applicationNumber} />
          <DetailRow label="库存号" value={invoice.stockNumber} />
          <DetailRow label="发票来源" value={invoice.source} showArrow />
          <DetailRow label="开票金额" value={`¥${formatAmount(invoice.amount)}`} />
          <DetailRow label="税率" value={invoice.taxRate} />
          <DetailRow label="发票类型" value={invoice.invoiceType} showArrow />
          <DetailRow label="发票类别" value="二手车销售统一发票" showArrow />
          <DetailRow label="开票方类型" value={invoice.billingPartyType} showArrow />
          <DetailRow label="登记证号" value={invoice.registrationNumber || "-"} />
          <DetailRow label="车牌号" value={invoice.licensePlate} />
          <DetailRow label="VIN码" value={invoice.vin} />
          <DetailRow label="车辆类型" value={invoice.vehicleType} />
          <DetailRow label="转入地车管所" value={invoice.transferLocation || "-"} />
          <DetailRow label="品牌车型" value={invoice.brandModel} />
          <DetailRow label="税盘号" value={invoice.taxNumber} />
          <DetailRow label="卖方税号" value={invoice.sellerTaxNumber || "-"} />
          <DetailRow label="推送方式" value={invoice.deliveryMethod} showArrow />
        </DetailSection>

        {/* 买方信息 */}
        <DetailSection title="买方信息">
          <DetailRow label="买方名称" value={invoice.buyerName} />
          <DetailRow label="身份证/税号" value={invoice.buyerIdNumber} />
          <DetailRow label="买方地址" value={invoice.buyerAddress} />
          <DetailRow label="联系电话" value={invoice.buyerPhone} />
        </DetailSection>

        {/* 卖方信息 */}
        <DetailSection title="卖方信息">
          <DetailRow label="卖方名称" value={invoice.sellerName} />
          <DetailRow label="卖方地址" value={invoice.sellerAddress} />
          <DetailRow label="身份证/税号" value={invoice.sellerIdNumber} />
          <DetailRow label="联系电话" value={invoice.sellerPhone} />
        </DetailSection>

        {/* 查看发票 */}
        <DetailSection title="发票预览">
          <div className="p-4">
            <div className="w-full h-40 bg-warning-light rounded-lg flex flex-col items-center justify-center gap-2">
              <FileImage className="w-10 h-10 text-primary" />
              <span className="text-sm text-foreground-secondary">
                {invoice.status === "已开票" ? "点击查看发票" : "发票生成后可预览"}
              </span>
            </div>
          </div>
        </DetailSection>
      </main>

      {/* 底部操作按钮 */}
      {canVoidOrCancel && (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 safe-area-inset-bottom">
          <button className="w-full h-12 text-sm font-semibold text-primary-foreground gradient-primary rounded-xl hover:opacity-90 transition-opacity btn-press">
            作废/取消
          </button>
        </div>
      )}
    </div>
  );
}
