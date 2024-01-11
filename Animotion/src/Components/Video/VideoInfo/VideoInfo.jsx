import React, {useState, useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import "./VideoInfo.css";
import Navbar from "../../Navbar/Navbar";
import ChatbotButton from "../../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../../TopRedirectButton/TopRedirect";
import Footer from "../../Footer/Footer";
import Preloader from "../../Preloader/Preloader";
import CharacterCard from "../VideoMain/characterCard";
import ReactPlayer from "react-player";
import WatchlistButton from "./watchlistButton";
import RecommendCard from "./recommendCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const VideoInfo = () => {
    const [animeData, setAnimeData] = useState([]);
    const [addData, setAddData] = useState([])
    const [recommend, setRecommend] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [recommendPop, setRecommendPop] = useState([]);
    const [recommendTitle, setRecommendTitle] = useState("");
    const [recommendLength, setRecommendLength] = useState(0);

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/anime/gogoanime/info/${id}`)
        .then((res) => setAnimeData(res.data))
    },[])

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/anime/gogoanime/info/${id}`)
        .then((res) => setEpisodes(res.data.episodes))
    },[])

    useEffect(()=>{
        axios.get(`https://api.anify.tv/search/anime/${id}`)
        .then((res) => setAddData(res.data.results[0]))
        setRecommendTitle(addData.title?addData.title.english:"popular");
    },[])

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/anime/gogoanime/${recommendTitle}`)
        .then((res) => setRecommend(res.data.results))
        setRecommendLength(recommend?recommend.length:0);
    },[])

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/anime/gogoanime/popular`)
        .then((res) => setRecommendPop(res.data.results))
    },[])

    

    useEffect(() => {
        const storedWatchlist = localStorage.getItem('watchlist');
        if (storedWatchlist) {
        setWatchlist(JSON.parse(storedWatchlist));
        }
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 8,
        slidesToScroll: 2,
    };

    return(<>
        <Preloader/>
        <Navbar />
        <div className="videoInfoPage">
            <div className="video-info-container">
                <img src={animeData.image?animeData.image:"https://via.placeholder.com/150x190"} alt="Anime Cover Image" className="video-info-cover-image" id="animeImage"/>
                <div className="alignVidInfo col-8">
                    <span className="AnimeTitle">{animeData.title}</span>
                    <span className="AnimeTags2"><span className="AnimeTags">{addData?addData.format:"No Data"}</span> | <span className="AnimeTags">{addData?addData.type:"No Data"}</span> | <span className="AnimeTags">{addData?addData.duration:"No Data"}m</span></span>
                    {/* <span className="AnimeAlternateTitle">Other Names: {addData.title}</span> */}
                    <span className="AnimeInfoTitle">Other Titles: <span className="AnimeInfo2"> {addData.title?addData.title.english:"No Title"} | {addData.title?addData.title.romaji:"No Title"} | {addData.title?addData.title.native:"No Title"}</span></span>
                    <div className="descBoxBtnDiv">
                        <span className="AnimeInfoTitle">Genres: 
                        {addData.genres?addData.genres.map((genre) =>{
                            return(
                                <button className="descBoxBtn">{genre}</button>
                            )
                        }):"No Data"} </span>
                    </div>
                    <span className="AnimeInfoTitle">Release Date: <span className="AnimeInfo">{animeData.releaseDate}</span></span>
                    <span className="AnimeInfoTitle">Status: <span className="AnimeInfo">{animeData.status}</span></span>
                    <span className="AnimeInfoTitle">Total Episodes: <span className="AnimeInfo">{animeData.totalEpisodes}</span></span>
                    <span className="AnimeInfoTitle">Rating: <span className="AnimeInfo">{addData?addData.averageRating:"No Data"}</span></span>
                    <span className="AnimeInfoTitle">Season: <span className="AnimeInfo">{addData?addData.season:"No Data"}</span></span>
                    <span className="AnimeInfoTitle">Country of Origin: <span className="AnimeInfo">{addData?addData.countryOfOrigin:"No Data"}</span></span>
                    <div className="episodeBtnGrp2">
                    <Link exact to={`/watch/${id}`}>
                            {animeData.totalEpisodes===0?<button className="watchButtonDiabled" disabled>Watch Now</button>:<button className="watchButton">Watch Now</button>}
                        </Link>
                        {/* <button className="watchButton" onClick={() => handleAddToWatchlist(animeData.id, animeData.title, animeData.image)}>Watchlist {isWatchlist?<AddIcon style={{fontSize:"1.2rem"}}/>:<DoneIcon style={{fontSize:"1.2rem"}}/>} </button> */}
                        <WatchlistButton animeId={animeData.id} animeTitle={animeData.title} animeImage={animeData.image}/>
                    </div>
                    <br/>
                    <div className="AnimeDescSection">
                        <span className="AnimeDescTitle">Synopsis: </span>
                        <br/>   
                        <span className="AnimeDesc">{animeData.description}</span>
                    </div>
                    <br/>
                    <div>
                        <span className="characterTitle2">Characters:</span>
                        <div className="characterCardAlign">
                            {addData.characters?
                            <>
                                <CharacterCard image={addData.characters?addData.characters[0].image:"https://via.placeholder.com/150x190"} c_name={addData.characters?addData.characters[0].name:"No Data"}/>
                                <CharacterCard image={addData.characters?addData.characters[1].image:"https://via.placeholder.com/150x190"} c_name={addData.characters?addData.characters[1].name:"No Data"}/>
                                <CharacterCard image={addData.characters?addData.characters[2].image:"https://via.placeholder.com/150x190"} c_name={addData.characters?addData.characters[2].name:"No Data"}/>
                                <CharacterCard image={addData.characters?addData.characters[3].image:"https://via.placeholder.com/150x190"} c_name={addData.characters?addData.characters[3].name:"No Data"}/>
                                <CharacterCard image={addData.characters?addData.characters[4].image:"https://via.placeholder.com/150x190"} c_name={addData.characters?addData.characters[4].name:"No Data"}/>
                                <CharacterCard image={addData.characters?addData.characters[5].image:"https://via.placeholder.com/150x190"} c_name={addData.characters?addData.characters[5].name:"No Data"}/>
                            </>
                            :"No Data"}
                        </div>
                    </div>
                    <br/><br/>
                    <div className="trailerSection">
                        <span className="characterTitle2">Trailer:</span>
                        <ReactPlayer url={addData.trailer?addData.trailer:"https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran"} title="YouTube video player" />
                    </div>
                    <br/><br/>
                </div>
            </div>
            <div className="recommendedSection">
                    <span className="AnimeTitle2">Recommended for you:</span>
                        <div className="alignRecommendAnime">
                            {recommendLength>8?
                            <Slider {...settings}>
                                {recommend.map((recom) => (
                                    <RecommendCard key={recom.id} id={recom.id} title={recom.title} image={recom.image}/>
                                    ))
                                }
                            </Slider>:
                            <Slider {...settings}>
                            {recommendPop.map((recom) => (
                                <RecommendCard key={recom.id} id={recom.id} title={recom.title} image={recom.image}/>
                                ))
                            }
                        </Slider>}
                        </div>
                </div>
        </div>
        <Footer />
        <ChatbotButton />
        <TopRedirect location="#animeImage"/>
    </>)
}

export default VideoInfo;