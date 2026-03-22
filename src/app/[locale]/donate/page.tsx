import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Heart, ExternalLink, ShieldCheck, Users, Trophy, TrendingUp } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Donate | Bijender Yadav",
  description: "Contribute to Bijender Yadav's Moradabad development campaign.",
};

export default async function DonatePage() {
  const t = await getTranslations("DonatePage");

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-container via-primary to-[#1a0000] py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-accent/10 border border-primary-accent/20 mb-8">
              <Heart className="w-4 h-4 text-primary-accent fill-primary-accent" />
              <span className="text-sm font-bold text-primary-accent tracking-wide">{t("badge")}</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {t("title1")}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-orange-400">
                {t("title2")}
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
              {t("subtitle")}
            </p>
            <a
              href="https://donateinc.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-accent hover:bg-primary-accent/90 text-white font-bold py-5 px-12 rounded-full shadow-[0_0_60px_-10px_rgba(229,57,53,0.6)] hover:scale-105 transition-all text-xl"
            >
              {t("donate_cta")} <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Donation Stats from donateinc.net */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-4">{t("stats_title")}</h2>
            <p className="text-white/50 text-center mb-12 max-w-xl mx-auto">{t("stats_subtitle")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface border border-white/5 rounded-2xl p-8 text-center hover:border-primary-accent/20 transition-all">
                <TrendingUp className="w-8 h-8 text-primary-accent mx-auto mb-4" />
                <div className="text-3xl font-extrabold text-white mb-2">₹24.88 Cr</div>
                <p className="text-white/50 text-sm">{t("total_collection")}</p>
              </div>
              <div className="bg-surface border border-white/5 rounded-2xl p-8 text-center hover:border-primary-accent/20 transition-all">
                <Trophy className="w-8 h-8 text-primary-accent mx-auto mb-4" />
                <div className="text-3xl font-extrabold text-white mb-2">₹7.95 Cr</div>
                <p className="text-white/50 text-sm">{t("nyay_collection")}</p>
              </div>
              <div className="bg-surface border border-white/5 rounded-2xl p-8 text-center hover:border-primary-accent/20 transition-all">
                <Users className="w-8 h-8 text-primary-accent mx-auto mb-4" />
                <div className="text-3xl font-extrabold text-white mb-2">6,700 km</div>
                <p className="text-white/50 text-sm">{t("yatra_distance")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Donate */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-white text-center mb-12">{t("how_title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-extrabold text-primary-accent">1</div>
                <h3 className="font-bold text-white mb-2">{t("step1_title")}</h3>
                <p className="text-white/50 text-sm">{t("step1_desc")}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-extrabold text-primary-accent">2</div>
                <h3 className="font-bold text-white mb-2">{t("step2_title")}</h3>
                <p className="text-white/50 text-sm">{t("step2_desc")}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-extrabold text-primary-accent">3</div>
                <h3 className="font-bold text-white mb-2">{t("step3_title")}</h3>
                <p className="text-white/50 text-sm">{t("step3_desc")}</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <a
                href="https://donateinc.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary-accent hover:bg-primary-accent/90 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(229,57,53,0.5)] hover:scale-105 transition-all text-lg"
              >
                {t("donate_at")} <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Top Donors / Leaderboard */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-white text-center mb-4">{t("top_title")}</h2>
            <p className="text-white/50 text-center mb-10">{t("top_subtitle")}</p>
            <div className="space-y-3">
              {[
                { rank: 1, name: "Imran Pratapgarhi", referrals: 52, amount: "₹82,12,300" },
                { rank: 2, name: "Khodaniya Dinesh", referrals: 730, amount: "₹41,54,022" },
                { rank: 3, name: "Srinivas BV", referrals: 762, amount: "₹24,60,616" },
                { rank: 4, name: "Vijay Inder Singla", referrals: 296, amount: "₹20,77,916" },
                { rank: 5, name: "Mahesh Kumar Vyas", referrals: 2654, amount: "₹13,69,431" },
              ].map((d) => (
                <div key={d.rank} className="bg-surface border border-white/5 rounded-xl p-5 flex items-center justify-between hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold ${d.rank <= 3 ? "bg-primary-accent/20 text-primary-accent" : "bg-white/5 text-white/50"}`}>
                      #{d.rank}
                    </div>
                    <div>
                      <p className="font-bold text-white">{d.name}</p>
                      <p className="text-xs text-white/40">{d.referrals} referrals</p>
                    </div>
                  </div>
                  <span className="font-bold text-primary-accent text-lg">{d.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-surface-bright border border-white/5 rounded-3xl p-10 md:p-12 flex flex-col md:flex-row items-center gap-10">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-white/10">
                <Image src="/logo_footer.jpg" alt="INC Logo" width={96} height={96} className="object-cover" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">{t("trust_title")}</h3>
                <p className="text-white/70 leading-relaxed">
                  {t("trust_desc")}
                </p>
                <div className="flex gap-3 mt-4 text-sm">
                  <a href="https://donateinc.net/_receipt" target="_blank" rel="noopener noreferrer" className="text-primary-accent hover:underline">{t("download_receipt")}</a>
                  <span className="text-white/20">|</span>
                  <a href="tel:8010255000" className="text-white/50 hover:text-white">{t("helpline")}</a>
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
