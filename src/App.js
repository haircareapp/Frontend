import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import AppRoute from "./components/AppRoute";
import Nav from "./components/Nav";
import axios from "axios";
// import SignUp from './components/SignUp';
// import Hairstylist from './components/Hairstylist';

function App() {
  const [stylists, setStylists] = useState([]);
  const [users, setUsers] = useState([]);
  const [defaultUser, setDefaultUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://haircare-backend.herokuapp.com/api/users")
      .then(res => {
        // console.log("res: ", res);
        setStylists(res.data.users);
      })
      .catch(err => {
        console.error("handleSubmit: catch: err: ", err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://haircare-backend.herokuapp.com/api/users/all")
      .then(res => {
        // console.log("res: ", res);
        setUsers(res.data.all);
      })
      .catch(err => {
        console.error("handleSubmit: catch: err: ", err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://haircare-backend.herokuapp.com/api/users/1")
      .then(res => {
        // console.log("res: ", res.data.stylist);
        setDefaultUser(res.data.stylist);
      })
      .catch(err => {
        console.error("handleSubmit: catch: err: ", err);
      });
  }, []);
  console.log(stylists);
  return (
    <div className="App container">
      <Nav />
      <header />
      <div>
        <AppRoute stylists={stylists} />
      </div>
      <div className="user-info">
        <h1> Users:</h1>
        <h2>Stylist Users:</h2>
        {stylists.map(user => (
          <div className="user-card-info">
            <ul key={user.id}>
              <li>Username: {user.username}</li>
              <li>Id: {user.id} </li>
              <li>User Id: {user.user_id} </li>
              <li>Image url: {user.profile_img}</li>
              <li>About: {user.about}</li>
              <li>Skills: {user.skills}</li>
            </ul>
            <br />
            <br />
          </div>
        ))}
        <h2>All Users:</h2>
        <div className="user-list-info">
          <ul>
            {users.map(user => (
              <li key={user.email}>Email: {user.email}</li>
            ))}
          </ul>
        </div>

        <h2>Stylist Portfolio Page:</h2>
        <div className="user-portfolio-info">
          <ul>
            <li>Username: {defaultUser.username}</li>
            <li>Id: {defaultUser.id} </li>
            <li>User Id: {defaultUser.user_id} </li>
            <li>Image url: {defaultUser.profile_img}</li>
            <li>About: {defaultUser.about}</li>
            <li>Skills: {defaultUser.skills}</li>
          </ul>
          {/* <div>
            <h3>Portfolio:</h3>
            {defaultUser.portfolio.map(port => (
              <div>
                <h4>Portfolio Snippet #{port.id}:</h4>
                <ul>
                  <li>ID:{port.id}</li>
                  <li>Stylists ID:{port.stylists_id}</li>
                  <li>Portfolio Image:{port.portfolio_image}</li>
                </ul>
              </div>
            ))}
          </div> */}
          {/* <div>
            <h3>Posts:</h3>
            {defaultUser.posts.map(post => (
              <div>
                <h4>Post Snippet #{post.id}:</h4>
                <ul>
                  <li>ID: {post.id}</li>
                  <li>Stylists ID: {post.stylists_id}</li>
                  <li>Title: {post.title}</li>
                  <li>Description: {post.description}</li>
                  <li>Post Image: {post.posts_image}</li>
                </ul>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
