import React from "react";
import "./Logout.css";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

function Logout({token}) {
    const navigate = useNavigate();

	function handleLogout(){
		sessionStorage.removeItem("token");
		navigate("/signin");
	}

    return (
      <>
        <div className="LogoutAlnBtn">
            <button class="LogoutBtn" onClick={handleLogout}>
                <LogoutIcon style={{color:"white"}}/>
                <p class="LogoutTxt">Logout</p>
            </button>
        </div>
      </>
    );
}

export default Logout;