import { useEffect } from "react";
import "./two.scss";

const Section2 = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // observer.unobserve(entry.target);
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        ...observerOptions,
        threshold: 0.8,
        // threshold: threshold / 100,
      }
    );

    const topLeft = document.querySelector(`.top-left`) as HTMLElement;
    const topRight = document.querySelector(`.top-right`) as HTMLElement;
    observer.observe(topLeft);
    observer.observe(topRight);
  }, []);

  return (
    <section className="two">
      <div className="top">
        <div className="top-left fade-in">
          <img loading="lazy" src="/assets/p2/left2.jpg" />
        </div>
        <div className="top-right fade-in-slower">
          <h2>
            Air <br />
            balloons <br />
            festivals
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            rerum minima illo fuga, beatae sunt voluptates consequatur totam
            laudantium.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <h2>
            About <br />
            air balloons
            <br /> safety
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            rerum minima illo fuga, beatae sunt voluptates consequatur totam
            laudantium.
          </p>
        </div>
        <div className="bottom-right">
          <img loading="lazy" src="/assets/p2/right2.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
