function Commissions({ darkMode }) {
  return (
    <section className="commissions">
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
  );
}

export default Commissions;