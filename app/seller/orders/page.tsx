'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, CheckCircle, Clock, AlertCircle, Search, Filter, Eye } from 'lucide-react';
import Link from 'next/link';

const orders = [
  { id: 1, orderNo: 'ORD20240523001', car: '2022款 宝马3系 330i', customer: '张三', phone: '13800138000', amount: '¥298,000', status: 'completed', date: '2024-05-23', progress: 100 },
  { id: 2, orderNo: 'ORD20240522002', car: '2021款 奥迪A4L 40 TFSI', customer: '李四', phone: '13800138001', amount: '¥278,000', status: 'pending', date: '2024-05-22', progress: 60 },
  { id: 3, orderNo: 'ORD20240521003', car: '2023款 特斯拉 Model 3', customer: '王五', phone: '13800138002', amount: '¥328,000', status: 'completed', date: '2024-05-21', progress: 100 },
  { id: 4, orderNo: 'ORD20240520004', car: '2020款 本田思域 Si', customer: '赵六', phone: '13800138003', amount: '¥158,000', status: 'processing', date: '2024-05-20', progress: 75 },
  { id: 5, orderNo: 'ORD20240519005', car: '2022款 比亚迪秦 DM-i', customer: '孙七', phone: '13800138004', amount: '¥198,000', status: 'pending', date: '2024-05-19', progress: 40 },
];

export default function OrderManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return { bg: 'bg-green-100', text: 'text-green-700', label: '已成交', icon: CheckCircle };
      case 'processing':
        return { bg: 'bg-blue-100', text: 'text-blue-700', label: '处理中', icon: Clock };
      case 'pending':
        return { bg: 'bg-orange-100', text: 'text-orange-700', label: '待处理', icon: AlertCircle };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', label: '未知', icon: AlertCircle };
    }
  };

  const filteredOrders = orders.filter((o) => {
    const matchSearch =
      o.orderNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.car.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchFilter = filterStatus === 'all' || o.status === filterStatus;
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">订单管理</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: '总订单', value: '24', color: 'bg-blue-50' },
            { label: '待处理', value: '3', color: 'bg-orange-50' },
            { label: '处理中', value: '5', color: 'bg-yellow-50' },
            { label: '已成交', value: '16', color: 'bg-green-50' },
          ].map((stat, index) => (
            <div key={index} className={`${stat.color} rounded-lg p-4 border border-gray-200`}>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* 搜索和筛选 */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索订单号、车辆、客户..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'pending', 'processing', 'completed'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg border transition text-sm ${
                    filterStatus === status
                      ? 'bg-yellow-500 text-white border-yellow-500'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-yellow-500'
                  }`}
                >
                  {status === 'all' ? '全部' : status === 'pending' ? '待处理' : status === 'processing' ? '处理中' : '已成交'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 订单列表 */}
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const badge = getStatusBadge(order.status);
            const BadgeIcon = badge.icon;
            return (
              <div
                key={order.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-sm text-gray-600">订单号</p>
                          <p className="text-lg font-bold text-gray-900">{order.orderNo}</p>
                        </div>
                        <div className={`${badge.bg} ${badge.text} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}>
                          <BadgeIcon className="w-4 h-4" />
                          {badge.label}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">车型：{order.car}</p>
                    </div>

                    <div className="md:border-l border-gray-200 md:pl-6">
                      <p className="text-sm text-gray-600">客户信息</p>
                      <p className="font-bold text-gray-900">{order.customer}</p>
                      <p className="text-sm text-gray-500">{order.phone}</p>
                    </div>

                    <div className="md:border-l border-gray-200 md:pl-6">
                      <p className="text-sm text-gray-600">成交金额</p>
                      <p className="text-2xl font-bold text-gray-900">{order.amount}</p>
                    </div>

                    <div className="md:border-l border-gray-200 md:pl-6 flex items-end">
                      <p className="text-xs text-gray-500">{order.date}</p>
                    </div>
                  </div>

                  {/* 进度条 */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-xs text-gray-600">交易进度</p>
                      <p className="text-xs font-bold text-gray-900">{order.progress}%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full transition-all"
                        style={{ width: `${order.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* 展开详情 */}
                  {selectedOrder === order.id && (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">订单时间</p>
                          <p className="text-sm font-medium text-gray-900">{order.date} 14:30</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-2">预计成交时间</p>
                          <p className="text-sm font-medium text-gray-900">2024-05-28</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-600 mb-2">订单备注</p>
                          <p className="text-sm text-gray-600">客户对车辆很满意，已安排技师进行最后检查。</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex items-center justify-center gap-2 flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition">
                          <Phone className="w-4 h-4" />
                          联系客户
                        </button>
                        <button className="flex items-center justify-center gap-2 flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition">
                          <MessageSquare className="w-4 h-4" />
                          发送消息
                        </button>
                        <Link
                          href={`/seller/orders/${order.id}`}
                          className="flex items-center justify-center gap-2 flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition"
                        >
                          <Eye className="w-4 h-4" />
                          详情
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredOrders.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <p className="text-gray-600 text-lg">暂无订单</p>
          </div>
        )}
      </div>
    </div>
  );
}
