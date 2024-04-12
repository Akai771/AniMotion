import {useEffect, useState, React} from "react";
import CarouselHome from "./Carousel/Carousel.jsx";
import VidCard from "./VideoCard/VidCard.jsx";
import VidCard2 from "./VideoCard/VidCard2.jsx";
import "./Home.css";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Preloader from "../Preloader/Preloader.jsx";
import { Link } from "react-router-dom";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import TrendingCard from "./VideoCard/TrendingCard/TrendingCard";
import ContWatchingCard from "./VideoCard/ContinueWatching/contWatchCard";

const Home = ({token}) =>{
    const [recentEp, setRecentEp] = useState([]);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [movies, setMovies] = useState([]);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    var count
    var settings = {}

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    let dataBasedOnScreenSize;

    useEffect(()=>{
        axios.get("https://animotion-consumet-api.vercel.app/anime/gogoanime/recent-episodes")
        .then((res) => setRecentEp(res.data.results.slice(0, 16)))

        axios.get("https://animotion-consumet-api.vercel.app/anime/gogoanime/popular")
        .then((res) => setPopular(res.data.results))


        axios.get("https://animotion-consumet-api.vercel.app/anime/gogoanime/top-airing")
        .then((res) => setTrending(res.data.results))

        axios.get("https://animotion-consumet-api.vercel.app/anime/gogoanime/movies")
        .then((res) => setMovies(res.data.results))
    },[])


    const contWatching = JSON.parse(localStorage.getItem("history_alt"));


    if (screenWidth < 768) {
        settings = {
            dots: true,
            infinite: true,
            speed: 400,
            slidesToShow: 2,
            slidesToScroll: 2
        };
    }
    else if (screenWidth < 1520) {
        settings = {
            dots: true,
            infinite: true,
            speed: 400,
            slidesToShow: 6,
            slidesToScroll: 2
        };
    } 
    else {
        settings = {
            dots: true,
            infinite: true,
            speed: 400,
            slidesToShow: 8,
            slidesToScroll: 2
        };
    }

    let settings2
    if (screenWidth < 960) {
        settings2 = {
            dots: true,
            infinite: false,
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
        };
    }
    else if (screenWidth < 1600) {
        settings2 = {
            dots: true,
            infinite: false,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 2,
            swipeToSlide: true,
        };
    } 
    else {
        settings2 = {
            dots: false,
            infinite: false,
            speed: 400,
            slidesToShow: 5,
            slidesToScroll: 1,
            swipeToSlide: true,
        };
    }
    
    return(<>

    <Preloader/>
    <Navbar/>
    <div id="topCarousel">
        <CarouselHome />
    </div>
    <section className="alignHomeItems1 popSect">
        <br/>
        <div class="vl"><h3 className="SectionTitle">Trending</h3></div>
        <div className="alignCardMargin"> 
            <Slider {...settings2}>
                {trending.slice(0,10).map((trend, index) => (
                    count = index + 1,
                    <TrendingCard key={trend.id} id={trend.id} title={trend.title} coverImage={trend.image} type={count} />
                    ))
                }
            </Slider>
        </div>

        <div className="horizontal-Line1" />

        <div className="latest-episode-section">
            <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Continue Watching</h3></div>
            <Link exact to={`/history`} ><button className="view-more-btn">View More<ChevronRightRoundedIcon id="arrow-Icon"/></button></Link>
        </div>
        <br/>
        <div className="alignCardMargin3">
            {contWatching?contWatching.slice(0,5).map((cont) => (
                <ContWatchingCard key={cont.animeId} id={cont.animeId} title={cont.animeTitle} coverImage={cont.animeImage} currentEpisode={cont.animeEpisodeId}/>
                )): <span className="contWatchingAlert">Start Watching to see your history here!</span>
            }
        </div>

        <div className="horizontal-Line1" />

        <div className="latest-episode-section">
            <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Latest Episodes</h3></div>
            <Link exact to={`/latest-episodes`} ><button className="view-more-btn">View More<ChevronRightRoundedIcon id="arrow-Icon"/></button></Link>
        </div>
        <br/>
        <div className="alignCardMargin2">
            {recentEp.map((recentEp) => (
                <VidCard key={recentEp.id} id={recentEp.id} title={recentEp.title} coverImage={recentEp.image} currentEpisode={recentEp.episodeNumber}/>
                ))
            }
        </div>

        <div className="horizontal-Line1" />

        <div className="AnimePromotion">
            <Link to="/details/ore-dake-level-up-na-ken">
                <img
                    src="https://i.postimg.cc/HkyBJQp2/Solo-Leveling-Watch-Now-AD.png"
                    alt="Anime Promotion"
                    className="AnimePromotionImg"
                />
            </Link>
        </div>

        <div className="horizontal-Line1" />

        <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>New on Animotion</h3></div>
        <br/>
        <div className="alignCardMargin">
        <Slider {...settings}>
            {trending.map((seasonal) => (
                        <VidCard2 key={seasonal.id} id={seasonal.id} title={seasonal.title} coverImage={seasonal.image}/>
                    ))
                }
        </Slider>
        </div>
        
        <div className="horizontal-Line1" />

        <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Movies</h3></div>
        <br/>
        <div className="alignCardMargin">
        <Slider {...settings}>
        {movies.map((movie) => (
                <VidCard2 key={movie.id} id={movie.id} title={movie.title} coverImage={movie.image} />
                ))
            }
        </Slider>
        </div>
        <br/><br/>
    </section>
    <Footer/>
    <TopRedirect/>
    <ChatbotButton/>
    </>);
}

export default Home;