"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { SearchBar } from "@/components/search-bar";
import { TabSwitch } from "@/components/tab-switch";
import { InvoiceList } from "@/components/invoice-list";
import { mockInvoices, mockSalesInvoices } from "@/types/invoice";

const tabs = [
  { key: "purchase", label: "采购发票" },
  { key: "sales", label: "销售发票" },
];

export default function InvoiceManagementPage() {
  const [activeTab, setActiveTab] = useState("purchase");
  const [searchValue, setSearchValue] = useState("");

  const invoices = activeTab === "purchase" ? mockInvoices : mockSalesInvoices;

  // 简单的搜索过滤
  const filteredInvoices = invoices.filter((invoice) => {
    if (!searchValue) return true;
    const searchLower = searchValue.toLowerCase();
    return (
      invoice.vehicleInfo.name.toLowerCase().includes(searchLower) ||
      invoice.vin.toLowerCase().includes(searchLower) ||
      invoice.stockNumber.includes(searchValue) ||
      invoice.partyName.includes(searchValue) ||
      invoice.tradingCompany.includes(searchValue)
    );
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader
        title="发票管理"
        showBack={true}
        showDepartment={true}
        departmentName="部门"
      />

      <SearchBar
        value={searchValue}
        onChange={setSearchValue}
        onFilter={() => {
          // 筛选功能待实现
        }}
      />

      <TabSwitch tabs={tabs} activeKey={activeTab} onChange={setActiveTab} />

      <main className="flex-1 overflow-auto">
        <InvoiceList invoices={filteredInvoices} />
      </main>
    </div>
  );
}
