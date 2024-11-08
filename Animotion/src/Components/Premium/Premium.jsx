import React, {useState, useEffect} from "react";
import "./Premium.css";
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import FlightIcon from '@mui/icons-material/Flight';
import DevicesIcon from '@mui/icons-material/Devices';
import TopRedirect from "../TopRedirectButton/TopRedirect";
import BrowseCard from "../Browse/BrowseCard/BrowseCard";
import axios from "axios";
import PremiumCard from "./PremiumCard/PremiumCard.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Preloader from "../Preloader/Preloader.jsx";

const Premium = () => {
    const [ftw, setFtw] = useState([]);

    useEffect(()=>{
        axios.get("https://animotion-consumet-api.vercel.app/anime/gogoanime/top-airing")
        .then((res) => setFtw(res.data.results.slice(0,6))
        )

        window.scrollTo(0, 0);
    },[])

    console.log(ftw)

    return (<>
            <Preloader/>
            <header>
                <Link exact to="/home"><span className="navLogo">AniMotion</span></Link>
            </header>
            <div className="premium">
            <div className="premium__banner" id="premium__banner">
                <div className="premium__container">
                    <div className="PremiumContent">
                        <div>
                            <h1 className="premiumTitle">Upgrade your anime experience with our Ultra membership</h1>
                            <Link exact to={`/payment/ultra_mo`}><button className="BannerButton ">
                                <span className="BannerButton-content">Start Ultra Membership</span>
                            </button></Link>
                        </div>
                        <span className="premiumTxt">Your account will automatically renew at ₹99.00 per month. You may cancel at any time</span>
                        <a href="#PremiumCard" className="compareLink">Compare all plans<KeyboardArrowDownIcon style={{fontSize:"2.8rem", fontWeight:"bold"}}/></a>
                    </div>
                </div>
            </div>
            <div className="premiumSection2">
                <span className="premiumSection2__title ">Be the First to Watch</span>
                <span className="premiumSection2__txt">Stream full seasons of the top anime, simulcasts, Animotion Originals, and more!</span>
                <br/>
                <div className="PremiumTrendingAlign">
                        {ftw.slice(0,8).map((seasonal) => (
                                <BrowseCard key={seasonal.id} id={seasonal.id} title={seasonal.title} coverImage={seasonal.image}/>
                            ))
                        }
                </div>

                <br/><br/>
            </div>
            <div className="premiumSection3">
                <span className="premiumSection2__title ">Get more with Ultra</span>
                <a href="#PremiumCard" className="compareLink">Compare all plans<KeyboardArrowDownIcon style={{fontSize:"2.8rem", fontWeight:"bold"}}/></a>
                <br/><br/>
                <div className="featureGridDesign">
                    <div>
                        <Grid container spacing={5} columns={8} className="premiumSection2__container">
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                                <div className="gridFeaturesAlign">
                                    <AccessTimeIcon style={{fontSize:"6rem", color:"var(--secondary-color)"}}/>
                                    <span>New episodes shortly after airing in Japan</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <div className="gridFeaturesAlign">
                                    <DevicesIcon style={{fontSize:"6rem", color:"var(--secondary-color)"}}/>
                                    <span>Simultaneously stream on multiple devices</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                                <div className="gridFeaturesAlign">
                                    <FlightIcon style={{fontSize:"6rem", color:"var(--secondary-color)"}}/>
                                    <span>Offline Viewing</span>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                <div className="gridFeaturesAlign">
                                    <PriorityHighIcon style={{fontSize:"6rem", color:"var(--secondary-color)"}}/>
                                    <span>Ad-free Anime</span>
                                </div>
                            </Grid>
                        </Grid>
                        <br/><br/>
                    </div>
                </div>
            </div>
            <div className="premiumSection2" id="PremiumCard">
                <span className="premiumSection2__title ">Pick your Premium</span>
                <br/>
                <PremiumCard/>
                <br/><br/>
            </div>
            <div className="premiumFooter">
                    <span className="premiumFooterTxt">Plan automatically renews after trial period at the price selected in the plan comparison. You may cancel at any time. Restrictions and other terms apply, including changes to price and content, features.</span>
            </div>
            </div>
            <TopRedirect/>         
    </>);
};

export default Premium;