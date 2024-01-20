import styles from "./Navbar.module.scss";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarMenuItem}>
          <Link to="/">About</Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <Link to="/">Products & Offering</Link>
        </li>
        <li>
          <Link to="/" className={styles.navbarLogo}>
            Home
          </Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <Link to="/">Space & Design</Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <Link to="/">English / Spanish</Link>
        </li>
      </ul>
    </nav>
  );
}
