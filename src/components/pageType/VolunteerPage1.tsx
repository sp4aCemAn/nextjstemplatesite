import React from 'react';
import AboutSection from "@/components/Midsection/AboutSection";
import Button from "@/components/subcomponents/buttons/Lbutton";
import Image from 'next/image';
// Expanded interface to cover ALL text content on the page
interface VolunteerPageProps {
  // Hero Section
  badgeText: string;
  heroTitle: string;
  heroSubtitle: string;

  // Left Column (Content)
  aboutTitle: string;
  aboutContent: string[];

  // Right Column (CTA Sidebar)
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink: string;
  iconImage: string;
  pageImage: string;
}

export default function VolunteerPage1({
  badgeText,
  heroTitle,
  heroSubtitle,
  aboutTitle,
  aboutContent,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink,
  iconImage,
  pageImage
}: VolunteerPageProps) {

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">

      {/* 1. HERO HEADER */}
      <div className="  relative w-full py-20 px-6 text-center border-b-2 border-brand-blue2 overflow-hidden">
        <Image
          src={pageImage}
          alt="Background header"
          fill
          className="object-cover object-center "
          priority // Optional: Use this if this is the top hero section (loads faster)
        />
        <div className='relative z-10'>
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight bg-brand-blue mx-auto py-5 rounded">
              {aboutTitle || "Announcements from the Transition"}
            </h1>
          </div>
        </div>
      </div>      {/* 2. MAIN CARD CONTAINER */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-24 -mt-10 w-full">
        <div className="bg-white rounded shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">

          {/* LEFT COLUMN: The "About" Content */}
          <div className="p-8 md:p-12 lg:w-2/3">
            <div className="prose prose-lg prose-slate max-w-none">
              <AboutSection
                title={aboutTitle}
                paragraphs={aboutContent}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: The CTA Sidebar */}
          <div className="bg-slate-50 p-8 md:p-12 lg:w-1/3 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-center items-center text-center">

            <div className="mb-8 p-4  bg-white rounded shadow-sm">
              <Image className="pb-2 pt-1" src={iconImage}
                alt={badgeText}
                width={150}
                height={150}
              />

            </div>

            {/* CTA Title (formerly "Ready to Serve?") */}
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {ctaTitle || "Ready to Serve?"}
            </h3>

            {/* CTA Description */}
            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
              {ctaDescription || "Sign up today to receive updates on volunteer opportunities in your area."}
            </p>

            {/* CTA Button */}
            <Button
              href={ctaButtonLink || "/signup"}
              className="w-full py-4 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              {ctaButtonText || "Sign Up Now"}
            </Button>

            {/* REMOVED: The "Already registered? Log in" text is gone. */}

          </div>

        </div>
      </div>

    </main>
  );
}
