import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Updates | Bijender Yadav",
  description: "Read the latest thoughts, policy updates, and campaign stories from Bijender Yadav.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-24 relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6">
              Campaign Blog
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Deep dives into our policies, stories from the ground, and thoughts on the future of Uttar Pradesh.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl text-center">
             <div className="bg-surface border border-white/5 rounded-3xl p-16 animate-pulse">
                <div className="w-20 h-20 bg-primary-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">📝</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">First Post Coming Soon</h2>
                <p className="text-white/50">Stay tuned for in-depth articles on Moradabad's local economy, youth employment, and our vision 2027.</p>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
