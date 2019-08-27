import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import "../Form.scss";
import signupPhoto from "../photos/signupPhoto.jpg";

const SignUpForm = ({ errors, touched, values, status }) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (status) {
      setMessage([...message, status]);
    }
  }, [status]);
  return (
    <div className="main">
      <div className="hair-photo">
        <img src={signupPhoto} alt={"Hair Candy"} />
      </div>
      <div className="signup-form form">
        <h1>Sign Up</h1>
        <Form>
          <br />
          <label>
            Full Name
            <br />
            <Field
              component="input"
              type="text"
              name="fullName"
              placeholder="First Last"
            />
          </label>
          <br />
          {touched.fullName && errors.fullName && (
            <p className="error">{errors.fullName}</p>
          )}{" "}
          <br />
          <label>
            Username
            <br />
            <Field
              component="input"
              type="text"
              name="username"
              placeholder="Username"
            />
          </label>
          <br />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
          <br />
          <label>
            Email
            <br />
            <Field
              component="input"
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>
          <br />
          {touched.email && errors.email && (
            <p className="error">{errors.email}</p>
          )}
          <br />
          <label>
            Zip Code
            <br />
            <Field
              component="input"
              type="text"
              pattern="[0-9]{5}"
              name="zipcode"
              placeholder="Ex: 12345"
            />
          </label>
          <br />
          {touched.zipcode && errors.zipcode && (
            <p className="error">{errors.zipcode}</p>
          )}
          <br />
          <label>
            Password
            <br />
            <Field type="password" name="password" placeholder="Password" />
          </label>
          <br />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <br />
          <label>
            Confirm Password
            <br />
            <Field
              type="password"
              name="copypassword"
              placeholder="Re-enter Password"
            />
          </label>
          <br />
          {touched.copypassword && errors.copypassword && (
            <p className="error">{errors.copypassword}</p>
          )}
          <br />
          {touched.stylist && errors.stylist && (
            <p className="error">{errors.stylist}</p>
          )}
          <Field className="radio" type="radio" name="stylist" value={false} />{" "}
          I am looking for a Stylist
          <br />
          <Field className="radio" type="radio" name="stylist" value={true} /> I
          am a Stylist
          <br />
          <p className="success">{message}</p>
          <br />
          <button type="submit">Sign Up</button>
          <p>
            Already a user? <NavLink to="/login">Login</NavLink>
          </p>
        </Form>
      </div>
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({
    fullName,
    email,
    username,
    zipcode,
    password,
    copypassword,
    stylist
  }) {
    return {
      fullName: fullName || "",
      email: email || "",
      username: username || "",
      password: password || "",
      copypassword: copypassword || "",
      stylist: stylist || "",
      zipcode: zipcode || ""
    };
  },
  validationSchema: yup.object().shape({
    fullName: yup.string().required("What's your name?"),
    username: yup.string().required("not a good input"),
    email: yup.string().required("Not a valid Email"),
    zipcode: yup
      .number()
      .min(5, "That's not a valid zip code")
      .positive("Please enter a valid zip code")
      .required("A zip code is required"),
    password: yup
      .string()
      .min(6, "At least 6 characters!")
      .required(),
    copypassword: yup
      .string()
      .required("The passwords must match.")
      .test("passwords-match", "Passwords must match ya fool", function(value) {
        return this.parent.password === value;
      }),
    stylist: yup.bool().oneOf([true],"Please select an option:")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://haircare-backend.herokuapp.com/api/auth/register", {
        email: values.email,
        password: values.password,
        stylist: values.stylist
      })
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        setStatus(res.data.message);
        resetForm();
      })
      .catch(err => {
        console.error("handleSubmit: catch: err: ", err);
      });
  }
});
const SignUpFormWithFormik = formikHOC(SignUpForm);

export default SignUpFormWithFormik;
