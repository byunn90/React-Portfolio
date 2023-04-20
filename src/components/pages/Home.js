import React from "react";
import pfp from "../../images/KayhanImage.jpg";
import "../../styles/Home.css";

function Home() {
  return (
    <section className="home">
      <div className="left">
        <div className="image-container">
          <img src={pfp} alt="Kayhan Mamak" className="portrait" />
        </div>
      </div>
      <div className="right">
        <div className="cloud-container">
          <p className="about-me">
            Hi, I'm Kayhan Mamak. As a full-stack developer, I am passionate
            about building web applications using modern technologies. I am
            particularly interested in the MERN stack and currently honing my
            skills in React. I love using my creativity and attention to detail
            to build unique and innovative solutions for my clients. In my free
            time, I enjoy exploring new technologies and experimenting with new
            coding techniques to improve my skills. Thank you for visiting my
            portfolio, and I look forward to hearing from you!
          </p>
          <div>
            <a href="../../CV/kayhanResume.pdf" download>
              <button>Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
