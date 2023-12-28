import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

function NavBar() {
	return (
		<header>
			<div className="navBar">
				<nav>
					<Link to="/home" className="logoLink">
						<span className="navLogo">AniMotion</span>
					</Link>
					<Link to="/browse">Browse</Link>
					<Link to="/news">News</Link>
					<Link to="/schedule">Schedule</Link>
					<Link to="/merch">Merch</Link>
				</nav>
				<div className="alignProfileIcon">
					<ProfileIcon />
				</div>
			</div>
		</header>
	);
}

export default NavBar;