 import {Link } from "react-router-dom";
 
export default function Home() {
  const videos = [
    {
      id: 1,
      title: "Karo Hukam Dwarikadhish",
      url: "https://www.youtube.com/watch?v=k_vp3y_az1U&pp=ygUPdmlyZW4gcHJhamFwYXRp",
      thumbnail: "https://i.ytimg.com/vi/k_vp3y_az1U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCBHe0G45hTlUKOr81MQuHe9YI7JQ"
    },
    {
      id: 2,
      title: "Dev Maro Dwarika Vado",
      url: "https://www.youtube.com/watch?v=nsXm-smRct4&pp=ygUPdmlyZW4gcHJhamFwYXRp",
      thumbnail: "https://i.ytimg.com/vi/nsXm-smRct4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCtzS2jfi_okWJbQeofB3VcvZnP_Q"
    },
    {
      id: 3,
      title: "vaheli parodhe pankhi bole",
      url: "https://www.youtube.com/watch?v=VxRhUtq19Bk&pp=ygUPdmlyZW4gcHJhamFwYXRp",
      thumbnail: "https://i.ytimg.com/vi/VxRhUtq19Bk/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgRigmMA8=&rs=AOn4CLAMDSGMmAnm7F5zAu666unyEjOeIA"
    },
    {
      id: 4,
      title: "Ranujana Ray Ramapir",
      url: "https://www.youtube.com/watch?v=IUeMA5nkoKk&pp=ygUPdmlyZW4gcHJhamFwYXRp",
      thumbnail: "https://i.ytimg.com/vi/IUeMA5nkoKk/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHUBoAC4AOKAgwIABABGGYgEyh_MA8=&rs=AOn4CLBplPE9m1CyQFRxnBpPoFyJ85QPUw"
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content container">
          <>
          <img src="/Background.jpeg" alt="sdfs" />
          </>
          <h1>Viren Prajapati's Official Website</h1>
          <p>Feel and enjoy Gujarati cultural music, with viren prajapati.</p>
              <Link to="/biography">
              <button>Explore More</button>
              </Link>

        </div>
      </section>
      <section className="second page 1">
          <h2>About Viren Prajapati</h2>
        <>
        <div className="abinfo">
           <div className="Abimage">
            <img src=" homeimg.jpeg " alt="abimsge"/>
                      
           </div>

         <div className="Abtext">
          <p>
           Singing is in my blood from my childhood which was being opposed at home during that time ,but my teacher saw that hidden talent in me and took me to a singing competition of school where I do my best and i got many friends and suppoters , from that time . Then started my never ending journey of singing. I started singing during annual events of school. I joined college but i never forgot my goal. Only thing I enjoyed was to eagerly wait for annual event for singing and won first prize in singing there.
           Now I am a good singer and also a primary teacher. I am very thankful to my parents, teachers and friends who supported me a lot in this journey.
          </p>
         </div> 

        </div>
        </>
      </section>
      <section className="page">
        <h2>Welcome to Singer's World</h2>
        <p>Enjoy music, videos, and the journey of your favorite artist.</p>

        <div className="video-showcase">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card"
            >
              <img src={video.thumbnail} alt={video.title} />
              <div className="play-btn">▶</div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
