// Router.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Herosection from "./Component/Herosection/Herosection";
import Technology from "./Component/Technology/Technology";
import Servicesprovider from "./Component/servicesprovides/Servicesprovider";
import ServicesSection from "./Component/ServicesSection/ServicesSection";
import Projectsidea from "./Component/Projectsidea/Projectsidea";
import Ourprojects from "./Component/Ourprojects/Ourprojects";
import Aboutdeveloper from "./Component/aboutdevelopers/Aboutdevelopers";
import Testomonials from "./Component/Testomonials/Testomonials";
import ContactUs from "./Component/ContactUs/ContactUs";
import Enquiry from "./Component/Enquiry/Enquiry";
import OurMoto from "./Component/Ourmoto/Ourmoto";
import LandingPage from "./LandingPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="#technology" element={<Technology/>}/>
      {/* <Route path="#servicesprovider" element={<Servicesprovider/>}/> */}

      
    </Routes>
  );
};

export default Router;
