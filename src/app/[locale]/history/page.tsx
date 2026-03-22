import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Congress History | Bijender Yadav",
  description: "The glorious history of the Indian National Congress from 1885 to present.",
};

export default async function HistoryPage() {
  const t = await getTranslations("HistoryPage");

  const DECADES = [
    { period: t("d1_period"), title: t("d1_title"), events: [t("d1_e1"), t("d1_e2"), t("d1_e3")] },
    { period: t("d2_period"), title: t("d2_title"), events: [t("d2_e1"), t("d2_e2"), t("d2_e3")] },
    { period: t("d3_period"), title: t("d3_title"), events: [t("d3_e1"), t("d3_e2"), t("d3_e3"), t("d3_e4")] },
    { period: t("d4_period"), title: t("d4_title"), events: [t("d4_e1"), t("d4_e2"), t("d4_e3"), t("d4_e4")] },
    { period: t("d5_period"), title: t("d5_title"), events: [t("d5_e1"), t("d5_e2"), t("d5_e3"), t("d5_e4")] },
    { period: t("d6_period"), title: t("d6_title"), events: [t("d6_e1"), t("d6_e2"), t("d6_e3")] },
    { period: t("d7_period"), title: t("d7_title"), events: [t("d7_e1"), t("d7_e2"), t("d7_e3"), t("d7_e4")] },
    { period: t("d8_period"), title: t("d8_title"), events: [t("d8_e1"), t("d8_e2"), t("d8_e3")] },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-3">{t("badge")}</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">{t("title")}</h1>
            <p className="text-white/70 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="relative border-l-2 border-primary-accent/30 ml-4 md:ml-8 space-y-16">
              {DECADES.map((d, i) => (
                <div key={i} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary-accent border-4 border-background" />
                  <span className="text-primary-accent font-extrabold text-lg">{d.period}</span>
                  <h2 className="font-display text-2xl font-bold text-white mt-1 mb-4">{d.title}</h2>
                  <ul className="space-y-2">
                    {d.events.map((e, j) => (
                      <li key={j} className="text-white/60 text-sm leading-relaxed flex gap-3">
                        <span className="text-primary-accent mt-1 shrink-0">●</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
