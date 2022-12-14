import React from "react";
import "./contactTouch.css";

import social1 from "../../../assets/social (5).png";
import social2 from "../../../assets/social (2).png";
import social3 from "../../../assets/social (7).png";
import social4 from "../../../assets/social (1).png";
import social5 from "../../../assets/social (3).png";
import social6 from "../../../assets/social (4).png";
import social7 from "../../../assets/social (6).png";

const ContactTouch = () => {
  return (
    <>
      <div className="contact_touch_section">
        <div className="home_touch_container">
          <div className="home_touch_title">
            <div className="home_touch_small_title">
              <h3>\ Get In Touch \</h3>
            </div>
            <h1>Hey! Let’s Talk</h1>
          </div>

          <div className="home_touch_grid">
            <div className="home_touch_grid-1">
              <input type="text" placeholder="Name" /> <br />
              <input type="text" placeholder="Email" />
              <br />
              <input type="number" placeholder="Number" />
              <br />
              <textarea type="text" placeholder="Your Message"></textarea>
              <br />
              <button>Send Now</button>
            </div>

            <div className="home_touch_grid-2">
              <div className="home_touch_grid-2_talk">
                <div className="home_touch_grid-2_talk_img">
                  <img src={social1} alt="" />
                </div>
                <div className="home_touch_grid-2_talk-info">
                  <h4>Call Anytime</h4>
                  <p>+880 1874997427</p>
                </div>
              </div>

              <div className="home_touch_grid-2_talk">
                <div className="home_touch_grid-2_talk_img">
                  <img src={social2} alt="" />
                </div>
                <div className="home_touch_grid-2_talk-info">
                  <h4>Send Email</h4>
                  <p>ridoy123@gmail.com</p>
                </div>
              </div>

              <div className="home_touch_grid-2_talk">
                <div className="home_touch_grid-2_talk_img">
                  <img src={social3} alt="" />
                </div>
                <div className="home_touch_grid-2_talk-info">
                  <h4>Visit Us</h4>
                  <p>Comilla, Bangladesh</p>
                </div>
              </div>

              <div className="home_touch_grid-2_social-info">
                <div className="home_touch_grid-2_social-info_title">
                  <h4>Follow us</h4>
                </div>
                <div className="home_touch_grid-2_social_logo_img">
                  <div className="home_touch_grid-2_social_logo">
                    <img src={social4} alt="" />
                    <img src={social5} alt="" />
                    <img src={social6} alt="" />
                    <img src={social7} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactTouch;
