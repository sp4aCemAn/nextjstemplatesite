import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;                      // If this exists, it becomes a Link
  onClick?: () => void;               // If this exists (and no href), it's a Button
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "outline" | "danger";
  className?: string;
  external?: boolean;                 // Force a standard <a> tag (good for external links)
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = "primary",
  className = "",
  external = false
}) => {

  // 1. The styling is identical for both Buttons and Links


  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-700 focus:ring-blue-500 rounded-lg text-lg font-bold hover:opacity-90 transition rounded text-lg font-bold hover:opacity-90 transition shadow-sm text-center",
    secondary: "px-8 py-3  bg-white text-brand-blue font-semibold rounded-lg hover:text-brand-blue2 transition-colors shadow-lg hover:opacity-90",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
  };

  const combinedStyles = `${variants[variant]} ${className}`;

  // 2. CASE A: It's an External Link (e.g., https://google.com)
  // We use a standard <a> tag to avoid Next.js routing logic
  if (href && (external || href.startsWith('http'))) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // 3. CASE B: It's an Internal Link (e.g., /volunteer)
  // We use Next.js <Link> for instant page loads
  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  // 4. CASE C: It's a regular Button (e.g., Form Submit)

};

export default Button;
