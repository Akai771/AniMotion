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
                    <img className="preloader__logo" src="https://i.postimg.cc/q7ZBw5Q6/Animotion-Logo.png" alt="logo" />
                    {/* <h1 className="preloaderTitle">Animotion</h1> */}
                    <div className="texts-container">
                        <span>Anime,</span>
                        <span>Manga,</span>
                        <span>News.</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Preloader;
