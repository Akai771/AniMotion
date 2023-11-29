import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<header>
			<nav>
				<Link to="/Browse">Browse</Link>
                <Link to="/Categories">News</Link>
				<Link to="/home" className="logoLink">
                	<span className="navLogo">AniMotion</span>
            	</Link>
				<Link to="/DietCalc">MyList</Link>
				<Link to="/About">Merch</Link>
			</nav>
		</header>
	);
}

export default NavBar;