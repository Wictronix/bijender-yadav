import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "तथ्य जांच — Fact Check | Bijender Yadav",
  description: "भ्रामक समाचारों की सच्चाई — सत्यापित तथ्यों के साथ।",
};

const FACTS = [
  {
    claim: "कांग्रेस ने भारत के लिए कुछ नहीं किया।",
    verdict: false,
    explanation: "कांग्रेस ने भारत को स्वतंत्रता दिलाई, संविधान का निर्माण किया, IITs, IIMs की स्थापना की, हरित क्रांति, श्वेत क्रांति, परमाणु कार्यक्रम, आधार, MNREGA, RTI — ये सब कांग्रेस सरकारों की देन हैं।",
  },
  {
    claim: "MNREGA (मनरेगा) विफल योजना है।",
    verdict: false,
    explanation: "MNREGA विश्व का सबसे बड़ा रोजगार कार्यक्रम है जिसने 14 करोड़ से अधिक ग्रामीण परिवारों को रोजगार दिया। खुद वर्तमान सरकार भी इसे जारी रखे हुए है।",
  },
  {
    claim: "मुरादाबाद का पीतल उद्योग संकट में है।",
    verdict: true,
    explanation: "हां, GST के जटिल ढांचे, कच्चे माल की बढ़ती कीमतों और निर्यात सुविधाओं की कमी के कारण मुरादाबाद का पीतल उद्योग गंभीर संकट में है। बिजेंदर यादव इस उद्योग को पुनर्जीवित करने के लिए लड़ रहे हैं।",
  },
  {
    claim: "कांग्रेस भ्रष्टाचारी पार्टी है।",
    verdict: false,
    explanation: "कांग्रेस ने ही RTI (सूचना का अधिकार) कानून बनाया जो सरकारी पारदर्शिता का सबसे बड़ा हथियार है। अगर कांग्रेस भ्रष्ट होती तो यह कानून कभी नहीं बनाती।",
  },
];

export default function FactCheckPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-3">तथ्य जांच</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
              सच क्या है?
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              भ्रामक दावों की सत्यापित जांच — तथ्यों के साथ।
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
            {FACTS.map((f, i) => (
              <div key={i} className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  {f.verdict ? (
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-primary-accent mt-1 shrink-0" />
                  )}
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${f.verdict ? "text-green-400" : "text-primary-accent"}`}>
                      {f.verdict ? "✓ सत्य" : "✗ भ्रामक दावा"}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">"{f.claim}"</h3>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed ml-10">{f.explanation}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
