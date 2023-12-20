import React from "react";
import "./FooterPage.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer";
import ChatbotButton from "../../Chatbot/ChatbotButton/ChatbotButton";
import { Link } from "react-router-dom";

const Dmca = () => {
    return(<>
        <Navbar/>
        <div className="alignContactContent">
            <h1 className="contactUsTitle">DMCA</h1>
            <div className="contactContent">
                <span className="dmcaTitle">DMCA Takedown Request Requirements</span>
                <p>
                    <span className="dmcaDesc">
                    We take the intellectual property rights of others seriously and require that our Users do the same. The Digital 
                    Millennium Copyright Act (DMCA) established a process for addressing claims of copyright infringement. If you own 
                    a copyright or have authority to act on behalf of a copyright owner and want to report a claim that a third party 
                    is infringing that material on or through GitLab's services, please submit a DMCA report on our Contact page, and 
                    we will take appropriate action.
                    </span>
                </p>
                <span className="dmcaTitle">DMCA Report Requirements</span>
                <p>
                    <span className="dmcaDesc">A description of the copyrighted work that you claim is being infringed;</span>
                    <br/>
                    <span className="dmcaDesc">A description of the material you claim is infringing and that you want removed or access to which you want disabled and the URL or other location of that material;</span>
                    <br/>
                    <span className="dmcaDesc">Your name, title (if acting as an agent), address, telephone number, and email address;</span>
                    <br/>
                    <span className="dmcaDesc">The following statement: "I have a good faith belief that the use of the copyrighted material I am complaining of is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use)";</span>
                    <br/>
                    <span className="dmcaDesc">The following statement: "The information in this notice is accurate and, under penalty of perjury, I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right that is allegedly infringed";</span>
                    <br/>
                    <span className="dmcaDesc">An electronic or physical signature of the owner of the copyright</span>
                    <br/>
                    <span className="dmcaDesc">Your DMCA take down request should be submitted here: <Link exact to="/contact">https://animotion.com/contact</Link></span>
                    <br/>
                    <span className="dmcaDesc">We will then review your DMCA request and take proper actions, including removal of the content from the website.</span>
                </p>
            </div>
            <br/><br/>
        </div>
        <Footer/>
        <ChatbotButton/>
        
    </>)
}

export default Dmca;