import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./payment.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

function Payment() {
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const {tag} = useParams();

    var defaultTag = "";
    var defaultValue = "";

    if(tag === "ultra_mo"){
        defaultTag = "Ultra";
        defaultValue = "₹99.00";
    }
    else if(tag === "super"){
        defaultTag = "Super";
        defaultValue = "₹79.00";
    }
    else if(tag === "ultra_yr"){
        defaultTag = "Ultra";
        defaultValue = "₹999.00";
    }

  return (
    <>
    <header>
        <Link exact to="/home"><span className="navLogo">AniMotion</span></Link>
    </header>
    <div className="paymentGateway">
        <div>
            <h1 className="paymentTitle">Enter Payment Details</h1>
            <div>
                <div className="paymentDescCard2">
                    <span>{defaultTag} Membership</span>
                    <span>{defaultValue}</span>
                </div>
                <div className="paymentDescCard">
                    <div className="accordion-item">
                        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                            <span><AccountBalanceOutlinedIcon style={{color:"white", fontSize:"2rem", marginRight:"1rem",marginBottom:"0.1rem"}}/>Pay with UPI</span>
                            <div>{isActive?<ArrowForwardIosIcon className="arrowIconUpi2"/>:<ArrowForwardIosIcon className="arrowIconUpi1"/>}</div>
                        </div>
                        {isActive && <div className="accordion-content">
                            <input type="text" placeholder="Enter your UPI ID" className="upiInput" />
                            <button className="upiBtn">Pay</button>
                        </div>}
                    </div>
                </div>
                <div className="paymentDescCard">
                    <div className="accordion-item">
                        <div className="accordion-title" onClick={() => setIsActive2(!isActive2)}>
                            <span><CreditCardIcon style={{color:"white", fontSize:"2rem", marginRight:"1rem",marginBottom:"0.1rem"}}/> Pay with Card</span>
                            <div>{isActive2?<ArrowForwardIosIcon className="arrowIconUpi2"/>:<ArrowForwardIosIcon className="arrowIconUpi1"/>}</div>
                        </div>
                        {isActive2 && <div className="accordion-content">
                            <div className="creditCardInputs">
                                <input type="text" placeholder="Enter Card number" className="paymentInput"/>
                                <div className="creditInfo">
                                    <input type="text" placeholder="MM/YY" className="paymentInput2"/>
                                    <input type="text" placeholder="CVV" className="paymentInput2"/>
                                </div>
                                <button className="creditCardBtn">Start Membership</button>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Payment;