'use client';

import { useEffect, useState } from 'react';

interface LoadingProps {
  fullScreen?: boolean;
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function Loading({ 
  fullScreen = false, 
  size = 'md',
  text 
}: LoadingProps) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const spinnerSizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-12 h-12 border-[3px]',
    lg: 'w-20 h-20 border-4'
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Animated Spinner */}
      <div className="relative">
        {/* Outer Glow */}
        <div 
          className={`${sizeClasses[size]} rounded-full absolute animate-ping`}
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 157, 0.3) 0%, transparent 70%)',
            filter: 'blur(8px)'
          }}
        ></div>
        
        {/* Main Spinner */}
        <div 
          className={`${spinnerSizeClasses[size]} rounded-full border-t-[#00FF9D] border-r-[#00FF9D] border-b-transparent border-l-transparent animate-spin relative`}
          style={{
            boxShadow: '0 0 20px rgba(0, 255, 157, 0.5), inset 0 0 20px rgba(0, 255, 157, 0.2)'
          }}
        >
          {/* Inner Glow */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0, 255, 157, 0.2) 0%, transparent 70%)',
              filter: 'blur(4px)'
          }}
          ></div>
        </div>

        {/* Center Dot */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00FF9D]"
          style={{
            boxShadow: '0 0 10px rgba(0, 255, 157, 0.8), 0 0 20px rgba(0, 255, 157, 0.4)'
          }}
        ></div>
      </div>

      {/* Loading Text */}
      {text && (
        <div className="text-center">
          <p className="text-[#00FF9D] font-medium text-sm md:text-base" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            {text}{dots}
          </p>
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 backdrop-blur-sm">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF9D]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '0s' }}
          ></div>
          <div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF9D]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 flex items-center justify-center">
      {content}
    </div>
  );
}

