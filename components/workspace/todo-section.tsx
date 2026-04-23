"use client";

import { ChevronRight, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface TodoItem {
  id: string;
  title: string;
  type: "urgent" | "normal" | "info";
  count?: number;
  description?: string;
  time?: string;
}

const mockTodos: TodoItem[] = [
  {
    id: "1",
    title: "待审批申请",
    type: "urgent",
    count: 5,
    description: "有新的审批申请等待处理",
  },
  {
    id: "2",
    title: "待交付订单",
    type: "normal",
    count: 3,
    description: "需要安排车辆交付",
  },
  {
    id: "3",
    title: "待收款订单",
    type: "info",
    count: 2,
    description: "等待客户付款确认",
  },
];

function getTypeIcon(type: TodoItem["type"]) {
  switch (type) {
    case "urgent":
      return <AlertCircle className="w-5 h-5 text-secondary" />;
    case "normal":
      return <Clock className="w-5 h-5 text-primary" />;
    case "info":
      return <CheckCircle2 className="w-5 h-5 text-muted-foreground" />;
  }
}

function getTypeBgColor(type: TodoItem["type"]) {
  switch (type) {
    case "urgent":
      return "bg-secondary/10";
    case "normal":
      return "bg-primary/10";
    case "info":
      return "bg-muted";
  }
}

export function TodoSection() {
  return (
    <div className="bg-card rounded-xl mx-4 mt-4 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-foreground">待办事项</h2>
        <Link
          href="/todos"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          查看全部
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {mockTodos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
          <CheckCircle2 className="w-12 h-12 mb-2 opacity-50" />
          <p className="text-sm">暂无待办事项</p>
        </div>
      ) : (
        <div className="space-y-3">
          {mockTodos.map((todo) => (
            <Link
              key={todo.id}
              href={`/todos/${todo.id}`}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeBgColor(
                  todo.type
                )}`}
              >
                {getTypeIcon(todo.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{todo.title}</span>
                  {todo.count && (
                    <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {todo.count}
                    </span>
                  )}
                </div>
                {todo.description && (
                  <p className="text-sm text-muted-foreground truncate">
                    {todo.description}
                  </p>
                )}
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
