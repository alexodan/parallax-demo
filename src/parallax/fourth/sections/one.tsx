import "./one.scss";
import "../button.scss";

const Section1 = () => {
  return (
    <section className="one">
      <div className="left">
        <h1>
          Air <br />
          balloon <br />
          flights
        </h1>
        <p>
          Some text saying something about how awesome air balloon flights are
          and that you should try it sometime, or maybe something else idk
        </p>
        <button className="btn">Order now!</button>
      </div>
      <div className="right">
        <img src="/assets/p1/air-balloon1.png" />
      </div>
    </section>
  );
};

export default Section1;
