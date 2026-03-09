import React from "react";
import RightAjPic from "@/components/subcomponents/imageFrames/RightAlPic";
import LeftAlText from "@/components/subcomponents/LeftAlText";

interface AboutPageProps {
  title: string;
  content: string[];
  imageSrc: string;
}

export default function AboutMePage1({ title, content, imageSrc }: AboutPageProps) {
  // Hardcoded variables removed in favor of props above

  return (
    <main className="flex-grow bg-white">
      <section className="mx-[20%] my-12 py-12 bg-gray-50 rounded px-12 shadow-sm">
        <div className="w-full space-y-12">

          {/* Image: Right Aligned */}
          <RightAjPic
            imageSrc={imageSrc}
          />

          {/* Text: Left Aligned */}
          <LeftAlText
            title={title}
            content={content}
          />

        </div>
      </section>
    </main>
  );
}
