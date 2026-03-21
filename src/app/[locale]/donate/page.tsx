import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Heart, ExternalLink, ShieldCheck, IndianRupee } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "सहयोग करें — Donate | Bijender Yadav",
  description: "बिजेंदर यादव के मुरादाबाद विकास अभियान में अपना सहयोग दें। Donate to the Bijender Yadav Campaign.",
};

export default function DonatePage() {
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
              <span className="text-sm font-bold text-primary-accent tracking-wide">सहयोग करें</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              मुरादाबाद के विकास में<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-orange-400">
                अपना योगदान दें
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              आपका हर सहयोग जमीनी स्तर पर बदलाव लाता है। बिजेंदर यादव के नेतृत्व में मुरादाबाद को आगे बढ़ाएं।
            </p>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* UPI Card */}
              <div className="bg-surface border border-white/5 rounded-3xl p-10 flex flex-col items-center text-center hover:border-primary-accent/30 transition-all group">
                <div className="w-20 h-20 bg-primary-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-accent/20 transition-colors">
                  <IndianRupee className="w-10 h-10 text-primary-accent" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">UPI से दान करें</h2>
                <p className="text-white/60 mb-8">अपने किसी भी UPI ऐप (Google Pay, PhonePe, Paytm) से तुरंत भुगतान करें।</p>
                <div className="bg-white rounded-2xl p-6 w-48 h-48 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <p className="text-gray-800 font-bold text-sm">UPI QR Code</p>
                    <p className="text-gray-500 text-xs mt-2">Coming Soon</p>
                  </div>
                </div>
                <p className="text-sm text-white/40 mt-2">UPI ID जल्द ही उपलब्ध होगी</p>
              </div>

              {/* Bank Transfer Card */}
              <div className="bg-surface border border-white/5 rounded-3xl p-10 flex flex-col items-center text-center hover:border-primary-accent/30 transition-all group">
                <div className="w-20 h-20 bg-primary-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-accent/20 transition-colors">
                  <ShieldCheck className="w-10 h-10 text-primary-accent" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">बैंक ट्रांसफर / पार्टी चैनल</h2>
                <p className="text-white/60 mb-8">भारतीय राष्ट्रीय कांग्रेस के आधिकारिक चैनल के माध्यम से दान करें।</p>
                <a 
                  href="https://donate.inc.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary-accent hover:bg-primary-accent/90 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_40px_-10px_rgba(229,57,53,0.5)] hover:scale-105 transition-all text-lg"
                >
                  INC आधिकारिक दान पोर्टल <ExternalLink className="w-5 h-5" />
                </a>
                <p className="text-sm text-white/40 mt-6">donate.inc.in — कांग्रेस का सुरक्षित पोर्टल</p>
              </div>
            </div>

            {/* Trust Section */}
            <div className="bg-surface-bright border border-white/5 rounded-3xl p-10 md:p-12 flex flex-col md:flex-row items-center gap-10">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-white/10">
                <Image src="/logo_footer.jpg" alt="INC Logo" width={96} height={96} className="object-cover" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">पारदर्शिता और विश्वास</h3>
                <p className="text-white/70 leading-relaxed">
                  सभी दान भारतीय राष्ट्रीय कांग्रेस के आधिकारिक चैनल से होते हैं। प्रत्येक रुपया पारदर्शी रूप से मुरादाबाद के विकास कार्यों और जनसेवा अभियानों में लगाया जाता है। आपका विश्वास हमारी प्राथमिकता है।
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
