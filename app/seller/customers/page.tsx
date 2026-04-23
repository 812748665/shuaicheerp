'use client';

import React, { useState } from 'react';
import { MessageSquare, Phone, Search, Filter, Star, Eye, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

const customers = [
  { id: 1, name: '张三', phone: '13800138000', inquiries: 3, visited: 2, lastContact: '2024-05-23', status: '热销客户', rating: 4.5 },
  { id: 2, name: '李四', phone: '13800138001', inquiries: 5, visited: 1, lastContact: '2024-05-22', status: '准客户', rating: 4.0 },
  { id: 3, name: '王五', phone: '13800138002', inquiries: 1, visited: 3, lastContact: '2024-05-21', status: '已成交', rating: 5.0 },
  { id: 4, name: '赵六', phone: '13800138003', inquiries: 2, visited: 0, lastContact: '2024-05-20', status: '潜在客户', rating: 3.5 },
  { id: 5, name: '孙七', phone: '13800138004', inquiries: 4, visited: 2, lastContact: '2024-05-19', status: '热销客户', rating: 4.0 },
];

export default function CustomerManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case '热销客户':
        return 'bg-red-100 text-red-700';
      case '准客户':
        return 'bg-orange-100 text-orange-700';
      case '已成交':
        return 'bg-green-100 text-green-700';
      case '潜在客户':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredCustomers = customers.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone.includes(searchQuery);
    const matchFilter = filterStatus === 'all' || c.status === filterStatus;
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">客户管理</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: '总客户数', value: '5', color: 'bg-blue-50' },
            { label: '已成交', value: '1', color: 'bg-green-50' },
            { label: '热销客户', value: '2', color: 'bg-red-50' },
            { label: '准客户', value: '1', color: 'bg-orange-50' },
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
                placeholder="搜索客户名称或电话..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 rounded-lg border transition text-sm ${
                  filterStatus === 'all'
                    ? 'bg-yellow-500 text-white border-yellow-500'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-yellow-500'
                }`}
              >
                全部
              </button>
              {['热销客户', '准客户', '已成交', '潜在客户'].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-2 rounded-lg border transition text-sm ${
                    filterStatus === status
                      ? 'bg-yellow-500 text-white border-yellow-500'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-yellow-500'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 客户列表 */}
        <div className="grid grid-cols-1 gap-4">
          {filteredCustomers.map((customer) => (
            <div key={customer.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-lg font-bold text-yellow-600">
                      {customer.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{customer.name}</h3>
                      <p className="text-sm text-gray-500">{customer.phone}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-6">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">询问次数</p>
                      <p className="text-xl font-bold text-gray-900">{customer.inquiries}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">看车次数</p>
                      <p className="text-xl font-bold text-gray-900">{customer.visited}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">最后联系</p>
                      <p className="text-sm text-gray-900 font-medium">{customer.lastContact}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">客户等级</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(customer.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="ml-2 text-sm font-medium text-gray-900">{customer.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 flex flex-row md:flex-col gap-2">
                  <span className={`${getStatusBadge(customer.status)} px-4 py-1 rounded-full text-sm font-medium`}>
                    {customer.status}
                  </span>

                  <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">电话</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">消息</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCustomers.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <p className="text-gray-600 text-lg">暂无客户</p>
          </div>
        )}
      </div>
    </div>
  );
}
