"use client";

import {
  ShoppingCart,
  Car,
  ClipboardList,
  Users,
  Wallet,
  Truck,
  Receipt,
  Shield,
  Share2,
  DollarSign,
  FileText,
  Wrench,
  ArrowLeftRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
}

const mainMenuItems: MenuItem[] = [
  { icon: <ShoppingCart className="w-6 h-6" />, label: "自营采购", href: "/purchase" },
  { icon: <Car className="w-6 h-6" />, label: "车辆管理", href: "/vehicles" },
  { icon: <ClipboardList className="w-6 h-6" />, label: "订单管理", href: "/orders" },
  { icon: <Users className="w-6 h-6" />, label: "客户管理", href: "/customers" },
  { icon: <Wallet className="w-6 h-6" />, label: "快捷收款", href: "/quick-payment" },
  { icon: <Truck className="w-6 h-6" />, label: "交付中心", href: "/delivery" },
  { icon: <Receipt className="w-6 h-6" />, label: "费用管理", href: "/expenses" },
  { icon: <Shield className="w-6 h-6" />, label: "维保出险", href: "/insurance" },
  { icon: <Share2 className="w-6 h-6" />, label: "微店分享", href: "/share" },
  { icon: <DollarSign className="w-6 h-6" />, label: "定金求购", href: "/deposit" },
  { icon: <FileText className="w-6 h-6" />, label: "合同管理", href: "/contracts" },
  { icon: <Wrench className="w-6 h-6" />, label: "整备管理", href: "/preparation" },
  { icon: <ArrowLeftRight className="w-6 h-6" />, label: "买入过户", href: "/transfer-in" },
  { icon: <ArrowRight className="w-6 h-6" />, label: "卖出过户", href: "/transfer-out" },
];

export function QuickMenu() {
  return (
    <div className="bg-card rounded-xl mx-4 mt-4 p-4 shadow-sm">
      <div className="grid grid-cols-5 gap-4">
        {mainMenuItems.map((item) => (
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
