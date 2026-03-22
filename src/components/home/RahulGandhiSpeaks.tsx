"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

const SPEECHES_DATA = [
  { id: "f3s6VHlMbqI", titleKey: "speech1_title", dateKey: "speech1_date" },
  { id: "dQw4w9WgXcQ", titleKey: "speech2_title", dateKey: "speech2_date" },
  { id: "M7FIvfx5J10", titleKey: "speech3_title", dateKey: "speech3_date" },
];

export function RahulGandhiSpeaks() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const t = useTranslations("RahulGandhi");

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-3">{t("badge")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {t("title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-orange-400">{t("title_accent")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SPEECHES_DATA.map((s) => (
            <div key={s.id} className="bg-surface-bright border border-white/5 rounded-2xl overflow-hidden group hover:border-white/10 transition-all">
              <div className="relative aspect-video bg-black cursor-pointer" onClick={() => setActiveId(activeId === s.id ? null : s.id)}>
                {activeId === s.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${s.id}?autoplay=1`}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${s.id}/hqdefault.jpg`}
                      alt={t(s.titleKey)}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-primary-accent/90 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(229,57,53,0.4)] group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-primary-accent mb-2">{t(s.dateKey)}</p>
                <h3 className="text-sm font-medium text-white leading-snug line-clamp-2">{t(s.titleKey)}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
