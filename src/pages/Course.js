import { configure } from "@testing-library/react";
import React, { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const courseList = [
    {
      id: "react",
      name: "React",
      amount: 2500,
      isSelected: false,
    },
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
      amount: 500,
      isSelected: false,
    },
  ];

  const [courses, setCourses] = useState(courseList);
  const [join, setjoin] = useState(false);

  const selectedCourses = useMemo(() => {
    return courses.filter((course) => course.isSelected);
  }, [courses]);

  const totalPrice = useMemo(() => {
    const total = selectedCourses.reduce(
      (total, course) => total + course.amount,
      0
    );
    return total;
  }, [selectedCourses]);
  console.log("bhjg", selectedCourses);
  const handleChange = useCallback(
    (id) => {
      const courseList = courses.map((course) => {
        if (course.id === id) {
          return {
            ...course,
            isSelected: !course.isSelected,
          };
        }
        return course;
      });
      setCourses(courseList);
    },
    [courses]
  );
  const navigate = useNavigate();
  const preData = JSON.parse(localStorage.getItem("user"));

  const finalData = {
    ...preData,
    selectedCourses,
  };

  // console.log(finalData);
  const getAllData = JSON.parse(localStorage.getItem("user"));
  const select = selectedCourses.map((crs) => {
    return crs.isSelected && crs.name;
  });
  console.log(select);

  return (
    <>
      <h1>Courses</h1>
      <div style={{ width: "40%", margin: "auto" }}>
        <ul>
          {courses.map((course, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <input
                value={course.isSelected}
                onChange={() => {
                  handleChange(course.id);
                }}
                type="checkbox"
                style={{
                  marginRight: "10px",
                }}
              />
              <h5>{`${course.name} - ₹${course.amount}`}</h5>
            </li>
          ))}
        </ul>
        <h1>Price (Rs) : {totalPrice}</h1>
        <h2>Selected Courses : {selectedCourses.length}</h2>
      </div>
      <button
        className="btn btn-outline-primary"
        onClick={() => navigate("/advancedInfo")}
      >
        Previous
      </button>
      &nbsp;
      <button
        className="btn btn-primary"
        type="submit"
        onClick={() => {
          localStorage.setItem("user", JSON.stringify(finalData));
          setjoin(true);
        }}
      >
        Join
      </button>
      {join && (
        <div>
          <div>
            <div>{` Name = ${getAllData.fName} ${getAllData.lName}`}</div>
            <div>{`Email = ${getAllData.email} `}</div>
            <div>{`Phone No. = ${getAllData.phone} `}</div>
            <div>{`DOB  = ${getAllData.date} `}</div>
            <div>{`Address  = ${getAllData.address} `}</div>
            <div>{`Country  = ${getAllData.country} `}</div>
            <div>{`State  = ${getAllData.state} `}</div>
            <div>{`Pin Code  = ${getAllData.pinCode} `}</div>
            <div>{`Date of call = ${getAllData.dateCall} `}</div>
            <div>{`Time of call = ${getAllData.time} `}</div>
          </div>
          {/* {selectedCourses.map((cname)=>{
          <div>{console.log(cname)}</div>
        })} */}
          <div>{`Selected courses = ${select}`}</div>
        </div>
      )}
    </>
  );
};

export default Course;
