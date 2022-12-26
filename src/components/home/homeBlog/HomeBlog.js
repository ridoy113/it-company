import React from "react";
import "./homeBlog.css";
import homeBlogDatas from "../../../data/homeBlogData.json";

const HomeBlog = () => {
  return (
    <>
      <div className="home_blog_container">
        <div className="home_blog_header">
          <h4>\ Our Blog \</h4>
          <h1>Latest Post</h1>
        </div>

        <div className="home_blog_grid_container">
          {homeBlogDatas.map((homeBlogData) => {
            return (
              <div className="home_blog_grid_single_card">
                <div className="home_blog_grid_single_card_img">
                  <img src={homeBlogData.img} alt="" />
                </div>
                <h2>{homeBlogData.title}</h2>

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
    </>
  );
};

export default HomeBlog;
