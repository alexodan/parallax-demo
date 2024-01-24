import "./two.scss";
import { useFadeIn } from "../../useFadeIn";
import { useRef } from "react";

const observerOptions = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5,
};

const Section2 = () => {
  const { ref: topLeft, isInViewport: isTopLeftInScreen } = useFadeIn(
    useRef<HTMLDivElement>(null),
    observerOptions
  );
  const { ref: topRight, isInViewport: isTopRightInScreen } = useFadeIn(
    useRef<HTMLDivElement>(null),
    observerOptions
  );
  const { ref: bottomLeft, isInViewport: isBotLeftInScreen } = useFadeIn(
    useRef<HTMLDivElement>(null),
    observerOptions
  );
  const { ref: bottomRight, isInViewport: isBotRightInScreen } = useFadeIn(
    useRef<HTMLDivElement>(null),
    observerOptions
  );

  return (
    <section className="two">
      <div className="top">
        <div
          ref={topLeft}
          className={`top-left fade-in ${isTopLeftInScreen && "show"}`}
          data-id="top-left"
        >
          <img loading="lazy" src="/assets/p2/left2.jpg" />
        </div>
        <div ref={topRight} data-id="top-right">
          <h2 className={`top-right fade-in ${isTopRightInScreen && "show"}`}>
            Air <br />
            balloons <br />
            festivals
          </h2>
          <p className={`top-right fade-in ${isTopRightInScreen && "show"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            rerum minima illo fuga, beatae sunt voluptates consequatur totam
            laudantium.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div ref={bottomLeft} data-id="bottom-left">
          <h2 className={`bottom-left fade-in ${isBotLeftInScreen && "show"}`}>
            About <br />
            air balloons
            <br /> safety
          </h2>
          <p className={`bottom-left fade-in ${isBotLeftInScreen && "show"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            rerum minima illo fuga, beatae sunt voluptates consequatur totam
            laudantium.
          </p>
        </div>
        <div
          ref={bottomRight}
          className={`bottom-right fade-in ${isBotRightInScreen && "show"}`}
          data-id="bottom-right"
        >
          <img loading="lazy" src="/assets/p2/right2.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
