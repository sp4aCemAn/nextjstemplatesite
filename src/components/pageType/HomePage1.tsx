import React from 'react';
import AboutSection from "@/components/Midsection/AboutSection";
import QuickLinksSection from "@/components/subcomponents/QuickLinks";
import BannerAboutMe from "@/components/HeroSection/BannerAboutMe";
import Midsection from "@/components/Midsection/midsection";

// 1. Define the shape of the 'aboutMe' data
interface AboutMeData {
  backgroundSrc: string;
  imageSrc: string;
  altText: string;
  emblemSrc: string;
  emblemAlt: string;
  primaryLinkHref: string;
  primaryLinkLabel: string;
  secondaryLinkHref: string;
  secondaryLinkLabel: string;
}

// 2. Define the shape of the 'midsection' data
// UPDATED: Added preview1 and preview2 to match Midsection requirements
interface MidsectionData {
  title1: string;
  paragraphs1: string[];
  preview1: string;
  title2: string;
  paragraphs2: string[];
  preview2: string;
  title3: string;
  paragraphs3: string[];
  preview3: string;
}

// 3. Define the main props for the Home component
interface HomeProps {
  aboutMe: AboutMeData;
  midsectionContent: MidsectionData;
}

export default function Home({ aboutMe, midsectionContent }: HomeProps) {

  // Hardcoded data has been removed. 
  // The component now relies on 'aboutMe' and 'midsectionContent' passed in as props.

  return (
    <main className="flex-grow">

      {/* Hero Section with Circular Headshot */}
      <BannerAboutMe
        backgroundSrc={aboutMe.backgroundSrc}
        imageSrc={aboutMe.imageSrc}
        altText={aboutMe.altText}
        emblemSrc={aboutMe.emblemSrc}
        emblemAlt={aboutMe.emblemAlt}
        primaryLinkHref={aboutMe.primaryLinkHref}
        primaryLinkLabel={aboutMe.primaryLinkLabel}
        secondaryLinkHref={aboutMe.secondaryLinkHref}
        secondaryLinkLabel={aboutMe.secondaryLinkLabel}
      />

      {/* 1.5 QUICK LINKS (Optional) */}
      {/* <QuickLinksSection /> */}

      {/* 1.7 NEW: LANDSCAPE IMAGE BANNER */}

      <div className="py-24 border-t-2 bg-gray-50 border-brand-blue2">
        {/* 2. ABOUT/AGENDA SECTION */}
        <Midsection
          title1={midsectionContent.title1}
          paragraphs1={midsectionContent.paragraphs1}
          preview1={midsectionContent.preview1 || "/default.jpg"} // Pass preview1

          title2={midsectionContent.title2}
          paragraphs2={midsectionContent.paragraphs2}
          preview2={midsectionContent.preview2 || "/default.jpg"} // Pass preview2

          title3={midsectionContent.title3}
          paragraphs3={midsectionContent.paragraphs3}
          preview3={midsectionContent.preview3 || "/default.jpg"}
        />
        {/* Add more sections here as the site grows */}
      </div>
    </main>
  );
}
