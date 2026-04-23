"use client";

import { Home, LayoutGrid, Bell, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
}

const navItems: NavItem[] = [
  {
    icon: <Home className="w-6 h-6" />,
    activeIcon: <Home className="w-6 h-6" fill="currentColor" />,
    label: "工作台",
    href: "/",
  },
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    activeIcon: <LayoutGrid className="w-6 h-6" fill="currentColor" />,
    label: "看板",
    href: "/dashboard",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    activeIcon: <Bell className="w-6 h-6" fill="currentColor" />,
    label: "消息",
    href: "/messages",
    badge: 9,
  },
  {
    icon: <User className="w-6 h-6" />,
    activeIcon: <User className="w-6 h-6" fill="currentColor" />,
    label: "我的",
    href: "/profile",
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors relative ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="relative">
                {isActive ? item.activeIcon : item.icon}
                {item.badge && (
                  <span className="absolute -top-1 -right-2 min-w-[18px] h-[18px] bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center px-1">
                    {item.badge > 99 ? "99+" : item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
