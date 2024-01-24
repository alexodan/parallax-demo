import "./three.scss";
import AirBalloonCard from "../card";
import { useEffect } from "react";
import { cards } from "./constants";

const Section3 = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -250px 0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("title visible");
          entry.target.classList.add("titleInView");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".titleFadeIn");
    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <section className="section3">
      <h2 className="titleFadeIn">Flight vouchers</h2>
      <p className="titleFadeIn">
        Some text about how awesome hot air balloons are, probably
      </p>
      <div className="section3Gallery">
        {cards.map((c, idx) => (
          <AirBalloonCard key={idx + 1} id={idx + 1} {...c} />
        ))}
      </div>
    </section>
  );
};

export default Section3;
