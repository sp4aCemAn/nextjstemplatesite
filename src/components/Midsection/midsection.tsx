"use client";

import React, { useState } from 'react';
import ArticleContent from '@/components/article/ArticleContent';

// Unified Interface
interface FlatCardProps {
  title: string;
  preview: string;
  paragraphs: string | string[];
  className?: string; // Added for extra flexibility
}

const FlatCard = ({ title, preview, paragraphs, className = "" }: FlatCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`flex flex-col bg-white border border-gray-200 rounded-sm w-full ${className}`}>
      {/* Header Button: 
        - Removed hover backgrounds on desktop for a cleaner editorial look.
        - Added 'group' to handle icon animation on hover.
      */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        className="group w-full text-left p-6 md:p-8 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 md:pointer-events-none"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight leading-snug">
              {title}
            </h3>
            <p className="text-gray-500 mt-3 text-lg leading-relaxed">
              {preview}
            </p>
          </div>

          {/* Icon: 
            - Simplified to a standard size.
            - Uses pure black for high contrast (Flat principle).
          */}
          <div className="md:hidden ml-4 mt-1 flex-shrink-0">
            <svg
              className={`w-6 h-6 text-gray-900 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Content Area:
        - Used border-t instead of <hr> for structural separation.
      */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden
          ${isExpanded ? 'max-h-[1500px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 border-none'} 
          md:max-h-none md:opacity-100 md:border-t md:border-gray-100`}
      >
        <div className="p-6 md:p-8 pt-4 md:pt-8 text-gray-800">
          <ArticleContent content={paragraphs} />
        </div>
      </div>
    </div>
  );
};

export interface MidsectionProps {
  title1: string;
  preview1: string;
  paragraphs1: string | string[];
  title2: string;
  preview2: string;
  paragraphs2: string | string[];
  title3: string;
  preview3: string;
  paragraphs3: string | string[];
}

export default function Midsection({
  title1,
  preview1,
  paragraphs1,
  title2,
  preview2,
  paragraphs2,
  title3,
  preview3,
  paragraphs3,
}: MidsectionProps) {
  return (
    <div className="my-24 md:my-48">
      {/* Layout:
        - Added strict grid alignment logic (using Flex here per original, but cleaned up).
        - Consistent gap spacing.
      */}
      <section className="container mx-auto px-6 flex flex-col gap-8">

        {/* Top Feature Card */}
        <div className="w-full">
          <FlatCard
            title={title3}
            preview={preview3}
            paragraphs={paragraphs3}
          />
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <FlatCard
            title={title1}
            preview={preview1}
            paragraphs={paragraphs1}
            className="flex-1"
          />

          <FlatCard
            title={title2}
            preview={preview2}
            paragraphs={paragraphs2}
            className="flex-1"
          />
        </div>

      </section>
    </div>
  );
}
