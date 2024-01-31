import styles from "./Navbar.module.scss";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/parallax-demo" className={styles.navbarLogo}>
        Home
      </Link>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarMenuItem}>
          <Link to="/parallax-demo">About</Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <Link to="/parallax-demo">Products & Offering</Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <Link to="/parallax-demo">Space & Design</Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <Link to="/parallax-demo">-</Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <Link to="/parallax-demo">English / Spanish</Link>
        </li>
      </ul>
    </nav>
  );
}
