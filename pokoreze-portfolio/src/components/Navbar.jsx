import { Link, useNavigate } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const handleToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      navigate('/nsfw');
    } else {
      navigate('/sfw');
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Pokoreze</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to={darkMode ? "/nsfw" : "/sfw"}>
          {darkMode ? "NSFW Work" : "SFW Work"}
        </Link>
        <Link to="/commissions">Commissions</Link>
        <Link to="/contact">Contact</Link>
        <button className="mode-toggle" onClick={handleToggle}>
          {darkMode ? "☀️ SFW Mode" : "🌙 NSFW Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;