import {useEffect, React} from "react";
import CarouselHome from "./Carousel/Carousel.jsx";
import VidCard from "./VideoCard/VidCard.jsx";
import VidData from "./VideoCard/VidData.jsx";
import "./Home.css";
import "../Fonts.css";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";

const Home = () =>{
    return(<>
    <div id="topCarousel">
        <CarouselHome />
    </div>
    <section className="alignHomeItems popSect">
        <br/>
        <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Trending</h3></div>
        <br/>
        <div className="rowCard">
            {VidData.map((VidData) => (
                <VidCard key={VidData.id} VidData={VidData}/>
                ))
            }
        </div>
        <br/><br/>
        <div class="vl"><h3 className="Mont600" style={{color:"#fff", paddingLeft:"10px"}}>Latest Episode</h3></div>
        <br/>
        <div className="rowCard">
            {VidData.map((VidData) => (
                <VidCard key={VidData.id} VidData={VidData}/>
                ))
            }
        </div>
        <br/><br/>     
    </section>
    <TopRedirect location="#topCarousel"/>
    <ChatbotButton/>
    </>);
}

export default Home;