import Link from "next/link";
import { Newspaper, Users, Share2, Phone } from "lucide-react";

const ACTIONS = [
  { icon: Newspaper, label: "Latest News", href: "/news" },
  { icon: Users, label: "Join Movement", href: "/join" },
  { icon: Share2, label: "Share", href: "#share" }, // Add share logic later
  { icon: Phone, label: "Contact", href: "/join" },
];

export function QuickActionStrip() {
  return (
    <section className="bg-primary-accent relative z-20 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-y border-white/10">
          {ACTIONS.map((action, i) => (
            <Link 
              key={action.label} 
              href={action.href}
              className={`
                group flex flex-col items-center justify-center p-6 gap-3 min-h-[140px]
                transition-all duration-300 hover:bg-white/10 outline-none
                ${i < 2 ? "border-b md:border-b-0 border-white/10" : ""}
              `}
            >
              <action.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              <span className="font-display font-semibold text-lg text-white text-center">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
