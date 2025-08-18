"use client";

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/lib/theme';
import Iridescence from './Irid';
import LightRays from './LightRays';

interface BackgroundManagerProps {
  children?: React.ReactNode;
}

const BackgroundManager: React.FC<BackgroundManagerProps> = ({ children }) => {
  const { theme } = useTheme();
  const [isPreloaded, setIsPreloaded] = useState(false);
  const preloadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload both backgrounds immediately
    const preloadBackgrounds = () => {
      setIsPreloaded(true);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(preloadBackgrounds, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Base background to prevent white flash */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-800 dark:via-dark-900 dark:to-dark-800"></div>
      
      {/* Hidden preload containers */}
      <div ref={preloadRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0 }}>
        {/* Preload Iridescence (Light theme) */}
        <div className="absolute inset-0">
          <Iridescence
            color={[0.1, 0.3, 0.6]}
            mouseReact={false}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
        
        {/* Preload LightRays (Dark theme) */}
        <div className="absolute inset-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#90E0EF"
            raysSpeed={0.2}
            lightSpread={1.2}
            rayLength={2.5}
            pulsating={true}
            fadeDistance={1}
            saturation={1.1}
            followMouse={false}
            mouseInfluence={0.15}
            noiseAmount={0.1}
            distortion={0.05}
          />
        </div>
      </div>
      
      {/* Active backgrounds with smooth transitions */}
      {isPreloaded && (
        <>
          {/* Iridescence Background - Light Mode */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          }`}>
            <Iridescence
              color={[0.1, 0.3, 0.6]}
              mouseReact={true}
              amplitude={0.1}
              speed={1.0}
            />
          </div>
          
          {/* LightRays Background - Dark Mode */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#90E0EF"
              raysSpeed={0.2}
              lightSpread={1.2}
              rayLength={2.5}
              pulsating={true}
              fadeDistance={1}
              saturation={1.1}
              followMouse={true}
              mouseInfluence={0.15}
              noiseAmount={0.1}
              distortion={0.05}
            />
          </div>
        </>
      )}
      
      {children}
    </div>
  );
};

export default BackgroundManager;
