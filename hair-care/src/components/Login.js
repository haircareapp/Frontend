import React from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import "../Form.scss";
import loginPhoto from "../photos/loginPhoto.jpg";
const LoginForm = ({ errors, touched, values, status }) => {
  return (
    <div className="body">
      <div className="hair-photo">
        <img src={loginPhoto} alt={"Hair Candy"} />
      </div>
      <div className="signup-form form">
        <h1>Login</h1>
        <Form>
          <br />
          <label>
            Username
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
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required("Not a good username"),
    password: yup
      .string()
      .min(6, "That is the wrong password!")
      .required()
  }),
  handleSubmit(values, { resetForm }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        resetForm();
        alert(`Welcome back to the hair club, ${res.data.username}!`);
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
});
const LoginFormWithFormik = formikHOC(LoginForm);

export default LoginFormWithFormik;
