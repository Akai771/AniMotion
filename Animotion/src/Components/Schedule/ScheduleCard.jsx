import "./Schedule.css"
import React from "react";

function ScheduleCard({ title, airingEpisode, coverImage }) {
    return (
        <div>
            <div class="ScheduleCard">
                <div className="ScheduleCardAlign">
                    <img src={coverImage?coverImage:"https://via.placeholder.com/150x190"} class="ScheduleCardImg" alt="..."/>
                    <div className="ScheduleCardCont">
                        <span class="scheduleTitleTxt">{title?title.english:title.romaji}</span>
                        <span class="scheduleTimeTxt">EP {airingEpisode}</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ScheduleCard;