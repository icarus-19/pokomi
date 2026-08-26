import { Link } from "react-router-dom";

function Home({ darkMode }) {
  return (
    <>
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
        <Link to="/commissions" className="cta-btn">Commission Me</Link>
      </section>

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
    </>
  );
}

export default Home;