type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  id?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
  id,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {label && (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-accent">
          <span className="w-4 h-px bg-accent" aria-hidden="true" />
          {label}
        </span>
      )}
      <h2
        id={id}
        className={`text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-tight ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
