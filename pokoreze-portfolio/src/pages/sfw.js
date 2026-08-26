function SFW({ darkMode }) {
  return (
    <section className="gallery">
      <h2>{darkMode ? "NSFW Gallery" : "SFW Gallery"}</h2>
      <p className="section-sub">
        {darkMode ? "18+ content — viewer discretion advised." : "A selection of recent work."}
      </p>
      <div className="gallery-grid">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="gallery-card">
            <div className="gallery-placeholder">
              {darkMode ? `NSFW Art ${i}` : `Artwork ${i}`}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SFW;