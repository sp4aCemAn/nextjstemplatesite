import ReactMarkdown from 'react-markdown';
import NextImage from 'next/image';

export interface ArticleContentProps {
  content: string | string[];
}

// Helper: Auto-fix paths.
const getPublicSrc = (src: string) => {
  if (!src) return "";
  if (src.startsWith("http") || src.startsWith("/")) {
    return src;
  }
  return `/${src}`;
};

// Helper: Robustly extract YouTube ID from any format (Short links, long links, embeds)
const getYouTubeId = (url: string) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Image Component (Kept exactly as provided)
const StyledImage = ({ src, alt }: { src: string; alt?: string }) => (
  <span className="my-8 w-full flex justify-center">
    <NextImage
      src={getPublicSrc(src)}
      alt={alt || "Article Image"}
      width={0}
      height={0}
      sizes="100vw"
      className="rounded-xl shadow-lg max-h-[500px] w-auto h-auto object-contain bg-slate-50"
    />
  </span>
);

export default function ArticleContent({ content }: ArticleContentProps) {
  if (!content) return null;

  // Handle array vs string input
  const validContent = Array.isArray(content) ? content.join('\n\n') : content;

  return (
    <article className="max-w-3xl mx-auto prose prose-lg prose-slate text-slate-700 leading-relaxed text-left">
      <ReactMarkdown
        components={{
          // Standard Markdown Images
          img: ({ node, ...props }) => (
            <StyledImage src={props.src as string} alt={props.alt} />
          ),

          // Links (Text, Videos, or Image Links)
          a: ({ node, ...props }) => {
            const rawHref = props.href as string;

            // 1. Check for YouTube (New Robust Logic)
            // This now handles 'youtu.be/xyz' and standard 'youtube.com' links
            const youtubeId = getYouTubeId(rawHref);

            if (youtubeId) {
              return (
                <span className="block my-8 aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    className="w-full h-full border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </span>
              );
            }

            // 2. Check for Image Links (Kept your logic)
            if (/\.(jpg|png|webp|svg)$/i.test(rawHref)) {
              return <StyledImage src={rawHref} alt={String(props.children)} />;
            }

            // 3. Standard Link (Kept your logic)
            return (
              <a {...props} className="text-indigo-600 hover:underline" target="_blank">
                {props.children}
              </a>
            );
          }
        }}
      >
        {validContent}
      </ReactMarkdown>
    </article>
  );
}
