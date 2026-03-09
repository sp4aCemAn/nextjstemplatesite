import Link from 'next/link';
import React from 'react';
import NextImage, { StaticImageData } from 'next/image';

import Button from "@/components/subcomponents/buttons/Lbutton"

interface aboutMeProp {
  // Background & Right Headshot
  backgroundSrc: string | StaticImageData;
  imageSrc: string | StaticImageData;
  altText: string;

  // New Emblem (Replaces Title/Text)
  emblemSrc: string | StaticImageData;
  emblemAlt: string;

  // Buttons
  primaryLinkHref: string;
  primaryLinkLabel: string;
  secondaryLinkHref: string;
  secondaryLinkLabel: string;
}

export default function BannerAboutMe({
  backgroundSrc,
  imageSrc,
  altText,
  emblemSrc,
  emblemAlt,
  primaryLinkHref,
  primaryLinkLabel,
  secondaryLinkHref,
  secondaryLinkLabel
}: aboutMeProp) {

  const getSrc = (src: string | StaticImageData) => {
    return typeof src === "string" ? src : src.src;
  };

  return (
    // FIX 1: Responsive Height
    // Mobile: min-h-[90vh] ensures it fills the phone screen nicely.
    // Desktop: min-h-[850px] provides the massive canvas needed for the overlap effect.
    <div className="relative w-full min-h-[90vh] md:min-h-[850px] overflow-hidden flex flex-col justify-end pb-32 md:pb-0">

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <NextImage
          src={backgroundSrc}
          alt="Campaign background"
          priority
          className="object-cover object-center"
          fill
        />

        {/* Overlay 1: Darken slightly for contrast if needed, or lighten for style */}
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />

        {/* Overlay 2: The White Gradient Fade
            - Mobile: Starts earlier to ensure text readability at the bottom.
            - Desktop: Smoother, longer transition. 
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent opacity-100" />
      </div>

      {/* Content Container */}
      {/* FIX 2: Layout & Padding 
          - Used 'flex-col' with 'gap' for consistent spacing.
          - Added 'pt-20' to prevent header collision on mobile.
          - 'pb-24 md:pb-64': This is critical. We reserve HUGE bottom space on desktop
             for the Home.tsx overlap, but less on mobile so it doesn't look empty.
      */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-20 pb-24 md:pb-64 flex flex-col items-center text-center gap-6 md:gap-10">

        {/* Headshot: Responsive Sizes */}
        <div className="relative group">
          {/* Decorative glow behind the image */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-brand-blue to-brand-blue-light rounded-[2rem] opacity-30 blur-lg group-hover:opacity-50 transition duration-500" />

          <div className="relative w-32 h-32 md:w-56 md:h-56 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl ring-4 ring-white ring-offset-2 ring-offset-transparent overflow-hidden transform transition  duration-500">
            <NextImage
              src={imageSrc}
              alt={altText}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Emblem Logo */}
        {emblemSrc && (
          <div className="flex justify-center w-full">
            <img
              src={getSrc(emblemSrc)}
              alt={emblemAlt}
              // FIX 3: Constrained Max Heights
              // Keeps the logo from blowing up on large screens or taking too much space on mobile
              className="h-16 md:h-28 w-auto object-contain drop-shadow-2xl filter"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Button
            href={primaryLinkHref}
            className="w-full sm:w-auto px-8 py-3.5 shadow-xl transition-transform"
          >
            {primaryLinkLabel}
          </Button>

          <Button
            href={secondaryLinkHref}
            variant='secondary'
            className="w-full sm:w-auto px-8 py-3.5 shadow-lg bg-white/90 backdrop-blur-md hover:bg-white border border-gray-100  transition-transform"
          >
            {secondaryLinkLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
