import { useEffect } from "react";
// import styles from "./card.scss";
import "./card.scss";

const AirBalloonCard = ({
  id,
  title,
  description,
  threshold,
}: {
  id: number;
  title: string;
  description: string;
  threshold: number;
}) => {
  console.log("card ", id, "threshold", threshold);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
    };
    const observer = new IntersectionObserver(
      (entries) => {
        // it's ackshually supposed to be just one entry
        entries.forEach((entry) => {
          console.log("card");
          if (entry.isIntersecting) {
            entry.target.classList.add("inView");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        ...observerOptions,
        threshold: 0,
        // threshold: threshold / 100,
      }
    );

    const card = document.querySelector(`[data-id="${id}"]`) as HTMLElement;
    if (card) {
      console.log("card:", card);
      card.style.setProperty("--push-down", `${threshold * 3}px`);
      observer.observe(card);
    }
  }, [id, threshold]);

  return (
    <figure data-id={id} className={`card fadeIn`}>
      <img className={"img"} src={`/assets/p4/card${id}.png`} />
      <figcaption>
        <h3>{title}</h3>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
};

export default AirBalloonCard;
