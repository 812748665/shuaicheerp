"use client";

interface Tab {
  key: string;
  label: string;
  count?: number;
}

interface TabSwitchProps {
  tabs: Tab[];
  activeKey: string;
  onChange: (key: string) => void;
}

export function TabSwitch({ tabs, activeKey, onChange }: TabSwitchProps) {
  return (
    <div className="px-4 py-2 bg-card">
      <div className="flex items-center p-1 bg-secondary rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-sm font-medium transition-all rounded-md btn-press ${
              activeKey === tab.key
                ? "bg-card text-foreground card-shadow"
                : "text-foreground-secondary hover:text-foreground"
            }`}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeKey === tab.key
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
