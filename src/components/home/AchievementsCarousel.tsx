"use client";

import { Link } from "@/i18n/routing";
import { ArrowRight, Rocket, Ship, Stethoscope, Landmark, Smartphone, Award } from "lucide-react";

const ACHIEVEMENTS = [
  { icon: Rocket, year: "2013", title: "मंगलयान", desc: "भारत पहली बार में मंगल ग्रह की कक्षा में पहुंचने वाला पहला देश बना।" },
  { icon: Ship, year: "2013", title: "INS विक्रांत", desc: "भारत में निर्मित पहला विमानवाहक युद्धपोत लॉन्च किया गया।" },
  { icon: Stethoscope, year: "2014", title: "पोलियो मुक्त भारत", desc: "WHO ने भारत को पोलियो मुक्त घोषित किया।" },
  { icon: Landmark, year: "2013", title: "भारतीय महिला बैंक", desc: "भारत का पहला सर्व-महिला वाणिज्यिक बैंक शुरू हुआ।" },
  { icon: Smartphone, year: "2010", title: "आधार", desc: "दुनिया की सबसे बड़ी बायोमेट्रिक पहचान प्रणाली।" },
  { icon: Award, year: "2011", title: "विवेक एक्सप्रेस", desc: "भारत की सबसे लंबी रेलगाड़ी (4286 km) चालू हुई।" },
];

export function AchievementsCarousel() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-3">कांग्रेस की उपलब्धियां</p>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white leading-tight">
              भारत को दिशा देने वाली <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-orange-400">उपलब्धियां</span>
            </h2>
          </div>
          <Link href="/achievements" className="text-primary-accent font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all shrink-0">
            सभी देखें <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <div key={i} className="min-w-[300px] md:min-w-[340px] snap-start bg-surface-bright border border-white/5 rounded-2xl p-8 hover:border-primary-accent/30 transition-all group shrink-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-accent/10 rounded-full flex items-center justify-center group-hover:bg-primary-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary-accent" />
                  </div>
                  <span className="text-sm font-bold text-primary-accent">{a.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{a.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
