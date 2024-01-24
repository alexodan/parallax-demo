import { RefObject, useEffect, useRef, useState } from "react";

type Options = {
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number;
};

// TODO: should it have fade in options?
// I mean, is called useFadeIn
export function useFadeIn<T>(ref: RefObject<T>, observerOptions: Options) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isInViewport, setIsInViewPort] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsInViewPort(entry.isIntersecting);
    }, observerOptions);

    observerRef.current.observe(ref.current as Element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref, observerOptions]);

  return { ref, isInViewport };
}
