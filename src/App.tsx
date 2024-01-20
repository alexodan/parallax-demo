import styles from "./App.module.scss";
import { Link, Route } from "wouter";
import Parallax1 from "./parallax/first";
import Parallax4 from "./parallax/fourth";

const App = () => (
  <div className={styles.app}>
    <Route
      path="/"
      component={() => {
        return (
          <div>
            <Link className="link" to="/parallax/1">
              First challenge
            </Link>
            <br />
            <Link className="link" to="/parallax/4">
              Fourth challenge
            </Link>
          </div>
        );
      }}
    />
    <Route path="/parallax/1" component={() => <Parallax1 />} />
    <Route path="/parallax/4" component={() => <Parallax4 />} />
  </div>
);

export default App;
