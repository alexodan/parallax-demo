import "./Navbar.scss";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/" className="Navbar-logo">
        Home
      </Link>
      <ul className="Navbar-menu">
        <li className="menu-item">
          <Link to="/">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/">Products & Offering</Link>
        </li>
        <li className="menu-item">
          <Link to="/">Space & Design</Link>
        </li>
        <li className="menu-item">
          <Link to="/">-</Link>
        </li>
        <li className="menu-item">
          <Link to="/">English / Spanish</Link>
        </li>
      </ul>
    </nav>
  );
}
