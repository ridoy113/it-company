import React from "react";
import { useNavigate } from "react-router-dom";

const HomePlanning = ({ homePlanning }) => {
  const { id, img, numberImg, title, titleUnderImg, info } = homePlanning;
  const navigate = useNavigate();

  return (
    <div>
      <h1>{img}</h1>
    </div>
  );
};

export default HomePlanning;
