import styles from "./one.module.scss";
import btnStyles from "../button.module.scss";

const Section1 = () => {
  return (
    <section className={styles.one}>
      <div className={styles.left}>
        <h1 role="heading" aria-level={1}>
          Air
          <span className={styles.uNewline}></span>
          balloon
          <span className={styles.uNewline}></span>
          flights
        </h1>
        <p>
          Some text saying something about how awesome air balloon flights are
          and that you should try it sometime, or maybe something else idk
        </p>
        <button className={btnStyles.btn}>Order now!</button>
      </div>
      <div className={styles.right}>
        <img
          src="/parallax-demo/assets/p1/air-balloon1.png"
          alt="a hot air balloon"
        />
      </div>
    </section>
  );
};

export default Section1;
