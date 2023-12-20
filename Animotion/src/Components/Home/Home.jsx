import {useEffect, useState, React} from "react";
import CarouselHome from "./Carousel/Carousel.jsx";
import VidCard from "./VideoCard/VidCard.jsx";
import "./Home.css";
import "../Fonts.css";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const Home = () =>{
    const [recentEp, setRecentEp] = useState([]);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);

    useEffect(()=>{
        axios.get("https://api.anify.tv/recent?type=anime&page=3&perPage=12&fields=[id,title,coverImage,currentEpisode,duration,format]")
        .then((res) => setRecentEp(res.data))
    },[])

    useEffect(()=>{
        axios.get("https://api.anify.tv/seasonal/anime?fields=[id,title,coverImage,currentEpisode,season,duration,format]")
        .then((res) => setPopular(res.data.popular))
    },[])

    useEffect(()=>{
        axios.get("https://api.anify.tv/seasonal/anime?fields=[id,title,coverImage,currentEpisode,season,duration,format]")
        .then((res) => setTrending(res.data.trending))
    },[])

    
    // console.log(trending)
    
    return(<>
    <Navbar/>
    <div id="topCarousel">
        <CarouselHome />
    </div>
    <section className="alignHomeItems popSect">
        <br/>
        <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Trending</h3></div>
        <br/>
        <div className="rowCard">
        {trending.map((seasonal) => (
                <VidCard key={seasonal.id} title={seasonal.title.english} coverImage={seasonal.coverImage} currentEpisode={seasonal.currentEpisode} duration={seasonal.duration} format={seasonal.format}/>
                ))
            }
        </div>
        <br/><br/> 
        <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Latest Episodes</h3></div>
        <br/>
        <div className="rowCard">
            {recentEp.map((recentEp) => (
                <VidCard key={recentEp.id} title={recentEp.title.english} coverImage={recentEp.coverImage} currentEpisode={recentEp.currentEpisode} duration={recentEp.duration} format={recentEp.format}/>
                ))
            }
        </div>
        <br/><br/>
        <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Popular</h3></div>
        <br/>
        <div className="rowCard">
        {popular.map((popular) => (
                <VidCard key={popular.id} title={popular.title.english} coverImage={popular.coverImage} currentEpisode={popular.currentEpisode} duration={popular.duration} format={popular.format}/>
                ))
            }
        </div>
    </section>
    <TopRedirect location="#topCarousel"/>
    <ChatbotButton/>
    </>);
}

export default Home;