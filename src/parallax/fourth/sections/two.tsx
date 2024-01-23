import "./two.scss";
import { useEffect, useRef, useState } from "react";

const Section2 = () => {
  const topLeft = useRef<HTMLDivElement>(null);
  const topRight = useRef<HTMLDivElement>(null);
  const bottomLeft = useRef<HTMLDivElement>(null);
  const bottomRight = useRef<HTMLDivElement>(null);
  const [elementsInViewport, setElementsInViewport] = useState({
    "top-left": false,
    "top-right": false,
    "bottom-left": false,
    "bottom-right": false,
  });
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.5,
    };
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        setElementsInViewport((prev) => ({
          ...prev,
          [target.dataset["id"]!]: entry.isIntersecting,
        }));
      });
    }, observerOptions);

    observerRef.current.observe(topLeft.current!);
    observerRef.current.observe(topRight.current!);
    observerRef.current.observe(bottomLeft.current!);
    observerRef.current.observe(bottomRight.current!);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [topLeft, topRight, bottomLeft, bottomRight]);

  return (
    <section className="two">
      <div className="top">
        <div
          ref={topLeft}
          className={`top-left fade-in ${
            elementsInViewport["top-left"] ? "show" : ""
          }`}
          data-id="top-left"
        >
          <img loading="lazy" src="/assets/p2/left2.jpg" />
        </div>
        <div ref={topRight} data-id="top-right">
          <h2
            className={`top-right fade-in ${
              elementsInViewport["top-right"] ? "show" : ""
            }`}
          >
            Air <br />
            balloons <br />
            festivals
          </h2>
          <p
            className={`top-right text fade-in ${
              elementsInViewport["top-right"] ? "show" : ""
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            rerum minima illo fuga, beatae sunt voluptates consequatur totam
            laudantium.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div ref={bottomLeft} data-id="bottom-left">
          <h2
            className={`bottom-left fade-in ${
              elementsInViewport["bottom-left"] ? "show" : ""
            }`}
          >
            About <br />
            air balloons
            <br /> safety
          </h2>
          <p
            className={`bottom-left text fade-in ${
              elementsInViewport["bottom-left"] ? "show" : ""
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            rerum minima illo fuga, beatae sunt voluptates consequatur totam
            laudantium.
          </p>
        </div>
        <div
          ref={bottomRight}
          className={`bottom-right fade-in ${
            elementsInViewport["bottom-right"] ? "show" : ""
          }`}
          data-id="bottom-right"
        >
          <img loading="lazy" src="/assets/p2/right2.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
