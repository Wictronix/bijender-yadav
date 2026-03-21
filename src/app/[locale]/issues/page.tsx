import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IssueCard } from "@/components/home/IssueCard";
import { TrendingUp, GraduationCap, HeartPulse, Leaf, Shield, Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Key Issues | Bijender Yadav",
  description: "Detailed breakdown of the core issues Bijender Yadav is fighting for in Moradabad.",
};

export default function IssuesPage() {
  const issues = [
    {
      title: "Employment & Brass Industry",
      description: "Reviving Moradabad's traditional brass industry by providing subsidies, better export facilities, and skill development centers for the youth.",
      icon: TrendingUp
    },
    {
      title: "Quality Education",
      description: "Upgrading government schools, establishing new degree colleges, and ensuring affordable, high-quality education for every child in Moradabad.",
      icon: GraduationCap
    },
    {
      title: "Healthcare Infrastructure",
      description: "Building well-equipped multispecialty hospitals, ensuring medicine availability, and improving primary health centers across rural Moradabad.",
      icon: HeartPulse
    },
    {
      title: "Farmers' Welfare",
      description: "Ensuring timely payment for sugarcane farmers, better MSP implementation, and modern agricultural equipment availability.",
      icon: Leaf
    },
    {
      title: "Women's Empowerment",
      description: "Strict safety measures, women-focused skill training programs, and financial independence initiatives for the women of Moradabad.",
      icon: Shield
    },
    {
      title: "Urban Development & Roads",
      description: "Solving the traffic congestion, ensuring 24/7 clean water supply, and building sustainable drainage systems.",
      icon: Home
    }
  ];

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-24 relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-6">
              Core Issues
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The fight for a better Moradabad starts here. Explore our detailed manifesto and action plan for the constituency.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {issues.map((issue, index) => (
                <IssueCard key={index} {...issue} />
              ))}
            </div>
            
            <div className="mt-20 p-8 md:p-12 bg-surface rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/10 to-transparent mix-blend-overlay" />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl font-bold text-white mb-4">Have an issue in your locality?</h2>
                  <p className="text-white/70 mb-8">We are listening. Our team is dedicated to documenting every problem faced by the residents of Moradabad. Share your concerns directly with Bijender Yadav.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                   <h3 className="font-bold text-white mb-4">Report an Issue</h3>
                   <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white mb-4 placeholder:text-white/30" />
                   <textarea placeholder="Describe the problem..." rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white mb-4 placeholder:text-white/30"></textarea>
                   <button className="w-full bg-primary-accent text-white font-bold py-3 rounded-lg hover:bg-primary-accent/90 transition-colors">Submit Report</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
