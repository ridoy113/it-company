import React from "react";
import "./footer.css";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaReact,
  FaWordpressSimple,
  FaWix,
} from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer_section">
      <div className="footer_container">
        <div className="footer_grid">
          <div className="footer_grid-1">
            <h1>About Us</h1>
            <h2></h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at
            </p>
            <div className="footer_grid-1_logo">
              <h1>
                <FaLinkedinIn />
              </h1>
              <h1>
                <FaFacebookF />
              </h1>
              <h1>
                <AiOutlineTwitter />
              </h1>
              <h1>
                <AiOutlineInstagram />
              </h1>
            </div>
          </div>

          <div className="footer_grid-2">
            <h1>Services</h1>
            <h2></h2>
            <p>Web Design/Development</p>
            <p>App Development</p>
            <p>UI/UX Design</p>
            <p>HubSpot Integration</p>
            <p>Email Marketing</p>
            <p>Website Migration</p>
          </div>

          <div className="footer_grid-3">
            <h1>Career</h1>
            <h2></h2>
            
            <div className="footer_carer_part">
              <div className="footer_carer_part_logo">
                <h3>
                  <FaReact />
                </h3>
              </div>
              <div className="footer_carer_part_info">
                <h5>ReactJs Dev.</h5>
                <p>
                  <small>1-5 Years of Exp.</small>
                </p>
              </div>
            </div>

            <div className="footer_carer_part">
              <div className="footer_carer_part_logo">
                <h3>
                  <FaWordpressSimple />
                </h3>
              </div>
              <div className="footer_carer_part_info">
                <h5>Wordpress Dev.</h5>
                <p>
                  <small>1-5 Years of Exp.</small>
                </p>
              </div>
            </div>

            <div className="footer_carer_part">
              <div className="footer_carer_part_logo">
                <h3>
                  <FaWix />
                </h3>
              </div>
              <div className="footer_carer_part_info">
                <h5>Python Developer</h5>
                <p>
                  <small>1-5 Years of Exp.</small>
                </p>
              </div>
            </div>
          </div>

          <div className="footer_grid-4">
            <h1>Services</h1>
            <span></span>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable{" "}
            </p>
            <input type="email" placeholder="Email" name="" id="" /> <br />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
