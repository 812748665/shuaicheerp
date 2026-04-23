interface DetailSectionProps {
  title: string;
  children: React.ReactNode;
}

export function DetailSection({ title, children }: DetailSectionProps) {
  return (
    <div className="mx-4 mb-4">
      <div className="flex items-center gap-2 py-3">
        <span className="w-1 h-4 bg-primary rounded-full" />
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      </div>
      <div className="bg-card rounded-xl card-shadow overflow-hidden">
        {children}
      </div>
    </div>
  );
}
