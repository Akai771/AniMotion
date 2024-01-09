import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import options from './profileOptions.jsx';
import { supabase } from "../Signing/supabaseClient.jsx";
import "./profile.css";

function Profile({token}) {
    const user = token?token.user.user_metadata:"No Data";
    const name = user.fname + " " + user.lname;
    const email = token?token.user.email:"No Data";
    const [selectedOption, setSelectedOption] = useState("User Information");
    const [pass, setPass] = useState("");
    const [confPass, setConfPass] = useState("");
    const [changeEmail, setChangeEmail] = useState("");
    const navigate = useNavigate();

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
      };

    function handlePass(e) {
        setPass(e.target.value);
    }

    function handleConfPass(e){
        setConfPass(e.target.value);
    }

    async function handleChangePass(){
        if(pass === confPass){
            const {data, error} = await supabase.auth.updateUser({ password: pass })
            alert("Password Changed Successfully");
        }
        else{
            alert("Passwords do not match");
        }
    }

    function handleChangeEmail(e){
        setChangeEmail(e.target.value);
    }
    console.log(changeEmail);

    async function handleChangeEmailButton(){
        try{
            const {data, error} = await supabase.auth.updateUser({ email: changeEmail })
            alert("Email Changed Successfully");
        }
        catch(error){
            alert(error);
        }
    }

    function handleLogout(){
        localStorage.removeItem("token");
        navigate("/signin");
    }



    return(
        <>
        <NavBar/>
        <div className="optionsDiv">
            <div className="optionsBox">
                <div className="options">
                <span className="optionsTitle">General</span>
                    {options.map((option) => {
                        return(<>
                            <div className="optionsRadioBtnGrp">
                                <label className="optionsBtnLabel" key={option.tags} htmlFor={option.tags}>
                                    <input  className="optionsRadioBtn" type="radio" name={option.tags} id={option.tags} value={option.tags} checked={selectedOption == option.tags} onChange={handleOptionChange}/>
                                    <span className="optionsRadioSpan">{option.tags}</span>
                                </label>
                            </div>
                        </>)
                        }
                    )}
                </div>
            </div>
        </div>
        <div className="profile">
            <div className="settingContBox">
                <div className="settingCont">
                    <h1 className="settingContTitle">User Information</h1>
                    <br/>
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
                    <br/>
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
                <br/><br/>
                <div className="settingCont">
                    <h1 className="settingContTitle">Change Email Address </h1>
                    <div>
                        <span className="settingContSubtitle">You can change email once per month</span>
                        <div className="settingMainCont">
                            <br/>
                            <div className="userInfoDiv">
                                <label className="settingContSpan">Email Address:</label>
                                <input className="settingContInput" type="text" placeholder="Enter Email Address" onChange={handleChangeEmail}/>
                            </div>
                            <button className="settingContBtn" onClick={handleChangeEmailButton}>Change Email</button>
                        </div>
                        
                    </div>
                </div>
                <br/><br/>
                <div className="settingCont">
                    <h1 className="settingContTitle">Change Password </h1>
                    <div>
                        <span className="settingContSubtitle">Password should be minimum 6 characters</span>
                        <div className="settingMainCont">
                            <br/>
                            <div className="userInfoDiv">
                                <label className="settingContSpan">New Password:</label>
                                <input className="settingContInput" type="password" placeholder="Enter New Password" onChange={handlePass}/>
                            </div>
                            <div className="userInfoDiv">
                                <label className="settingContSpan">Confirm Password:</label>
                                <input className="settingContInput" type="password" placeholder="Confirm New Password" onChange={handleConfPass}/>
                            </div>
                            <button className="settingContBtn" onClick={handleChangePass}>Change Password</button>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className="settingCont">
                    <h1 className="settingContTitle">Log Out</h1>
                    <div>
                        <div className="settingMainCont">
                            <button className="settingLogoutBtn" onClick={handleLogout}> Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        <TopRedirect/>
        <ChatbotButton/>
        </>
    )

}

export default Profile;