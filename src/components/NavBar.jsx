import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="brand-container">
        <Link to="/">
          <img
            src="/images/brand.png"
            alt="Brand Logo"
            className="brand-logo"
          />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
