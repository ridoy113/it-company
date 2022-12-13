import React, { useEffect, useState } from "react";
import HomePlanning from "./HomePlanning";
import "./homePlannings.css";

const HomePlannings = () => {
  const [homePlannings, setHomePlannings] = useState([]);

  useEffect(() => {
    fetch("homePlanningsData.json")
      .then((response) => response.json())
      .then((data) => setHomePlannings(data));
  }, []);

  return (
    <div>
      <h4>\ Planning \</h4>
      <h1>Our Process</h1>

      <div>
        {homePlannings.map((homePlanning) => (
          <HomePlanning
            key={homePlannings.id}
            homePlanning={homePlanning}
          ></HomePlanning>
        ))}
      </div>
    </div>
  );
};

export default HomePlannings;
