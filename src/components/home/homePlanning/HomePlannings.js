import React from "react";
import "./homePlannings.css";
import homePlanDatas from "../../../data/homePlanData.json";

const HomePlannings = () => {
  return (
    <div>
      <h4>\ Planning \</h4>
      <h1>Our Process</h1>

      <div>
        {homePlanDatas.map((homePlanData) => {
          return (
            <div className="dome_plan_grid_container">
              <div>
                <img src={homePlanData.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePlannings;
