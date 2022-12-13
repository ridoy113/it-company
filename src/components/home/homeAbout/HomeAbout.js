import React from "react";
import "./homeAbout.css";
import homeAboutImg from "../../../assets/Mask group.png";
import homeAboutGetImg from "../../../assets/Black.png";

const HomeAbout = () => {
  return (
    <>
      <div className="home_about_container">
        <div className="home_about_section">
          <div className="home_about_img">
            <img src={homeAboutImg} alt="" />
          </div>

          <div className="home_about_info">
            <h6>\ About Us \</h6>
            <h1>One of the Fastest Way to Business Growth</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed
            </p>

            <div className="home_about_get_container">
              <img src={homeAboutGetImg} alt="" />
              <div className="home_about_get_info">
                <h5>Get Instant Professional Advice</h5>
                <p>
                  Ready to Help : <span>+880 1874997427</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
