import React from "react";
import HomeAbout from "./homeAbout/HomeAbout";
import HomeHeader from "./homeHeader/HomeHeader";
import HomePlannings from "./homePlanning/HomePlannings";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeAbout />
      <HomePlannings />
    </>
  );
};

export default Home;
