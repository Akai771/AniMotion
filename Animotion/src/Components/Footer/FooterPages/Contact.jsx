import React from "react";
import "./FooterPage.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer";
import ChatbotButton from "../../Chatbot/ChatbotButton/ChatbotButton";
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const Contact = () => {
    return(<>
        <Navbar/>
        <div className="alignContactContent">
            <h1 className="contactUsTitle">Contact us</h1>
            <span className="contactQuestion">For any questions or suggestions, please contact us at:</span>
            <div className="contactContent">
                <div className="alignContact">
                    <MailIcon style={{fontSize:"2.5rem", color:"white"}}/>
                    <div className="contactInfo">
                        <span className="infoTitle">Email</span>
                        <span className="infoDesc">animotion@gmail.com</span>
                    </div>
                </div>
                <div className="divisionLine"/>
                <div className="alignContact">
                    <TelegramIcon style={{fontSize:"2.5rem", color:"white"}}/>
                    <div className="contactInfo">
                        <span className="infoTitle">Telegram</span>
                        <span className="infoDesc">https://t.me/animotion</span>
                    </div>
                </div>
                <div className="divisionLine"/>
                <div className="alignContact">
                    <SportsEsportsIcon style={{fontSize:"2.8rem", color:"white"}}/>
                    <div className="contactInfo">
                        <span className="infoTitle">Discord</span>
                        <span className="infoDesc">https://discord.gg/animotion</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        <ChatbotButton/>
        
    </>)
}

export default Contact;