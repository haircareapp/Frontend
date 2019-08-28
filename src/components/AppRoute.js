import React from "react";
import { Route } from "react-router-dom";

import Login from "./Login";
import Reset from "./Reset";
import SignUp from "./SignUp";
import Hairstylist from "./Hairstylist";
import Stylist from "./Stylist";

export default function AppRoute(props) {
  console.log(props.stylists);
  return (
    <div>
      {/* <Route path="/Hairstylist" render={(props) =>  <Hairstylist stylists={props.stylists} />} /> */}
      <Route path="/Hairstylists" render={ props =>  <Hairstylist {...props} />} />
      <Route path="/Hairstylist/:id" component={Stylist} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Login" component={Login} />
      <Route path="/Reset" component={Reset} />
    </div>
  );
}
