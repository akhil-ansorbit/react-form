import React from "react";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
    <h1>Courses</h1>
      <Link to="/advancedInfo">
        <button className="btn btn-primary"> Previous </button> &nbsp;
      </Link>
     
        <button className="btn btn-primary">Join</button>
      
    </>
  );
};

export default Course;
