import React from 'react';

export interface ArticleSummaryProps {
  summary: string;
}

export default function ArticleSummary({ summary }: ArticleSummaryProps) {
  if (!summary) return null;

  return (
    <div className="w-full max-w-3xl mx-auto mb-12 px-4 md:px-0">
      <div className="relative bg-slate-50 rounded-2xl p-6 md:p-10 border border-slate-100 shadow-sm overflow-hidden">
        {/* Decorative Quote Icon Background */}
        <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-indigo-100 pointer-events-none">

        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-4 items-start">
          {/* Vertical Accent Line */}
          <div className="hidden md:block w-1 h-full min-h-[4rem] bg-indigo-500 rounded-full opacity-80" />

          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium italic md:not-italic">
            <span className="md:hidden text-indigo-500 font-bold text-2xl mr-2">"</span>
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
