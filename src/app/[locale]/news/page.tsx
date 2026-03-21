import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsGrid } from "@/components/news/NewsGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "News & Media Hub | Bijender Yadav",
  description: "Latest news, press releases, video speeches, and photo gallery of Congress leader Bijender Yadav.",
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
  const initialNews = await getNewsData();

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        {/* Page Hero */}
        <section className="bg-primary-container py-24 relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6">
              Media Hub
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Follow Bijender Yadav's campaign journey, press releases, and media coverage across Moradabad and Uttar Pradesh.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <NewsGrid initialNews={initialNews} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
