"use client";

import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export function WikipediaStrip() {
  const t = useTranslations("Wikipedia");

  return (
    <section className="bg-white py-8 border-y border-slate-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
          <Globe className="w-6 h-6 text-slate-700" />
        </div>
        <div className="flex-grow max-w-2xl">
          <h3 className="font-display font-bold text-slate-900 text-lg">{t("title")}</h3>
          <p className="text-slate-600 text-sm">
            {t("description")}
          </p>
        </div>
        <a
          href="https://en.wikipedia.org/wiki/Bijender_Yadav"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-primary-accent font-semibold tracking-wide text-sm hover:underline underline-offset-4 flex items-center gap-1"
        >
          {t("cta")} &rarr;
        </a>
      </div>
    </section>
  );
}
