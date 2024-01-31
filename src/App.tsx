import styles from "./App.module.scss";
import { Link, Route } from "wouter";
import Parallax1 from "./parallax/first";
import Parallax4 from "./parallax/fourth";

const App = () => (
  <main className={styles.app}>
    <Route
      path="/parallax-demo"
      component={() => {
        return (
          <div>
            <Link className="link" to="/parallax-demo/parallax/1">
              First challenge
            </Link>
            <br />
            <Link className="link" to="/parallax-demo/parallax/4">
              Fourth challenge
            </Link>
          </div>
        );
      }}
    />
    <Route path="/parallax-demo/parallax/1" component={() => <Parallax1 />} />
    <Route path="/parallax-demo/parallax/4" component={() => <Parallax4 />} />
  </main>
);

export default App;
