import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shufelt - Official Site",
  description: "Official campaign site for shufelt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">

          <Header
            candidateName="shufelt"
            donationUrl=""
          />

          <main className="flex-grow">
            {children}
          </main>

          <Footer
            candidateName="shufelt"
            email="jamesshufeltiii@gmail.com"
            facebookUrl=""
            instagramUrl=""
            tiktokUrl=""
            twitterUrl=""
            volunteerUrl=""
          />

        </div>
      </body>
    </html>
  );
}
