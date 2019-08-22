import React from 'react';
import logo from './logo.svg';
import './App.css';

import {NavLink} from "react-router-dom";
import AppRoute from "./components/AppRoute";
import SignUp from './components/SignUp';
import Hairstylist from './components/Hairstylist';


function App() {
  return (
    <div className="App">
      <nav>
      <NavLink to="/Hairstylists">Hairstylists</NavLink>
      <NavLink to="/SignUp">SignUp</NavLink>
    </nav>
      <header >

      </header>
      <div>
      <AppRoute />
      <SignUp />
      <Hairstylist />
      </div>
    </div>
  );
}

export default App;
