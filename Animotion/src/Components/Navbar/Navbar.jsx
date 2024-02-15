import React, {useState} from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

function NavBar() {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};


	return (
		<header>
			<div className="navBar">
				<nav id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
					<Link to="/home" className="logoLink">
						<span className="navLogo">AniMotion</span>
					</Link>
					<Link to="/anime">Anime</Link>
					<Link to="/manga">Manga</Link>
					<Link to="/news">News</Link>
					<Link to="/schedule">Schedule</Link>
				</nav>
				<div className="alignProfileIcon">
					<ProfileIcon/>
				</div>
			</div>
			<div id="mobile" 
			onClick={handleClick}
			>
            <i
              id="bar"
              className={clicked ? "fas fa-times" : "fas fa-bars"}
            />
          </div>
		</header>
	);
}

export default NavBar;