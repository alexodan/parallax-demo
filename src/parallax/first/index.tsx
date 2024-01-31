import styles from "./index.module.scss";
import Navbar from "./navbar";

export default function Parallax1() {
  return (
    <>
      <Navbar />
      <section className={styles.parallax1}>
        <div className={styles.left}>
          <h1 role="heading" aria-level={1}>
            Explore
            <span className={styles.uNewline}></span>
            new ways
            <span className={styles.uNewline}></span>
            to garden
          </h1>
        </div>
        <div className={styles.right}>
          <div className={styles.backgroundImage}></div>
        </div>
        <div className={styles.frontImage}>
          <img src="/parallax-demo/front.png" alt="front image" />
        </div>
      </section>
      {/* Duplicating content just to showcase the parallax */}
      <section className={styles.parallax1}>
        <div className={styles.left}>
          <h1 role="heading" aria-level={1}>
            Explore
            <span className={styles.uNewline}></span>
            new ways
            <span className={styles.uNewline}></span>
            to garden
          </h1>
        </div>
        <div className={styles.right}>
          <div className={styles.backgroundImage}></div>
        </div>
        <div className={styles.frontImage}>
          <img src="/parallax-demo/front.png" alt="front image" />
        </div>
      </section>
    </>
  );
}
