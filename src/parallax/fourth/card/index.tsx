import styles from "./card.module.scss";
import { useIntersectionObserver } from "../../useIntersectionObserver";
import { CSSProperties, useRef } from "react";

const observerOptions = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
};

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
  const cardRef = useIntersectionObserver(useRef<HTMLDivElement>(null), {
    ...observerOptions,
    threshold: 0,
  });

  return (
    <figure
      ref={cardRef.ref}
      style={{ "--push-down": `${threshold * 3}px` } as CSSProperties}
      className={`${styles.card} ${styles.fadeIn} ${
        cardRef.isInViewport && styles.show
      }`}
    >
      <img
        className={styles.img}
        src={`/assets/p4/card${id}.png`}
        alt={`hot air balloon number ${id}`}
      />
      <figcaption>
        <h3>{title}</h3>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
};

export default AirBalloonCard;
