'use client';

import { useEffect, useRef } from 'react';

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
}

export function ParticleSystem({ particleCount = 20, className = '' }: ParticleSystemProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particles: HTMLDivElement[] = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random particle type
      const particleType = Math.floor(Math.random() * 3) + 1;
      particle.classList.add(`particle-${particleType}`);
      
      // Random position
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      // Random animation delay
      particle.style.animationDelay = Math.random() * 10 + 's';
      
      container.appendChild(particle);
      particles.push(particle);
    }

    // Cleanup function
    return () => {
      particles.forEach(particle => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      });
    };
  }, [particleCount]);

  return (
    <div 
      ref={containerRef} 
      className={`particle-container ${className}`}
      style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}
    />
  );
}
