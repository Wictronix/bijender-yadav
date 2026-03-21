import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "कांग्रेस घोषणापत्र | Bijender Yadav",
  description: "भारतीय राष्ट्रीय कांग्रेस का आधिकारिक घोषणापत्र — हाथ बदलेगा हालात।",
};

export default function ManifestoPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-3">हाथ बदलेगा हालात</p>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
              कांग्रेस घोषणापत्र
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              भारतीय राष्ट्रीय कांग्रेस के आधिकारिक घोषणापत्र को नीचे पढ़ें।
            </p>
          </div>
        </section>

        <section className="flex-1">
          <iframe
            src="https://manifesto.inc.in/"
            className="w-full min-h-[80vh] border-none"
            title="Congress Manifesto"
            loading="lazy"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
