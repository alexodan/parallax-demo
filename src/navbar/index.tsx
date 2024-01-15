import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar-logo">Icon</div>
      <ul className="Navbar-menu">
        <li className="menu-item">About</li>
        <li className="menu-item">Products & Offering</li>
        <li className="menu-item">Space & Design</li>
        <li className="menu-item">-</li>
        <li className="menu-item">English / Spanish</li>
      </ul>
    </nav>
  );
}
