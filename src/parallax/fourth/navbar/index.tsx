import styles from "./Navbar.module.scss";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarMenuItem}>
          <Link to="/parallax-demo">Order</Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <Link to="/parallax-demo">Locations</Link>
        </li>
        <li className={styles.navbarMenuLogo}>
          <Link to="/parallax-demo">
            <img
              src="/parallax-demo/assets/p4/air-balloon-icon.png"
              alt="Logo"
            />
            {""}
          </Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <Link to="/parallax-demo">Galleries</Link>
        </li>
        <li className={styles.navbarMenuItem}>
          <Link to="/parallax-demo">About</Link>
        </li>
      </ul>
    </nav>
  );
}
