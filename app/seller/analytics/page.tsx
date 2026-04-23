'use client';

import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Calendar, Eye, Heart, ShoppingCart } from 'lucide-react';

const analyticsData = [
  { date: '5.17', views: 380, inquiries: 150, visits: 100, sales: 45 },
  { date: '5.18', views: 520, inquiries: 180, visits: 120, sales: 52 },
  { date: '5.19', views: 680, inquiries: 220, visits: 160, sales: 78 },
  { date: '5.20', views: 890, inquiries: 280, visits: 200, sales: 95 },
  { date: '5.21', views: 1200, inquiries: 320, visits: 250, sales: 120 },
  { date: '5.22', views: 1100, inquiries: 300, visits: 230, sales: 115 },
  { date: '5.23', views: 1450, inquiries: 380, visits: 290, sales: 145 },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">数据分析</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 时间选择 */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 flex items-center gap-4">
          <Calendar className="w-5 h-5 text-gray-600" />
          <div className="flex gap-2">
            {['今天', '本周', '本月', '本季', '本年', '自定义'].map((period) => (
              <button
                key={period}
                className={`px-4 py-2 rounded-lg border transition text-sm ${
                  period === '本周'
                    ? 'bg-yellow-500 text-white border-yellow-500'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-yellow-500'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* 关键指标 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Eye, label: '总浏览量', value: '8,420', change: '+12%', color: 'bg-blue-50' },
            { icon: Heart, label: '总收藏数', value: '1,256', change: '+8%', color: 'bg-red-50' },
            { icon: ShoppingCart, label: '询问数', value: '832', change: '+15%', color: 'bg-green-50' },
            { icon: TrendingUp, label: '成交数', value: '152', change: '+18%', color: 'bg-yellow-50' },
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className={`${metric.color} rounded-lg p-6 border border-gray-200`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{metric.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{metric.value}</p>
                    <p className="text-sm text-green-600 mt-2">{metric.change} 较上周</p>
                  </div>
                  <Icon className="w-8 h-8 opacity-30 text-gray-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 图表 */}
        <div className="grid grid-cols-1 gap-6">
          {/* 浏览量趋势 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">浏览量趋势</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                <Line type="monotone" dataKey="views" stroke="#F5A623" name="浏览量" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 多维度对比 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">数据对比</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                <Legend />
                <Bar dataKey="inquiries" fill="#1890ff" name="询问数" radius={[4, 4, 0, 0]} />
                <Bar dataKey="visits" fill="#52c41a" name="看车数" radius={[4, 4, 0, 0]} />
                <Bar dataKey="sales" fill="#F5A623" name="成交数" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* 热销车型 */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">热销车型排行</h2>
            <div className="space-y-4">
              {[
                { rank: 1, car: '2022款 宝马3系', views: 2540, sales: 28 },
                { rank: 2, car: '2021款 奥迪A4L', views: 2120, sales: 24 },
                { rank: 3, car: '2023款 特斯拉 Model 3', views: 1890, sales: 22 },
                { rank: 4, car: '2022款 比亚迪秦 DM-i', views: 1650, sales: 18 },
                { rank: 5, car: '2020款 本田思域', views: 1230, sales: 14 },
              ].map((item) => (
                <div key={item.rank} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">
                    {item.rank}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{item.car}</p>
                    <p className="text-xs text-gray-600">浏览 {item.views} · 成交 {item.sales}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">{item.sales}</p>
                    <p className="text-xs text-gray-600">成交数</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
