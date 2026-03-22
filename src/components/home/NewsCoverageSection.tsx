"use client";

import { SectionHeader } from "../ui/SectionHeader";
import { NewsCard } from "../news/NewsCard";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function NewsCoverageSection() {
  const t = useTranslations("NewsCoverage");

  const NEWS_DATA = [
    {
      id: "n-1",
      title: t("item1_title"),
      source: t("item1_source"),
      publishedAt: "2025-12-01T08:00:00Z",
      url: "#",
      snippet: t("item1_snippet"),
    },
    {
      id: "n-2",
      title: t("item2_title"),
      source: t("item2_source"),
      publishedAt: "2025-11-20T12:00:00Z",
      url: "#",
      snippet: t("item2_snippet"),
    },
    {
      id: "n-3",
      title: t("item3_title"),
      source: t("item3_source"),
      publishedAt: "2025-10-25T09:30:00Z",
      url: "#",
      snippet: t("item3_snippet"),
    }
  ];

  return (
    <section className="bg-off-white py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          isDark={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/news" className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-3 text-base font-medium transition-all">
            {t("cta")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
