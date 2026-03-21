import { cn } from "./Button";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
  isDark?: boolean;
}

export function SectionHeader({ title, subtitle, className, align = "left", isDark = true }: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 flex flex-col gap-3",
      align === "center" && "items-center text-center",
      align === "right" && "items-end text-right",
      className
    )}>
      <h2 className={cn(
        "font-display text-display-lg font-bold tracking-tight",
        isDark ? "text-white" : "text-primary"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "max-w-[700px] text-lg",
          isDark ? "text-white/80" : "text-slate-600"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
