import React from "react";
import "./homeBlog.css";
import homeBlogDatas from "../../../data/homeBlogData.json";

const HomeBlog = () => {
  return (
    <div className="home_blog">
      <div className="home_blog_container">
        <div className="home_blog_header">
          <div className="home_blog_small_header">
            <h3>\ Our Blog \</h3>
          </div>
          <h1>Latest Post</h1>
        </div>

        <div className="home_blog_grid_container">
          {homeBlogDatas.map((homeBlogData) => {
            return (
              <div className="home_blog_grid_single_card">
                <div className="home_blog_grid_single_card_img">
                  <img src={homeBlogData.img} alt="" />
                </div>
                <h3>{homeBlogData.title}</h3>

                <div className="home_blog_grid_single_card_info">
                  <div className="home_blog_grid_single_card_info_logo">
                    <img src={homeBlogData.iconImg} alt="" />
                    <h5>{homeBlogData.name}</h5>
                  </div>
                  <p>{homeBlogData.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
