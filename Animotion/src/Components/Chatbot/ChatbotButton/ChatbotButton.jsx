import React from "react";
import "./Chatbotbutton.css";
import { Link } from "react-router-dom";

class ChatbotButton extends React.Component {
  render() {
    return (
      <>
        <Link to="/chat">
            <div className="ChatAlnBtn">
                <button class="ChatBtn">
                    <span class="material-symbols-outlined robotLgo" style={{color:"white"}}>
                      robot_2
                    </span>
                    <p class="ChatTxt">Hiro - Chatbot</p>
                </button>
            </div>
        </Link>
      </>
    );
  }
}

export default ChatbotButton;