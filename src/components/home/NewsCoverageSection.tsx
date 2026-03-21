import { SectionHeader } from "../ui/SectionHeader";
import { NewsCard } from "../news/NewsCard";
import { Button } from "../ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Placeholder data - will be replaced by RSS fetch
const NEWS_DATA = [
  {
    id: "n-1",
    title: "Congress prepares ground strategy for Uttar Pradesh 2027 elections",
    source: "Dainik Jagran",
    publishedAt: "2025-12-01T08:00:00Z",
    url: "#",
    snippet: "Focusing on local leadership and community-specific issues across UP constituencies, including Moradabad...",
  },
  {
    id: "n-2",
    title: "INDIA Alliance joint statement on regional development",
    source: "NDTV India",
    publishedAt: "2025-11-20T12:00:00Z",
    url: "#",
    snippet: "Leaders highlight the need for immediate infrastructural upgrades and job security for artisan communities.",
  },
  {
    id: "n-3",
    title: "Brass city artisans demand better working conditions",
    source: "Amar Ujala",
    publishedAt: "2025-10-25T09:30:00Z",
    url: "#",
    snippet: "Local leaders, including former INC district president Bijender Yadav, express solidarity with the brass workers.",
  }
];

export function NewsCoverageSection() {
  return (
    <section className="bg-off-white py-24">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="In the News" 
          subtitle="Coverage from Amar Ujala, Dainik Jagran, NDTV, and major outlets."
          isDark={false}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full">
            <Link href="/news" className="flex items-center gap-2">
              View Media Hub <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
