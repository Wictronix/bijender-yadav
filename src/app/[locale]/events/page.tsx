import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Upcoming Events | Bijender Yadav",
  description: "Join Bijender Yadav at upcoming campaign trails, rallies, and public meetings.",
};

export default async function EventsPage() {
  const t = await getTranslations("EventsPage");

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-24 relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
             <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start group transition-all hover:bg-surface-bright hover:shadow-2xl hover:border-primary-accent/30">
                <div className="flex flex-col items-center justify-center bg-primary-container text-white rounded-xl w-32 h-32 shrink-0 border border-white/10 group-hover:bg-primary-accent transition-colors">
                  <span className="text-sm font-bold uppercase tracking-widest text-primary-fixed-dim group-hover:text-white/80">Jan</span>
                  <span className="text-4xl font-extrabold">26</span>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <span className="text-xs font-bold text-primary-accent uppercase tracking-widest mb-2 block">{t("event1_type")}</span>
                  <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">{t("event1_title")}</h2>
                  <p className="text-white/60 mb-4">{t("event1_desc")}</p>
                  <p className="text-sm text-white/40">{t("event1_time")}</p>
                </div>
             </div>

             <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start group transition-all hover:bg-surface-bright hover:shadow-2xl hover:border-primary-accent/30">
                <div className="flex flex-col items-center justify-center bg-primary-container text-white rounded-xl w-32 h-32 shrink-0 border border-white/10 group-hover:bg-primary-accent transition-colors">
                  <span className="text-sm font-bold uppercase tracking-widest text-primary-fixed-dim group-hover:text-white/80">Feb</span>
                  <span className="text-4xl font-extrabold">05</span>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <span className="text-xs font-bold text-primary-accent uppercase tracking-widest mb-2 block">{t("event2_type")}</span>
                  <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">{t("event2_title")}</h2>
                  <p className="text-white/60 mb-4">{t("event2_desc")}</p>
                  <p className="text-sm text-white/40">{t("event2_time")}</p>
                </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
