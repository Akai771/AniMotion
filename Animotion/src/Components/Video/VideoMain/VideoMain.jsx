import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import "./VideoMain.css";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import ChatbotButton from "../../Chatbot/ChatbotButton/ChatbotButton";
import TopRedirect from "../../TopRedirectButton/TopRedirect";
import Preloader from "../../Preloader/Preloader";
import CharacterCard from "./characterCard";

const VideoMain = () => {
    const {id} = useParams();

    const [animeData, setAnimeData] = useState([]);
    const [server, setServer] = useState([])
    const [episode, setEpisode] = useState([])
    const [selectedOption, setSelectedOption] = useState(1);
    const [episodeId, setEpisodeId] = useState([0]);
    const [episodeNumber, setEpisodeNumber] = useState(1);
    const [addData, setAddData] = useState([])

    useEffect(()=>{
        axios.get(`https://api.anify.tv/search/anime/${id}`)
        .then((res) => setAddData(res.data.results[0]))
    },[])
    console.log(addData);

    const handleOptionChange = (e) => {
        setEpisodeNumber(e.target.value);
        setEpisodeId(e.target.id);
        setSelectedOption(e.target.value);

      };

      console.log(selectedOption);

    useEffect(()=>{
        axios.get(`https://consumet-api-yncc.onrender.com/anime/gogoanime/info/${id}`)
        .then((res) => setEpisode(res.data.episodes))
    },[])

    useEffect(()=>{
        axios.get(`https://consumet-api-yncc.onrender.com/anime/gogoanime/info/${id}`)
        .then((res) => setAnimeData(res.data))
    },[])

    useEffect(()=>{
        axios.get(`https://consumet-api-yncc.onrender.com/anime/gogoanime/servers/${episodeId}`)
        .then((res) => setServer(res.data[0]))
    },[episodeId])



    return(<>
        <Preloader/>
        <NavBar />
        <div className="video-main-container">
            <iframe width="1280" height="720"  className="AnimeVideoPlayer" src={server.url} title="Animotion video player" id="videoPlayer" allowfullscreen="allowfullscreen"/>
            <div className="ServerBox">
                <span className="ServerInfoTitle">Episode: <span className="ServerInfo">{episodeNumber}</span></span>
                <span className="ServerInfoTitle">Server: <span className="ServerInfo">{server.name}</span></span>
            </div>
            <br/>
            <div className="VidEpisodes">
                <div>
                    <span className="AnimeTitle">Episodes:</span>
                    <br/>
                    <div className="episodeBtnGrp">
                        {episode.map((anime) => {
                            return(<>
                                {/* <button className="episodeBtn" key={anime.id} value={anime.number} id={anime.id} onClick={handleClickedEpisode}>{anime.number}</button> */}
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
            <br/>
            <div className="alignVidMain">
                <img src={animeData.image} alt="Anime Cover Image" className="video-info-cover-image"/>
                <div className="VidDescSection">
                    <span className="AnimeTitle">{animeData.title}</span>
                    <br/>
                    <span className="AnimeInfoTitle">Episode {episodeNumber}</span>
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