import React from 'react';

export default function Logo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "h-8 w-8",
    default: "h-12 w-12", 
    large: "h-16 w-16"
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Modern Logo Icon */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mr-4 shadow-xl relative overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="60" height="60" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Main icon */}
        <svg 
          viewBox="0 0 60 60" 
          className="h-10 w-10 relative z-10"
          fill="none"
          stroke="currentColor"
        >
          {/* Modern "C" for Computing */}
          <path 
            d="M20 15 C15 15, 10 20, 10 30 C10 40, 15 45, 20 45 C25 45, 30 40, 30 30" 
            stroke="#FDB813" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Digital circuit lines */}
          <path d="M35 20 L45 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M35 25 L50 25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M35 30 L40 30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M35 35 L47 35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          
          {/* Innovation dots */}
          <circle cx="45" cy="15" r="2" fill="#FDB813"/>
          <circle cx="50" cy="40" r="1.5" fill="#FDB813"/>
          <circle cx="15" cy="15" r="1" fill="#FDB813"/>
        </svg>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl"></div>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent leading-tight">
          ICCI-2025
        </div>
        <div className="text-xs text-text-secondary leading-tight -mt-1 font-medium">
          1st International Conference
        </div>
        <div className="text-xs text-accent font-semibold leading-tight tracking-wide">
          Computing & Innovation
        </div>
      </div>
    </div>
  );
}

// Alternative minimalist logo
export function MinimalLogo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mr-3 shadow-lg">
        <svg 
          viewBox="0 0 40 40" 
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
        >
          {/* Clean "C" shape */}
          <path 
            d="M15 10 C10 10, 8 15, 8 20 C8 25, 10 30, 15 30 C20 30, 22 25, 22 20" 
            stroke="#FDB813" 
            strokeWidth="2.5" 
            fill="none"
            strokeLinecap="round"
          />
          {/* Circuit line */}
          <path d="M25 15 L30 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M25 20 L32 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M25 25 L28 25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          {/* Innovation dot */}
          <circle cx="30" cy="10" r="1.5" fill="#FDB813"/>
        </svg>
      </div>
      <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
        ICCI-2025
      </div>
    </div>
  );
}

// Icon-only logo
export function IconLogo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "h-8 w-8",
    default: "h-12 w-12", 
    large: "h-16 w-16"
  };

  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-xl ${className} relative overflow-hidden`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <defs>
            <pattern id="grid-small" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="60" height="60" fill="url(#grid-small)" />
        </svg>
      </div>
      
      <svg 
        viewBox="0 0 60 60" 
        className="h-10 w-10 text-white relative z-10"
        fill="none"
        stroke="currentColor"
      >
        {/* Modern "C" for Computing */}
        <path 
          d="M20 15 C15 15, 10 20, 10 30 C10 40, 15 45, 20 45 C25 45, 30 40, 30 30" 
          stroke="#FDB813" 
          strokeWidth="3" 
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Digital circuit lines */}
        <path d="M35 20 L45 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M35 25 L50 25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M35 30 L40 30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M35 35 L47 35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        
        {/* Innovation dots */}
        <circle cx="45" cy="15" r="2" fill="#FDB813"/>
        <circle cx="50" cy="40" r="1.5" fill="#FDB813"/>
        <circle cx="15" cy="15" r="1" fill="#FDB813"/>
      </svg>
      
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl"></div>
    </div>
  );
}
