"use client";

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/lib/theme';

interface ThemeLoadingProviderProps {
  children: React.ReactNode;
}

const ThemeLoadingProvider: React.FC<ThemeLoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Ensure loading state is visible for at least 800ms
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Add a small delay before showing content to ensure smooth transition
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <ThemeProvider>{children}</ThemeProvider>
    </div>
  );
};

export default ThemeLoadingProvider;
