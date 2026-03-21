"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

const MILESTONES = [
  { year: "1885", event: "कांग्रेस की स्थापना" },
  { year: "1920", event: "असहयोग आंदोलन" },
  { year: "1930", event: "नमक सत्याग्रह" },
  { year: "1942", event: "भारत छोड़ो आंदोलन" },
  { year: "1947", event: "स्वतंत्रता प्राप्ति" },
  { year: "1950", event: "गणतंत्र की स्थापना" },
  { year: "1969", event: "बैंकों का राष्ट्रीयकरण" },
  { year: "1971", event: "गरीबी हटाओ" },
  { year: "1991", event: "आर्थिक उदारीकरण" },
  { year: "2005", event: "RTI / MNREGA" },
  { year: "2013", event: "मंगलयान" },
  { year: "2024", event: "INDIA गठबंधन" },
];

export function CongressHistoryStrip() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-3">139 वर्ष का इतिहास</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white leading-tight">
              कांग्रेस का <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-orange-400">गौरवशाली सफ़र</span>
            </h2>
          </div>
          <Link href="/history" className="text-primary-accent font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all shrink-0">
            पूरा इतिहास <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal scrolling timeline */}
        <div className="relative">
          <div className="absolute top-[28px] left-0 right-0 h-[2px] bg-white/10" />
          <div className="flex gap-0 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {MILESTONES.map((m, i) => (
              <div key={i} className="min-w-[140px] snap-start flex flex-col items-center text-center group shrink-0 px-2">
                <div className="w-4 h-4 rounded-full bg-primary-container border-2 border-primary-accent group-hover:bg-primary-accent transition-colors relative z-10 mb-4" />
                <span className="text-lg font-extrabold text-primary-accent">{m.year}</span>
                <span className="text-xs text-white/50 mt-1 leading-tight">{m.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
