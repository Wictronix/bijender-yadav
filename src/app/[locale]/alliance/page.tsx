import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "INDIA Alliance | Bijender Yadav",
  description: "Standing united with the INDIA Alliance for the future of Moradabad and the nation.",
};

export default async function AlliancePage() {
  const t = await getTranslations("AlliancePage");

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-gradient-to-br from-primary-container via-primary to-[#003b22] py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6">
              {t("title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-green-500">{t("india")}</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-12">
             <div className="bg-surface border border-white/5 rounded-3xl p-12">
                <div className="flex flex-col items-center justify-center gap-8">
                   <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4">
                        <Image src="/logo_footer.jpg" alt="INC" width={80} height={80} className="object-contain" />
                      </div>
                      <div className="text-4xl font-bold text-white/30">+</div>
                      <div className="w-24 h-24 bg-surface-bright rounded-full flex items-center justify-center border border-white/10 text-xl font-black text-white px-2 text-center leading-tight shadow-xl">
                        INDIA
                      </div>
                   </div>
                   <h2 className="text-3xl font-bold text-white mb-4">{t("coalition_title")}</h2>
                   <p className="text-white/70 leading-relaxed max-w-2xl">
                     {t("coalition_desc")}
                   </p>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-surface border border-white/5 p-8 rounded-2xl">
                   <h3 className="font-bold text-white mb-2 text-xl">{t("democracy_title")}</h3>
                   <p className="text-white/60 text-sm">{t("democracy_desc")}</p>
                </div>
                <div className="bg-surface border border-white/5 p-8 rounded-2xl">
                   <h3 className="font-bold text-white mb-2 text-xl">{t("economy_title")}</h3>
                   <p className="text-white/60 text-sm">{t("economy_desc")}</p>
                </div>
                <div className="bg-surface border border-white/5 p-8 rounded-2xl">
                   <h3 className="font-bold text-white mb-2 text-xl">{t("harmony_title")}</h3>
                   <p className="text-white/60 text-sm">{t("harmony_desc")}</p>
                </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
