import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    setMenuOpen(false);
    if (newMode) {
      navigate('/nsfw');
    } else {
      navigate('/sfw');
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>Pokoreze</Link>

      {/* Hamburger button — visible on mobile only */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Nav links — slide open on mobile */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to={darkMode ? "/nsfw" : "/sfw"} onClick={closeMenu}>
          {darkMode ? "NSFW Work" : "SFW Work"}
        </Link>
        <Link to="/commissions" onClick={closeMenu}>Commissions</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <button className="mode-toggle" onClick={handleToggle}>
          {darkMode ? "☀️ SFW Mode" : "🌙 NSFW Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;