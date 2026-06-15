type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
};

export function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={`bg-surface border border-border rounded-2xl p-6 ${className}`}
    >
      {children}
    </Tag>
  );
}
