import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "About Moradabad | Bijender Yadav",
  description: "The history, culture, and future of the Brass City, Moradabad.",
};

export default async function MoradabadPage() {
  const t = await getTranslations("MoradabadPage");

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-[url('/public/images/about.jpg')] bg-cover bg-center py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              {t("title_prefix")} <span className="text-primary-accent">{t("title_accent")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl text-white/80 space-y-12 text-lg leading-relaxed">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">{t("heritage_title")}</h2>
              <p className="mb-4">{t("heritage_p1")}</p>
              <p>{t("heritage_p2")}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
               <div className="bg-surface border border-white/10 rounded-2xl p-8">
                  <h3 className="font-bold text-2xl text-white mb-2">{t("stat1")}</h3>
                  <p className="text-sm text-white/50 uppercase tracking-wider">{t("stat1_label")}</p>
               </div>
               <div className="bg-surface border border-white/10 rounded-2xl p-8">
                  <h3 className="font-bold text-2xl text-white mb-2">{t("stat2")}</h3>
                  <p className="text-sm text-white/50 uppercase tracking-wider">{t("stat2_label")}</p>
               </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">{t("demo_title")}</h2>
              <p className="mb-4">{t("demo_p1")}</p>
              <p className="mb-4">{t("demo_p2")}</p>
            </div>

            <div className="p-8 border-l-4 border-primary-accent bg-surface rounded-r-2xl italic text-xl">
              &quot;{t("quote")}&quot; 
              <span className="block mt-4 text-base font-bold not-italic text-primary-accent">{t("quote_author")}</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
