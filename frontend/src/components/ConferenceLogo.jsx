import React from 'react';

export default function ConferenceLogo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "h-12 w-12",
    default: "h-16 w-16", 
    large: "h-20 w-20",
    xlarge: "h-24 w-24"
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Conference Logo Image Only */}
      <div className={`${sizeClasses[size]} rounded-xl flex items-center justify-center shadow-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10`}>
        <img 
          src="/Conference Logo.jpg" 
          alt="ICCI-2025 Conference Logo"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
    </div>
  );
}

// Alternative minimalist logo with just the image
export function MinimalConferenceLogo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="h-14 w-14 rounded-xl flex items-center justify-center shadow-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
        <img 
          src="/Conference Logo.jpg" 
          alt="ICCI-2025"
          className="w-full h-full object-contain rounded-xl"
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
    xlarge: "h-24 w-24"
  };

  return (
    <div className={`${sizeClasses[size]} rounded-xl shadow-2xl ${className} overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10`}>
      <img 
        src="/Conference Logo.jpg" 
        alt="ICCI-2025"
        className="w-full h-full object-contain rounded-xl"
      />
    </div>
  );
}
