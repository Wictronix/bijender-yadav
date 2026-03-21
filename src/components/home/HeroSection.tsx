"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "../ui/Button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative min-h-[90vh] flex items-center bg-background overflow-hidden selection:bg-primary-accent/30">
      {/* Background with diagonal texture/gradient */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-primary-container via-background to-background opacity-80"
      />
      
      {/* Abstract light spill */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-fixed/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="col-span-1 lg:col-span-12 xl:col-span-7 flex flex-col gap-8 order-2 lg:order-1 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 bg-surface-container-low/50 w-fit pl-2 pr-6 py-2 rounded-full border border-white/5 backdrop-blur-md"
          >
            <Image 
              src="/logo_footer.jpg" 
              alt="INC Logo" 
              width={32} 
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-semibold tracking-widest text-primary-fixed-dim uppercase">
              Indian National Congress
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              {t("title1")}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                — {t("title2")}
              </span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              {t("subtitle")} - {t("description")}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <Button size="lg" className="rounded-full px-8 text-base shadow-[0_0_40px_-10px_rgba(229,57,53,0.5)]">
               <Link href="/join">{t("cta_join")} ➔</Link>
            </Button>
            <Button size="lg" variant="glass" className="rounded-full px-8 text-base group">
              <Link href="/news" className="flex items-center gap-2">
                <Play className="w-4 h-4 text-primary-fixed-dim group-hover:text-primary transition-colors fill-current" />
                {t("cta_vision")}
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <div className="col-span-1 lg:col-span-12 xl:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[6px] border-white/10 shadow-2xl relative z-10 bg-surface">
              <Image
                src="/logo.jpg"
                alt="Bijender Yadav"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
            </div>
            
            {/* Ambient shadow behind portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#00063b]/40 rounded-full blur-[60px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
