"use client";

import { useState } from "react";
import { NewsCard } from "./NewsCard";
import { Button } from "../ui/Button";

interface NewsItem {
  id: string;
  title: string;
  source: string;
  publishedAt: string;
  url: string;
  snippet?: string;
  isBreaking?: boolean;
}

interface NewsGridProps {
  initialNews: NewsItem[];
}

export function NewsGrid({ initialNews }: NewsGridProps) {
  const [activeTab, setActiveTab] = useState<"news" | "videos" | "gallery">("news");

  // In a real app, this would handle pagination/infinite scroll
  const visibleNews = initialNews.slice(0, 9);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <Button 
          variant={activeTab === "news" ? "default" : "outline"}
          onClick={() => setActiveTab("news")}
          className={`rounded-full px-8 ${activeTab !== "news" ? "text-slate-400 hover:text-white border-white/20 hover:bg-white/5" : ""}`}
        >
          Latest News
        </Button>
        <Button 
          variant={activeTab === "videos" ? "default" : "outline"}
          onClick={() => setActiveTab("videos")}
          className={`rounded-full px-8 ${activeTab !== "videos" ? "text-slate-400 hover:text-white border-white/20 hover:bg-white/5" : ""}`}
        >
          Speeches & Videos
        </Button>
        <Button 
          variant={activeTab === "gallery" ? "default" : "outline"}
          onClick={() => setActiveTab("gallery")}
          className={`rounded-full px-8 ${activeTab !== "gallery" ? "text-slate-400 hover:text-white border-white/20 hover:bg-white/5" : ""}`}
        >
          Photo Gallery
        </Button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeTab === "news" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleNews.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface rounded-2xl overflow-hidden border border-white/10 aspect-video flex items-center justify-center text-white/50">
              [YouTube Embed: Recent Speech]
            </div>
            <div className="bg-surface rounded-2xl overflow-hidden border border-white/10 aspect-video flex items-center justify-center text-white/50">
              [YouTube Embed: Interview]
            </div>
            <div className="bg-surface rounded-2xl overflow-hidden border border-white/10 aspect-video flex items-center justify-center text-white/50">
              [YouTube Embed: Rally]
            </div>
            <div className="bg-surface rounded-2xl overflow-hidden border border-white/10 aspect-video flex items-center justify-center text-white/50">
              [YouTube Embed: Campaign Ad]
            </div>
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
            <div className="bg-surface rounded-xl border border-white/10 col-span-2 row-span-2 flex items-center justify-center text-white/50">
              [Gallery Photo 1]
            </div>
            <div className="bg-surface rounded-xl border border-white/10 flex items-center justify-center text-white/50">
              [Gallery Photo 2]
            </div>
            <div className="bg-surface rounded-xl border border-white/10 flex items-center justify-center text-white/50">
              [Gallery Photo 3]
            </div>
            <div className="bg-surface rounded-xl border border-white/10 flex items-center justify-center text-white/50">
              [Gallery Photo 4]
            </div>
            <div className="bg-surface rounded-xl border border-white/10 col-span-2 flex items-center justify-center text-white/50">
              [Gallery Photo 5]
            </div>
          </div>
        )}
      </div>

      {activeTab === "news" && initialNews.length > 9 && (
        <div className="mt-16 text-center">
          <Button variant="outline" className="text-white border-white/20 hover:bg-white border-2 hover:text-primary rounded-full px-12">
            Load More Coverage
          </Button>
        </div>
      )}
    </div>
  );
}
