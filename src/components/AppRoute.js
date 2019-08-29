import React from "react";
import { Route } from "react-router-dom";

import Login from "./Login";
import Reset from "./Reset";
import SignUp from "./SignUp";
import Hairstylist from "./Hairstylist";
import Stylist from "./Stylist";
import Home from "./Home";

export default function AppRoute() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Hairstylists" component={Hairstylist} />      
      <Route path="/Hairstylist/:id" component={Stylist} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Login" component={Login} />
      <Route path="/Reset" component={Reset} />
    </div>
  );
}
