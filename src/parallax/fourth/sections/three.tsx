import styles from "./three.module.scss";
import AirBalloonCard from "../card";
import { useRef } from "react";
import { cards } from "./constants";
import { useIntersectionObserver } from "../../useIntersectionObserver";

const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};

const Section3 = () => {
  const title = useIntersectionObserver(
    useRef<HTMLDivElement>(null),
    observerOptions
  );

  return (
    <section className={styles.section3}>
      <h2
        ref={title.ref}
        className={`${styles.fadeIn} ${title.hasShown && styles.show}`}
      >
        Flight vouchers
      </h2>
      <p
        ref={title.ref}
        className={`${styles.fadeIn} ${title.hasShown && styles.show}`}
      >
        Some text about how awesome hot air balloons are, probably
      </p>
      <div className={styles.section3Gallery}>
        {cards.map((c, idx) => (
          <AirBalloonCard key={idx + 1} id={idx + 1} {...c} />
        ))}
      </div>
    </section>
  );
};

export default Section3;
