import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import AppRoute from "./components/AppRoute";
import Nav from "./components/Nav";
import axios from "axios";
// import SignUp from './components/SignUp';
// import Hairstylist from './components/Hairstylist';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://haircare-backend.herokuapp.com/api/users")
      .then(res => {
        console.log("res: ", res);
        setUsers(res.data.users);
      })
      .catch(err => {
        console.error("handleSubmit: catch: err: ", err);
      });
  }, []);
  return (
    <div className="App container">
      <Nav />
      <header />
      <div>
        <AppRoute />
      </div>
      <div className="user-info">
        <h1>Users:</h1>
        {users.map(user => (
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
      </div>
    </div>
  );
}

export default App;
