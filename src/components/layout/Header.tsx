"use client";

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Button } from "../ui/Button";
import { ChevronDown, Heart } from "lucide-react";
import { useState } from "react";

function NavDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors">
        {label} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50 min-w-[200px]">
          <div className="bg-surface-container-lowest/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 flex flex-col">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="px-5 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors block">
      {children}
    </Link>
  );
}

export function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const currentPathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-variant bg-primary/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shrink-0">
            <Image
              src="/logo_footer.jpg"
              alt="INC Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl text-white tracking-tight leading-none">
              Bijender Yadav
            </span>
            <span className="text-xs text-white/80 mt-1 uppercase tracking-wider font-semibold">
              Moradabad
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5">
          <Link href="/" className="text-white/90 hover:text-white text-sm font-medium transition-colors">{t("home")}</Link>
          <Link href="/about" className="text-white/90 hover:text-white text-sm font-medium transition-colors">{t("about")}</Link>
          <Link href="/issues" className="text-white/90 hover:text-white text-sm font-medium transition-colors">{t("issues")}</Link>
          <Link href="/moradabad" className="text-white/90 hover:text-white text-sm font-medium transition-colors">{t("moradabad")}</Link>

          <NavDropdown label={t("party")}>
            <DropdownLink href="/manifesto">{t("manifesto")}</DropdownLink>
            <DropdownLink href="/history">{t("history")}</DropdownLink>
            <DropdownLink href="/achievements">{t("achievements")}</DropdownLink>
            <DropdownLink href="/inspiration">{t("inspiration")}</DropdownLink>
            <DropdownLink href="/fact-check">{t("fact-check")}</DropdownLink>
            <DropdownLink href="/alliance">{t("alliance")}</DropdownLink>
          </NavDropdown>

          <NavDropdown label={t("media")}>
            <DropdownLink href="/news">{t("news")}</DropdownLink>
            <DropdownLink href="/videos">{t("videos")}</DropdownLink>
            <DropdownLink href="/gallery">{t("gallery")}</DropdownLink>
            <DropdownLink href="/press-releases">{t("press-releases")}</DropdownLink>
            <DropdownLink href="/blog">{t("blog")}</DropdownLink>
          </NavDropdown>

          <Link href="/events" className="text-white/90 hover:text-white text-sm font-medium transition-colors">{t("events")}</Link>

          <div className="flex items-center gap-2 border-l border-white/20 pl-4 ml-1">
            <Link
              href={currentPathname}
              locale="hi"
              className={`text-sm font-bold ${locale === 'hi' ? 'text-primary-accent underline underline-offset-4' : 'text-white/60 hover:text-white'}`}
            >
              HN
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href={currentPathname}
              locale="en"
              className={`text-sm font-bold ${locale === 'en' ? 'text-primary-accent underline underline-offset-4' : 'text-white/60 hover:text-white'}`}
            >
              EN
            </Link>
          </div>

          <Button asChild variant="default" className="bg-primary-accent hover:bg-primary-accent/90 text-white rounded-full ml-1 gap-2" size="sm">
            <Link href="/donate">
              <Heart className="w-4 h-4 fill-white" /> {t("donate")}
            </Link>
          </Button>
          <Button asChild variant="default" className="bg-white/10 hover:bg-white/20 text-white rounded-full" size="sm">
            <Link href="/join">{t("join")}</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className={`w-6 h-[2px] bg-white rounded-full transition-transform ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <div className={`w-6 h-[2px] bg-white rounded-full transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-[2px] bg-white rounded-full transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
            <Link href="/" className="py-3 text-white font-medium" onClick={() => setMobileOpen(false)}>{t("home")}</Link>
            <Link href="/about" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("about")}</Link>
            <Link href="/issues" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("issues")}</Link>
            <Link href="/moradabad" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("moradabad")}</Link>

            <div className="border-t border-white/5 my-2" />
            <p className="text-xs text-white/30 uppercase tracking-widest font-bold py-1">{t("party")}</p>
            <Link href="/manifesto" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("manifesto")}</Link>
            <Link href="/history" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("history")}</Link>
            <Link href="/achievements" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("achievements")}</Link>
            <Link href="/inspiration" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("inspiration")}</Link>
            <Link href="/fact-check" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("fact-check")}</Link>
            <Link href="/alliance" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("alliance")}</Link>

            <div className="border-t border-white/5 my-2" />
            <p className="text-xs text-white/30 uppercase tracking-widest font-bold py-1">{t("media")}</p>
            <Link href="/news" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("news")}</Link>
            <Link href="/videos" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("videos")}</Link>
            <Link href="/gallery" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("gallery")}</Link>
            <Link href="/press-releases" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("press-releases")}</Link>
            <Link href="/blog" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("blog")}</Link>

            <div className="border-t border-white/5 my-2" />
            <Link href="/events" className="py-3 text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>{t("events")}</Link>

            <div className="border-t border-white/5 my-2" />
            <div className="flex gap-3 pt-2">
              <Button asChild variant="default" className="flex-1 bg-primary-accent text-white rounded-full gap-2">
                <Link href="/donate" onClick={() => setMobileOpen(false)}>
                  <Heart className="w-4 h-4 fill-white" /> {t("donate")}
                </Link>
              </Button>
              <Button asChild variant="default" className="flex-1 bg-white/10 text-white rounded-full">
                <Link href="/join" onClick={() => setMobileOpen(false)}>{t("join")}</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Link href={currentPathname} locale="hi" className={`text-sm font-bold ${locale === 'hi' ? 'text-primary-accent' : 'text-white/50'}`} onClick={() => setMobileOpen(false)}>
                हिन्दी
              </Link>
              <span className="text-white/20">|</span>
              <Link href={currentPathname} locale="en" className={`text-sm font-bold ${locale === 'en' ? 'text-primary-accent' : 'text-white/50'}`} onClick={() => setMobileOpen(false)}>
                English
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
