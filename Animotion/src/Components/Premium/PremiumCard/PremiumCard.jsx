import React from "react";
import "./PremiumCard.css";

const PremiumCard = () => {
    return (
        <>
            <div className="PremiumCardAlign">
                <div className="PremiumCardTemp">
                    <span className="PremiumCardTitle">Super</span>
                    <span className="PremiumCardPrice">₹79.00/mo</span>
                    <span className="VATTxt">VAT INCLUSIVE</span>
                    <button className="PremiumCardButton">GO SUPER</button>
                    <p className="PremiumCardText">Stream the entire Crunchyroll library ad-free, watch new episodes shortly after Japan, and read digital manga*</p>
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
                        <button className="PremiumCardButtonPop">GO ULTRA</button>
                        <p className="PremiumCardText">Stream the entire Crunchyroll library ad-free, watch new episodes shortly after Japan, and read digital manga*</p>
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
                    <button className="PremiumCardButton">GO ULTRA</button>
                    <p className="PremiumCardText">Stream the entire Crunchyroll library ad-free, watch new episodes shortly after Japan, and read digital manga*</p>
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