"use client";

import { Link } from "@/i18n/routing";
import { Button } from "../ui/Button";
import { useTranslations } from "next-intl";

export function JoinSection() {
  const t = useTranslations("Join");

  return (
    <section className="bg-secondary py-32 relative text-center">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-4 relative flex flex-col items-center">
        <div className="inline-flex px-4 py-1.5 rounded-full bg-primary-accent/10 border border-primary-accent/20 text-primary-accent font-semibold text-sm mb-6">
          {t("badge")}
        </div>

        <h2 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6">
          {t("title")}
        </h2>

        <p className="text-xl text-white/70 max-w-2xl mb-12">
          {t("description")}
        </p>

        <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full shadow-[0_0_40px_-5px_rgba(229,57,53,0.5)]">
          <Link href="/join">{t("cta")}</Link>
        </Button>
      </div>
    </section>
  );
}
