interface DetailSectionProps {
  title: string;
  children: React.ReactNode;
}

export function DetailSection({ title, children }: DetailSectionProps) {
  return (
    <div className="mb-3">
      <h2 className="px-4 py-3 text-sm font-medium text-foreground">
        {title}
      </h2>
      <div className="bg-card">{children}</div>
    </div>
  );
}
