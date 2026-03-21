"use client";

import { useState } from "react";
import { Video, Play } from "lucide-react";
import Image from "next/image";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Extracting video ID from https://youtu.be/f3s6VHlMbqI
  const videoId = "f3s6VHlMbqI";

  return (
    <section className="bg-secondary py-24 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-accent/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-end mb-12">
          <div className="flex flex-col gap-3 max-w-[700px]">
            <div className="flex items-center gap-2 text-primary-accent font-semibold tracking-wider uppercase text-sm">
              <Video className="w-4 h-4" />
              <span>Bijender Bolte Hain</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
              Bijender Speaks
            </h2>
            <p className="text-lg text-white/70">
              Straight talk for the people of Moradabad — his vision, his answers, and his commitment to our city.
            </p>
          </div>
        </div>

        <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-surface">
          {!isPlaying ? (
            <button 
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full flex items-center justify-center outline-none focus-visible:ring-4 focus-visible:ring-primary-accent"
              aria-label="Play video"
            >
              <Image 
                src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Video thumbnail"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
              
              <div className="relative z-10 w-20 h-20 bg-primary-accent rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(229,57,53,0.6)] group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white fill-current ml-1" />
              </div>
            </button>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}
