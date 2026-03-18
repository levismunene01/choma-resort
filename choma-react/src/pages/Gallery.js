import { useState } from "react";

function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
  ];

  return (
    <section className="gallery">
      <h2>Food Gallery</h2>

      <div className="gallery-container">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="gallery-img"
            onClick={() => setLightbox(img)}
          />
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <span className="close-lightbox">×</span>
          <img src={lightbox} alt="" />
        </div>
      )}
    </section>
  );
}

export default Gallery;