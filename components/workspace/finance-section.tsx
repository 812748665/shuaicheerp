"use client";

import {
  CheckSquare,
  CreditCard,
  Wallet,
  BookOpen,
  FileText,
  Building2,
} from "lucide-react";
import Link from "next/link";

interface FinanceMenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
}

const financeMenuItems: FinanceMenuItem[] = [
  { icon: <CheckSquare className="w-6 h-6" />, label: "审批中心", href: "/approval" },
  { icon: <CreditCard className="w-6 h-6" />, label: "付款管理", href: "/payment" },
  { icon: <Wallet className="w-6 h-6" />, label: "收款管理", href: "/collection" },
  { icon: <BookOpen className="w-6 h-6" />, label: "记账管理", href: "/accounting" },
  { icon: <FileText className="w-6 h-6" />, label: "发票管理", href: "/invoice" },
  { icon: <Building2 className="w-6 h-6" />, label: "账户主体管理", href: "/accounts" },
];

export function FinanceSection() {
  return (
    <div className="bg-card rounded-xl mx-4 mt-4 p-4 shadow-sm">
      <h2 className="text-base font-semibold text-foreground mb-4 text-center">
        财务管理
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {financeMenuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex flex-col items-center gap-1.5 group"
          >
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors relative">
              {item.icon}
              {item.badge && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-xs text-center text-foreground/80 group-hover:text-primary transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
