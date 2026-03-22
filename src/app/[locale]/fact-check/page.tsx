import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { CheckCircle, XCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Fact Check | Bijender Yadav",
  description: "Verified fact-checks of misleading claims with evidence.",
};

export default async function FactCheckPage() {
  const t = await getTranslations("FactCheckPage");

  const FACTS = [
    { claim: t("claim1"), verdict: false, explanation: t("claim1_exp") },
    { claim: t("claim2"), verdict: false, explanation: t("claim2_exp") },
    { claim: t("claim3"), verdict: true, explanation: t("claim3_exp") },
    { claim: t("claim4"), verdict: false, explanation: t("claim4_exp") },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-3">{t("badge")}</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
              {t("title")}
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            {FACTS.map((f, i) => (
              <div key={i} className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  {f.verdict ? (
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-primary-accent mt-1 shrink-0" />
                  )}
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${f.verdict ? "text-green-400" : "text-primary-accent"}`}>
                      {f.verdict ? t("true_label") : t("false_label")}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">&quot;{f.claim}&quot;</h3>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed ml-10">{f.explanation}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
