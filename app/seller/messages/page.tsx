'use client';

import React, { useState } from 'react';
import { MessageSquare, Mail, Clock, CheckCircle, AlertCircle, Search } from 'lucide-react';

const messages = [
  { id: 1, customer: '张三', phone: '13800138000', car: '2022款 宝马3系', message: '这个车还有吗？是否可以看车？', time: '2024-05-23 14:30', unread: true, hasReply: false },
  { id: 2, customer: '李四', phone: '13800138001', car: '2021款 奥迪A4L', message: '请问这个车的真实情况如何？', time: '2024-05-23 13:15', unread: true, hasReply: false },
  { id: 3, customer: '王五', phone: '13800138002', car: '2023款 特斯拉 Model 3', message: '感谢您的推荐，我已成交', time: '2024-05-21 16:45', unread: false, hasReply: true },
  { id: 4, customer: '赵六', phone: '13800138003', car: '2020款 本田思域', message: '什么时候有现车？', time: '2024-05-20 10:20', unread: false, hasReply: true },
  { id: 5, customer: '孙七', phone: '13800138004', car: '2022款 比亚迪秦', message: '可以分期吗？', time: '2024-05-19 09:00', unread: false, hasReply: false },
];

export default function MessageCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');

  const filteredMessages = messages.filter((m) =>
    m.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.phone.includes(searchQuery) ||
    m.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const unreadCount = messages.filter((m) => m.unread).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">消息中心</h1>
            {unreadCount > 0 && (
              <p className="text-sm text-red-600 mt-1">有 {unreadCount} 条未读消息</p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 消息列表 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* 搜索 */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="搜索客户或消息..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                  />
                </div>
              </div>

              {/* 消息项 */}
              <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                {filteredMessages.map((msg) => (
                  <div
                    key={msg.id}
                    onClick={() => setSelectedMessage(msg.id)}
                    className={`p-4 cursor-pointer transition ${
                      selectedMessage === msg.id
                        ? 'bg-yellow-50 border-l-4 border-yellow-500'
                        : 'hover:bg-gray-50 border-l-4 border-transparent'
                    } ${msg.unread ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-gray-900">{msg.customer}</p>
                        {msg.unread && (
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{msg.time.split(' ')[1]}</p>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{msg.car}</p>
                    <p className="text-sm text-gray-600 truncate">{msg.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 聊天区域 */}
          <div className="lg:col-span-2">
            {selectedMessage ? (
              <div className="bg-white rounded-lg border border-gray-200 flex flex-col h-full max-h-96">
                {/* 聊天头部 */}
                <div className="p-6 border-b border-gray-200">
                  {(() => {
                    const msg = messages.find((m) => m.id === selectedMessage);
                    return (
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-lg">
                            {msg?.customer.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{msg?.customer}</h3>
                            <p className="text-sm text-gray-600">{msg?.phone}</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">咨询车型：{msg?.car}</p>
                      </div>
                    );
                  })()}
                </div>

                {/* 消息内容 */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {(() => {
                    const msg = messages.find((m) => m.id === selectedMessage);
                    return (
                      <>
                        <div className="flex justify-start">
                          <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
                            <p className="text-sm text-gray-900">{msg?.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{msg?.time}</p>
                          </div>
                        </div>

                        {msg?.hasReply && (
                          <div className="flex justify-end">
                            <div className="bg-yellow-100 rounded-lg px-4 py-2 max-w-xs">
                              <p className="text-sm text-gray-900">感谢咨询，这个车已有人看，但我们还有其他不错的车型，请问有兴趣了解吗？</p>
                              <p className="text-xs text-gray-500 mt-1">2024-05-23 14:45</p>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>

                {/* 输入框 */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="输入回复..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                    />
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition">
                      发送
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 flex items-center justify-center h-96">
                <p className="text-gray-600">选择消息开始聊天</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
