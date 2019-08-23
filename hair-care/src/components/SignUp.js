import React from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import {NavLink} from "react-router-dom";
import * as yup from "yup";

const SignUpForm = ({ errors, touched, values, status }) => {
  return (
    <div className="signup-form">
      <Form>
        <br />
        <label>
          Email:
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
          Username:
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
          Password:
          <Field type="password" name="password" placeholder="Password" />
        </label>
        <br />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <br />
        <label>
          Re-enter Password:
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
        <button>Submit!</button>
        <p>Already a user? <NavLink to="/login">Login</NavLink></p>
      </Form>
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ email, username, password, copypassword }) {
    return {
      email: email || "",
      username: username || "",
      password: password || "",
      copypassword: copypassword || ""
    };
  },
  validationSchema: yup.object().shape({
    email: yup.string().required("Not a valid Email"),
    username: yup.string().required("not a good input"),
    password: yup
      .string()
      .min(6, "At least 6 characters!")
      .required(),
    copypassword: yup
      .string()
      .required("The passwords must match.")
      .test("passwords-match", "Passwords must match ya fool", function(value) {
        return this.parent.password === value;
      })
  }),
  handleSubmit(values, { resetForm }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        resetForm();
        alert(
          `Welcome to the hair club, ${
            res.data.username
          }! No matter what style you're rockin...Keep it fresh!`
        );
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
});
const SignUpFormWithFormik = formikHOC(SignUpForm);

export default SignUpFormWithFormik;
