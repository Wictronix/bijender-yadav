"use client";

import { Link } from "@/i18n/routing";
import { Newspaper, Users, Share2, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export function QuickActionStrip() {
  const t = useTranslations("QuickAction");

  const ACTIONS = [
    { icon: Newspaper, label: t("news"), href: "/news" as const },
    { icon: Users, label: t("join"), href: "/join" as const },
    { icon: Share2, label: t("gallery"), href: "/gallery" as const },
    { icon: Phone, label: t("contact"), href: "/join" as const },
  ];

  return (
    <section className="bg-primary-accent relative z-20 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-y border-white/10">
          {ACTIONS.map((action, i) => (
            <Link
              key={i}
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
