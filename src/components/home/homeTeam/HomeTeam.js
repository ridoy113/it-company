import React from "react";
import "./homeTeam.css";
import homeTeamDatas from "../../../data/homeTeamData.json";

const HomeTeam = () => {
  return (
    <>
      <div className="home_team_container">
        <div className="home_team_title">
          <div className="home_team_small_title">
            <h3>\ Team \</h3>
          </div>
          <h1>Our Leaders</h1>
        </div>

        <div className="home_team_grid_container">
          {homeTeamDatas.map((homeTeamData) => {
            return (
              <div className="home_team_single_grid_card">
                <div className="home_team_grid-img">
                  <img src={homeTeamData.img} alt="" />
                </div>

                <div className="home_team_grid_title">
                  <h4>{homeTeamData.name}</h4>
                  <div className="home_team_grid_job_title">
                    <p>{homeTeamData.jobTitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeTeam;
