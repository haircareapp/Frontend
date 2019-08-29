import React from "react";
import { NavLink } from "react-router-dom";
import { LogoutButton, LoginButton } from "./LoginTabs";
import "../Nav.scss";

let storedToken = {};
if (localStorage.length) {
  storedToken = <LogoutButton />;
} else {
  storedToken = <LoginButton />;
}

export default function Nav() {
  return (
    <div className="header">
      <div className="title">
        <NavLink to="/SignUp">PWHC</NavLink>
      </div>
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
          <NavLink to="/Hairstylists">Hairstylists</NavLink>
        </div>
        <div className="signup">
          <span className="nav-item">
            <NavLink to="/SignUp">SignUp</NavLink>
          </span>{" "}
          <span className="divider">| </span>
          {storedToken}
        </div>
      </nav>
    </div>
  );
}
