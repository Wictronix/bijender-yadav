import type { Metadata } from "next";
import { Inter, Hind, Mukta } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const hind = Hind({
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
  subsets: ["devanagari", "latin"],
  display: "swap",
});

const mukta = Mukta({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bijender Yadav | Indian National Congress | Moradabad",
  description: "बिजेंदर यादव — मुरादाबाद के कांग्रेस प्रत्याशी। मुरादाबाद की आवाज़, INDIA गठबंधन का साथ। 2027 UP चुनाव।",
  openGraph: {
    title: "Bijender Yadav — Moradabad ka Apna Neta",
    description: "बिजेंदर यादव — मुरादाबाद के कांग्रेस प्रत्याशी। मुरादाबाद की आवाज़, INDIA गठबंधन का साथ।",
    siteName: "Bijender Yadav Official",
    locale: "hi_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bijender Yadav | Moradabad",
    description: "मुरादाबाद की आवाज़, INDIA गठबंधन का साथ।",
  },
};

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${hind.variable} ${mukta.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground flex flex-col antialiased" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
