'use client';

import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, CheckCircle, Clock, AlertCircle, Search, Filter } from 'lucide-react';
import Link from 'next/link';

const vehicles = [
  { id: 1, image: '🚗', title: '2022款 宝马3系 330i M运动套装', price: '¥298,000', views: 1240, favorites: 156, status: 'active', date: '2024-05-20' },
  { id: 2, image: '🚗', title: '2021款 奥迪A4L 40 TFSI', price: '¥278,000', views: 892, favorites: 98, status: 'active', date: '2024-05-18' },
  { id: 3, image: '🚗', title: '2023款 特斯拉 Model 3', price: '¥328,000', views: 2156, favorites: 234, status: 'pending', date: '2024-05-22' },
  { id: 4, image: '🚗', title: '2020款 本田思域 Si', price: '¥158,000', views: 654, favorites: 72, status: 'active', date: '2024-05-15' },
  { id: 5, image: '🚗', title: '2019款 大众朗逸 Plus', price: '¥128,000', views: 445, favorites: 45, status: 'sold', date: '2024-05-10' },
  { id: 6, image: '🚗', title: '2022款 比亚迪秦 DM-i', price: '¥198,000', views: 1876, favorites: 145, status: 'active', date: '2024-05-19' },
];

export default function VehicleManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedVehicles, setSelectedVehicles] = useState<number[]>([]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return { bg: 'bg-green-100', text: 'text-green-700', label: '已上架', icon: CheckCircle };
      case 'pending':
        return { bg: 'bg-orange-100', text: 'text-orange-700', label: '待审核', icon: Clock };
      case 'sold':
        return { bg: 'bg-gray-100', text: 'text-gray-700', label: '已出售', icon: AlertCircle };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', label: '待审核', icon: Clock };
    }
  };

  const filteredVehicles = vehicles.filter((v) => {
    const matchSearch = v.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchFilter = filterStatus === 'all' || v.status === filterStatus;
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">车辆管理</h1>
          <Link
            href="/seller/add-vehicle"
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            <Plus className="w-5 h-5" />
            上架新车
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 搜索和筛选 */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索车辆型号、价格..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 rounded-lg border transition ${
                  filterStatus === 'all'
                    ? 'bg-yellow-500 text-white border-yellow-500'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-yellow-500'
                }`}
              >
                全部
              </button>
              <button
                onClick={() => setFilterStatus('active')}
                className={`px-4 py-2 rounded-lg border transition ${
                  filterStatus === 'active'
                    ? 'bg-yellow-500 text-white border-yellow-500'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-yellow-500'
                }`}
              >
                已上架
              </button>
              <button
                onClick={() => setFilterStatus('pending')}
                className={`px-4 py-2 rounded-lg border transition ${
                  filterStatus === 'pending'
                    ? 'bg-yellow-500 text-white border-yellow-500'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-yellow-500'
                }`}
              >
                待审核
              </button>
              <button
                onClick={() => setFilterStatus('sold')}
                className={`px-4 py-2 rounded-lg border transition ${
                  filterStatus === 'sold'
                    ? 'bg-yellow-500 text-white border-yellow-500'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-yellow-500'
                }`}
              >
                已出售
              </button>
            </div>
          </div>
        </div>

        {/* 车辆列表 */}
        <div className="grid grid-cols-1 gap-4">
          {filteredVehicles.map((vehicle) => {
            const badge = getStatusBadge(vehicle.status);
            const BadgeIcon = badge.icon;
            return (
              <div key={vehicle.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row">
                  {/* 图片 */}
                  <div className="md:w-48 h-48 bg-gray-100 flex items-center justify-center text-4xl flex-shrink-0">
                    {vehicle.image}
                  </div>

                  {/* 信息 */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{vehicle.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              浏览 {vehicle.views}
                            </span>
                            <span className="flex items-center gap-1">
                              💗 收藏 {vehicle.favorites}
                            </span>
                            <span className="text-gray-500">{vehicle.date}</span>
                          </div>
                        </div>
                        <div className={`${badge.bg} ${badge.text} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}>
                          <BadgeIcon className="w-4 h-4" />
                          {badge.label}
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{vehicle.price}</p>
                    </div>
                  </div>

                  {/* 操作按钮 */}
                  <div className="px-6 py-6 border-t md:border-t-0 md:border-l border-gray-200 flex flex-row md:flex-col gap-2 justify-center md:justify-start flex-shrink-0">
                    <Link
                      href={`/seller/edit-vehicle/${vehicle.id}`}
                      className="flex items-center justify-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg transition text-sm font-medium w-full md:w-auto"
                    >
                      <Edit className="w-4 h-4" />
                      编辑
                    </Link>
                    {vehicle.status === 'active' ? (
                      <button className="flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 px-3 py-2 rounded-lg transition text-sm font-medium w-full md:w-auto">
                        <EyeOff className="w-4 h-4" />
                        下架
                      </button>
                    ) : (
                      <button className="flex items-center justify-center gap-2 bg-green-50 text-green-600 hover:bg-green-100 px-3 py-2 rounded-lg transition text-sm font-medium w-full md:w-auto">
                        <Eye className="w-4 h-4" />
                        上架
                      </button>
                    )}
                    <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-lg transition text-sm font-medium w-full md:w-auto">
                      <Trash2 className="w-4 h-4" />
                      删除
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <p className="text-gray-600 text-lg">暂无车辆</p>
          </div>
        )}
      </div>
    </div>
  );
}
