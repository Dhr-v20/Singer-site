// import React from "react";

// export default function Gallery() {
//   return (
//     <section className="page">
//       <h2>Gallery</h2>
//       <p>Photo gallery of the singer's concerts, albums, and events.</p>
//     </section>
//   );
// }


      

import React, { useState } from "react";


export default function Gallery() {
  const images = [
     "011020111382.jpg",
    "011020111381.jpg",
     "250920111327.jpg",
    "311020111632.jpg",
    "20130815_155356.jpg",
    "IMG_2952.JPG",
    "20130815_172520.jpg",
    "20130815_190002.jpg",
    "20130815_191007.jpg",
    "20131018_005153.jpg",
    "20131128_112627.jpg",
    "20131217_220014.jpg",
    "20131224_212013.jpg",
    "20140515_160416.jpg",
    "20140814_204437.jpg",
    "20140916_200120.jpg",
    "01032009304.jpg",
    "01032009308.jpg",
    "02062011664.jpg",
    "011020111378.jpg",
    
    "011020111382.jpg",
    "14032009352.jpg",
    "14032009355.jpg",
    "23062009616.jpg",
    "161120111876.jpg",
   
    "DSC_0320.JPG",
    "DSC_0709.JPG",
    "IMG_0934.JPG",
    
    "IMG-20130925-WA0008.jpg",
    "IMG-20140607-WA0029.jpg",
    "IMG-20140704-WA0041.jpg",
    "IMG-20140704-WA0051.jpg",
    "Photo(062).jpg",
    "Photo(348).jpg",
    "Vrrenbhai 4.jpg",

  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const nextImage = () =>
    setSelectedIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <p className="gallery-subtitle">
        A glimpse of live concerts, albums, and special events.
      </p>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item" onClick={() => openImage(index)}>
            <img src={src} alt={`Gallery ${index + 1}`} />
            <div className="overlay">
              <span>View</span>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeImage}>✖</button>
          <button className="prev-btn" onClick={prevImage}>⟨</button>
          <img
            src={images[selectedIndex]}
            alt={`Gallery Full ${selectedIndex + 1}`}
            className="lightbox-img"
          />
          <button className="next-btn" onClick={nextImage}>⟩</button>
        </div>
      )}
    </section>
  );
}

