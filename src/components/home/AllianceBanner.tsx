"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function AllianceBanner() {
  const t = useTranslations("Alliance");

  return (
    <section className="bg-primary-container py-12 relative overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 opacity-10 flex space-x-24 md:space-x-48 justify-center items-center">
        <Image src="/logo-white.png" alt="watermark" width={120} height={120} className="opacity-50 blur-sm" />
        <Image src="/logo-white.png" alt="watermark" width={120} height={120} className="opacity-50 blur-sm" />
        <Image src="/logo-white.png" alt="watermark" width={120} height={120} className="opacity-50 blur-sm hidden md:block" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="bg-white p-4 rounded-full shadow-lg border border-white/20">
          <Image
            src="/logo.jpg"
            alt="INC Symbol"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>
        <div className="text-center md:text-left text-white max-w-xl">
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            {t("title")}
          </h2>
          <p className="text-xl font-semibold opacity-90 tracking-wide">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
