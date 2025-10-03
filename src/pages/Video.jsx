// import React from "react";

// export default function Video() {
//   return (
//     <section className="page">
//       <h2>Videos</h2>
//       <p>Watch the latest music videos and live performances.</p>
//     </section>
//   );
// }



import React, { useState } from "react";


export default function Video() {
  // Demo video list (replace with your own YouTube / MP4 links)
  const videos = [
    { src: "", type: "landscape" },
    { src: "", type: "portrait" },
    { src: "", type: "landscape" },
    { src: "", type: "portrait" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openVideo = (index) => setSelectedIndex(index);
  const closeVideo = () => setSelectedIndex(null);

  const nextVideo = () =>
    setSelectedIndex((prev) => (prev + 1) % videos.length);

  const prevVideo = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );

  return (
    <section className="video-section">
      <h2 className="video-title">Videos</h2>
      <p className="video-subtitle">
        Watch the latest music videos and live performances.
      </p>

      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-item" onClick={() => openVideo(index)}>
            <video src={video.src} muted loop playsInline />
            <div className="overlay">
              <span>Play</span>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="video-lightbox">
          <button className="close-btn" onClick={closeVideo}>✖</button>
          <button className="prev-btn" onClick={prevVideo}>⟨</button>

          <div className="video-wrapper">
            <video
              src={videos[selectedIndex].src}
              controls
              autoPlay
              className={`lightbox-video ${videos[selectedIndex].type}`}
            />
          </div>

          <button className="next-btn" onClick={nextVideo}>⟩</button>
        </div>
      )}
    </section>
  );
}
