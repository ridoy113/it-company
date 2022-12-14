import React from "react";
import "./homePlannings.css";
import homePlanDatas from "../../../data/homePlanData.json";

const HomePlannings = () => {
  return (
    <div className="home_plan_container">
      <div className="home_plan_header">
        <h4>\ Planning \</h4>
        <h1>Our Process</h1>
      </div>

      <div className="home_plan_grid_container">
        {homePlanDatas.map((homePlanData) => {
          return (
            <div className="home_plan_grid_single_card">
              <div className="home_plan_img_section">
                <div className="home_plan_img_1">
                  <img src={homePlanData.img} alt="" />
                </div>

                <div className="home_plan_img_2">
                  <img src={homePlanData.numberImg} alt="" />
                </div>
              </div>

              <h2>{homePlanData.title}</h2>
              <div className="home_plan_img_3">
                <img src={homePlanData.titleUnderImg} alt="" />
              </div>
              <p>{homePlanData.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePlannings;
