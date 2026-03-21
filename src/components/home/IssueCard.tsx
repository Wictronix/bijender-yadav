import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "../ui/Button";

interface IssueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
  className?: string;
}

export function IssueCard({ title, description, icon: Icon, link = "/issues", className }: IssueCardProps) {
  return (
    <div className={cn("bg-secondary p-8 rounded-2xl flex flex-col aspect-square group transition-all duration-300 hover:bg-surface border border-white/5 hover:border-white/10 hover:-translate-y-1", className)}>
      <div className="w-14 h-14 rounded-full bg-primary-accent/10 flex items-center justify-center mb-6 text-primary-accent group-hover:scale-110 group-hover:bg-primary-accent/20 transition-all duration-500">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-display text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
      
      <div className="mt-auto">
        <Link href={link} className="inline-flex items-center gap-2 text-sm font-semibold text-primary-accent hover:text-white transition-colors group/link">
          Our Stand 
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
