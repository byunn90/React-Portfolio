import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaNpm,
} from "react-icons/fa";
import pfp from "../../images/KayhanImage.jpg";
import myResume from "../../CV/kayhanResume.pdf";
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
          <header className="aboutMe-Header">About Me</header>
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
          <div className="resume">
            <a href={myResume} download>
              <button>Resume</button>
            </a>
          </div>
          <div className="skillset">
            <h4>Skill Set</h4>
            <ul>
              <li>
                <FaHtml5 style={{ color: "#E44D26" }} />
              </li>
              <li>
                <FaCss3Alt style={{ color: "#1572B6" }} />
              </li>
              <li>
                <FaJs style={{ color: "#F7DF1E" }} />
              </li>
              <li>
                <FaReact style={{ color: "#61DBFB" }} />
              </li>
              <li>
                <FaNodeJs style={{ color: "#3C873A" }} />
              </li>
              <li>
                <FaServer style={{ color: "#F5D04C" }} />
              </li>
              <li>
                <FaDatabase style={{ color: "#3C3C3D" }} />
              </li>
              <li>
                <FaNpm style={{ color: "#CB3837" }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
