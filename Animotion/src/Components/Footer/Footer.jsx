import React from "react";
import Social from "./socialLinks";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
        <footer className="footerNew">
          <Social />
          <div className="tline alignBoxFoot">
            <div className="footerLinks">
                <Link exact to="/dmca" className="footerLink">DMCA</Link>
                <Link exact to="/contact" className="footerLink">Contact Us</Link>
                <Link exact to="/terms" className="footerLink">Terms & Services</Link>
            </div>

            <span className="footerDisclaimer">Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.</span>
            <p className="footerDesc">
                Copyright ©<span className="footerDescHighlight">Animotion</span>All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    );
}

export default Footer;