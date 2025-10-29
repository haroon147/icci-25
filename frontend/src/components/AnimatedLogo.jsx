import React, { useEffect, useState } from 'react';

export default function AnimatedLogo({ className = "", size = "default" }) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqSmall = window.matchMedia('(max-width: 640px)');
    const update = () => {
      setReduceMotion(mqReduce.matches);
      setIsSmall(mqSmall.matches);
    };
    update();
    mqReduce.addEventListener?.('change', update);
    mqSmall.addEventListener?.('change', update);
    return () => {
      mqReduce.removeEventListener?.('change', update);
      mqSmall.removeEventListener?.('change', update);
    };
  }, []);
  const sizeClasses = {
    small: "h-8 w-8",
    default: "h-12 w-12", 
    large: "h-16 w-16"
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Animated Logo Icon */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mr-3 shadow-lg border-2 border-accent/20 relative overflow-hidden`}>
        {/* Animated background pulse (disabled on small/reduced motion) */}
        {!(reduceMotion || isSmall) && (
          <div className="absolute inset-0 bg-accent/10 animate-pulse rounded-xl"></div>
        )}
        
        <svg 
          viewBox="0 0 48 48" 
          className="h-8 w-8 text-white relative z-10"
          fill="currentColor"
        >
          {/* Computer/CPU Icon */}
          <rect x="10" y="12" width="28" height="20" rx="3" fill="white" opacity="0.95"/>
          <rect x="14" y="18" width="20" height="8" fill="#0b2e4d" opacity="0.8"/>
          <rect x="18" y="20" width="12" height="4" fill="#FDB813"/>
          
          {/* Animated innovation sparks (disabled on small/reduced motion) */}
          {reduceMotion || isSmall ? (
            <>
              <path d="M24 6l1.5 6 6 1.5-6 1.5-1.5 6-1.5-6-6-1.5 6-1.5z" fill="#FDB813" opacity="0.7"/>
              <path d="M34 14l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" fill="#FDB813" opacity="0.5"/>
              <path d="M14 14l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" fill="#FDB813" opacity="0.5"/>
              <path d="M24 36l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" fill="#FDB813" opacity="0.4"/>
            </>
          ) : (
            <>
              <path d="M24 6l1.5 6 6 1.5-6 1.5-1.5 6-1.5-6-6-1.5 6-1.5z" fill="#FDB813" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.5;0.9" dur="2s" repeatCount="indefinite"/>
              </path>
              <path d="M34 14l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" fill="#FDB813" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite"/>
              </path>
              <path d="M14 14l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" fill="#FDB813" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.2s" repeatCount="indefinite"/>
              </path>
              <path d="M24 36l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" fill="#FDB813" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite"/>
              </path>
            </>
          )}
        </svg>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <div className="text-xl font-bold text-primary leading-tight">
          ICCI-2025
        </div>
        <div className="text-xs text-text-secondary leading-tight -mt-1">
          1st International Conference
        </div>
        <div className="text-xs text-accent font-medium leading-tight">
          Computing & Innovation
        </div>
      </div>
    </div>
  );
}

// Glowing logo variant
export function GlowingLogo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "h-8 w-8",
    default: "h-12 w-12", 
    large: "h-16 w-16"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mr-3 shadow-lg border-2 border-accent/20 relative`} 
           style={{
             boxShadow: '0 0 20px rgba(253, 184, 19, 0.3), 0 0 40px rgba(11, 46, 77, 0.2)'
           }}>
        <svg 
          viewBox="0 0 48 48" 
          className="h-8 w-8 text-white"
          fill="currentColor"
        >
          {/* Computer/CPU Icon */}
          <rect x="10" y="12" width="28" height="20" rx="3" fill="white" opacity="0.95"/>
          <rect x="14" y="18" width="20" height="8" fill="#0b2e4d" opacity="0.8"/>
          <rect x="18" y="20" width="12" height="4" fill="#FDB813"/>
          
          {/* Innovation sparks */}
          <path d="M24 6l1.5 6 6 1.5-6 1.5-1.5 6-1.5-6-6-1.5 6-1.5z" fill="#FDB813" opacity="0.9"/>
          <path d="M34 14l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" fill="#FDB813" opacity="0.7"/>
          <path d="M14 14l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" fill="#FDB813" opacity="0.7"/>
          <path d="M24 36l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" fill="#FDB813" opacity="0.6"/>
        </svg>
      </div>
      
      <div className="flex flex-col">
        <div className="text-xl font-bold text-primary leading-tight">
          ICCI-2025
        </div>
        <div className="text-xs text-text-secondary leading-tight -mt-1">
          1st International Conference
        </div>
        <div className="text-xs text-accent font-medium leading-tight">
          Computing & Innovation
        </div>
      </div>
    </div>
  );
}
