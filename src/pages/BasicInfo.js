// import { ErrorMessage, Formik } from "formik";
// import React from "react";
// import { Link } from "react-router-dom";
// import * as Yup from "yup";
// const BasicInfo = () => {
//   return (
//     <>
//       <h1>Basic Info</h1>
//       <Formik
//         initialValues={{
//           fName: "",
//           lName: "",
//           email: "",
//           phoneNo: "",
//           date: "",
//         }}
//         validationSchema={Yup.object().shape({
//           fName: Yup.string()
//             .min(2, "Too Short!")
//             .max(50, "Too Long!")
//             .required("Required"),
//           lName: Yup.string()
//             .min(2, "Too Short!")
//             .max(50, "Too Long!")
//             .required("Required"),
//         })}
//         onSubmit={(values) => {
//           // same shape as initial values
//           console.log(values);
//         }}
//       >
//         {({ errors, touched, setFieldValue }) => (
//           <form>
//             <div className="form-group">
//               <label htmlFor="exampleInputFName">First Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="exampleInputFName"
//                 placeholder="First Name"
//                 autoComplete="off"
//                 name="fName"
//               />
//               {errors.fName && touched.fName ? <div>{errors.fName}</div> : null}
//             </div>
//             <ErrorMessage name="fName" />
//             <div className="form-group">
//               <label htmlFor="exampleInputLName">Last Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="exampleInputLName"
//                 placeholder="Last Name"
//                 autoComplete="off"
//                 name="lName"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleInputEmail1">Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 placeholder="Enter email"
//                 name="email"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleInputPhoneNumber">Phone No.</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="exampleInputPhoneNumber"
//                 placeholder="Phone Number "
//                 name="phoneNo"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleInputPassword1">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="exampleInputPassword1"
//                 placeholder="Password"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="start">Date:</label>
//               <input type="date" id="start" name="date" />
//             </div>
//             <div className="form-group">
//               <input type="radio" id="age1" name="age" value="male" />
//               <label htmlFor="age1">Male</label>
//               <input type="radio" id="age2" name="age" value="female" />
//               <label htmlFor="age2">Female</label>
//             </div>
//             <Link to="/advancedInfo">
//               <button type="submit" className="btn btn-primary">
//                 Next
//               </button>
//             </Link>
//           </form>
//         )}
//       </Formik>
//     </>
//   );
// };

// export default BasicInfo;

// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const SignupSchema = Yup.object().shape({
//   fName: Yup.string()
//     .min(2, " Too Short")
//     .max(20, "Too long")
//     .required("Required"),
//   lName: Yup.string()
//     .min(12, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string()
//     .email("Must be a valid email")
//     .max(255)
//     .required("Email is required"),
// });

// export const BasicInfo = () => (
//   <div>
//     <h1>Signup</h1>
//     <Formik
//       initialValues={{
//         fName: "",
//         lName: "",
//         email: "",
//       }}
//       validationSchema={SignupSchema}
//       onSubmit={(values) => {
//         // same shape as initial values
//         console.log(values);
//       }}
//     >
//       {({ errors, touched }) => (
//         <Form>
//           <div className="form-group">
//             <label>First Name</label>
//             <Field name="fName" />
//             <ErrorMessage name="fName" />
//           </div>

//           <div className="form-group">
//             <label>Last Name</label>
//             <Field name="lName" />
//             <ErrorMessage name="lName" />
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <Field name="email" />
//             <ErrorMessage name="email" />
//           </div>

//           <div>
//             <button type="submit">Submit</button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

// export default BasicInfo;

import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const BasicInfo = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
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
        age: Yup.string().required("A radio option is required"),
      }),
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <>
      <h1>Basic Info</h1>
      <div>
        <label htmlFor="fName" className="input-label">
          First Name
        </label>
        <input
          type="name"
          autoComplete="off"
          name="fName"
          id="fName"
          placeholder="First Name"
          value={values.fName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.fName && touched.fName ? (
          <p style={{ color: "red" }}>{errors.fName}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="lName" className="input-label">
          Last Name
        </label>
        <input
          type="name"
          autoComplete="off"
          name="lName"
          id="lName"
          placeholder="Last Name"
          value={values.lName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.lName && touched.lName ? (
          <p style={{ color: "red" }}>{errors.lName}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="input-label">
          Email
        </label>
        <input
          type="name"
          autoComplete="off"
          name="email"
          id="email"
          placeholder="Last Name"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <p style={{ color: "red" }}>{errors.email}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className="input-label">
          Phone Number
        </label>
        <input
          type="number"
          autoComplete="off"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phone && touched.phone ? (
          <p style={{ color: "red" }}>{errors.phone}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="date" className="input-label">
          Date Of Birth
        </label>
        <input
          type="date"
          autoComplete="off"
          name="date"
          id="date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.date && touched.date ? (
          <p style={{ color: "red" }}>{errors.date}</p>
        ) : null}
      </div>

      <div>
        <input type="radio" id="male" name="age" />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="age" />
        <label htmlFor="female">Female</label>
        {errors.age && touched.age ? (
          <p style={{ color: "red" }}>{errors.age}</p>
        ) : null}
      </div>

      <Link to="/advancedInfo">
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </Link>
    </>
  );
};

export default BasicInfo;
