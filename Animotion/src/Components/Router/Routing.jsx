import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signin from "../Signing/Signin";
import Signup from "../Signing/Signup";
import Welcome from "../WelcomePage/welcome";
import Home from "../Home/Home";
import NavBar from "../Navbar/Navbar";
import Chatbot from "../Chatbot/Chatbot";

const Routing = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/chat" element={<Chatbot/>} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;