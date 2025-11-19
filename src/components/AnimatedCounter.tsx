import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  label: string;
  suffix?: string;
}

export function AnimatedCounter({ target, label, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-5xl bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-2">
        {count}{suffix}
      </div>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}
