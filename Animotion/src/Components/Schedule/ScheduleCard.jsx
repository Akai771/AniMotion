import "./Schedule.css"
import React from "react";

function ScheduleCard({ title, airingAt }) {
    return (
        <div>
            <div class="ScheduleCard">
                <div className="ScheduleCardAlign">
                    <img src="https://via.placeholder.com/190x290" class="ScheduleCardImg" alt="..."/>
                    <div className="ScheduleCardCont">
                        <span class="scheduleTitleTxt">{title}</span>
                        <span class="scheduleTimeTxt">{airingAt}</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ScheduleCard;