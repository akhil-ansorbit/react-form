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

  console.log(finalData);
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
        }}
      >
        Join
      </button>
    </>
  );
};

export default Course;
