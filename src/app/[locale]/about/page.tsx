import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { PersonalStory } from "@/components/about/PersonalStory";
import { ValuesSection } from "@/components/about/ValuesSection";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { TimelineSection } from "@/components/about/TimelineSection";
import { WikipediaStrip } from "@/components/home/WikipediaStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bijender Yadav | Indian National Congress",
  description: "Learn about Bijender Yadav's journey from the roots of Moradabad to becoming a dedicated Congress leader representing the voice of the people.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20">
        <AboutHero />
        <PersonalStory />
        <ValuesSection />
        <LeadershipSection />
        <TimelineSection />
        <WikipediaStrip />
      </main>
      <Footer />
    </>
  );
}
