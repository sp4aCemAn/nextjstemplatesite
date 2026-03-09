import React from 'react';
import Link from 'next/link';

// Define the shape of the data coming in
interface PrivacyPageProps {
  campaignName: string;
  email: string;
  lastUpdated: string;
}

export default function PrivacyPolicy({
  campaignName,
  email,
  lastUpdated
}: PrivacyPageProps) {

  // We use the props directly now, so we don't need the hardcoded variables

  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last Updated: {lastUpdated}</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              Thank you for visiting the official website of <strong>{campaignName}</strong>.
              We are committed to protecting your personal information and your right to privacy.
              If you have any questions or concerns about this privacy notice or our practices with
              regard to your personal information, please contact us at <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-2">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sign up for our newsletter or email updates.</li>
              <li>Register to volunteer.</li>
              <li>Make a donation.</li>
              <li>Contact us directly via email or contact forms.</li>
            </ul>
            <p className="mt-2">
              The personal information we collect may include your name, email address, phone number, and postal address.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p>
              We use the information we collect or receive to communicate directly with you.
              Specifically, we may use your information to send you campaign updates,
              newsletters, volunteer opportunities, and donation receipts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. SMS/Text Messaging</h2>
            <p>
              By providing your phone number, you agree to receive text messages from {campaignName}.
              Message and data rates may apply. Message frequency varies.
            </p>
            <p className="mt-2 font-semibold">
              Crucially, we do not sell or share your mobile phone number with third parties or affiliates for marketing/promotional purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed
              to protect the security of any personal information we process. However, please also
              remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may email us at:
            </p>
            <p className="mt-2 font-bold">{email}</p>
          </section>

          {/* Back Home Button */}
          <div className="pt-8 border-t border-gray-200">
            <a href="/" className="text-blue-600 font-bold hover:underline">
              &larr; Return to Home
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
