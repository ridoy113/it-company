import React from "react";
import "./portFolioMain.css";
import gridImg1 from "../../../assets/Rectangle.png";
import gridImg2 from "../../../assets/Rectangle (1).png";
import gridImg3 from "../../../assets/Rectangle (2).png";
import gridImg4 from "../../../assets/Rectangle (3).png";
import gridImg5 from "../../../assets/Rectangle (4).png";

const PortfolioMain = () => {
  return (
    <div className="portfolio_main_container">
      <div className="portfolio_main_grid-1">
        <div className="portfolio_main_grid-1_img-1">
          <img src={gridImg1} alt="" />
        </div>
        <div className="portfolio_main_grid-1_img-2">
          <img src={gridImg2} alt="" />
        </div>
      </div>

      <div className="portfolio_main_grid-2">
        <div className="portfolio_main_grid-2_img-1">
          <img src={gridImg3} alt="" />
        </div>
        <div className="portfolio_main_grid-2_img-2">
          <img src={gridImg4} alt="" />
        </div>
        <div className="portfolio_main_grid-2_img-3">
          <img src={gridImg5} alt="" />
        </div>
      </div>

      <div className="portfolio_main_container_button">
      <button>Get In Touch</button>
      </div>
    </div>
  );
};

export default PortfolioMain;
