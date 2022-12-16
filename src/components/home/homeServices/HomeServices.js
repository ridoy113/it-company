import React from "react";
import "./homeServices.css";
import homeServicesDatas from "../../../data/homeServicesData.json";

const HomeServices = () => {
  return (
    <>
      <div className="home_services_container">
        <div className="home_services_title">
          <div className="home_services_small_title">
            <h3>\ Services \</h3>
          </div>
          <h1>Our Expertice</h1>
        </div>

        <div className="home_services_grid_container">
          {homeServicesDatas.map((homeServicesData) => {
            return (
              <div className="home_services_single_grid_card">
                <div className="home_services_grid_img">
                  <img src={homeServicesData.img} alt="" />
                </div>

                <h3>{homeServicesData.title}</h3>

                <div className="home_services_grid_undertitleimg">
                  <img src={homeServicesData.titleUnderImg} alt="" />
                </div>

                <p>{homeServicesData.info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeServices;
