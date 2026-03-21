"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

export function ManifestoStrip() {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-r from-[#0d1b4a] via-primary to-[#0d1b4a]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      {/* Animated hand symbol pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('/logo_footer.jpg')", backgroundSize: "80px", backgroundRepeat: "repeat" }} />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-2">कांग्रेस का संकल्प</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white leading-tight">
            हाथ बदलेगा हालात
          </h2>
          <p className="text-white/60 mt-2 max-w-lg">भारतीय राष्ट्रीय कांग्रेस का घोषणापत्र — जनता से वादा, जनता के लिए।</p>
        </div>
        <Link 
          href="/manifesto"
          className="inline-flex items-center gap-3 bg-primary-accent hover:bg-primary-accent/90 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(229,57,53,0.5)] hover:scale-105 transition-all text-lg shrink-0"
        >
          घोषणापत्र देखें <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
