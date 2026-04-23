"use client";

import { use, useState } from "react";
import { PageHeader } from "@/components/page-header";
import { FormSection } from "@/components/form-section";
import { FormField } from "@/components/form-field";
import { mockInvoices, mockSalesInvoices } from "@/types/invoice";
import { useRouter } from "next/navigation";

export default function InvoiceApplyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();

  // 从模拟数据中查找发票
  const invoice =
    mockInvoices.find((inv) => inv.id === id) ||
    mockSalesInvoices.find((inv) => inv.id === id);

  // 表单状态
  const [formData, setFormData] = useState({
    applicationNumber: invoice?.applicationNumber || "",
    stockNumber: invoice?.stockNumber || "",
    source: invoice?.source || "采购发票",
    amount: invoice?.amount?.toString() || "",
    taxRate: invoice?.taxRate || "",
    invoiceType: invoice?.invoiceType || "反向开票",
    invoiceCategory: "",
    billingPartyType: invoice?.billingPartyType || "经营单位",
    registrationNumber: "",
    licensePlate: invoice?.licensePlate || "",
    vin: invoice?.vin || "",
    vehicleType: invoice?.vehicleType || "",
    transferLocation: "",
    brandModel: invoice?.brandModel || "",
    taxNumber: invoice?.taxNumber || "",
    sellerTaxNumber: "",
    deliveryMethod: invoice?.deliveryMethod || "不推送",
    deliveryEmail: "",
    deliveryPhone: "",
    buyerName: invoice?.buyerName || "",
    buyerIdNumber: invoice?.buyerIdNumber || "",
    buyerAddress: invoice?.buyerAddress || "",
    buyerPhone: invoice?.buyerPhone || "",
    sellerName: invoice?.sellerName || "",
    sellerAddress: invoice?.sellerAddress || "",
    sellerIdNumber: invoice?.sellerIdNumber || "",
    sellerPhone: invoice?.sellerPhone || "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // 仅保存
    alert("已保存");
    router.back();
  };

  const handleSaveAndSubmit = () => {
    // 保存并开票
    alert("已提交开票申请");
    router.push("/");
  };

  if (!invoice) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <PageHeader title="申请开票" />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted">发票不存在</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader title="申请开票" />

      <main className="flex-1 overflow-auto pb-24">
        {/* 订单基本信息 */}
        <FormSection title="订单基本信息：">
          <FormField
            label="发票申请编号"
            value={formData.applicationNumber}
            type="readonly"
          />
          <FormField
            label="库存号"
            value={formData.stockNumber}
            type="readonly"
          />
          <FormField
            label="发票来源"
            value={formData.source}
            type="select"
          />
          <FormField
            label="开票金额"
            value={formData.amount}
            type="readonly"
          />
          <FormField
            label="税率"
            value={formData.taxRate}
            type="readonly"
          />
          <FormField
            label="发票类型"
            value={formData.invoiceType}
            type="select"
          />
          <FormField
            label="发票类别"
            value={formData.invoiceCategory}
            placeholder="请输入发票类别"
            type="select"
          />
          <FormField
            label="开票方类型"
            value={formData.billingPartyType}
            type="select"
          />
          <FormField
            label="登记证号"
            value={formData.registrationNumber}
            placeholder="请输入登记证号"
            onChange={(v) => updateField("registrationNumber", v)}
          />
          <FormField
            label="车牌号"
            value={formData.licensePlate}
            type="readonly"
          />
          <FormField
            label="VIN码"
            value={formData.vin}
            type="readonly"
          />
          <FormField
            label="车辆类型"
            value={formData.vehicleType}
            type="readonly"
          />
          <FormField
            label="转入地车管所"
            value={formData.transferLocation}
            placeholder="请输入转入地车管所名称"
            onChange={(v) => updateField("transferLocation", v)}
          />
          <FormField
            label="品牌车型"
            value={formData.brandModel}
            type="readonly"
          />
          <FormField
            label="税盘号"
            value={formData.taxNumber}
            type="readonly"
          />
          <FormField
            label="卖方税号"
            value={formData.sellerTaxNumber}
            placeholder="请输入销方税号"
            onChange={(v) => updateField("sellerTaxNumber", v)}
          />
          <FormField
            label="推送方式"
            value={formData.deliveryMethod}
            type="select"
          />
          <FormField
            label="推送邮箱"
            value={formData.deliveryEmail}
            placeholder="请输入推送邮箱"
            onChange={(v) => updateField("deliveryEmail", v)}
          />
          <FormField
            label="推送手机"
            value={formData.deliveryPhone}
            placeholder="请输入推送手机"
            onChange={(v) => updateField("deliveryPhone", v)}
          />
        </FormSection>

        {/* 买方信息 */}
        <FormSection title="买方信息：">
          <FormField
            label="买方名称"
            value={formData.buyerName}
            type="readonly"
          />
          <FormField
            label="身份证号码/税号"
            value={formData.buyerIdNumber}
            type="readonly"
          />
          <FormField
            label="买方地址"
            value={formData.buyerAddress}
            type="readonly"
          />
          <FormField
            label="买方"
            value={formData.buyerPhone}
            type="readonly"
          />
        </FormSection>

        {/* 卖方信息 */}
        <FormSection title="卖方信息：">
          <FormField
            label="卖方名称"
            value={formData.sellerName}
            type="readonly"
          />
          <FormField
            label="卖方地址"
            value={formData.sellerAddress}
            type="readonly"
          />
          <FormField
            label="身份证号码/税号"
            value={formData.sellerIdNumber}
            type="readonly"
          />
          <FormField
            label="卖方"
            value={formData.sellerPhone}
            type="readonly"
          />
        </FormSection>
      </main>

      {/* 底部操作按钮 */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 safe-area-inset-bottom">
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="flex-1 h-11 text-sm font-medium text-foreground bg-card border border-border rounded-lg hover:bg-secondary transition-colors"
          >
            仅保存
          </button>
          <button
            onClick={handleSaveAndSubmit}
            className="flex-1 h-11 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            保存并开票
          </button>
        </div>
      </div>
    </div>
  );
}
