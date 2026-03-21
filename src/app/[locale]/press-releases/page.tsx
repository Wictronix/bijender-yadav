import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { FileText, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Press Releases | Bijender Yadav",
  description: "Official statements and press releases from the Bijender Yadav campaign.",
};

const RELEASES = [
  { id: 1, title: "Statement on Brass Industry Export Subsidies", date: "Jan 10, 2026", size: "1.2 MB PDF" },
  { id: 2, title: "Moradabad Youth Employment Manifesto Unveiled", date: "Feb 05, 2026", size: "2.4 MB PDF" },
  { id: 3, title: "Response to Infrastructure Delays in Civil Lines", date: "Feb 22, 2026", size: "0.8 MB PDF" },
];

export default function PressReleasesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
              Press Releases
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Official press statements and campaign documents.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl space-y-4">
             {RELEASES.map((release) => (
               <div key={release.id} className="bg-surface border border-white/5 p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-surface-bright transition-colors">
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-white/60" />
                     </div>
                     <div>
                        <div className="text-sm font-bold text-primary-accent mb-1">{release.date}</div>
                        <h3 className="text-lg font-bold text-white mb-1">{release.title}</h3>
                        <p className="text-sm text-white/40">{release.size}</p>
                     </div>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-bold transition-colors w-full md:w-auto justify-center">
                     <Download className="w-4 h-4" /> Download PDF
                  </button>
               </div>
             ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
