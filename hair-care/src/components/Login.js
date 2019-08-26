import React from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import "../Form.scss";
import loginPhoto from "../photos/loginPhoto.jpg";
const LoginForm = ({ errors, touched, values, status }) => {
  return (
    <div className="main">
      <div className="hair-photo">
        <img src={loginPhoto} alt={"Hair Candy"} />
      </div>
      <div className="login-form form">
        <h1>Login</h1>
        <Form>
          <br />
          <label>
            Email
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
            Password
            <Field type="password" name="password" placeholder="Password" />
          </label>
          <br />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
          <br />
          <button>Submit!</button>
          <p>
            Forgot your Password? <NavLink to="/Reset">Reset</NavLink> | Not
            already a user? <NavLink to="/SignUp">Signup</NavLink>
          </p>
        </Form>
      </div>
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: yup.object().shape({
    email: yup.string().required("Not a good email"),
    password: yup
      .string()
      .min(6, "That is the wrong password!")
      .required()
  }),
  handleSubmit(values, { resetForm }) {
    axios
      .post(
        "https://hair-care.herokuapp.com/api/auth/users/login",
        (values.email, values.password)
      )
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        resetForm();
        alert(`Welcome back to the hair club, ${res.data.email}!`);
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
});
const LoginFormWithFormik = formikHOC(LoginForm);

export default LoginFormWithFormik;
