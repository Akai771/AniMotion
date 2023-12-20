import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import ScheduleCard from "./ScheduleCard";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./Schedule.css";

function Schedule() {
    const [schedule, setSchedule] = useState([]);
    const [day, setDay] = useState("sunday");

    useEffect(()=>{
        axios.get("https://api.anify.tv/schedule?type=anime&fields=[id,title,airingEpisode,coverImage]")
        .then((res) => setSchedule(res.data))
    },[])
    const defaultSchedule = schedule[day];

    return (
    <>
        <div>
            <NavBar/>
            <div className="scheduleAlign">
                <h1 className="scheduleTitle">Schedule</h1>
                <div className="scheduleDivideLine"/>
                <div className="scheduleDayBtnGrp">
                    <button className="scheduleDayBtn" onClick={() => setDay("sunday")}>Sunday</button>
                    <button className="scheduleDayBtn" onClick={() => setDay("monday")}>Monday</button>
                    <button className="scheduleDayBtn" onClick={() => setDay("tuesday")}>Tuesday</button>
                    <button className="scheduleDayBtn" onClick={() => setDay("wednesday")}>Wednesday</button>
                    <button className="scheduleDayBtn" onClick={() => setDay("thursday")}>Thursday</button>
                    <button className="scheduleDayBtn" onClick={() => setDay("friday")}>Friday</button>
                    <button className="scheduleDayBtn" onClick={() => setDay("saturday")}>Saturday</button>
                </div>

                {defaultSchedule.map((schedule) => (
                    <ScheduleCard key={schedule.id} title={schedule.title} coverImage={schedule.coverImage} airingEpisode={schedule.airingEpisode}/>
                    ))
                }
                <br/><br/><br/>
            </div>
            
            <Footer />
            <ChatbotButton/>
            <TopRedirect location="#topCarousel"/>
        </div>
        </>);
}

export default Schedule;