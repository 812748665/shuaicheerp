"use client";

interface Tab {
  key: string;
  label: string;
}

interface TabSwitchProps {
  tabs: Tab[];
  activeKey: string;
  onChange: (key: string) => void;
}

export function TabSwitch({ tabs, activeKey, onChange }: TabSwitchProps) {
  return (
    <div className="flex border-b border-border bg-card">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
            activeKey === tab.key
              ? "text-primary"
              : "text-muted hover:text-foreground"
          }`}
        >
          {tab.label}
          {activeKey === tab.key && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}
