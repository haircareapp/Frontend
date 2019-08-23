import React from "react";
import { Route } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Hairstylist from "./Hairstylist";

export default function AppRoute() {
  return (
    <div>
      <Route path="/Hairstylist" component={Hairstylist} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Login" component={Login} />
    </div>
  );
}
