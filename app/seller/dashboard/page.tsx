'use client';

import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Car, ShoppingCart, Users, MessageSquare, TrendingUp, Eye, Heart, Calendar, DollarSign, Phone, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const dashboardData = [
  { month: '1月', views: 1200, inquiries: 400, sales: 240 },
  { month: '2月', views: 1900, inquiries: 520, sales: 320 },
  { month: '3月', views: 1600, inquiries: 480, sales: 280 },
  { month: '4月', views: 2100, inquiries: 680, sales: 420 },
  { month: '5月', views: 2500, inquiries: 750, sales: 580 },
  { month: '6月', views: 2200, inquiries: 820, sales: 620 },
];

const inventoryData = [
  { name: '已上架', value: 28, color: '#F5A623' },
  { name: '待审核', value: 5, color: '#FFD666' },
  { name: '已下架', value: 12, color: '#D9D9D9' },
];

const stats = [
  { icon: Car, label: '在架车辆', value: '28', color: 'bg-yellow-50', iconColor: 'text-yellow-500' },
  { icon: Eye, label: '总浏览量', value: '12.5K', color: 'bg-blue-50', iconColor: 'text-blue-500' },
  { icon: Heart, label: '总收藏数', value: '856', color: 'bg-red-50', iconColor: 'text-red-500' },
  { icon: ShoppingCart, label: '成交订单', value: '24', color: 'bg-green-50', iconColor: 'text-green-500' },
];

export default function Dashboard() {
  const [period, setPeriod] = useState('month');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">商家工作台</h1>
            <p className="text-sm text-gray-600">欢迎回来，严选商户</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <MessageSquare className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">商</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 快速统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`${stat.color} rounded-lg p-6 border border-gray-200`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-2">↑ 12% 较上月</p>
                  </div>
                  <Icon className={`${stat.iconColor} w-8 h-8 opacity-50`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* 图表区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* 销售趋势 */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">销售趋势</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setPeriod('week')}
                  className={`px-3 py-1 rounded text-sm ${period === 'week' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  周
                </button>
                <button
                  onClick={() => setPeriod('month')}
                  className={`px-3 py-1 rounded text-sm ${period === 'month' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  月
                </button>
                <button
                  onClick={() => setPeriod('year')}
                  className={`px-3 py-1 rounded text-sm ${period === 'year' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  年
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dashboardData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                <Legend />
                <Line type="monotone" dataKey="views" stroke="#F5A623" name="浏览量" strokeWidth={2} />
                <Line type="monotone" dataKey="inquiries" stroke="#1890ff" name="询问数" strokeWidth={2} />
                <Line type="monotone" dataKey="sales" stroke="#52c41a" name="成交数" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 库存分布 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">库存分布</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={inventoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {inventoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} 辆`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 space-y-2">
              {inventoryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="font-bold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 最近订单 */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">最近订单</h2>
            <Link href="/seller/orders" className="text-yellow-500 hover:text-yellow-600 text-sm font-medium">
              查看全部 →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">订单号</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">车辆信息</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">客户</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">金额</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">状态</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">日期</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'ORD20240523001', car: '2022款 宝马3系', customer: '张三', amount: '¥298,000', status: '已成交', date: '2024-05-23' },
                  { id: 'ORD20240522002', car: '2021款 奥迪A4L', customer: '李四', amount: '¥278,000', status: '待支付', date: '2024-05-22' },
                  { id: 'ORD20240521003', car: '2023款 特斯拉Model 3', customer: '王五', amount: '¥328,000', status: '已成交', date: '2024-05-21' },
                  { id: 'ORD20240520004', car: '2020款 本田思域', customer: '赵六', amount: '¥158,000', status: '待收车', date: '2024-05-20' },
                ].map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm text-gray-900 font-medium">{order.id}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{order.car}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{order.customer}</td>
                    <td className="py-4 px-4 text-sm font-bold text-gray-900">{order.amount}</td>
                    <td className="py-4 px-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === '已成交' ? 'bg-green-100 text-green-700' :
                        order.status === '待支付' ? 'bg-orange-100 text-orange-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-500">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
