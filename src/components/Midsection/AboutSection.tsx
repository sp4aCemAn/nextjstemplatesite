import React from 'react';

// Define the shape of the data this component expects
interface AboutSectionProps {
  title: string;
  paragraphs: string[];
}

export default function AboutSection({ title, paragraphs }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-gray-50 scroll-smooth">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">{title}</h2>

          {paragraphs.map((text, index) => (
            <p key={index} className="text-lg text-gray-600 leading-relaxed mb-4">
              {text}
            </p>
          ))}

        </div>
      </div>
    </section>
  );
}
