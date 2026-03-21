import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Video Gallery | Bijender Yadav",
  description: "Watch latest speeches, interviews, and campaign videos of Bijender Yadav.",
};

const VIDEOS = [
  { id: "f3s6VHlMbqI", title: "Vision for Moradabad 2027", date: "Jan 15, 2026" },
  { id: "dQw4w9WgXcQ", title: "Public Address at Civil Lines", date: "Feb 02, 2026" }, // Placeholder IDs
  { id: "M7FIvfx5J10", title: "Interview on Local Issues", date: "Feb 10, 2026" },
  { id: "JGwWNGJdvx8", title: "Youth Townhall Highlight", date: "Feb 20, 2026" }
];

export default function VideosPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background min-h-screen">
        <section className="bg-primary-container py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">
              Video Gallery
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Speeches, townhalls, and deep dives into our vision for Moradabad.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {VIDEOS.map((video, idx) => (
                <div key={idx} className="bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all">
                   <div className="relative aspect-video bg-black group cursor-pointer">
                      {/* Standard YouTube thumbnail URL pattern */}
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        onError={(e) => {
                          // Fallback to hqdefault if maxres doesn't exist
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-16 h-16 bg-primary-accent/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(229,57,53,0.5)] group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                         </div>
                      </div>
                   </div>
                   <div className="p-6">
                      <div className="text-sm font-bold text-primary-accent mb-2">{video.date}</div>
                      <h3 className="text-xl font-bold text-white">{video.title}</h3>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
