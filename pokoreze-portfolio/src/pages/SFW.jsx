function SFW({ darkMode }) {
  const images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

  return (
    <section className="gallery">
      <h2>{darkMode ? "NSFW Gallery" : "SFW Gallery"}</h2>
      <p className="section-sub">
        {darkMode ? "18+ content — viewer discretion advised." : "A selection of recent work."}
      </p>
      <div className="gallery-grid">
        {images.map(i => (
          <div key={i} className="gallery-card">
            <img src={`/images/pic ${i}.jpeg`} alt={`artwork ${i}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SFW;