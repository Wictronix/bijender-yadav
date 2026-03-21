import { SectionHeader } from "../ui/SectionHeader";
import { IssueCard } from "./IssueCard";
import { Briefcase, BookOpen, HeartPulse, Tractor, ShieldAlert, Cone } from "lucide-react";

const ISSUES = [
  {
    title: "Employment",
    description: "Moradabad's brass industry workers and youth deserve stable livelihoods, not just empty promises. We fight for job creation and fair wages.",
    icon: Briefcase,
    slug: "employment"
  },
  {
    title: "Education",
    description: "Every child has the right to quality education. We demand better infrastructure, qualified teachers, and modernized government schools.",
    icon: BookOpen,
    slug: "education"
  },
  {
    title: "Healthcare",
    description: "Our district hospitals need urgent upgrades. Accessible, affordable, and high-quality healthcare is a fundamental right for every family.",
    icon: HeartPulse,
    slug: "healthcare"
  },
  {
    title: "Farmers",
    description: "Standing with the backbone of our economy. Local farmers need fair price guarantees (MSP), support against crop damage, and respect.",
    icon: Tractor,
    slug: "farmers"
  },
  {
    title: "Women's Safety",
    description: "Ensuring dignity and security for every woman. We need safer public spaces, better law enforcement response, and zero tolerance for harassment.",
    icon: ShieldAlert,
    slug: "womens-safety"
  },
  {
    title: "Infrastructure",
    description: "Roads, uninterrupted power, and clean water are basic necessities that Moradabad is still waiting for. It's time to build a modern city.",
    icon: Cone,
    slug: "infrastructure"
  }
];

export function IssuesSection() {
  return (
    <section className="bg-primary-container relative py-24">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeader 
          title="Moradabad's Core Issues" 
          subtitle="What we stand for—and why it matters. The blueprint for progress."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {ISSUES.map((issue) => (
            <IssueCard 
              key={issue.slug}
              title={issue.title}
              description={issue.description}
              icon={issue.icon}
              link={`/issues#${issue.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
