import styles from "./App.module.scss";
import { Link, Route } from "wouter";
import Parallax1 from "./parallax/first";

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
          </div>
        );
      }}
    />
    <Route path="/parallax/1" component={() => <Parallax1 />} />
  </div>
);

export default App;
