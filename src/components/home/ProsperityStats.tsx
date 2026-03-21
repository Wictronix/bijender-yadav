"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, TrendingUp, Users, GraduationCap, Banknote, HeartPulse } from "lucide-react";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-white tabular-nums">
      {prefix}{count.toLocaleString("en-IN")}{suffix}
    </div>
  );
}

const STATS = [
  { icon: Shield, value: 193407, prefix: "₹", suffix: " Cr", label: "रक्षा बजट (2012-13)", sub: "₹77,000 Cr से बढ़कर" },
  { icon: TrendingUp, value: 10, suffix: "%", label: "GDP वृद्धि दर", sub: "UPA काल में शिखर" },
  { icon: Users, value: 14, suffix: " Cr", label: "MNREGA रोजगार", sub: "ग्रामीण परिवारों को" },
  { icon: GraduationCap, value: 86, suffix: "%", label: "शिक्षा का अधिकार", sub: "6-14 वर्ष बच्चों को नि:शुल्क" },
  { icon: Banknote, value: 46, suffix: " Cr", label: "जन-धन खाते", sub: "वित्तीय समावेशन" },
  { icon: HeartPulse, value: 50, suffix: " Cr", label: "स्वास्थ्य बीमा", sub: "RSBY लाभार्थी" },
];

export function ProsperityStats() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-surface relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary-accent font-bold text-sm uppercase tracking-widest mb-3">UPA शासनकाल</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white leading-tight">
            कांग्रेस सरकार की <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-orange-400">समृद्धि</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">कांग्रेस नेतृत्व वाली UPA सरकार ने भारत को विकास के नए मुकाम तक पहुंचाया।</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-surface border border-white/5 rounded-2xl p-8 text-center hover:border-white/10 transition-all group">
                <div className="w-14 h-14 bg-primary-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary-accent" />
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
                <p className="font-bold text-white mt-3">{stat.label}</p>
                <p className="text-white/40 text-sm mt-1">{stat.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
