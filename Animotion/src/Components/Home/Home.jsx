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
import { Helmet } from 'react-helmet';

const Home = ({token}) =>{
    const [recentEp, setRecentEp] = useState([]);
    const [popular, setPopular] = useState([]);
    const [trending, setTrending] = useState([]);
    const [movies, setMovies] = useState([]);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
        .then((res) => setRecentEp(res.data.results))
    },[])

    useEffect(()=>{
        axios.get("https://animotion-consumet-api.vercel.app/anime/gogoanime/popular")
        .then((res) => setPopular(res.data.results))
    },[])

    useEffect(()=>{
        axios.get("https://animotion-consumet-api.vercel.app/anime/gogoanime/top-airing")
        .then((res) => setTrending(res.data.results))
    },[])

    useEffect(()=>{
        axios.get("https://animotion-consumet-api.vercel.app/anime/gogoanime/movies")
        .then((res) => setMovies(res.data.results))
    },[])

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
    
    return(<>

    <Preloader/>
    <Navbar/>
    {/* <div>
        <Helmet>
            <title>Animotion</title>
            <meta property="og:title" content="Animotion" />
            <meta property="og:description" content="Description of your website content." />
            <meta property="og:image" content="https://via.placeholder.com/400x200" />
            <meta property="og:url" content="https://animotion-two.vercel.app/home" />
            <meta property="og:type" content="website" />
        </Helmet>
    </div> */}
    <div id="topCarousel">
        <CarouselHome />
    </div>
    <section className="alignHomeItems1 popSect">
        <br/>
        <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Trending</h3></div>
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
        <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Latest Episodes</h3></div>
        <br/>
        <div className="alignCardMargin2">
            {recentEp.map((recentEp) => (
                <VidCard key={recentEp.id} id={recentEp.id} title={recentEp.title} coverImage={recentEp.image} currentEpisode={recentEp.episodeNumber}/>
                ))
            }
        </div>
        <br/><br/>
        <div className="AnimePromotion">
            <Link to="/details/ore-dake-level-up-na-ken">
                <img
                    src="https://i.postimg.cc/HkyBJQp2/Solo-Leveling-Watch-Now-AD.png"
                    alt="Anime Promotion"
                    className="AnimePromotionImg"
                />
            </Link>
        </div>
        <br/><br/>
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
        <br/><br/>
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