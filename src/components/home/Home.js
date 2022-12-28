import React from "react";
import HomeAbout from "./homeAbout/HomeAbout";
import HomeBlog from "./homeBlog/HomeBlog";
import HomeHeader from "./homeHeader/HomeHeader";
import HomeLast from "./homeLast/HomeLast";
import HomePlannings from "./homePlanning/HomePlannings";
import HomeServices from "./homeServices/HomeServices";
import HomeTeam from "./homeTeam/HomeTeam";
import HomeTouch from "./homeTouch/HomeTouch";
import HomeWhat from "./homeWhat/HomeWhat";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeAbout />
      <HomePlannings />
      <HomeWhat />
      <HomeServices />
      <HomeTeam />
      <HomeTouch />
      <HomeBlog />
      <HomeLast />
    </>
  );
};

export default Home;
