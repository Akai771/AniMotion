import React, {useEffect} from "react";
import "./Preloader.css";
import { preLoaderAnim } from "./Animations";

const Preloader = () => {
    useEffect(()=>{
        preLoaderAnim();
    },[])

    return (
        <>
            <div className="preloader">
                <div className="preloader__container">
                    <img className="preloader__logo" src="https://i.postimg.cc/zGMxHC7w/Animotion-Logo.png" alt="logo" />
                    {/* <h1 className="preloaderTitle">Animotion</h1> */}
                    <div className="texts-container">
                        <span>Anime,</span>
                        <span>News,</span>
                        <span>Merch.</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Preloader;
