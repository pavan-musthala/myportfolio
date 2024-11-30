import { useEffect, useRef } from 'react';

export const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const alreadyRevealed = currentRef.classList.contains('active');
    if (alreadyRevealed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Immediately unobserve after revealing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    currentRef.classList.add('reveal');
    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [threshold]);

  return ref;
};
