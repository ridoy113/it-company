import React from "react";
import HomeBlog from "../home/homeBlog/HomeBlog";
import BlogsHeader from "./blogsHeader/BlogsHeader";
import HomeLast from "../home/homeLast/HomeLast";

const Blogs = () => {
  return (
    <div>
      <BlogsHeader />
      <HomeBlog />
      <HomeLast />
    </div>
  );
};

export default Blogs;
