import React from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import "../Form.scss";
import resetPhoto from "../photos/resetPhto.jpg";
const ResetForm = ({ errors, touched, values, status }) => {
  return (
    <div className="body">
      <div className="hair-photo">
        <img src={resetPhoto} alt={"Hair Candy"} />
      </div>
      <div className="reset-form form">
        <h1>Reset Your Password</h1>
        <Form>
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
          <button>Submit!</button>
        </Form>
      </div>
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ username, email }) {
    return {
      username: username || "",
      password: email || ""
    };
  },
  validationSchema: yup.object().shape({
    email: yup.string().required("Not a valid email address"),
    username: yup.string().required("Not a valid username")
  }),
  handleSubmit(values, { resetForm }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        console.log("handleSubmit: then: res: ", res);
        resetForm();
        alert(
          `${res.data.username}, we have sent an email to, ${res.data.email}! Please check your spam folder and make sure our email from support@haircare.com is not flagged. Follow the link in our email to reset your password and get back in the hair game!`
        );
      })
      .catch(err => console.error("handleSubmit: catch: err: ", err));
  }
});
const ResetFormWithFormik = formikHOC(ResetForm);

export default ResetFormWithFormik;
