'use client';

import { useEffect, useState } from 'react';
import { ChevronUp, ArrowUp } from 'lucide-react';

export function ScrollEffects() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 300);
      setIsScrolling(scrollTop > 100);
    };

    const handleScrollEnd = () => {
      setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollEnd, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollEnd);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/25 group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}

      {/* Floating Scroll Indicator */}
      {isScrolling && (
        <div className="fixed bottom-8 left-8 z-40 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 text-sm text-muted-foreground animate-fade-in-up">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Scrolling...</span>
          </div>
        </div>
      )}

      {/* Floating Particles on Scroll */}
      {isScrolling && (
        <div className="fixed inset-0 pointer-events-none z-30">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary-dark/40 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-primary-dark/30 rounded-full animate-float animation-delay-3000"></div>
        </div>
      )}
    </>
  );
}
