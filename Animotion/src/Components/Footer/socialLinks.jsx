import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.css";

function Social() {
    return(<>
        <div className="social">
            <h1 className="Mont600" style={{color:"#fff", fontSize:20}}>Follow us on</h1>
            <div className="social-icons">
                <Link to="https://www.instagram.com/"><InstagramIcon className="socialIcon" style={{ color: 'var(--secondary-color)' }}/></Link>
                <Link to="https://www.youtube.com/"><YouTubeIcon className="socialIcon" style={{ color: 'var(--secondary-color)' }}/></Link>
                <Link to="https://www.facebook.com/"><FacebookIcon className="socialIcon" style={{ color: 'var(--secondary-color)' }}/></Link>
                <Link to="https://twitter.com/"><TwitterIcon className="socialIcon" style={{ color: 'var(--secondary-color)' }}/></Link>
            </div>
            
        </div>
    </>)
}

export default Social;