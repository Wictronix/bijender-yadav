import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Events | Bijender Yadav",
  description: "Join Bijender Yadav at upcoming campaign trails, rallies, and public meetings.",
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-24 relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6">
              Campaign Events
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Meet Bijender Yadav. See where he is traveling next and join the dialogue for Moradabad's future.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl space-y-8">
             <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start group transition-all hover:bg-surface-bright hover:shadow-2xl hover:border-primary-accent/30">
                <div className="flex flex-col items-center justify-center bg-primary-container text-white rounded-xl w-32 h-32 shrink-0 border border-white/10 group-hover:bg-primary-accent transition-colors">
                  <span className="text-sm font-bold uppercase tracking-widest text-primary-fixed-dim group-hover:text-white/80">Jan</span>
                  <span className="text-4xl font-extrabold">26</span>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <span className="text-xs font-bold text-primary-accent uppercase tracking-widest mb-2 block">Public Rally</span>
                  <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Republic Day Padyatra</h2>
                  <p className="text-white/60 mb-4">A march honoring our constitutional values alongside grassroots workers from Civil Lines to Gandhi Park.</p>
                  <p className="text-sm text-white/40">10:00 AM • Gandhi Park, Moradabad</p>
                </div>
             </div>

             <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start group transition-all hover:bg-surface-bright hover:shadow-2xl hover:border-primary-accent/30">
                <div className="flex flex-col items-center justify-center bg-primary-container text-white rounded-xl w-32 h-32 shrink-0 border border-white/10 group-hover:bg-primary-accent transition-colors">
                  <span className="text-sm font-bold uppercase tracking-widest text-primary-fixed-dim group-hover:text-white/80">Feb</span>
                  <span className="text-4xl font-extrabold">05</span>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <span className="text-xs font-bold text-primary-accent uppercase tracking-widest mb-2 block">Townhall</span>
                  <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Youth Dialogue 2026</h2>
                  <p className="text-white/60 mb-4">An open interaction with university students to discuss employment strategies and the future of the brass industry.</p>
                  <p className="text-sm text-white/40">04:00 PM • Hindu College Auditorium</p>
                </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
