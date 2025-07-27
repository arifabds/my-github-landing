import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {   
        threshold: 0.2,
      }
    );

    if (element) { 
      observer.observe(element);
    }

    return () => {
      if (element) { 
        observer.unobserve(element);
      }
    };
  }, []);

  return { ref, isVisible };
}