import React from "react";
import "./homeTouch.css";

const HomeTouch = () => {
  return (
    <>
      <div className="home_touch_section">
        <div className="home_touch_container">
          <div className="home_touch_title">
            <h4>\ Get In Touch \</h4>
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

            <div className="home_touch_grid-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTouch;
