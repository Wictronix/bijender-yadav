import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import Image from "next/image";
import { Play } from "lucide-react";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Gallery | Bijender Yadav",
  description: "Campaign photos and videos from Moradabad — Bijender Yadav.",
};

const PHOTO_SOURCES = [
  { src: "/images/rahul_gandhi_and_bijender_yadav.jpg", span: "col-span-1 md:col-span-2 row-span-2" },
  { src: "/images/priyanka-gandhi.jpg", span: "col-span-1 md:col-span-1 row-span-1" },
  { src: "/images/about.jpg", span: "col-span-1 md:col-span-1 row-span-1" },
  { src: "/logo.jpg", span: "col-span-1 md:col-span-1 row-span-1" },
];

const VIDEO_IDS = ["f3s6VHlMbqI", "dQw4w9WgXcQ", "M7FIvfx5J10", "JGwWNGJdvx8"];

export default async function GalleryPage() {
  const t = await getTranslations("GalleryPage");

  const PHOTOS = PHOTO_SOURCES.map((p, i) => ({
    ...p,
    alt: t(`photo${i + 1}`),
  }));

  const VIDEOS = VIDEO_IDS.map((id, i) => ({
    id,
    title: t(`video${i + 1}`),
    date: t(`video${i + 1}_date`),
  }));

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-3">{t("badge")}</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">{t("title")}</h1>
            <p className="text-white/70 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
        </section>

        {/* Photo Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-display text-3xl font-bold text-white mb-8">{t("photos_title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
              {PHOTOS.map((photo, i) => (
                <div key={i} className={`relative rounded-2xl overflow-hidden group ${photo.span}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-medium">{photo.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Grid */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-display text-3xl font-bold text-white mb-8">{t("videos_title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {VIDEOS.map((video, idx) => (
                <div key={idx} className="bg-surface-bright rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all">
                  <div className="relative aspect-video bg-black group cursor-pointer">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary-accent/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(229,57,53,0.5)] group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-bold text-primary-accent mb-2">{video.date}</div>
                    <h3 className="text-xl font-bold text-white">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
