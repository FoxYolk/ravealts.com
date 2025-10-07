'use client';

import { useEffect, useRef } from 'react';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  threshold?: number;
}

export function TextReveal({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0,
  threshold = 0.1
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, delay);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'left':
        return 'text-reveal-left';
      case 'right':
        return 'text-reveal-right';
      default:
        return 'text-reveal';
    }
  };

  return (
    <div ref={ref} className={`${getDirectionClass()} ${className}`}>
      {children}
    </div>
  );
}
