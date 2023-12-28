import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signin from "../Signing/Signin";
import Signup from "../Signing/Signup";
import Welcome from "../WelcomePage/welcome";
import Home from "../Home/Home";
// import NavBar from "../Navbar/Navbar";
import Premium from "../Premium/Premium";
import Chatbot from "../Chatbot/Chatbot";
import NewsBoard from "../News/NewsBoard";
import Schedule from "../Schedule/Schedule";
import Dmca from "../Footer/FooterPages/DMCA";
import Contact from "../Footer/FooterPages/Contact";
import Terms from "../Footer/FooterPages/Terms";
import Browse from "../Browse/Browse";
import Error from "../ErrorPage/Error";
import VideoInfo from "../Video/VideoInfo/VideoInfo";
import VideoMain from "../Video/VideoMain/VideoMain";
import Merch from "../Merch/merch";
import PageConstruction from "../PageConstruction/PageConstruction";



const Routing = () => {
  const [token, setToken] = useState(false);

  if(token){
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if(sessionStorage.getItem("token")){
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  },[]);

  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/signin" element={<Signin setToken={setToken}/>} />
          <Route exact path="/signup" element={<Signup />} />
          {token?<Route exact path="/home" element={<Home token={token}/>} />:""}
          {token?<Route exact path="/chat" element={<Chatbot/>} />:""}
          {token?<Route exact path="/premium" element={<Premium/>} />:""}
          {token?<Route exact path="/news" element={<NewsBoard/>} />:""}
          {token?<Route exact path="/schedule" element={<Schedule/>} />:""}
          {token?<Route exact path="/browse" element={<Browse/>} />:""}
          {token?<Route exact path="/details/:id" element={<VideoInfo/>} />:""}
          {token?<Route exact path="/watch/:id" element={<VideoMain/>} />:""}
          <Route exact path="/merch" element={<PageConstruction/>} />

          <Route exact path="/dmca" element={<Dmca/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/terms" element={<Terms/>} />
          <Route path="/*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;