"use client";

import { Heart, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function DonateSection() {
  const t = useTranslations("Donate");

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-accent/10 border border-primary-accent/20 mb-8">
          <Heart className="w-4 h-4 text-primary-accent fill-primary-accent" />
          <span className="text-sm font-bold text-primary-accent tracking-wide">{t("badge")}</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          {t("title1")}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-orange-400">
            {t("title2")}
          </span>
        </h2>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://donateinc.net"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-10 text-lg font-bold bg-primary-accent hover:bg-primary-accent/90 text-white rounded-full shadow-[0_0_40px_-10px_rgba(229,57,53,0.5)] hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            {t("cta")} <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-white/40">{t("portal")}</p>
        </div>
      </div>
    </section>
  );
}
