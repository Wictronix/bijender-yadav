"use client";

import { SectionHeader } from "../ui/SectionHeader";
import { IssueCard } from "./IssueCard";
import { Briefcase, BookOpen, HeartPulse, Tractor, ShieldAlert, Cone } from "lucide-react";
import { useTranslations } from "next-intl";

export function IssuesSection() {
  const t = useTranslations("Issues");

  const ISSUES = [
    { title: t("employment"), description: t("employment_desc"), icon: Briefcase, slug: "employment" },
    { title: t("education"), description: t("education_desc"), icon: BookOpen, slug: "education" },
    { title: t("healthcare"), description: t("healthcare_desc"), icon: HeartPulse, slug: "healthcare" },
    { title: t("farmers"), description: t("farmers_desc"), icon: Tractor, slug: "farmers" },
    { title: t("womens_safety"), description: t("womens_safety_desc"), icon: ShieldAlert, slug: "womens-safety" },
    { title: t("infrastructure"), description: t("infrastructure_desc"), icon: Cone, slug: "infrastructure" },
  ];

  return (
    <section className="bg-primary-container relative py-24">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {ISSUES.map((issue) => (
            <IssueCard
              key={issue.slug}
              title={issue.title}
              description={issue.description}
              icon={issue.icon}
              link={`/issues#${issue.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
