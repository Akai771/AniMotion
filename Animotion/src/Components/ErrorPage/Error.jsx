import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
    return(
        <>
        <div className="ErrorPage">
            <img src="https://i.postimg.cc/PrRvV1xH/zoro.png" alt="404"/>
            <div className="ErrorPageContent">
                <span className="ErrorTitle">4<span className="ErrorTitle2">0</span>4</span>
                <span className="ErrorText">Oops, sorry we can't find that page!</span>
                <span className="ErrorText2">Either something went wrong or the page doesn't exist anymore.</span>
                <Link exact to="/home"><button className="ErrorBtn">Back to homepage</button></Link>
            </div>
        </div>
        </>
    );
}

export default Error;