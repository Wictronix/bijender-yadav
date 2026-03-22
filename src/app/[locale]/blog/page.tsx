import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Blog & Updates | Bijender Yadav",
  description: "Read the latest thoughts, policy updates, and campaign stories from Bijender Yadav.",
};

export default async function BlogPage() {
  const t = await getTranslations("BlogPage");

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
          <div className="container mx-auto px-4 max-w-4xl text-center">
             <div className="bg-surface border border-white/5 rounded-3xl p-16 animate-pulse">
                <div className="w-20 h-20 bg-primary-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">📝</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{t("coming_title")}</h2>
                <p className="text-white/50">{t("coming_desc")}</p>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
