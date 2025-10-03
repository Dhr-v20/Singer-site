// import React from "react";



// export default function Biography() {
  
//   return <> <h1>Biography Page</h1>
//   <p>Write about the singer's journey, achievements, and milestones here.</p>
//   </>;
// }

import React from "react";


export default function Biography() {
  const biographyItems = [
    {
      img: "WhatsApp Image 2025-09-26 at 1.49.01 PM.jpeg",
      title: "Early Journey",
      text: "Viren Prajapati started his singing journey at a young age, inspired by traditional Gujarati folk music."
    },
    {
      img: "WhatsApp Image 2025-09-26 at 1.45.20 PM.jpeg",
      title: "First Breakthrough",
      text: "He gained recognition after his first live performance that captured the hearts of many."
    },
    {
      img: "WhatsApp Image 2025-09-26 at 1.45.33 PM.jpeg",
      title: "Achievements",
      text: "He Got 20+ Awards for viral songs and for film playback singing."
    },
    {
      img: "WhatsApp Image 2025-09-26 at 1.46.37 PM.jpeg",
      title: "Performances",
      text: "From India to Canada, Viren has spread Gujarati music across the globe."
    },
    {
      img: "WhatsApp Image 2025-09-26 at 1.46.52 PM.jpeg",
      title: "Current Work",
      text: "Today, he continues to release new songs and inspire the next generation of artists."
    },
    {
      img: "WhatsApp Image 2025-09-26 at 1.47.04 PM.jpeg",
      title: "Current Work",
      text: "Now , he makes music videos and songs for films also ans he also connected with instagram and facebook by creating reels and post daily."
    },
    {
      img: "WhatsApp Image 2025-09-26 at 1.49.01 PM.jpeg",
      title: "Work With Celebrities",
      text: "He is also worked with many celebrities like Naresh Kanodia , Hiten Kumar , Jignesh Kaviraj , Sadhna sargam , Geeta Rabari , Aishwarya Majmudar , rakesh barot , Maulik Maheta  etc."
    },
  ];

  return (
    <div className="biography-container">
      <h1 className="bio-title">Biography</h1>
      <p className="bio-subtitle">
        A glimpse into the inspiring journey, achievements, and milestones of <span className="highlight">Viren Prajapati</span>.
      </p>

      <div className="timeline">
        {biographyItems.map((item, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="content">
              <img src={item.img} alt={item.title} />
              <div className="text-box">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
