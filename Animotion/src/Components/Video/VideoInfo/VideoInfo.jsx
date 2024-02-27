import React, {useState, useEffect} from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./VideoInfo.css";
import Navbar from "../../Navbar/Navbar";
import ChatbotButton from "../../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../../TopRedirectButton/TopRedirect";
import Footer from "../../Footer/Footer";
import Preloader from "../../Preloader/Preloader";
import CharacterCard from "../VideoMain/characterCard";
import ReactPlayer from "react-player";
import WatchlistButton from "./WatchButtons/watchlistButton";
import WatchNowButton from "./WatchButtons/watchNowButton";
import RecommendCard from "./RecommendCard/recommendCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Comment from "./Comments/comment";

const VideoInfo = () => {
    const [animeData, setAnimeData] = useState([]);
    const [addData, setAddData] = useState([])
    const [recommend, setRecommend] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [recommendPop, setRecommendPop] = useState([]);
    const [recommendTitle, setRecommendTitle] = useState("");
    const [recommendLength, setRecommendLength] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [animeStatus, setAnimeStatus] = useState();

    const {id} = useParams();
    const navigate = useNavigate();
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

    const handleGenreRedirect = (genre) => {
        const genreArray = genre.split(" ");
        const newGenre = genreArray.join("-").toLowerCase();
        navigate(`/genre/${newGenre}`);
    }

    try{
        useEffect(()=>{
            axios.get(`https://animotion-consumet-api.vercel.app/anime/gogoanime/info/${id}`)
            .then((res) => setAnimeData(res.data))
        },[id])
        
        useEffect(()=>{
            axios.get(`https://animotion-consumet-api.vercel.app/anime/gogoanime/info/${id}`)
            .then((res) => setEpisodes(res.data.episodes))
        },[id])

        useEffect(()=>{
            axios.get(`https://api.anify.tv/search/anime/${id}`)
            .then((res) => setAddData(res.data.results[0]))
            setRecommendTitle(addData.title?addData.title.english:"popular");
        },[id])

        useEffect(()=>{
            axios.get(`https://animotion-consumet-api.vercel.app/anime/gogoanime/${id.slice(0, 15)}`)
            .then((res) => setRecommend(res.data.results))
        },[id])

        useEffect(()=>{
            axios.get(`https://animotion-consumet-api.vercel.app/anime/gogoanime/popular`)
            .then((res) => setRecommendPop(res.data.results))
        },[])
    }
    catch(err){
        console.log(err);
    }

    if (screenWidth < 768) {
        settings = {
            dots: true,
            infinite: true,
            speed: 400,
            slidesToShow: 2,
            slidesToScroll: 2
        };
    } 
    else {
        settings = {
            dots: true,
            infinite: true,
            speed: 400,
            slidesToShow: 7,
            slidesToScroll: 2
        };
    }

    return(<>
        <Preloader/>
        <Navbar />
        <div className="videoInfoPage">
            <div className="video-info-container">
                <img src={animeData.image?animeData.image:"https://via.placeholder.com/150x190"} alt="Anime Cover Image" className="video-info-cover-image" id="animeImage"/>
                <div className="alignVidInfo">
                    <span className="AnimeTitle">{animeData.title}</span>
                    <span className="AnimeTags2"><span className="AnimeTags">{addData?addData.format:"No Data"}</span> | <span className="AnimeTags">{addData?addData.type:"No Data"}</span> | <span className="AnimeTags">{addData?addData.duration:"No Data"}m</span></span>
                    <span className="AnimeInfoTitle">Other Titles: <span className="AnimeInfo2"> {addData.title?addData.title.english:"No Title"} | {addData.title?addData.title.romaji:"No Title"} | {addData.title?addData.title.native:"No Title"}</span></span>
                    <div className="descBoxBtnDiv">
                        <span className="AnimeInfoTitle">Genres: 
                        {addData.genres?addData.genres.map((genre) =>{
                            return(
                                <button key={genre} className="descBoxBtn" onClick={()=>handleGenreRedirect(genre)}>{genre}</button>
                            )
                        }):"No Data"} </span>
                    </div>
                    <span className="AnimeInfoTitle">Format: <span className="AnimeInfo">{animeData.subOrDub}</span></span>
                    <span className="AnimeInfoTitle">Release Date: <span className="AnimeInfo">{animeData.releaseDate}</span></span>
                    <span className="AnimeInfoTitle">Status: <span className="AnimeInfo">{animeData.status}</span></span>
                    <span className="AnimeInfoTitle">Total Episodes: <span className="AnimeInfo">{animeData.totalEpisodes}</span></span>
                    <span className="AnimeInfoTitle">Rating: <span className="AnimeInfo">{addData?addData.averageRating:"No Data"}</span></span>
                    <span className="AnimeInfoTitle">Season: <span className="AnimeInfo">{addData?addData.season:"No Data"}</span></span>
                    <span className="AnimeInfoTitle">Country of Origin: <span className="AnimeInfo">{addData?addData.countryOfOrigin:"No Data"}</span></span>
                    <div className="episodeBtnGrp2">
                        <WatchNowButton animeId={animeData.id} animeTitle={animeData.title} animeImage={animeData.image}/>
                        <WatchlistButton animeId={animeData.id} animeTitle={animeData.title} animeImage={animeData.image}/>
                    </div>
                    <br/>
                    <div className="AnimeDescSection">
                        <span className="AnimeDescTitle">Synopsis: </span>
                        <br/>   
                        <span className="AnimeDesc">{addData.description}</span>
                    </div>
                    <br/>
                    <div className="characters">
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
                        <ReactPlayer className="reactTrailerPlayer" url={addData.trailer?addData.trailer:"https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran"} title="YouTube video player" />
                    </div>
                    <br/><br/>
                </div>
            </div>
            <div className="recommendedSection">
                <span className="AnimeTitle">Recommended for you:</span>
                    <div className="alignRecommendAnime">
                        {recommend?recommend.map((recom) => (
                            <RecommendCard key={recom.id} id={recom.id} title={recom.title} image={recom.image}/>
                                )): 
                            recommendPop.map((recom) => (
                            <RecommendCard key={recom.id} id={recom.id} title={recom.title} image={recom.image}/>
                                ))
                        }
                    </div>
            </div>
            <div className="commentSection">
                <span className="AnimeTitle">Comments:</span>
                <Comment animeId={id}/>
            </div>
        </div>
        <Footer />
        <ChatbotButton />
        <TopRedirect location="#animeImage"/>
    </>)
}

export default VideoInfo;