import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import {Link} from "react-router-dom";
import Accordion  from "./accordion";
import "./welcome.css";
import "../fonts.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TopRedirect from "../TopRedirectButton/TopRedirect";

function Welcome() {
  var color;
  const [ErrMsg, setErrMsg] = React.useState('');
  const [email, setEmail] = React.useState('');



  const clickHandler = (e) => {
    if(email===""){
      console.log("Email Address required");
      setErrMsg("*Email Address required");
      color = "red";
      
    }
    else if (!email.includes("@") || !email.includes(".")) {
      console.log("Email Address is invalid");
      color = "red";
    }
    else{
      console.log("Email Address is valid");
      color = "green";
    }

    sessionStorage.setItem("email", email);
  }
  
  return(<>
    <div className="welDiv">
      <div className="welcSection welcomeBG">
        <Grid container spacing={2} className="welLgo">
          <Grid xs={10}>
            {/* <item><span className="lgoStyle">AniMotion</span></item> */}
            <item><img src="https://i.postimg.cc/q7ZBw5Q6/Animotion-Logo.png" className="lgoImgStyle" /></item>
          </Grid>
          <Grid xs={2}>
            <item>
              <Link exact to="/signin">
                <button class="full-rounded Signbtn">
                  <span>Login</span>
                </button>
              </Link>
            </item>
          </Grid>
        </Grid>
        <div className="welSectCont">
          <span className="w3-animate-opacity welcomeTitle" >Unleash the extraordinary with AniMotion: Your gateway to boundless anime adventures!</span>
          <span className="w3-animate-opacity welcomeSubtitle">Join <span className="welcomeSubtitle2">today</span>. Cancel <span className="welcomeSubtitle2">anytime</span>.</span>
          <div>
            <div class="GSInput-grp">
              <input type="text" class="GetSInput" style={{borderColor:{color}}} id="Email" name="Email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
              <Link exact to="/signup">
                <button class="GSInputButton" onClick={clickHandler}>Get Started</button>
              </Link>
            </div>
            {ErrMsg && <div className="errMsg" style={{color:"red",display:"flex", flexDirection:"row"}}>{ErrMsg}</div>}
          </div>
        </div>
      </div>
      <div className="sectSide1" >
        <div className="sectContent">
          <div className="sectContAlign1">
            <h1 className="sectContTitle">Enjoy anytime</h1>
            <span className="sectContSubtitle">New Episodes released everyday shortly after Japan</span>
          </div>
          <div style={{paddingTop:"4rem"}}>
            <AccessTimeIcon style={{fontSize:"25rem", color:"#4F4F4F"}} />
          </div>
        </div>
      </div>
      <div className="sectSide1">
        <div className="sectContent">
            <div>
              <img src="https://i.postimg.cc/YqWm9pNt/tvImage.png" alt="tv"/>
            </div>
            <div className="sectContAlign2">
              <span className="sectContTitle">Enjoy anywhere</span>
              <span className="sectContSubtitle">Watch on PC ,Tablets, Chromecast, and more.</span>
            </div>
        </div>
      </div>

      <div className="sectSide1" >
        <div className="sectContent">
          <div className="sectContAlign1 sectContPadding">
            <h1 className="sectContTitle">Download your shows to watch offline</h1>
            <span className="sectContSubtitle">Save your favourites easily and always have something to watch.</span>
          </div>
          <div style={{paddingTop:"4rem"}}>
            <img className="suzumeImage" src="https://i.postimg.cc/CLgwGSTh/suzume-Phone.png" alt="download" />
          </div>
        </div> 
      </div>

      <div className="sectSide1" >
        <div className="sectContent">
          <div>
            <h1 className="Faq">Frequently Asked Questions</h1>
            <div className="AccordMargin">
              <Accordion />
            </div>
          </div>
        </div> 
      </div>
      <TopRedirect/>
    </div>
  </>)
}

export default Welcome;