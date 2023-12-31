import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import "./profile.css";

function Profile({token}) {
    const user = token?token.user.user_metadata:"No Data";

    const name = user.fname + " " + user.lname;
    const email = token?token.user.email:"No Data";
    console.log(token);
    return(
        <>
        <NavBar/>
        <div className="profile">
            <div className="settingContBox">
                <div className="settingCont">
                    <h1 className="settingContTitle">User Information</h1>
                    <div className="settingMainCont">
                        <div className="userInfoDiv">
                            <label className="settingContSpan">Full Name:</label>
                            <input className="settingContInput" type="text" value={name} disabled/>
                        </div>
                        <div className="userInfoDiv">
                            <label className="settingContSpan">Email Address:</label>
                            <input className="settingContInput" type="text" value={email} disabled/>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
                <div className="settingCont">
                    <h1 className="settingContTitle">Membership Info </h1>
                    <span className="settingContSubtitle">Manage your membership plan</span>
                    <div className="settingMainCont2">
                        <span className="settingPremiumCurrent">Super Member</span>
                        <div className="premiumDiv">
                            <span className="settingPremiumTitle">Ultra</span>
                            <span className="settingPremiumDesc">Unlimited anime, ad-free, new episodes shortly after they air in Japan. Starting at only ₹99.00/month.</span>
                            <Link className="settingPremiumLink" to="/payment/ultra_mo"><button className="settingPremiumBtn">Go Ultra</button></Link>
                            <div className="settingPremiumDivision"/>
                            <div className="orderHistoryPremium">
                                <span className="orderHistoryTitle">Order History</span>
                                <span className="orderHistoryDesc">For information on the taxes applied, check Order Details. If you have any questions, please contact Customer Support.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/>
                <div className="settingCont">
                    <h1 className="settingContTitle">Change Password </h1>
                    <div>
                        
                    </div>
                </div>
                
            </div>
        </div>
        <Footer/>
        <ChatbotButton/>
        </>
    )

}

export default Profile;