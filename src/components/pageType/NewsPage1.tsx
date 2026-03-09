import React from 'react';
import NewsPanel from '@/components/subcomponents/NewsPanel';
import Image from 'next/image'
// 1. Define the shape of a single news item
export interface NewsItem {
  key: string;
  date: string;
  title: string;
  summary: string;
  linkHref: string;
}

// 2. Define the Page Props
// These fields will now appear in "Tab 2: Page Builder" so you can edit them.
interface NewsPageProps {
  pageTitle: string;     // <--- You can now edit this text in the TUI
  pageSubtitle: string;  // <--- You can now edit this text in the TUI
  pageImage: string;
  items: NewsItem[];     // <--- This list is managed automatically by the script
}

export default function NewsPage1({
  pageTitle,
  pageSubtitle,
  items,
  pageImage
}: NewsPageProps) {
  console.log("Current Image URL:", pageImage);
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header Section */}
      <div className="  relative w-full py-16 px-6 text-center border-b-2 border-brand-blue2 overflow-hidden">
        <Image
          src={pageImage}
          alt="Background header"
          fill
          className="object-cover object-center "
          priority // Optional: Use this if this is the top hero section (loads faster)
        />
        <div className='relative z-10'>
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-sm font-bold tracking-[0.2em] text-white uppercase bg-black rounded">
              {pageSubtitle || "Press Room"}
            </h2>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight bg-brand-blue mx-auto py-5 rounded">
              {pageTitle || "Announcements from the Transition"}
            </h1>
          </div>
        </div>
      </div>

      {/* 2. News Vertical Stack (Dynamic List) */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-8">

          {/* Automatically map over the list of articles */}
          {items && items.length > 0 ? (
            items.map((item) => (
              <NewsPanel
                key={item.key}
                date={item.date}
                title={item.title}
                summary={item.summary}
                linkHref={item.linkHref}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 italic">
              No news articles have been published yet.
            </p>
          )}

        </div>
      </div>
    </main>
  );
}
