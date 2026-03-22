import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { FileText, ExternalLink, BookOpen, Users, Shield } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Congress Manifesto | Bijender Yadav",
  description: "Official manifesto of the Indian National Congress. Haath Badlega Halaat.",
};

const ICONS = [Users, BookOpen, Shield, FileText];

export default async function ManifestoPage() {
  const t = await getTranslations("ManifestoPage");

  const KEY_PROMISES = ICONS.map((icon, i) => ({
    icon,
    title: t(`p${i + 1}_title`),
    desc: t(`p${i + 1}_desc`),
  }));

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-container via-primary to-[#0d1b4a] py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-accent/10 border border-primary-accent/20 mb-8">
              <FileText className="w-4 h-4 text-primary-accent" />
              <span className="text-sm font-bold text-primary-accent tracking-wide">{t("badge")}</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {t("title_prefix")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-orange-400">{t("title_accent")}</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
              {t("subtitle")}
            </p>
            <a
              href="https://manifesto.inc.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-accent hover:bg-primary-accent/90 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(229,57,53,0.5)] hover:scale-105 transition-all text-lg"
            >
              {t("cta")} <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Key Promises */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-4">{t("promises_title")}</h2>
            <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">{t("promises_subtitle")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {KEY_PROMISES.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary-accent/30 transition-all group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-primary-accent/10 rounded-full flex items-center justify-center group-hover:bg-primary-accent/20 transition-colors shrink-0">
                        <Icon className="w-6 h-6 text-primary-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Embedded Manifesto */}
        <section className="bg-surface py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-display text-2xl font-bold text-white text-center mb-8">{t("iframe_title")}</h2>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src="https://manifesto.inc.in/"
                className="w-full min-h-[80vh] border-none"
                title="Congress Manifesto"
                loading="lazy"
              />
            </div>
            <p className="text-center mt-6 text-white/40 text-sm">
              {t("iframe_source")} <a href="https://manifesto.inc.in/" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline">manifesto.inc.in</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
