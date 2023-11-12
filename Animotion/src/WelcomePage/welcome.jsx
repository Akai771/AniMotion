import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import {Link} from "react-router-dom";
import Accordion  from "./accordion";
import "./welcome.css";
import "../fonts.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Welcome() {
  var color;
  var loc = "/";
  const [ErrMsg, setErrMsg] = React.useState('');
  const [email, setEmail] = React.useState('');

  const clickHandler = (e) => {
    if(email===""){
      console.log("Email Address required");
      setErrMsg("*Email Address required");
      loc = "/";
      color = "red";
      
    }
    else if (!email.includes("@") || !email.includes(".")) {
      console.log("Email Address is invalid");
      color = "red";
    }
    else{
      console.log("Email Address is valid");
      loc = "/signup";
      color = "green";
    }
  }
  
  return(<>
    <div className="welDiv">
      <div className="welcSection welcomeBG">
        <Grid container spacing={2} className="welLgo">
          <Grid xs={10}>
            <item><span className="lgoStyle">AniMotion</span></item>
          </Grid>
          <Grid xs={2}>
            <item>
              <Link exact to="/signin">
                <button class="full-rounded Signbtn">
                  <span>Sign In</span>
                </button>
              </Link>
            </item>
          </Grid>
        </Grid>
        <div className="welSectCont">
          <span className="Mont800" style={{fontSize:"35px"}}>The biggest Anime hits. Ready to watch here from ₹79</span>
          <span className="Mont500" style={{fontSize:"15px"}}>Join today. Cancel anytime.</span>
          <div>
            <div class="GSInput-grp">
              <input type="text" class="GSInput" style={{borderColor:{color}}} id="Email" name="Email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
              <Link exact to="/signup">
                <button class="GSInputButton" onClick={clickHandler}>Get Started</button>
              </Link>
            </div>
            {ErrMsg && <div className="errMsg" style={{color:"red",display:"flex", flexDirection:"row"}}>{ErrMsg}</div>}
          </div>
        </div>
      </div>
      
      <div className="sectSide1" >
        <hr className="horizontalLine"/>
        <div className="sectContent">
          <div style={{paddingLeft:"5em"}}>
            <h1 className="Mont800" style={{fontSize:"40px"}}>Enjoy anytime</h1>
            <span className="Mont500" style={{fontSize:"20px"}}>New Episodes released everyday shortly after Japan</span>
          </div>
          <div style={{paddingTop:"4rem"}}>
            <AccessTimeIcon style={{fontSize:"25rem", color:"#4F4F4F"}} />
          </div>
        </div>
      </div>

      <div className="sectSide1">
        <hr className="horizontalLine"/>
        <div className="sectContent">
            <div>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="tv"/>
            </div>
            <div>
              <h1 className="Mont800" style={{fontSize:"40px"}}>Enjoy anywhere</h1>
              <span className="Mont500" style={{fontSize:"20px"}}>Watch on PC ,Tablets, Chromecast, and more.</span>
            </div>
        </div>
      </div>

      <div className="sectSide1" >
        <hr className="horizontalLine"/>
        <div className="sectContent">
          <div style={{paddingLeft:"10rem"}}>
            <h1 className="Mont800" style={{fontSize:"40px"}}>Download your shows to watch offline</h1>
            <span className="Mont500" style={{fontSize:"20px"}}>Save your favourites easily and always have something to watch.</span>
          </div>
          <div style={{paddingTop:"4rem"}}>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="download" />
          </div>
        </div> 
      </div>

      <div className="sectSide1" >
        <hr className="horizontalLine"/>
        <div className="sectContent">
          <div>
            <h1 className="Faq">Frequently Asked Questions</h1>
            <div className="AccordMargin">
              <Accordion />
            </div>
          </div>
        </div> 
      </div>
    </div>
  </>)
}

export default Welcome;