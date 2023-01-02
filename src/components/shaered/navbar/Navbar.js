import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { GoThreeBars } from "react-icons/go";
import navlogo from "../../../assets/Group 66.png";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={navlogo} alt="" />
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Our Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/portfolio"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blogs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? <GoThreeBars /> : <GoThreeBars />}>
              <GoThreeBars />
            </i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
