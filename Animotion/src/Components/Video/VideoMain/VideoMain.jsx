import React, {useState, useEffect} from "react";
import { useParams, useSearchParams, useNavigate} from 'react-router-dom';
import axios from "axios";
import "./VideoMain.css";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import ChatbotButton from "../../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../../TopRedirectButton/TopRedirect";
import Preloader from "../../Preloader/Preloader";
import CharacterCard from "./characterCard";
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';

const VideoMain = () => {
    const {id} = useParams();
    const [searchParams, setSearchParams] = useSearchParams()
    const defaultEpisodeId = `${id}-episode-1`
    const histEpisodeId = searchParams?searchParams.get('epId'): defaultEpisodeId;
    const histEpisodeNumber = histEpisodeId?parseInt(histEpisodeId.split("-").pop()):1

    const [animeData, setAnimeData] = useState([]);
    const [server, setServer] = useState([])
    const [episode, setEpisode] = useState([])
    const [selectedOption, setSelectedOption] = useState(histEpisodeNumber);
    const [episodeId, setEpisodeId] = useState(histEpisodeId);
    const [episodeNumber, setEpisodeNumber] = useState(histEpisodeNumber);
    const [addData, setAddData] = useState([]);
    const [epNo, setEpNo] = useState(histEpisodeNumber);

    const navigate = useNavigate();
    
    const handleOptionChange = (e) => {
        setEpisodeNumber(e.target.value);
        setSelectedOption(e.target.value);
        navigate(`/watch/${id}?epId=${e.target.id}`)
        window.location.reload();
      };

      const handleNextEp = () => {
        if (epNo >= 1 && epNo < episode.length) {
            const newEpNo = epNo + 1;
            setEpNo(newEpNo);
            const newEpId = `${id}-episode-${newEpNo}`
            setEpisodeId(newEpId);
            navigate(`/watch/${id}?epId=${newEpId}`);
            window.location.reload();
        }
    }
    
    const handlePrevEp = () => {
        if (epNo > 1) {
            const newEpNo = epNo - 1;
            setEpNo(newEpNo);
            const newEpId = `${id}-episode-${newEpNo}`
            setEpisodeId(newEpId);
            navigate(`/watch/${id}?epId=${newEpId}`);
            window.location.reload();
        } 
    }

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/anime/gogoanime/info/${id}`)
        .then((res) => {
            setAnimeData(res.data),
            setEpisode(res.data.episodes)
        });

        axios.get(`https://api.anify.tv/search/anime/${id}`)
        .then((res) => setAddData(res.data.results[0]));

        window.scrollTo(0, 0);

    },[id])

    useEffect(()=>{
        axios.get(`https://animotion-consumet-api.vercel.app/anime/gogoanime/servers/${episodeId}`)
        .then((res) => {
            setServer(res.data[0])})
        .catch((err) => console.error("Error fetching server data:", err))
    },[episodeId, id])

    var specificAnimeID = JSON.parse(localStorage.getItem('history_alt'))
    if (Array.isArray(specificAnimeID)) {
        var targetAnimeId = id;
        var targetIndex = specificAnimeID.findIndex(function(anime) {
          return anime.animeId === targetAnimeId;
        });
        if (targetIndex !== -1) {
          specificAnimeID[targetIndex].animeEpisodeId = episodeId;
        } else {
          console.error("AnimeId not found in 'history'");
        }
        localStorage.setItem('history_alt', JSON.stringify(specificAnimeID));
    } 
    else {
        console.error("Invalid data format in 'history'");
    }

    return(<>
        <Preloader/>
        <NavBar />
        <div className="video-main-container">
            <iframe className="AnimeVideoPlayer" src={server.url} title="Animotion video player" id="videoPlayer" allowfullscreen="allowfullscreen"/>
            <div className="ServerBox">
                <div className="serveBoxCont1">
                    <span className="ServerInfoTitle">Episode: <span className="ServerInfo">{episodeNumber}</span></span>
                    <span className="ServerInfoTitle">Server: <span className="ServerInfo">{server.name}</span></span>
                </div>
                <div className="serveBoxCont2">
                    <button className="epChangeButton" onClick={handlePrevEp}><FastRewindIcon style={{paddingBottom:"1px"}} />Prev</button>
                    <button className="epChangeButton" onClick={handleNextEp}>Next<FastForwardIcon style={{paddingBottom:"1px"}}/></button>
                </div>
            </div>
            <br/>
            <div className="VidEpisodes">
                <div>
                    <span className="AnimeTitle">Episodes:</span>
                    <br/>
                    <div className="episodeBox">
                        <div className="episodeMainBtnGrp">
                            {episode.map((anime) => {       
                                return(<>
                                    <div className="episodeRadioBtnGrp">
                                        <label className="episodeBtnLabel" key={anime.id} htmlFor={anime.id}>
                                            <input  className="episodeRadioBtn" type="radio" name={anime.number} id={anime.id} value={anime.number} checked={selectedOption == anime.number} onChange={handleOptionChange}/>
                                            <span className="episodeRadioSpan">{anime.number}</span>
                                        </label>
                                    </div>
                                </>)
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="alignVidMain">
                <img src={animeData.image} alt="Anime Cover Image" className="video-info-cover-image"/>
                <div className="VidDescSection">
                    <span className="AnimeTitle">{animeData.title}</span>
                    <br/>
                    <span className="AnimeInfo">Episode {episodeNumber}</span>
                    <div className="horizontalLine2"/>
                    <br/>
                    <div> 
                        <span className="AnimeDesc">{animeData.description}</span>
                    </div>
                </div>
            </div>
            <div className="characterSection">
                <span className="characterTitle">Characters:</span>
                <div className="characterCardAlign">
                    <CharacterCard image={addData.characters?addData.characters[0].image:"https://via.placeholder.com/150x190"} c_name={addData.characters?addData.characters[0].name:"No Data"}/>
                    <CharacterCard image={addData.characters?addData.characters[1].image:"https://via.placeholder.com/150x190"} c_name={addData.characters?addData.characters[1].name:"No Data"}/>
                    <CharacterCard image={addData.characters?addData.characters[2].image:"https://via.placeholder.com/150x190"} c_name={addData.characters?addData.characters[2].name:"No Data"}/>
                    <CharacterCard image={addData.characters?addData.characters[3].image:"https://via.placeholder.com/150x190"} c_name={addData.characters?addData.characters[3].name:"No Data"}/>
                    <CharacterCard image={addData.characters?addData.characters[4].image:"https://via.placeholder.com/150x190"} c_name={addData.characters?addData.characters[4].name:"No Data"}/>
                    <CharacterCard image={addData.characters?addData.characters[5].image:"https://via.placeholder.com/150x190"} c_name={addData.characters?addData.characters[5].name:"No Data"}/>
                </div>
            </div>
        </div>
        <Footer />
        <ChatbotButton />
        <TopRedirect location="#videoPlayer"/>
    </>)
}

export default VideoMain;