import React from "react";
import "./homePlannings.css";
import homePlanDatas from "../../../data/homePlanData.json";

const HomePlannings = () => {
  return (
    <div>
      <div className="home_plan_header">
        <h4>\ Planning \</h4>
        <h1>Our Process</h1>
      </div>

      <div className="home_plan_grid_container">
        {homePlanDatas.map((homePlanData) => {
          return (
            <div className="home_plan_grid_single_card">
              <div className="home_plan_img_section">
                <img
                  className="home_plan_img_1"
                  src={homePlanData.img}
                  alt=""
                />
                <img
                  className="home_plan_img_2"
                  src={homePlanData.numberImg}
                  alt=""
                />
              </div>

              <h3>{homePlanData.title}</h3>
              <img
                className="home_plan_img_3"
                src={homePlanData.titleUnderImg}
                alt=""
              />
              <p>{homePlanData.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePlannings;
