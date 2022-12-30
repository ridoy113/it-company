import React from "react";
import ServicesHeader from "./servicesHeader/ServicesHeader";
import HomeWhat from "../home/homeWhat/HomeWhat";
import HomeServices from "../home/homeServices/HomeServices";
import HomeLast from "../home/homeLast/HomeLast";

const Services = () => {
  return (
    <div>
      <ServicesHeader />
      <HomeWhat />
      <HomeServices />
      <HomeLast />
    </div>
  );
};

export default Services;
