import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Rocket, Ship, Stethoscope, Landmark, Smartphone, Award, Satellite, GraduationCap, Shield, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "कांग्रेस की उपलब्धियां | Bijender Yadav",
  description: "भारत की प्रमुख उपलब्धियां कांग्रेस सरकारों के अधीन।",
};

const ACHIEVEMENTS = [
  { icon: Rocket, year: "2013", title: "मंगलयान (Mars Orbiter Mission)", desc: "भारत पहली बार में मंगल ग्रह की कक्षा में पहुंचने वाला पहला देश बना। यह मिशन कांग्रेस-UPA सरकार के तहत ISRO द्वारा लॉन्च किया गया।" },
  { icon: Ship, year: "2013", title: "INS विक्रांत", desc: "भारत में निर्मित प्रथम विमानवाहक युद्धपोत। यह भारतीय नौसेना की आत्मनिर्भरता का प्रतीक है।" },
  { icon: Stethoscope, year: "2014", title: "पोलियो मुक्त भारत", desc: "विश्व स्वास्थ्य संगठन (WHO) ने भारत को पोलियो मुक्त घोषित किया। यह कांग्रेस सरकार के 'पल्स पोलियो' अभियान की सफलता है।" },
  { icon: Landmark, year: "2013", title: "भारतीय महिला बैंक", desc: "भारत का पहला सर्व-महिला वाणिज्यिक बैंक UPA सरकार द्वारा स्थापित किया गया।" },
  { icon: Smartphone, year: "2010", title: "आधार (UIDAI)", desc: "दुनिया की सबसे बड़ी बायोमेट्रिक पहचान प्रणाली — 1.3 अरब नागरिकों को डिजिटल पहचान।" },
  { icon: Award, year: "2011", title: "विवेक एक्सप्रेस", desc: "भारत की सबसे लंबी रेलगाड़ी (4286 km) — डिब्रूगढ़ से कन्याकुमारी तक।" },
  { icon: Satellite, year: "2010", title: "2011 बायोमेट्रिक जनगणना", desc: "विश्व की सबसे बड़ी जनगणना — 121 करोड़ लोगों का डिजिटल रिकॉर्ड।" },
  { icon: GraduationCap, year: "2009", title: "शिक्षा का अधिकार (RTE)", desc: "6-14 वर्ष के हर बच्चे को नि:शुल्क एवं अनिवार्य शिक्षा का मौलिक अधिकार।" },
  { icon: Shield, year: "2005", title: "सूचना का अधिकार (RTI)", desc: "सरकारी पारदर्शिता सुनिश्चित करने वाला क्रांतिकारी कानून।" },
  { icon: Leaf, year: "2005", title: "MNREGA (मनरेगा)", desc: "ग्रामीण भारत को 100 दिन के रोजगार की गारंटी — विश्व का सबसे बड़ा रोजगार कार्यक्रम।" },
];

export default function AchievementsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-3">India At 70+</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
              कांग्रेस की उपलब्धियां
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              स्वतंत्रता से लेकर मंगलयान तक — भारत की ऐतिहासिक उपलब्धियां कांग्रेस सरकारों के नेतृत्व में।
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ACHIEVEMENTS.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div key={i} className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary-accent/30 transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary-accent/10 rounded-full flex items-center justify-center group-hover:bg-primary-accent/20 transition-colors shrink-0">
                        <Icon className="w-6 h-6 text-primary-accent" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-primary-accent">{a.year}</span>
                        <h3 className="text-lg font-bold text-white">{a.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
