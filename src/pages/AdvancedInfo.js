import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const AdvancedInfo = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        address: "",
        country: "",
        state: "",
        pinCode: "",
        conform: "",
        date: "",
        time: "",
      },
      validationSchema: Yup.object({
        address: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("* Please enter your address"),
        country: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Please enter your country"),
        state: Yup.string()
          .min(2, "Too Short!")
          .max(20, "Too Long!")
          .required("Please enter your State"),
        pinCode: Yup.string()
          .required()
          .matches(/^[0-9]+$/, "Must be only digits")
          .min(6, "Must be exactly 6 digits")
          .max(6, "Must be exactly 6 digits"),
        date: Yup.date()
          .min(new Date(), "Date is invalid")
          .required("Enter valid date"),
        time: Yup.string().required("Please enter time"),
      }),
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <>
      <h1>Advanced Info</h1>

      <div className="form-group">
        <label htmlFor="exampleInputFName">Address </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputFName"
          placeholder="Address"
          autoComplete="off"
          name="address"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.address && touched.address ? (
          <p style={{ color: "red" }}>{errors.address}</p>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Country</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Country"
          name="country"
          value={values.country}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.country && touched.country ? (
          <p style={{ color: "red" }}>{errors.country}</p>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputLName">State</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputLName"
          placeholder="State"
          autoComplete="off"
          name="state"
          value={values.state}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.state && touched.state ? (
          <p style={{ color: "red" }}>{errors.state}</p>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPhoneNumber">Pin Code</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPhoneNumber"
          placeholder="Pin Code "
          name="pinCode"
          value={values.pinCode}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.pinCode && touched.pinCode ? (
          <p style={{ color: "red" }}>{errors.pinCode}</p>
        ) : null}
      </div>

      <div className="form-group">
        <input type="checkbox" id="vehicle1" name="conform" />
        <label htmlFor="vehicle1"> Recieve Emails ?</label>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Profile image</label>
        <input
          type="file"
          name="myImage"
          id="exampleFormControlFile1"
          accept="image/x-png,image/gif,image/jpeg"
        />
      </div>
      <div className="form-group">
        <label htmlFor="start">Date for call: &nbsp;</label>
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

      <div className="form-group">
        <label htmlFor="appt">Time for call: &nbsp;</label>
        <input
          type="time"
          id="appt"
          name="time"
          value={values.time}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.time && touched.time ? (
          <p style={{ color: "red" }}>{errors.time}</p>
        ) : null}
      </div>

      <Link to="/">
        <button className="btn btn-primary"> Previous</button>
      </Link>
      <Link to="/courses">
        <button className="btn btn-primary">next</button>
      </Link>
    </>
  );
};

export default AdvancedInfo;
