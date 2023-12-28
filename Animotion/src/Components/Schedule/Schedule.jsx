import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import ScheduleCard from "./ScheduleCard";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./Schedule.css";
import Preloader from "../Preloader/Preloader";

const Schedule = () => {
    const [schedule, setSchedule] = useState([]);
    const [day, setDay] = useState("sunday");
    const [defaultSchedule, setDefaultSchedule] = useState([]);


    const handleDayChange = (e) => {
        setDay(e.target.value);
    }

    useEffect(()=>{
        axios.get("https://api.anify.tv/schedule?type=anime&fields=[id,title,coverImage,airingEpisode]")
        .then((res) => setSchedule(res.data))
        setDefaultSchedule(schedule[day] || []); 
    },[day])
    console.log(defaultSchedule);
    console.log(day);

    return (
    <>
        <Preloader/>
        <div className="SchedulePage">
            <NavBar/>
            <div className="scheduleAlign">
                <h1 className="scheduleTitle">SCHEDULE</h1>
                <div className="scheduleDivideLine"/>
                <div className="scheduleDayBtnGrp">
                    <div className="radio-inputs">
                        <label className="radio">
                            <input type="radio" value="sunday" checked={day == "sunday"} onChange={handleDayChange}/>
                            <span className="name">Sunday</span>
                        </label>
                        <label className="radio">
                            <input type="radio" value="monday" checked={day == "monday"} onChange={handleDayChange}/>
                            <span className="name">Monday</span>
                        </label>
                        <label className="radio">
                            <input type="radio" value="tuesday" checked={day == "tuesday"} onChange={handleDayChange}/>
                            <span className="name">Tuesday</span>
                        </label>
                        <label className="radio">
                            <input type="radio" value="wednesday" checked={day == "wednesday"} onChange={handleDayChange}/>
                            <span className="name">Wednesday</span>
                        </label>
                        <label className="radio">
                            <input type="radio" value="thursday" checked={day == "thursday"} onChange={handleDayChange}/>
                            <span className="name">Thursday</span>
                        </label>
                        <label className="radio">
                            <input type="radio" value="friday" checked={day == "friday"} onChange={handleDayChange}/>
                            <span className="name">Friday</span>
                        </label>
                        <label className="radio">
                            <input type="radio" value="saturday" checked={day == "saturday"} onChange={handleDayChange}/>
                            <span className="name">Saturday</span>
                        </label>
                    </div>
                </div>
                <div className="scheduleDivideLine"/>
                <span className="scheduleDayTxt">DAY: <span className="scheduleDayTxt2">{day.toUpperCase()}</span></span>
                <div className="scheduleCardBg">
                    {defaultSchedule.map((schedule) => (
                        <ScheduleCard 
                        // key={schedule.id?schedule.id:"1"} 
                        title={schedule.title} 
                        coverImage={schedule.coverImage} 
                        airingEpisode={schedule.airingEpisode}/>
                        ))
                    }
                </div>
                <br/><br/><br/>
            </div>
            <ChatbotButton/>
            <TopRedirect location="#topCarousel"/>
        </div>
        </>);
}

export default Schedule;