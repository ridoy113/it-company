import React from "react";
import "./homeHeader.css";

import homeHeaderImg from "../../../assets/Group 18.png";

const HomeHeader = () => {
  return (
    <>
      <div className="home_header">
        <div className="home_header_first_title">
          <div className="home_header_title">
            <p>\ We Are Here \</p>
            <h1>Better Insight For Business Growth</h1>
            <button>View More</button>
          </div>
        </div>

        <div className="home-header_img">
          <img src={homeHeaderImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
