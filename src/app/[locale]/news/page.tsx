import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsGrid } from "@/components/news/NewsGrid";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { FileText, Download } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "News & Media | Bijender Yadav",
  description: "Latest news, press releases, and media coverage of Congress leader Bijender Yadav from Moradabad.",
};

async function getNewsData() {
  try {
    const filePath = path.join(process.cwd(), "public", "data", "news-feed.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Failed to read news feed:", error);
    return [];
  }
}

export default async function NewsPage() {
  const t = await getTranslations("NewsPage");
  const initialNews = await getNewsData();

  const RELEASES = [
    { id: 1, title: t("press1"), date: t("press1_date"), size: "1.2 MB PDF" },
    { id: 2, title: t("press2"), date: t("press2_date"), size: "2.4 MB PDF" },
    { id: 3, title: t("press3"), date: t("press3_date"), size: "0.8 MB PDF" },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        {/* Page Hero */}
        <section className="bg-primary-container py-24 relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-3">{t("badge")}</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6">{t("title")}</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="font-display text-3xl font-bold text-white mb-8">{t("news_title")}</h2>
            <NewsGrid initialNews={initialNews} />
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-3xl font-bold text-white mb-8">{t("press_title")}</h2>
            <div className="space-y-4">
              {RELEASES.map((release) => (
                <div key={release.id} className="bg-surface-bright border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-white/10 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-white/60" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary-accent mb-1">{release.date}</div>
                      <h3 className="text-lg font-bold text-white mb-1">{release.title}</h3>
                      <p className="text-sm text-white/40">{release.size}</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-bold transition-colors w-full md:w-auto justify-center">
                    <Download className="w-4 h-4" /> {t("download")}
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href="https://www.inc.in/media/press-releases" target="_blank" rel="noopener noreferrer" className="text-primary-accent font-bold text-sm hover:underline">
                {t("inc_press")} →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
