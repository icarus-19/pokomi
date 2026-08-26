import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      
      {/* NAV */}
      <nav className="navbar">
        <h1 className="logo">Pokoreze</h1>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#sfw">SFW Work</a>
          <a href="#commissions">Commissions</a>
          <a href="#contact">Contact</a>
          <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ SFW" : "🌙 NSFW"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <p className="tag">Digital Artist</p>
        <h2 className="hero-title">
          {darkMode ? "The Other Side of the Canvas" : "Where Art Meets Soul"}
        </h2>
        <p className="hero-sub">
          {darkMode
            ? "Mature, expressive, and unapologetically creative."
            : "Clean, expressive digital art for every story worth telling."}
        </p>
        <a href="#commissions" className="cta-btn">Commission Me</a>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-text">
          <h2>About Pokoreze</h2>
          <p>
            A digital artist creating expressive, story-driven work across both 
            safe and mature spaces. Every piece is crafted with intention, 
            emotion, and a distinct visual voice.
          </p>
          <a href="https://instagram.com/pokoreze" target="_blank" rel="noreferrer" className="ig-link">
            📷 Follow on Instagram
          </a>
        </div>
        <div className="about-image">
          <div className="placeholder-img">Art Here</div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="sfw">
        <h2>{darkMode ? "NSFW Gallery" : "SFW Gallery"}</h2>
        <p className="section-sub">
          {darkMode ? "18+ content — viewer discretion advised." : "A selection of recent work."}
        </p>
        <div className="gallery-grid">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="gallery-card">
              <div className="gallery-placeholder">Artwork {i}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMISSIONS */}
      <section className="commissions" id="commissions">
        <h2>Commissions</h2>
        <p className="section-sub">Open for commissions — let's create something together.</p>
        <div className="commission-cards">
          <div className="commission-card">
            <h3>Sketch</h3>
            <p className="price">From $15</p>
            <p>Rough sketch, one character, no background.</p>
          </div>
          <div className="commission-card">
            <h3>Line Art</h3>
            <p className="price">From $30</p>
            <p>Clean linework, one character, simple background.</p>
          </div>
          <div className="commission-card featured">
            <h3>Full Colour</h3>
            <p className="price">From $60</p>
            <p>Fully rendered piece with shading and background.</p>
          </div>
        </div>
        {darkMode && (
          <p className="nsfw-note">
            🔞 For NSFW commissions, please reach out directly via Instagram DM.
          </p>
        )}
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Get In Touch</h2>
        <p>For commissions, collabs, or just to say hi — slide into the DMs.</p>
        <a href="https://instagram.com/pokoreze" target="_blank" rel="noreferrer" className="cta-btn">
          Instagram
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Pokoreze. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;