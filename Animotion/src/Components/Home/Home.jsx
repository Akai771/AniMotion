import {useEffect, useState, React} from "react";
import CarouselHome from "./Carousel/Carousel.jsx";
import VidCard from "./VideoCard/VidCard.jsx";
import VidCard2 from "./VideoCard/VidCard2.jsx";
import "./Home.css";
import "../Fonts.css";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Preloader from "../Preloader/Preloader.jsx";

const Home = ({token}) =>{
    const [recentEp, setRecentEp] = useState([]);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);

    console.log(token);

    useEffect(()=>{
        axios.get("https://consumet-api-yncc.onrender.com/anime/gogoanime/recent-episodes")
        .then((res) => setRecentEp(res.data.results))
    },[])

    useEffect(()=>{
        axios.get("https://consumet-api-yncc.onrender.com/anime/gogoanime/popular")
        .then((res) => setPopular(res.data.results))
    },[])

    useEffect(()=>{
        axios.get("https://consumet-api-yncc.onrender.com/anime/gogoanime/top-airing")
        .then((res) => setTrending(res.data.results))
    },[])
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 8,
        slidesToScroll: 2
    };
    
    return(<>

    <Preloader/>


    <Navbar/>
    <div id="topCarousel">
        <CarouselHome />
    </div>
    <section className="alignHomeItems popSect">
        <br/>
        <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Trending</h3></div>
        <br/>
        <div className="alignCardMargin"> 
            <Slider {...settings}>
                {trending.map((seasonal) => (
                        <VidCard2 key={seasonal.id} id={seasonal.id} title={seasonal.title} coverImage={seasonal.image}/>
                    ))
                }
            </Slider>
        </div>
        <br/><br/> 
        <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Latest Episodes</h3></div>
        <br/>
        <div className="alignCardMargin2">
        {/* <Slider {...settings}> */}
            {recentEp.map((recentEp) => (
                <VidCard key={recentEp.id} id={recentEp.id} title={recentEp.title} coverImage={recentEp.image} currentEpisode={recentEp.episodeNumber}/>
                ))
            }
        {/* </Slider> */}
        </div>
        <br/><br/>
        <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Popular</h3></div>
        <br/>
        <div className="alignCardMargin">
        <Slider {...settings}>
        {popular.map((popular) => (
                <VidCard2 key={popular.id} id={popular.id} title={popular.title} coverImage={popular.image} />
                ))
            }
        </Slider>
        </div>
        <br/><br/>
        <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Seasonal</h3></div>
        <br/>
        <div className="alignCardMargin">
        </div>
        <br/><br/>
    </section>
    <Footer/>
    <TopRedirect location="#topCarousel"/>
    <ChatbotButton/>
    </>);
}

export default Home;