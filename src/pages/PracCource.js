import React, { useEffect } from "react";

const PracCource = () => {
 
 
  const courseList = [
    {
      id: "front-end",
      name: "Front End",
      amount: 1500,
      isSelected: false,
    },
    {
      id: "back-end",
      name: "Back End",
      amount: 1800,
      isSelected: false,
    },
    {
      id: "php",
      name: "PHP",
      amount: 900,
      isSelected: false,
    },
  ];
  return (
    <>
      <div>
        {courseList.map((data) => {
          return <div key={data.id}>{data.name}</div>;
        })}
      </div>
    </>
  );
};

export default PracCource;
