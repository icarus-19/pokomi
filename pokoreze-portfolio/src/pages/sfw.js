function SFW() {
  return (
    <section className="gallery">
      <h2>SFW Gallery</h2>
      <p className="section-sub">A selection of recent work.</p>
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

export default SFW;