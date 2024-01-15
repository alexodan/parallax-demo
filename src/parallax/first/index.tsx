import styles from "./index.module.scss";
import Navbar from "./navbar";

export default function Parallax1() {
  return (
    <>
      <Navbar />
      <section className={styles.parallax1}>
        <div className={styles.left}>
          <h1>
            Explore <br />
            new ways
            <br />
            to garden
          </h1>
        </div>
        <div className={styles.right}>
          <div className={styles.backgroundImage}></div>
        </div>
        <div className={styles.frontImage}>
          <img src="/front.png" />
        </div>
      </section>
      {/* Duplicating content just to showcase the parallax */}
      <section className={styles.parallax1}>
        <div className={styles.left}>
          <h1>
            Explore <br />
            new ways
            <br />
            to garden
          </h1>
        </div>
        <div className={styles.right}>
          <div className={styles.backgroundImage}></div>
        </div>
        <div className={styles.frontImage}>
          <img src="/front.png" />
        </div>
      </section>
    </>
  );
}
