import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Rocket, Ship, Stethoscope, Landmark, Smartphone, Award, Satellite, GraduationCap, Shield, Leaf } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Congress Achievements | Bijender Yadav",
  description: "India's historic achievements under Congress leadership.",
};

const ICONS = [Rocket, Ship, Stethoscope, Landmark, Smartphone, Award, Satellite, GraduationCap, Shield, Leaf];
const YEARS = ["2013", "2013", "2014", "2013", "2010", "2011", "2010", "2009", "2005", "2005"];

export default async function AchievementsPage() {
  const t = await getTranslations("AchievementsPage");

  const ACHIEVEMENTS = ICONS.map((icon, i) => ({
    icon,
    year: YEARS[i],
    title: t(`a${i + 1}_title`),
    desc: t(`a${i + 1}_desc`),
  }));

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
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ACHIEVEMENTS.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div key={i} className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary-accent/30 transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary-accent/10 rounded-full flex items-center justify-center group-hover:bg-primary-accent/20 transition-colors shrink-0">
                        <Icon className="w-6 h-6 text-primary-accent" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-primary-accent">{a.year}</span>
                        <h3 className="text-lg font-bold text-white">{a.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
