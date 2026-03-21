import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "कांग्रेस का इतिहास | Bijender Yadav",
  description: "1885 से आज तक — भारतीय राष्ट्रीय कांग्रेस का गौरवशाली इतिहास।",
};

const DECADES = [
  { period: "1885–1905", title: "स्थापना एवं प्रारंभिक काल", events: ["1885 — ए.ओ. ह्यूम द्वारा कांग्रेस की स्थापना, बॉम्बे", "1886 — कलकत्ता अधिवेशन, दादाभाई नौरोजी", "1905 — बंगाल विभाजन का विरोध, स्वदेशी आंदोलन"] },
  { period: "1905–1920", title: "उग्रवाद और होम रूल", events: ["1907 — सूरत विभाजन: नरम दल vs गरम दल", "1916 — लखनऊ समझौता", "1919 — जलियांवाला बाग हत्याकांड"] },
  { period: "1920–1947", title: "स्वतंत्रता संग्राम", events: ["1920 — असहयोग आंदोलन (गांधीजी)", "1930 — नमक सत्याग्रह / दांडी मार्च", "1942 — भारत छोड़ो आंदोलन", "1947 — भारत की स्वतंत्रता"] },
  { period: "1947–1964", title: "नेहरू काल — आधुनिक भारत का निर्माण", events: ["1950 — गणतंत्र की स्थापना, संविधान लागू", "1951 — प्रथम पंचवर्षीय योजना", "1956 — IIT की स्थापना", "1962 — भारत-चीन युद्ध"] },
  { period: "1964–1984", title: "इंदिरा गांधी काल", events: ["1969 — बैंकों का राष्ट्रीयकरण", "1971 — गरीबी हटाओ, बांग्लादेश मुक्ति", "1974 — पोखरण-I परमाणु परीक्षण", "1983 — INSAT-1B, अंतरिक्ष कार्यक्रम"] },
  { period: "1984–2004", title: "राजीव गांधी और उदारीकरण", events: ["1986 — कम्प्यूटर क्रांति, शिक्षा नीति", "1991 — आर्थिक उदारीकरण (मनमोहन सिंह)", "1998 — पोखरण-II"] },
  { period: "2004–2014", title: "UPA शासनकाल — समृद्धि का दशक", events: ["2005 — RTI अधिनियम, MNREGA", "2009 — शिक्षा का अधिकार (RTE)", "2013 — मंगलयान, INS विक्रांत", "2014 — भारत पोलियो मुक्त"] },
  { period: "2014–आज", title: "विपक्ष में मजबूत आवाज़", events: ["2019 — न्याय योजना प्रस्तावित", "2024 — INDIA गठबंधन का गठन", "2024 — राहुल गांधी नेता प्रतिपक्ष (लोकसभा)"] },
];

export default function HistoryPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-3">139 वर्ष</p>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
              कांग्रेस का गौरवशाली इतिहास
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              1885 से लेकर आज तक — भारतीय राष्ट्रीय कांग्रेस ने देश को दिशा दी है।
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="relative border-l-2 border-primary-accent/30 ml-4 md:ml-8 space-y-16">
              {DECADES.map((d, i) => (
                <div key={i} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary-accent border-4 border-background" />
                  <span className="text-primary-accent font-extrabold text-lg">{d.period}</span>
                  <h2 className="font-display text-2xl font-bold text-white mt-1 mb-4">{d.title}</h2>
                  <ul className="space-y-2">
                    {d.events.map((e, j) => (
                      <li key={j} className="text-white/60 text-sm leading-relaxed flex gap-3">
                        <span className="text-primary-accent mt-1 shrink-0">●</span>
                        {e}
                      </li>
                    ))}
                  </ul>
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
