import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickActionStrip } from "@/components/home/QuickActionStrip";
import { InFocusSection } from "@/components/home/InFocusSection";
import { ManifestoStrip } from "@/components/home/ManifestoStrip";
import { VideoSection } from "@/components/home/VideoSection";
import { IssuesSection } from "@/components/home/IssuesSection";
import { ProsperityStats } from "@/components/home/ProsperityStats";
import { AchievementsCarousel } from "@/components/home/AchievementsCarousel";
import { CongressHistoryStrip } from "@/components/home/CongressHistoryStrip";
import { RahulGandhiSpeaks } from "@/components/home/RahulGandhiSpeaks";
import { NewsCoverageSection } from "@/components/home/NewsCoverageSection";
import { WikipediaStrip } from "@/components/home/WikipediaStrip";
import { AllianceBanner } from "@/components/home/AllianceBanner";
import { DonateSection } from "@/components/home/DonateSection";
import { JoinSection } from "@/components/home/JoinSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <QuickActionStrip />
        <InFocusSection />
        <ManifestoStrip />
        <VideoSection />
        <IssuesSection />
        <ProsperityStats />
        <AchievementsCarousel />
        <CongressHistoryStrip />
        <RahulGandhiSpeaks />
        <NewsCoverageSection />
        <WikipediaStrip />
        <AllianceBanner />
        <DonateSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
