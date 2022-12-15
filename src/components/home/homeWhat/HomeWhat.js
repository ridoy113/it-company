import React from "react";
import "./homeWhat.css";
import homeWhatImg from "../../../assets/Mask group (1).png";

const HomeWhat = () => {
  return (
    <>
      <div className="home_about_container">
        <div className="what_about_section">
          <div className="home_about_img">
            <img src={homeWhatImg} alt="" />
          </div>

          <div className="home_about_info">
            <h4>\ What We Do \</h4>
            <h1>We Develope Product That People Love to Use.</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed, Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWhat;
