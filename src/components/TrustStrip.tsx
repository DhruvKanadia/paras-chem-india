'use client';

import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isAnimated) {
          setIsAnimated(true);
          let start = 0;
          const duration = 2000;
          const incrementTime = Math.floor(duration / 100); // 100 steps
          const increment = value / 100;
          
          const timer = setInterval(() => {
            start += 1;
            setCount(Math.min(Math.ceil(start * increment), value));
            
            if (start >= 100) {
              clearInterval(timer);
              setCount(value);
            }
          }, incrementTime);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, isAnimated]);

  return (
    <div ref={elementRef} className="text-center px-4">
      <div className="font-display text-headline-lg text-industrial-blue mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section className="bg-surface-container-lowest border-b border-border-subtle py-8">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-page grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border-subtle">
        <AnimatedNumber value={27} suffix="+" label="Years of Experience" />
        <AnimatedNumber value={100} suffix="+" label="Chemical Products" />
        <AnimatedNumber value={7} suffix="+" label="Industries Served" />
        <div className="text-center px-4 flex flex-col justify-center">
          <div className="font-display text-headline-lg text-industrial-blue mb-1">ISO & MSME</div>
          <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            Certified Company
          </div>
        </div>
      </div>
    </section>
  );
}
