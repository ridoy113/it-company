import React from "react";
import HomeAbout from "./homeAbout/HomeAbout";
import HomeHeader from "./homeHeader/HomeHeader";
import HomePlannings from "./homePlanning/HomePlannings";
import HomeServices from "./homeServices/HomeServices";
import HomeTeam from "./homeTeam/HomeTeam";
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
    </>
  );
};

export default Home;
