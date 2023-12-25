import React from "react";
import { Link } from "react-router-dom";
import "./merch.css";

function Merch() {
    return(
        <>
        <div className="ErrorPage">
            <img src="https://i.postimg.cc/PrRvV1xH/zoro.png" alt="404"/>
            <div className="ErrorPageContent">
                <span className="MerchTitle">Page under </span>
                <span className="MerchTitle2">construction</span>
                <span className="ErrorText2">Stay Tuned - Exciting Changes Coming Soon!</span>
                <Link exact to="/home"><button className="ErrorBtn">Back to homepage</button></Link>
            </div>
        </div>
        </>
    );
}

export default Merch;