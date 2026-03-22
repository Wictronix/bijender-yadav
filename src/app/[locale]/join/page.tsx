"use client";

import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";

export default function JoinPage() {
  const t = useTranslations("JoinPage");
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-off-white min-h-screen">
        
        <section className="bg-primary-container relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="text-white flex flex-col justify-center">
              <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6">
                {t("title")}
              </h1>
              <p className="text-xl text-white/80 mb-12 max-w-lg">
                {t("subtitle")}
              </p>

              <div className="space-y-8 bg-surface/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="font-display text-2xl font-bold">{t("contact_title")}</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-accent/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t("hq_title")}</h4>
                    <p className="text-white/60">{t("hq_addr")}<br/>India - 244001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-accent/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t("phone_title")}</h4>
                    <p className="text-white/60">+91 [Volunteer coordination number]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-accent/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t("email_title")}</h4>
                    <p className="text-white/60">contact@bijenderyadav.in</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">{t("social_title")}</h4>
                  <div className="flex gap-3">
                    <a href="https://www.instagram.com/inc_bijender/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-accent hover:text-white transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com/Bijenderyadavcongress/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-accent hover:text-white transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 border border-slate-100 relative z-10 w-full min-h-[600px] flex flex-col">
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-2 px-2">{t("form_title")}</h2>
                <p className="text-slate-500 mb-6 px-2 text-sm">{t("form_subtitle")}</p>

                <div className="flex-grow w-full relative">
                  <iframe 
                    data-tally-src="https://tally.so/embed/3E1Z4G?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                    loading="lazy" 
                    width="100%" 
                    height="400" 
                    frameBorder="0" 
                    marginHeight={0} 
                    marginWidth={0} 
                    title="Bijender Yadav Volunteer Form"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-primary-accent rounded-2xl -translate-x-4 translate-y-4 -z-10" />
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
