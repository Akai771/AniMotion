import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import ScheduleCard from "./ScheduleCard";
import "./Schedule.css";

function Schedule() {
    // const [schedule, setSchedule] = useState([]);
    // useEffect(() => {
    //         let url = `https://api.anify.tv/schedule?type=anime&fields=[id,title,airingAt]`
    //         fetch(url)
    //         .then((response) => response.json())
    //         .then(data => setSchedule(data.schedule))
    //     }, []);

    return (
    <>
        <div>
            <NavBar/>
            <div className="scheduleAlign">
                <h1 className="scheduleTitle">Schedule</h1>
                <div className="scheduleDivideLine"/>
                <div className="scheduleDayBtnGrp">
                    <button className="scheduleDayBtn" >Sunday</button>
                    <button className="scheduleDayBtn" >Monday</button>
                    <button className="scheduleDayBtn" >Tuesday</button>
                    <button className="scheduleDayBtn" >Wednesday</button>
                    <button className="scheduleDayBtn" >Thursday</button>
                    <button className="scheduleDayBtn" >Friday</button>
                    <button className="scheduleDayBtn" >Saturday</button>
                </div>
                <ScheduleCard title="Haikyuu" airingAt="00:00"/>
                <ScheduleCard title="Haikyuu" airingAt="00:00"/>
                <ScheduleCard title="Anime Title" airingAt="00:00"/>
                <ScheduleCard title="Anime Title" airingAt="00:00"/>
                <ScheduleCard title="Anime Title" airingAt="00:00"/>
            </div>
            <ChatbotButton/>
            <TopRedirect location="#topCarousel"/>
        </div>
        </>);
}

export default Schedule;