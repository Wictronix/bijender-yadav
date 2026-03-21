import { SectionHeader } from "../ui/SectionHeader";
import Image from "next/image";

export function LeadershipSection() {
  return (
    <section className="bg-secondary py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <SectionHeader 
          title="Standing with the Leadership" 
          subtitle="A trusted partner in the vision of the Indian National Congress."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface border border-white/10 shadow-2xl">
            <Image
              src="/images/rahul_gandhi_and_bijender_yadav.jpg"
              alt="Bijender Yadav with Shri Rahul Gandhi"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-2">With Shri Rahul Gandhi</h3>
              <p className="text-white/80 text-sm max-w-sm">
                Discussing the roadmap for youth employment and strengthening democratic institutions in Uttar Pradesh.
              </p>
            </div>
          </div>

          <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface border border-white/10 shadow-2xl">
            <Image
              src="/images/priyanka-gandhi.jpg"
              alt="Bijender Yadav with Smt. Priyanka Gandhi"
              fill
              className="object-cover flex-start transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-2">With Smt. Priyanka Gandhi</h3>
              <p className="text-white/80 text-sm max-w-sm">
                Strategizing grassroots empowerment and women's safety initiatives for the upcoming assembly elections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
