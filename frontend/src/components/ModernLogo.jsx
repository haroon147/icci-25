import React from 'react';

export default function ModernLogo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "h-8 w-8",
    default: "h-12 w-12", 
    large: "h-16 w-16"
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Ultra Modern Logo Icon */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary via-primary-light to-primary-dark rounded-2xl flex items-center justify-center mr-4 shadow-2xl relative overflow-hidden border border-accent/30`}>
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary-dark/50 animate-pulse"></div>
        
        {/* Geometric pattern background */}
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="hexagons" width="12" height="12" patternUnits="userSpaceOnUse">
                <polygon points="6,1 10,4 10,8 6,11 2,8 2,4" fill="none" stroke="white" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="60" height="60" fill="url(#hexagons)" />
          </svg>
        </div>
        
        {/* Main icon - Abstract "C" with tech elements */}
        <svg 
          viewBox="0 0 60 60" 
          className="h-11 w-11 relative z-10"
          fill="none"
          stroke="currentColor"
        >
          {/* Modern "C" shape with tech styling */}
          <path 
            d="M18 15 C12 15, 8 20, 8 30 C8 40, 12 45, 18 45 C24 45, 28 40, 28 30" 
            stroke="#FDB813" 
            strokeWidth="3.5" 
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Tech circuit elements */}
          <path d="M35 18 L42 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M35 25 L46 25" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M35 30 L40 30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M35 35 L44 35" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M35 42 L41 42" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          
          {/* Innovation nodes */}
          <circle cx="42" cy="12" r="2.5" fill="#FDB813" opacity="0.9"/>
          <circle cx="48" cy="38" r="2" fill="#FDB813" opacity="0.7"/>
          <circle cx="12" cy="12" r="1.5" fill="#FDB813" opacity="0.8"/>
          <circle cx="12" cy="48" r="1" fill="#FDB813" opacity="0.6"/>
          
          {/* Connection lines */}
          <path d="M42 12 L48 38" stroke="#FDB813" strokeWidth="1" opacity="0.4" strokeDasharray="2,2"/>
        </svg>
        
        {/* Premium glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-primary-light/20 rounded-2xl blur-sm"></div>
      </div>
      
      {/* Enhanced Logo Text */}
      <div className="flex flex-col">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent leading-tight tracking-tight">
          ICCI-2025
        </div>
        <div className="text-xs text-text-secondary leading-tight -mt-1 font-medium tracking-wide">
          1st International Conference
        </div>
        <div className="text-xs text-accent font-bold leading-tight tracking-widest uppercase">
          Computing & Innovation
        </div>
      </div>
    </div>
  );
}

// Sleek minimal version
export function SleekLogo({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mr-3 shadow-lg border border-accent/20">
        <svg 
          viewBox="0 0 40 40" 
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
        >
          {/* Clean "C" */}
          <path 
            d="M15 10 C10 10, 8 15, 8 20 C8 25, 10 30, 15 30 C20 30, 22 25, 22 20" 
            stroke="#FDB813" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          />
          {/* Tech lines */}
          <path d="M25 15 L30 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M25 20 L32 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M25 25 L28 25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          {/* Innovation dot */}
          <circle cx="30" cy="10" r="2" fill="#FDB813"/>
        </svg>
      </div>
      <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
        ICCI-2025
      </div>
    </div>
  );
}

// Premium version with more effects
export function PremiumLogo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "h-8 w-8",
    default: "h-12 w-12", 
    large: "h-16 w-16"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary via-primary-light to-primary-dark rounded-3xl flex items-center justify-center mr-4 shadow-2xl relative overflow-hidden border-2 border-accent/40`}>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-primary-dark/60 animate-pulse"></div>
        
        {/* Tech grid background */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <defs>
              <pattern id="tech-grid" width="6" height="6" patternUnits="userSpaceOnUse">
                <path d="M 6 0 L 0 0 0 6" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="60" height="60" fill="url(#tech-grid)" />
          </svg>
        </div>
        
        {/* Premium icon */}
        <svg 
          viewBox="0 0 60 60" 
          className="h-10 w-10 relative z-10"
          fill="none"
          stroke="currentColor"
        >
          {/* Stylized "C" */}
          <path 
            d="M20 15 C15 15, 10 20, 10 30 C10 40, 15 45, 20 45 C25 45, 30 40, 30 30" 
            stroke="#FDB813" 
            strokeWidth="4" 
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Circuit elements */}
          <path d="M35 20 L45 20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <path d="M35 25 L50 25" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <path d="M35 30 L40 30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <path d="M35 35 L47 35" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          
          {/* Innovation sparks */}
          <circle cx="45" cy="15" r="3" fill="#FDB813" opacity="0.9"/>
          <circle cx="50" cy="40" r="2.5" fill="#FDB813" opacity="0.7"/>
          <circle cx="15" cy="15" r="2" fill="#FDB813" opacity="0.8"/>
          <circle cx="15" cy="45" r="1.5" fill="#FDB813" opacity="0.6"/>
        </svg>
        
        {/* Premium glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-transparent to-primary-light/30 rounded-3xl blur-md"></div>
      </div>
      
      <div className="flex flex-col">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent leading-tight">
          ICCI-2025
        </div>
        <div className="text-xs text-text-secondary leading-tight -mt-1 font-medium">
          1st International Conference
        </div>
        <div className="text-xs text-accent font-bold leading-tight tracking-wide">
          Computing & Innovation
        </div>
      </div>
    </div>
  );
}
