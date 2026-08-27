import { useState } from "react";

function SFW({ darkMode }) {
  const images = [1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21];
  const [selected, setSelected] = useState(null);

  return (
    <section className="gallery">
      <h2>{darkMode ? "NSFW Gallery" : "SFW Gallery"}</h2>
      <p className="section-sub">
        {darkMode ? "18+ content — viewer discretion advised." : "A selection of recent work."}
      </p>

      <div className="gallery-grid">
        {images.map(i => (
          <div key={i} className="gallery-card" onClick={() => setSelected(i)}>
            <img src={`/images/pic ${i}.jpeg`} alt={`artwork ${i}`} />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
          <img
            src={`/images/pic ${selected}.jpeg`}
            alt={`artwork ${selected}`}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default SFW;