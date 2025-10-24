import React from 'react';

export default function ConferenceLogo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "h-12 w-12",
    default: "h-16 w-16", 
    large: "h-20 w-20",
    xlarge: "h-24 w-24",
    custom: "h-16 w-18" // Smaller, more appropriate for navbar
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Conference Logo Image Only */}
      <div className={`${sizeClasses[size]} flex items-center justify-center overflow-hidden bg-transparent`}>
        <img 
          src="/Conference Logo.png" 
          alt="ICCI-2025 Conference Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

// Alternative minimalist logo with just the image
export function MinimalConferenceLogo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="h-16 w-18 flex items-center justify-center overflow-hidden bg-transparent">
        <img 
          src="/Conference Logo.png" 
          alt="ICCI-2025"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

// Icon-only logo with just the image
export function IconConferenceLogo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "h-12 w-12",
    default: "h-16 w-16", 
    large: "h-20 w-20",
    xlarge: "h-24 w-24",
    custom: "h-16 w-18"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} overflow-hidden bg-transparent`}>
      <img 
        src="/Conference Logo.png" 
        alt="ICCI-2025"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
