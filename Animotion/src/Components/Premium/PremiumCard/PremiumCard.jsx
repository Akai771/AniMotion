import React from "react";
import { Link } from "react-router-dom";
import "./PremiumCard.css";

const PremiumCard = () => {
    const ultra_mo = "ultra_mo";
    const super1 = "super";
    const ultra_yr = "ultra_yr";


    return (
        <>
            <div className="PremiumCardAlign">
                <div className="PremiumCardTemp">
                    <span className="PremiumCardTitle">Super</span>
                    <span className="PremiumCardPrice">₹79.00/mo</span>
                    <span className="VATTxt">VAT INCLUSIVE</span>
                    <Link exact to={`/payment/${super1}`}><button className="PremiumCardButton">GO SUPER</button></Link>
                    <p className="PremiumCardText">Stream the entire Animotion library ad-free, watch new episodes shortly after Japan, and read digital manga*</p>
                    <div>
                        <div className="PlusBanner">
                            <div className="horizontalLine"/>
                            <span className="PlusTxt">PLUS</span>
                            <div className="horizontalLine"/>
                        </div>
                        <ul >
                            <li className="PremiumBannerList">Stream on <span style={{color:"var(--secondary-color"}}>1 device</span> at a time</li>
                        </ul>
                    </div>
                </div>
                <br/>
                <div className="PremiumCardTempPop">
                    <span className="PremiumCardPopTxt">Most Popular</span>
                    <span className="PremiumCardTitle">Ultra</span>
                        <span className="PremiumCardPrice">₹99.00/mo</span>
                        <span className="VATTxt">VAT INCLUSIVE</span>
                        <Link exact to={`/payment/${ultra_mo}`}><button className="PremiumCardButtonPop">GO ULTRA</button></Link>
                        <p className="PremiumCardText">Stream the entire Animotion library ad-free, watch new episodes shortly after Japan, and read digital manga*</p>
                        <div style={{margin:"1rem"}}>
                            <div className="PlusBanner">
                                <div className="horizontalLine"/>
                                <span className="PlusTxt">PLUS</span>
                                <div className="horizontalLine"/>
                            </div>
                            <ul>
                                <li className="PremiumBannerList">Stream on <span style={{color:"var(--secondary-color"}}>4 devices</span> at a time</li>
                                <li className="PremiumBannerList">Offline Viewing</li>
                                <li className="PremiumBannerList">₹250 off ₹1500+ purchase in the Animotion Store every 3 months*</li>
                            </ul>
                        </div>
                </div>
                <br/>
                <div className="PremiumCardTemp">
                    <span className="PremiumCardTitle">Ultra</span>
                    <span className="PremiumCardPrice">₹999.00/yr</span>
                    <span className="VATTxt">VAT INCLUSIVE</span>
                    <Link exact to={`/payment/${ultra_yr}`}><button className="PremiumCardButton">GO ULTRA</button></Link>
                    <p className="PremiumCardText">Stream the entire Animotion library ad-free, watch new episodes shortly after Japan, and read digital manga*</p>
                    <div style={{margin:"1rem"}}>
                        <div className="PlusBanner">
                            <div className="horizontalLine"/>
                            <span className="PlusTxt">PLUS</span>
                            <div className="horizontalLine"/>
                        </div>
                        <ul>
                            <li className="PremiumBannerList">Stream on <span style={{color:"var(--secondary-color"}}>4 devices</span> at a time</li>
                            <li className="PremiumBannerList">Offline Viewing</li>
                            <li className="PremiumBannerList">₹250 off ₹1500+ purchase in the Animotion Store every 3 months*</li>
                            <li className="PremiumBannerList">16% discount on Monthly Plan (Billed every 12-months)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PremiumCard;