import React from "react";
import HomeAbout from "../home/homeAbout/HomeAbout";
import HomeLast from "../home/homeLast/HomeLast";
import HomeTeam from "../home/homeTeam/HomeTeam";
import AboutHeader from "./aboutHeader/AboutHeader";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <HomeAbout />
      <HomeTeam />
      <HomeLast />
    </div>
  );
};

export default About;
