import React from "react";
import PortfolioHeader from "./portfolioHeader/PortfolioHeader";
import PortfolioMain from "./portfolioMain/PortfolioMain";
import HomeLast from "../home/homeLast/HomeLast";

const Portfolio = () => {
  return (
    <div>
      <PortfolioHeader />
      <PortfolioMain />
      <HomeLast />
    </div>
  );
};

export default Portfolio;
