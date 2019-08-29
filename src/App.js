import React from "react";
import "./App.css";
import AppRoute from "./components/AppRoute";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Data from "./components/Data";

function App() {
  return (
    <div className="App container">
      <Nav />
      <div>
      {/* <Data/> */}
        <AppRoute />
      </div>
      <Footer />
      <p className="copyright">
        Copyright Periwinkle Hair Care - Privacy Notice - Terms and Conditions -
        Secured by Lambda - Powered by Lambda Build Week
      </p>
    </div>
  );
}

export default App;
