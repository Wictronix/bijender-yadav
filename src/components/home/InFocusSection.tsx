import { SectionHeader } from "../ui/SectionHeader";
import { NewsCard } from "../news/NewsCard";

// Using placeholder data until RSS is wired up
const IN_FOCUS_DATA = [
  {
    id: "if-1",
    title: "Bijender Yadav addresses traders' concerns at Moradabad vegetable market",
    source: "Hindustan Times",
    publishedAt: "2025-08-14T10:00:00Z",
    url: "#",
    snippet: "Standing with the local traders' community, former Congress district president Bijender Yadav raised his voice against recent harassment issues...",
    isBreaking: true,
  },
  {
    id: "if-2",
    title: "Congress leaders plan 2027 UP Legislative Assembly strategy for Moradabad",
    source: "Local News",
    publishedAt: "2025-10-10T14:30:00Z",
    url: "#",
    snippet: "Discussions underway for the upcoming 2027 elections. The INC aims to strengthen grassroots connect in the brass city.",
  },
  {
    id: "if-3",
    title: "Grassroots mobilization drive announced in rural Moradabad",
    source: "Press Release",
    publishedAt: "2025-11-05T09:15:00Z",
    url: "#",
    snippet: "A massive campaign to connect with farmers and rural youth is set to launch next month across the constituency.",
  }
];

export function InFocusSection() {
  return (
    <section className="bg-off-white py-24 relative">
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeader 
          title="In Focus" 
          subtitle="Latest updates, activities, and statements from Bijender Yadav."
          isDark={false}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IN_FOCUS_DATA.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
