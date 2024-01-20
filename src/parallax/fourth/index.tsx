import { useEffect } from "react";
import AirBalloonCard from "./card";
// import styles from "./index.module.scss";
import "./index.scss";

import Navbar from "./navbar";
import Section1 from "./sections/one";
import Section2 from "./sections/two";

const cards = [
  {
    title: "Weekday morning",
    description:
      "A reputable travel agency should have experience and knowledge.",
    threshold: 20,
  },
  {
    title: "Weekday anytime",
    description: "A staff who can provide expert advice.",
    threshold: 40,
  },
  {
    title: "7 day anytime",
    description:
      "And more interesting things to provide to their customers idk.",
    threshold: 60,
  },
];

export default function Parallax4() {
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
    <>
      <Navbar />
      {/* 1st section */}
      <Section1 />

      {/* 2nd section */}
      <Section2 />

      {/* 3rd section and last */}
      <section className={"section3"}>
        <h2 className={"titleFadeIn"}>Flight vouchers</h2>
        <p className={"titleFadeIn"}>
          Some text about how awesome hot air balloons are, probably
        </p>
        <div className={"section3Gallery"}>
          {cards.map((c, idx) => (
            <AirBalloonCard key={idx + 1} id={idx + 1} {...c} />
          ))}
        </div>
      </section>
    </>
  );
}
