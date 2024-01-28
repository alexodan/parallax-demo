import { RefObject, useEffect, useState } from "react";

type Options = {
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number;
};

export function useIntersectionObserver<T>(
  ref: RefObject<T>,
  observerOptions: Options
) {
  const [isInViewport, setIsInViewPort] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      setIsInViewPort(entry.isIntersecting);
      if (entry.isIntersecting) {
        setHasShown(true);
      }
    }, observerOptions);

    obs.observe(ref.current as Element);

    return () => {
      obs.disconnect();
    };
  }, [ref, observerOptions]);

  return { ref, isInViewport, hasShown };
}
