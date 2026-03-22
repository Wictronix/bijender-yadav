import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IssueCard } from "@/components/home/IssueCard";
import { TrendingUp, GraduationCap, HeartPulse, Leaf, Shield, Home } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Key Issues | Bijender Yadav",
  description: "Detailed breakdown of the core issues Bijender Yadav is fighting for in Moradabad.",
};

export default async function IssuesPage() {
  const t = await getTranslations("IssuesPage");

  const issues = [
    { title: t("issue1"), description: t("issue1_desc"), icon: TrendingUp },
    { title: t("issue2"), description: t("issue2_desc"), icon: GraduationCap },
    { title: t("issue3"), description: t("issue3_desc"), icon: HeartPulse },
    { title: t("issue4"), description: t("issue4_desc"), icon: Leaf },
    { title: t("issue5"), description: t("issue5_desc"), icon: Shield },
    { title: t("issue6"), description: t("issue6_desc"), icon: Home },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-24 relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6">{t("title")}</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {issues.map((issue, index) => (
                <IssueCard key={index} {...issue} />
              ))}
            </div>
            
            <div className="mt-20 p-8 md:p-12 bg-surface rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/10 to-transparent mix-blend-overlay" />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl font-bold text-white mb-4">{t("report_title")}</h2>
                  <p className="text-white/70 mb-8">{t("report_desc")}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                   <h3 className="font-bold text-white mb-4">{t("form_title")}</h3>
                   <input type="text" placeholder={t("form_name")} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white mb-4 placeholder:text-white/30" />
                   <textarea placeholder={t("form_desc")} rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white mb-4 placeholder:text-white/30"></textarea>
                   <button className="w-full bg-primary-accent text-white font-bold py-3 rounded-lg hover:bg-primary-accent/90 transition-colors">{t("form_submit")}</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
