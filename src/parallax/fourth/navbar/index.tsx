import styles from "./Navbar.module.scss";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarMenuItem}>
          <Link to="/">Order</Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <Link to="/">Locations</Link>
        </li>
        <li className={styles.navbarMenuLogo}>
          <Link to="/">
            <img src="/assets/p4/air-balloon-icon.png" alt="Logo" />{""}
          </Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <Link to="/">Galleries</Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <Link to="/">About</Link>
        </li>
      </ul>
    </nav>
  );
}
