import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "हमारी प्रेरणा | Bijender Yadav",
  description: "कांग्रेस के महान नेता जिन्होंने भारत का निर्माण किया।",
};

const LEADERS = [
  { name: "महात्मा गांधी", role: "राष्ट्रपिता", quote: "खुद वो बदलाव बनिए जो आप दुनिया में देखना चाहते हैं।" },
  { name: "पंडित जवाहरलाल नेहरू", role: "प्रथम प्रधानमंत्री", quote: "जब हम कोई बड़ा काम करते हैं, तो हमें बड़े दिल और बड़े दिमाग से करना होता है।" },
  { name: "सरदार वल्लभभाई पटेल", role: "लौह पुरुष", quote: "एकता के बिना जनशक्ति, शक्ति नहीं है।" },
  { name: "इंदिरा गांधी", role: "प्रधानमंत्री", quote: "धर्मनिरपेक्षता और लोकतंत्र हमारे राज्य के दो स्तंभ हैं।" },
  { name: "राजीव गांधी", role: "प्रधानमंत्री", quote: "भारत एक प्राचीन देश है लेकिन एक युवा राष्ट्र है।" },
  { name: "डॉ. मनमोहन सिंह", role: "प्रधानमंत्री", quote: "भारत की नियति को कोई नहीं बदल सकता।" },
];

export default function InspirationPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-3">हमारी प्रेरणा</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
              जिन्होंने भारत बनाया
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              भारतीय राष्ट्रीय कांग्रेस के वो महान नेता जिनकी दृष्टि ने आधुनिक भारत का निर्माण किया।
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LEADERS.map((l, i) => (
                <div key={i} className="bg-surface border border-white/5 rounded-2xl p-8 text-center hover:border-primary-accent/30 transition-all group">
                  <div className="w-20 h-20 bg-primary-container rounded-full mx-auto mb-6 flex items-center justify-center text-3xl border-2 border-white/10 group-hover:border-primary-accent/30 transition-colors">
                    🇮🇳
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{l.name}</h3>
                  <p className="text-primary-accent text-sm font-bold mb-4">{l.role}</p>
                  <p className="text-white/50 text-sm italic leading-relaxed">"{l.quote}"</p>
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
