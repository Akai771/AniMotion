import React from "react";
import "./FooterPage.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer";
import ChatbotButton from "../../Chatbot/ChatbotButton/ChatbotButton";

const Terms = () => {
    return(<>
        <Navbar/>
        <div className="alignContactContent2">
            <h1 className="contactUsTitle">Terms & Services</h1>
            <div className="contactContent">
                <span className="termsTitle">Animotion Website's Terms and Conditions of Use</span>
                <br/>
                <p><span className="termsSubTitle">1. Terms</span>
                    <br/>
                    <span className="termsDesc">
                        By accessing this Website, accessible from https://kickassanime.am, you are agreeing to be bound by 
                        these Website Terms and Conditions of Use and agree that you are responsible for the agreement with 
                        any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this 
                        site. The materials contained in this Website are protected by copyright and trade mark law.
                    </span>
                    <br/><br/>
                    <span className="termsSubTitle">2. License</span>
                    <br/>
                    <span className="termsDesc">
                        Permission is granted to temporarily download one copy of the materials on KickAssAnime Anime's Website for 
                        personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                        and under this license you may not:
                        <br/>
                        <ul>
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose or for any public display;</li>
                            <li>attempt to reverse engineer any software contained on Animtotion's Anime Website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                        This will let KickAssAnime Anime to terminate upon violations of any of these restrictions. Upon termination,
                        your viewing right will also be terminated and you should destroy any downloaded materials in your possession 
                        whether it is printed or electronic format.
                    </span>
                    <br/><br/>
                    <span className="termsSubTitle">3. Disclaimer</span>
                    <br/>
                    <span className="termsDesc">
                    All the materials on KickAssAnime Anime’s Website are provided "as is". KickAssAnime Anime makes no warranties, 
                    may it be expressed or implied, therefore negates all other warranties. Furthermore, KickAssAnime Anime does not 
                    make any representations concerning the accuracy or reliability of the use of the materials on its Website or 
                    otherwise relating to such materials or any sites linked to this Website.
                    </span>
                    <br/><br/>
                    <span className="termsSubTitle">4. Limitations</span>
                    <br/>
                    <span className="termsDesc">
                    KickAssAnime Anime or its suppliers will not be hold accountable for any damages that will arise with the use or 
                    inability to use the materials on KickAssAnime Anime’s Website, even if KickAssAnime Anime or an authorize 
                    representative of this Website has been notified, orally or written, of the possibility of such damage. Some 
                    jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, 
                    these limitations may not apply to you.
                    </span>
                    <br/><br/>
                    <span className="termsSubTitle">5. Revisions and Errata</span>
                    <br/>
                    <span className="termsDesc">
                    The materials appearing on KickAssAnime Anime’s Website may include technical, typographical, or photographic
                    errors. KickAssAnime Anime will not promise that any of the materials in this Website are accurate, complete, 
                    or current. KickAssAnime Anime may change the materials contained on its Website at any time without notice. 
                    KickAssAnime Anime does not make any commitment to update the materials.
                    </span>
                    <br/><br/>
                    <span className="termsSubTitle">6. Links</span>
                    <br/>
                    <span className="termsDesc">
                    KickAssAnime Anime has not reviewed all of the sites linked to its Website and is not responsible for the 
                    contents of any such linked site. The presence of any link does not imply endorsement by KickAssAnime Anime 
                    of the site. The use of any linked website is at the user’s own risk.
                    </span>
                    <br/><br/>
                    <span className="termsSubTitle">7. Site Terms of Use Modifications</span>
                    <br/>
                    <span className="termsDesc">
                    KickAssAnime Anime may revise these Terms of Use for its Website at any time without prior notice. By using 
                    this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
                    </span>
                    <br/><br/>
                    <span className="termsSubTitle">8. Your Privacy</span>
                    <br/>
                    <span className="termsDesc">
                    Please read our Privacy Policy.
                    </span>
                    <br/><br/>
                    <span className="termsSubTitle">9. Governing Law</span>
                    <br/>
                    <span className="termsDesc">
                    Any claim related to KickAssAnime Anime's Website shall be governed by the laws of in without regards to its
                    conflict of law provisions.
                    </span>
                </p>
            </div>
            <br/><br/>
        </div>
        <Footer/>
        <ChatbotButton/>
        
    </>)
}

export default Terms;