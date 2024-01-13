import "./index.css";

export default function Parallax1() {
  return (
    <section className="parallax1">
      <div className="left">
        <h1>
          Explore <br />
          new ways
          <br />
          to garden
        </h1>
      </div>
      <div className="right">
        <div className="p1-background-image"></div>
      </div>
      <div className="p1-front-image">
        <img src="/front.png" />
      </div>
    </section>
  );
}
