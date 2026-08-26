import { useState } from "react";
import { Link } from "react-router-dom";

function NSFW() {
  const [confirmed, setConfirmed] = useState(false);

  if (!confirmed) {
    return (
      <div className="age-gate">
        <h2>🔞 Mature Content</h2>
        <p>This section contains adult content intended for viewers 18 and older.</p>
        <p>By continuing you confirm you are 18 or older.</p>
        <div className="age-gate-buttons">
          <button className="cta-btn" onClick={() => setConfirmed(true)}>
            I am 18+ — Enter
          </button>
          <Link to="/" className="cta-btn secondary">Go Back</Link>
        </div>
      </div>
    );
  }

  return (
    <section className="gallery">
      <h2>NSFW Gallery</h2>
      <p className="section-sub">18+ content — viewer discretion advised.</p>
      <div className="gallery-grid">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="gallery-card">
            <div className="gallery-placeholder">Artwork {i}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NSFW;