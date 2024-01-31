import styles from "./two.module.scss";
import { useIntersectionObserver } from "../../useIntersectionObserver";
import { useRef } from "react";

const observerOptions = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.3,
};

const Section2 = () => {
  const top = useIntersectionObserver(
    useRef<HTMLDivElement>(null),
    observerOptions
  );
  const bottom = useIntersectionObserver(
    useRef<HTMLDivElement>(null),
    observerOptions
  );

  return (
    <section className={styles.two}>
      <div className={styles.top} ref={top.ref}>
        <div
          className={`${styles.topLeft} ${styles.fadeIn} ${
            top.hasShown && styles.show
          }`}
        >
          <img
            loading="lazy"
            src="/assets/p2/left2.jpg"
            alt="photo of many air balloons"
          />
        </div>
        <div ref={top.ref}>
          <h2
            role="heading"
            aria-level={2}
            className={`${styles.topRight} ${styles.fadeIn} ${
              top.hasShown && styles.show
            }`}
          >
            Air
            <span className={styles.uNewline}></span>
            balloons
            <span className={styles.uNewline}></span>
            festivals
          </h2>
          <p
            className={`${styles.topRight} ${styles.fadeIn} ${
              top.hasShown && styles.show
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            rerum minima illo fuga, beatae sunt voluptates consequatur totam
            laudantium.
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div ref={bottom.ref}>
          <h2
            role="heading"
            aria-level={2}
            className={`${styles.bottomLeft} ${styles.fadeIn} ${
              bottom.hasShown && styles.show
            }`}
          >
            About
            <span className={styles.uNewline}></span>
            air balloons
            <span className={styles.uNewline}></span>
            safety
          </h2>
          <p
            className={`${styles.bottomLeft} ${styles.fadeIn} ${
              bottom.hasShown && styles.show
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            rerum minima illo fuga, beatae sunt voluptates consequatur totam
            laudantium.
          </p>
        </div>
        <div
          ref={bottom.ref}
          className={`${styles.bottomRight} ${styles.fadeIn} ${
            bottom.hasShown && styles.show
          }`}
        >
          <img
            loading="lazy"
            src="/assets/p2/right2.jpg"
            alt="photo of an air balloon deflating"
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
