import React from "react";
import HomeAbout from "../home/homeAbout/HomeAbout";
import HomeTeam from "../home/homeTeam/HomeTeam";
import AboutHeader from "./aboutHeader/AboutHeader";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <HomeAbout />
      <HomeTeam />
    </div>
  );
};

export default About;
