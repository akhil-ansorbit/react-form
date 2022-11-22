import { useFormik } from "formik";
import React from "react";
import {  useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../styles/BasicInfo.css";
const BasicInfo = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    dirty,
    isValid,
  } = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      phone: "",
      date: "",
      age: "",
    },
    validationSchema: Yup.object({
      fName: Yup.string()
        .min(2, "Too Short")
        .max(25, "Too long")
        .required("Please enter your name"),
      lName: Yup.string()
        .min(2, "Too Short")
        .max(25, "Too long")
        .required("Please enter your name"),
      email: Yup.string().email().required("Please enter your email"),
      phone: Yup.string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number is not valid"
        )
        .min(10, "Number is too short")
        .max(10, "Number is too long")
        .required("Please enter your phone number"),
      date: Yup.date().max(new Date(), "Date is invalid").required(),
      // age: Yup.string().required("A radio option is required"),
    }),
    onSubmit: (values, action) => {
      console.log(values);
      // action.resetForm();
    },
  });

  // console.log(dirty, isValid);
  const navigate = useNavigate();
  console.log(values);
  return (
    <div className="mainBasic">
      <h1 className="basicText">Basic Info</h1>
      <div className="basicForm">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputFName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputFName"
              placeholder="First Name"
              autoComplete="off"
              name="fName"
              value={values.fName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fName && touched.fName ? (
              <p style={{ color: "red" }}>{errors.fName}</p>
            ) : null}
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputLName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLName"
              placeholder="Last Name"
              autoComplete="off"
              name="lName"
              value={values.lName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lName && touched.lName ? (
              <p style={{ color: "red" }}>{errors.lName}</p>
            ) : null}
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p style={{ color: "red" }}>{errors.email}</p>
            ) : null}
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputPhoneNumber">Phone No.</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPhoneNumber"
              placeholder="Phone Number "
              name="phone"
              autoComplete="off"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && touched.phone ? (
              <p style={{ color: "red" }}>{errors.phone}</p>
            ) : null}
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="start">Date: &nbsp;</label>
            <input
              type="date"
              id="start"
              name="date"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.date && touched.date ? (
              <p style={{ color: "red" }}>{errors.date}</p>
            ) : null}
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="age">Gender: &nbsp;</label>
            <input type="radio" id="age" name="age" value="male" />
            <label htmlFor="age1">Male</label> &nbsp;
            <input type="radio" id="age" name="age" value="female" />
            <label htmlFor="age2">Female</label>
            {/* {errors.age && touched.age ? (
              <p style={{ color: "red" }}>{errors.age}</p>
            ) : null} */}
          </div>
          <button
            disabled={!(isValid & dirty)}
            type="submit"
            className="btn btn-primary"
            onClick={() => navigate("/advancedInfo")}
          >
            Next
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default BasicInfo;
