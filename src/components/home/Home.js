import React from "react";
import "./home.css";
import homeHeaderImg from "../../../src/assets/Group 18.png";

const Home = () => {
  return (
    <>
      <div className="home_header">
        <div className="home_header_title">
          <p>\ We Are Here \</p>
          <h1>Better Insight For Business Growth</h1>
          <button>View More</button>
        </div>

        <div className="home-header_img">
          <img src={homeHeaderImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
