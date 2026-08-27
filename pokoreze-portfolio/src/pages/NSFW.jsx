import { useState } from "react";
import { Link } from "react-router-dom";

function NSFW() {
  const [confirmed, setConfirmed] = useState(false);
  const [selected, setSelected] = useState(null);
  const Images = [1,2,3,4,5,6,7,8,9,10,11,12,13];

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
        {Images.map(i => (
          <div key={i} className="gallery-card" onClick={() => setSelected(i)}>
            <img src={`/images/nsfw/pics${i}.jpeg`} alt={`artwork ${i}`} />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
          <img
            src={`/images/nsfw/pics${selected}.jpeg`}
            alt={`artwork ${selected}`}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default NSFW;