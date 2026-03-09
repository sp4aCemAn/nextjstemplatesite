import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa6';
import Button from "@/components/subcomponents/buttons/Lbutton"

interface FooterProps {
  candidateName: string;
  // Make these optional (?) so the site doesn't crash if one is missing
  facebookUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  email?: string;
  volunteerUrl?: string;
  twitterUrl?: string;
}

export default function Footer({
  candidateName,
  facebookUrl,
  instagramUrl,
  tiktokUrl,
  email,
  volunteerUrl
}: FooterProps) {
  return (
    <footer className="py-8 border-t-2 bg-gray-50 border-brand-blue2">
      <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-start'>

        {/* LEFT SIDE: Socials & Copyright */}
        <div className="flex flex-col items-start justify-start">

          {/* Social Links */}
          <div className="flex space-x-6 mb-4">

            {/* FACEBOOK - Only render if URL exists */}
            {facebookUrl && (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-facebook-logo transition-colors duration-300"
              >
                <FaFacebookF size={20} />
              </a>
            )}

            {/* INSTAGRAM */}
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-instagram-logo transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
            )}

            {/* TIKTOK */}
            {tiktokUrl && (
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-gray-400 hover:text-tiktok-logo transition-colors duration-300"
              >
                <FaTiktok size={20} />
              </a>
            )}

            {/* EMAIL - Added 'mailto:' so it actually opens email app */}
            {email && (
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="text-gray-400 hover:text-mail-logo transition-colors duration-300"
              >
                <FaEnvelope size={20} />
              </a>
            )}
          </div>

          {/* Copyright / Text */}
          <div className="text-left text-gray-900 text-sm">
            <p>&copy; {new Date().getFullYear()} {candidateName}. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="/privacy" className="hover:text-blue-500 transition">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Volunteer CTA */}
        <div className='mt-8 md:mt-0 flex flex-col items-start md:items-end space-y-2 py-5'>

          <Button href={"/volunteer"} className='px-8 py-2 '>
            Volunteer for us
          </Button>
        </div>

      </div>
    </footer>
  );
}
