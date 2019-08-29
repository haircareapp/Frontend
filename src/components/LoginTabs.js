import React from "react";
import { NavLink } from "react-router-dom";

export const logout = () => {
  localStorage.clear();
  window.location.href = "/Login";
};

export const LogoutButton = () => {
  return (
    <span className="nav-item" onClick={logout}>
      Logout
    </span>
  );
};

export const LoginButton = () => {
  return (
    <span className="nav-item">
      <NavLink to="/Login">Login</NavLink>
    </span>
  );
};

export default { LogoutButton, LoginButton, logout };
