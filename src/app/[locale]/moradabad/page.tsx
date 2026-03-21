import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Moradabad | Bijender Yadav",
  description: "The history, culture, and future of the Brass City, Moradabad.",
};

export default function MoradabadPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-[url('/public/images/about.jpg')] bg-cover bg-center py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              The Heart of <span className="text-primary-accent">Moradabad</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Known globally as the Brass City (Pital Nagri), Moradabad is a city built on the hard work of its artisans, farmers, and traders.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl text-white/80 space-y-12 text-lg leading-relaxed">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">Our Heritage: The Brass Industry</h2>
              <p className="mb-4">Moradabad's identity is inextricably linked to its brass handicrafts industry, which accounts for over 40% of India's total brass exports. Millions of livelihoods depend on the rhythmic beating of metal in the karkhanas (workshops) scattered across the city.</p>
              <p>However, recent economic policies and lack of infrastructure support have pushed this thriving industry to the brink. Bijender Yadav's primary mission is to revitalize this sector, ensuring artisans receive fair wages, better working conditions, and direct access to international markets without middlemen.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
               <div className="bg-surface border border-white/10 rounded-2xl p-8">
                  <h3 className="font-bold text-2xl text-white mb-2">1.5 Million+</h3>
                  <p className="text-sm text-white/50 uppercase tracking-wider">People dependent on the brass trade</p>
               </div>
               <div className="bg-surface border border-white/10 rounded-2xl p-8">
                  <h3 className="font-bold text-2xl text-white mb-2">₹10,000 Crore</h3>
                  <p className="text-sm text-white/50 uppercase tracking-wider">Annual Export Value</p>
               </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">Demographics & Unity</h2>
              <p className="mb-4">Moradabad is a vibrant tapestry of cultures and communities. The strength of this constituency lies in its Ganga-Jamuni tehzeeb—a shared cultural heritage that emphasizes unity in diversity.</p>
              <p className="mb-4">The Indian National Congress, along with the INDIA Alliance, stands firmly on the principle that the progress of Moradabad requires taking every community along. Divisive politics have only stalled development, and Bijender Yadav is fighting to restore the focus on real issues: education, health, and jobs.</p>
            </div>

            <div className="p-8 border-l-4 border-primary-accent bg-surface rounded-r-2xl italic text-xl">
              "Moradabad isn't just a constituency to me; it is my home, my family, and my responsibility. When the furnaces of the brass city burn bright, the whole nation shines." 
              <span className="block mt-4 text-base font-bold not-italic text-primary-accent">— Bijender Yadav</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
