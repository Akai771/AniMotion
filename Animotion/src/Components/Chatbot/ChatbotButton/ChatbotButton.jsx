import React from "react";
import "./ChatbotButton.css";
import { Link } from "react-router-dom";

class ChatbotButton extends React.Component {
  render() {
    return (
      <>
        <Link to="/chat">
            <div className="ChatAlnBtn">
                <button class="ChatBtn">
                    <span class="material-symbols-outlined" style={{color:"white"}}>
                      robot_2
                    </span>
                    <p class="ChatTxt">Back to Top</p>
                </button>
            </div>
        </Link>
      </>
    );
  }
}

export default ChatbotButton;