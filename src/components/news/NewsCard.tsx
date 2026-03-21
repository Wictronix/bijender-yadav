import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/Badge";
import { cn } from "../ui/Button";

interface NewsCardProps {
  id: string;
  title: string;
  source: string;
  publishedAt: string;
  url: string;
  snippet?: string;
  isBreaking?: boolean;
  className?: string;
}

export function NewsCard({ id, title, source, publishedAt, url, snippet, isBreaking, className }: NewsCardProps) {
  const dateStr = new Date(publishedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className={cn("group block outline-none h-full", className)}>
      <div className="bg-surface h-full flex flex-col p-6 rounded-2xl border border-white/10 transition-all duration-500 overflow-hidden relative
        hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(26,35,126,0.6)] hover:border-primary-accent/50 hover:bg-surface-bright z-10 w-full">
        
        {/* Subtle hover gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10 border border-white/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Image 
                src="/logo_footer.jpg" 
                alt={`${source} logo`}
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <span className="text-xs font-bold text-primary-fixed-dim uppercase tracking-wider group-hover:text-primary-accent transition-colors">
              {source}
            </span>
          </div>
          {isBreaking && (
            <Badge variant="breaking" className="animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.3)]">BREAKING</Badge>
          )}
        </div>
        
        <h3 className="font-display text-lg font-bold text-white mb-3 line-clamp-2 leading-snug group-hover:text-white transition-colors relative z-10">
          {title}
        </h3>
        
        {snippet && (
          <p className="text-sm text-white/60 line-clamp-3 mb-6 flex-grow leading-relaxed group-hover:text-white/80 transition-colors relative z-10">
            {snippet}
          </p>
        )}
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/10 group-hover:border-white/20 transition-colors relative z-10">
          <span className="text-xs font-medium text-white/40 group-hover:text-white/60 transition-colors">{dateStr}</span>
          <div className="flex items-center gap-2 text-sm font-bold text-primary-accent bg-primary-accent/10 hover:bg-primary-accent/20 px-4 py-1.5 rounded-full group-hover:bg-primary-accent group-hover:text-white transition-all duration-300 shadow-sm">
            Watch / Read <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
