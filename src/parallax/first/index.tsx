import "./index.scss";
import Navbar from "./navbar";

export default function Parallax1() {
  return (
    <>
      <Navbar />
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
      {/* Duplicating content just to showcase the parallax */}
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
    </>
  );
}
