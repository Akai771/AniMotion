import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<header>
			<nav>
				<Link to="/browse">Browse</Link>
                <Link to="/news">News</Link>
				<Link to="/home" className="logoLink">
                	<span className="navLogo">AniMotion</span>
            	</Link>
				<Link to="/schedule">Schedule</Link>
				<Link to="/merch">Merch</Link>
			</nav>
		</header>
	);
}

export default NavBar;