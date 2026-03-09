import React from 'react';
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
interface MidsectionData {
  title1: string;
  paragraphs1: string[]; // Fixed type to match Midsection component
  preview1: string;
  title2: string;
  paragraphs2: string[]; // Fixed type to match Midsection component
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

  return (
    <main className="flex-grow bg-gray-50"> {/* Set base background to gray */}

      {/* Hero Section */}
      {/* We need the hero to be behind the content, so z-0 */}
      <div className="relative z-0">
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
      </div>

      {/* 2. OVERLAPPING CONTENT SECTION */}
      {/* -mt-24: Pulls this section UP by 6rem to overlap the banner 
          relative z-10: Ensures this sits ON TOP of the banner
      */}
      <div className="relative z-10 -mt-24 px-4 pb-12">

        {/* White Card Container */}
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 border-brand-blue2">

          <div className="p-2 sm:p-8">
            <Midsection
              title1={midsectionContent.title1}
              paragraphs1={midsectionContent.paragraphs1}
              preview1={midsectionContent.preview1 || "/default.jpg"}
              title2={midsectionContent.title2}
              paragraphs2={midsectionContent.paragraphs2}
              preview2={midsectionContent.preview2 || "/default.jpg"}
              title3={midsectionContent.title3}
              paragraphs3={midsectionContent.paragraphs3}
              preview3={midsectionContent.preview3 || "/default.jpg"}
            />
          </div>

        </div>
      </div>
    </main>
  );
}
