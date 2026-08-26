import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Pokoreze</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/sfw">SFW Work</Link>
        <Link to="/commissions">Commissions</Link>
        <Link to="/contact">Contact</Link>
        <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ SFW Mode" : "🌙 NSFW Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;