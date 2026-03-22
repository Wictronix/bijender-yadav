import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Our Inspiration | Bijender Yadav",
  description: "Great Congress leaders who built India.",
};

export default async function InspirationPage() {
  const t = await getTranslations("InspirationPage");

  const LEADERS = [
    { name: t("l1_name"), role: t("l1_role"), quote: t("l1_quote") },
    { name: t("l2_name"), role: t("l2_role"), quote: t("l2_quote") },
    { name: t("l3_name"), role: t("l3_role"), quote: t("l3_quote") },
    { name: t("l4_name"), role: t("l4_role"), quote: t("l4_quote") },
    { name: t("l5_name"), role: t("l5_role"), quote: t("l5_quote") },
    { name: t("l6_name"), role: t("l6_role"), quote: t("l6_quote") },
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
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LEADERS.map((l, i) => (
                <div key={i} className="bg-surface border border-white/5 rounded-2xl p-8 text-center hover:border-primary-accent/30 transition-all group">
                  <div className="w-20 h-20 bg-primary-container rounded-full mx-auto mb-6 flex items-center justify-center text-3xl border-2 border-white/10 group-hover:border-primary-accent/30 transition-colors">
                    🇮🇳
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{l.name}</h3>
                  <p className="text-primary-accent text-sm font-bold mb-4">{l.role}</p>
                  <p className="text-white/50 text-sm italic leading-relaxed">&quot;{l.quote}&quot;</p>
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
