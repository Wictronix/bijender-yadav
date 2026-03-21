import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Photo Gallery | Bijender Yadav",
  description: "Campaign photos and moments from Moradabad.",
};

const PHOTOS = [
  { src: "/images/rahul_gandhi_and_bijender_yadav.jpg", alt: "With Rahul Gandhi", span: "col-span-1 md:col-span-2 row-span-2" },
  { src: "/images/priyanka-gandhi.jpg", alt: "With Priyanka Gandhi", span: "col-span-1 md:col-span-1 row-span-1" },
  { src: "/images/about.jpg", alt: "Campaign Trail", span: "col-span-1 md:col-span-1 row-span-1" },
  { src: "/logo.jpg", alt: "Portrait", span: "col-span-1 md:col-span-1 row-span-1" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
              Photo Gallery
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Moments from our journey across Moradabad.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
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
      </main>
      <Footer />
    </>
  );
}
