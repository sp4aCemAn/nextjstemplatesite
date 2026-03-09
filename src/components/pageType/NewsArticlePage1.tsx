import React from 'react';
import Link from 'next/link';
import ArticleHeader from '@/components/article/ArticleHeader';
import ArticleContent from '@/components/article/ArticleContent';
import ArticleSummary from '@/components/article/ArticleSummary';

interface NewsArticlePageProps {
  articleTitle: string;
  publishDate: string;
  articleSummary: string;
  // FIX: Allow string OR string[] so GenPage data passes through
  articleContent: string | string[];
  backLinkText: string;
}

export default function NewsArticlePage1({
  articleTitle,
  publishDate,
  articleSummary,
  articleContent,
  backLinkText,
}: NewsArticlePageProps) {

  return (
    <main className="min-h-screen bg-white py-20 px-6 items-center">
      <ArticleHeader title={articleTitle} date={publishDate} />
      <ArticleSummary summary={articleSummary} />

      {/* We pass the data straight to ArticleContent, which now handles the conversion */}
      <ArticleContent content={articleContent} />

      <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
        <Link
          href="/news"
          className="inline-flex items-center px-3 py-1 bg-brand-blue text-white text-xs font-bold rounded shadow-sm hover:bg-blue-700 hover:opacity-90 transition"
        >
          {/* Reduced arrow margin to mr-1 for tighter spacing */}
          <span className="mr-1">&larr;</span>
          {backLinkText || "Back to News"}
        </Link>
        <div className="flex gap-4">
          <span className="text-slate-300 text-sm">Share this article</span>
        </div>
      </div>
    </main>
  );
}
