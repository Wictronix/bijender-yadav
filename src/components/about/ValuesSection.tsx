import { SectionHeader } from "../ui/SectionHeader";
import { Users, Scale, HeartHandshake, ShieldCheck, Zap, Globe2 } from "lucide-react";

const VALUES = [
  {
    title: "Democratic Action",
    description: "Believing that power belongs to the people, not corporations or autocrats. Fighting for strong democratic institutions.",
    icon: Users
  },
  {
    title: "Secular Fabric",
    description: "Moradabad's strength lies in its diversity. We stand firmly against the politics of division and hate.",
    icon: Globe2
  },
  {
    title: "Inclusive Growth",
    description: "Economic development must touch everyone, from the brass artisan to the IT professional, leaving no one behind.",
    icon: HeartHandshake
  },
  {
    title: "Absolute Equality",
    description: "Equal rights, equal opportunities, and equal protection under the law for every caste, creed, and gender.",
    icon: Scale
  },
  {
    title: "Unshakable Integrity",
    description: "Public office is a public trust. Maintaining transparency, accountability, and honesty in all dealings.",
    icon: ShieldCheck
  },
  {
    title: "Progressive Vision",
    description: "Looking forward to modernization, better infrastructure, and technological advancement for our city's future.",
    icon: Zap
  }
];

export function ValuesSection() {
  return (
    <section className="bg-primary-container py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeader 
          title="Core Values" 
          subtitle="The unwavering principles that guide my politics and the Congress vision."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value) => (
            <div key={value.title} className="bg-secondary p-8 rounded-2xl border border-white/5 hover:border-primary-accent/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 group-hover:bg-primary-accent transition-colors">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
