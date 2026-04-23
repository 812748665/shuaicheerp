'use client';

import React from 'react';
import { LayoutDashboard, Car, ShoppingCart, Users, MessageSquare, BarChart3, Settings, LogOut, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: '仪表盘', href: '/seller/dashboard' },
  { icon: Car, label: '车辆管理', href: '/seller/vehicles' },
  { icon: ShoppingCart, label: '订单管理', href: '/seller/orders' },
  { icon: Users, label: '客户管理', href: '/seller/customers' },
  { icon: MessageSquare, label: '消息中心', href: '/seller/messages' },
  { icon: BarChart3, label: '数据分析', href: '/seller/analytics' },
  { icon: Settings, label: '店铺设置', href: '/seller/settings' },
];

export default function SellerSidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(isOpen);

  return (
    <>
      {/* 移动端菜单按钮 */}
      <div className="fixed top-4 left-4 z-40 lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 侧边栏背景遮罩 */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* 侧边栏 */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 bg-gray-900 text-white flex flex-col transition-transform lg:relative lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <Link href="/seller/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center font-bold text-lg">
              车
            </div>
            <div>
              <h2 className="font-bold text-lg">帅车严选</h2>
              <p className="text-xs text-gray-400">商家工作台</p>
            </div>
          </Link>
        </div>

        {/* 菜单 */}
        <nav className="flex-1 overflow-y-auto py-6">
          <div className="space-y-2 px-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? 'bg-yellow-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* 底部 */}
        <div className="p-4 border-t border-gray-800 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition">
            <Settings className="w-5 h-5" />
            <span className="font-medium">设置</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-gray-800 rounded-lg transition">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">退出</span>
          </button>
        </div>
      </aside>
    </>
  );
}
