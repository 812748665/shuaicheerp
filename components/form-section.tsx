interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="mb-3">
      <h2 className="px-4 py-3 text-sm font-medium text-foreground bg-background">
        {title}
      </h2>
      <div className="bg-card">{children}</div>
    </div>
  );
}
