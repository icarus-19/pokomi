import { Link } from "react-router-dom";

function Home({ darkMode }) {
  return (
    <>
      <section className="hero">
        <p className="tag">hi i'm pokoreze</p>
        <h2 className="hero-title">
          {darkMode ? "welcome to thedark side of the Canvas" : "welcome to the light side of the canvas"}
        </h2>
        <p className="hero-sub">
          {darkMode
            ? "Mature, expressive, creative tailored to your desires."
            : "Clean, expressive digital art tailored to your tastes."}
        </p>
        <Link to="/commissions" className="cta-btn">Commission Me</Link>
      </section>

      <section className="about" id="about">
        <div className="about-text">
          <h2>About Pokoreze</h2>
          <p>
            A digital artist creating expressive, story-driven work across both
            safe and mature spaces. every piece tis talor made to your needs, intrests as well as desires.<br />
            </p>
          <a href="https://www.instagram.com/realpokoreze" target="_blank" rel="noreferrer" className="ig-link">
            📷 Follow on Instagram
          </a>
        </div>
        <div className="about-image">
          <img class="icon" src="/images/poko.jpeg" alt="Pokoreze" />
        </div>
      </section>
    </>
  );
}

export default Home;