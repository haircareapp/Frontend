import React from "react";
import { NavLink } from "react-router-dom";

import "../Nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="nav-item">
        <a href="https://pwhaircare.netlify.com/">Home</a>
      </div>
      <div className="nav-item">
        <a href="https://pwhaircare.netlify.com/">Blog</a>
      </div>
      <div className="nav-item">
        <a href="https://pwhaircare.netlify.com/about.html">About</a>
      </div>
      <div className="nav-item">
        <NavLink to="/Hairstylist">Hairstylists</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/Login">Login</NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/SignUp">SignUp</NavLink>
      </div>
    </nav>
  );
}
