"use client";

import { SectionHeader } from "../ui/SectionHeader";
import { NewsCard } from "../news/NewsCard";
import { useTranslations } from "next-intl";

export function InFocusSection() {
  const t = useTranslations("InFocus");

  const IN_FOCUS_DATA = [
    {
      id: "if-1",
      title: t("item1_title"),
      source: t("item1_source"),
      publishedAt: "2025-08-14T10:00:00Z",
      url: "#",
      snippet: t("item1_snippet"),
      isBreaking: true,
    },
    {
      id: "if-2",
      title: t("item2_title"),
      source: t("item2_source"),
      publishedAt: "2025-10-10T14:30:00Z",
      url: "#",
      snippet: t("item2_snippet"),
    },
    {
      id: "if-3",
      title: t("item3_title"),
      source: t("item3_source"),
      publishedAt: "2025-11-05T09:15:00Z",
      url: "#",
      snippet: t("item3_snippet"),
    }
  ];

  return (
    <section className="bg-off-white py-24 relative">
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          isDark={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IN_FOCUS_DATA.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
