import React from "react";
// import logo from './logo.svg';
import "./App.css";

import { NavLink } from "react-router-dom";
import AppRoute from "./components/AppRoute";
import Nav from "./components/Nav";
// import SignUp from './components/SignUp';
// import Hairstylist from './components/Hairstylist';

function App() {
  return (
    <div className="App container">
      <Nav />
      <header />
      <div>
        <AppRoute />
      </div>
    </div>
  );
}

export default App;
