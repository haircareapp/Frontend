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
  // console.log(stylists);
  return (
    <div className="App container">
      <Nav />
      <header />
      <div>
        <AppRoute stylists={stylists} />
      </div>
      <div className="user-info">
        <h2>All Users:</h2>
        <div className="user-list-info">
          <ul>
            {users.map(user => (
              <li key={user.email}>Email: {user.email}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
