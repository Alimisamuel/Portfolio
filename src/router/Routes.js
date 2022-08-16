import React from "react";

import HomeVideoDark from "../views/all-home-version/HomeVideoDark";
import NotFound from "../views/NotFound";
import { BrowserRouter, Routes,  Route, } from "react-router-dom";
// import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const WebRoutes = () => {
  return (
      <BrowserRouter>
        <Routes>
        {/* <ScrollTopBehaviour /> */}
          <Route path="/" element={<HomeVideoDark />} />
   
         
          <Route path="/home-video-dark" element={<HomeVideoDark />} /> 
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
};

export default WebRoutes;
