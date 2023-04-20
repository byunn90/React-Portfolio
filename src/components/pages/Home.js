import React from "react";
import pfp from "../../images/photoofme.jpg";
import "../../styles/Home.css";
function Home() {
  return (
    <section className="home">
      <div className="left">
        <img src={pfp}></img>
      </div>
      <div className="right">
        <p>Hi my name is Kayhan</p>
      </div>
    </section>
  );
}

export default Home;
