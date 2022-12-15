import React from "react";
import "./homeWhat.css";
import homeWhatImg from "../../../assets/Mask group (1).png";
import hwSmallimg1 from "../../../assets/Black (5).png";
import hwSmallimg2 from "../../../assets/Black (6).png";

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

            <div className="home_what_small_card">
              <div className="home_what_single_card">
                <img src={hwSmallimg1} alt="" />
                <div className="home_what_single_card_info">
                  <h5>Our Vision</h5>
                  <p>
                    It is a long esta <br />
                    -blished fact that
                  </p>
                </div>
              </div>

              <div className="home_what_single_card">
                <img src={hwSmallimg2} alt="" />
                <div className="home_what_single_card_info">
                  <h5>Our Goal</h5>
                  <p>
                    It is a long esta <br />
                    -blished fact that
                  </p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWhat;
