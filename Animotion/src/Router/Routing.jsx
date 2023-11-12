import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "../Signing/Signin";
import Signup from "../Signing/Signup";
import Welcome from "../WelcomePage/welcome";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;