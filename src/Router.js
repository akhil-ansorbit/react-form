import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdvancedInfo from "./pages/AdvancedInfo";
import BasicInfo from "./pages/BasicInfo";
import Course from "./pages/Course";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicInfo />} />
          <Route path="/advancedInfo" element={<AdvancedInfo />} />
          <Route path="/courses" element={<Course />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
