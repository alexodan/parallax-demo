import styles from "./two.module.scss";
import { useIntersectionObserver } from "../../useIntersectionObserver";
import { useRef } from "react";

const observerOptions = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.3,
};

const Section2 = () => {
  // Should the useRef be inside the hook? why/why not
  // The only reason I thought of is the user _might_ want to handle the ref for
  // something else, so it is a bit more open to accept a ref than creating one.
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
            top.isFirstShown && styles.show
          }`}
        >
          <img loading="lazy" src="/assets/p2/left2.jpg" />
        </div>
        <div ref={top.ref}>
          <h2
            className={`${styles.topRight} ${styles.fadeIn} ${
              top.isFirstShown && styles.show
            }`}
          >
            Air <br />
            balloons <br />
            festivals
          </h2>
          <p
            className={`${styles.topRight} ${styles.fadeIn} ${
              top.isFirstShown && styles.show
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
            className={`${styles.bottomLeft} ${styles.fadeIn} ${
              bottom.isFirstShown && styles.show
            }`}
          >
            About <br />
            air balloons
            <br /> safety
          </h2>
          <p
            className={`${styles.bottomLeft} ${styles.fadeIn} ${
              bottom.isFirstShown && styles.show
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
            bottom.isFirstShown && styles.show
          }`}
        >
          <img loading="lazy" src="/assets/p2/right2.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
