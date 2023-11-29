import React from "react";
import "./VidCard.css";

const VidCard = ({VidData}) => {
  const {VidImage, VidTitle, VidTime, VidType, VidEp, VidLang} = VidData;
    return (
      <>
        <div class="Prodcard">
            <img className="VidImage" src={VidImage} alt={VidTitle} />
            <div class="Prodcard-info">
              <p class="text-title Mont200" style={{fontSize:16}}>{VidTitle}</p>
              <p class="Mont200" style={{fontSize:8}}>{VidTime}</p>
              <button class="vidInfo Mont200" style={{fontSize:8}}>{VidType}</button>
              <button class="vidInfo Mont200" style={{fontSize:8}}>{VidEp}</button>
              <button class="vidInfo Mont200" style={{fontSize:8}}>{VidLang}</button>
            </div>
        </div>
      </>
    );
};



export default VidCard;