import React from "react";
// import logo from './logo.svg';
import "./App.css";

import { NavLink } from "react-router-dom";
import AppRoute from "./components/AppRoute";
// import SignUp from './components/SignUp';
// import Hairstylist from './components/Hairstylist';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/Hairstylist">Hairstylists</NavLink>{" "}
        <NavLink to="/Login">Login/</NavLink>
        <NavLink to="/SignUp">SignUp</NavLink>
      </nav>
      <header />
      <div>
        <AppRoute />
      </div>
    </div>
  );
}

export default App;
