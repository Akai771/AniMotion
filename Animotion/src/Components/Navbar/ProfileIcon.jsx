import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from "axios";
import "./Navbar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import HistoryIcon from '@mui/icons-material/History';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import { supabase } from "../Signing/supabaseClient";

function ProfileIcon() {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = token?token.user.user_metadata:"No Data";
  const name = user.fname;

  const options = {
    method: 'GET',
    url: 'https://any-anime.p.rapidapi.com/v1/anime/gif/1',
    headers: {
      'X-RapidAPI-Key': '1277aeaf7cmsh0fa4d916bceb446p1740a1jsn9d611343e42c',
      'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
    }
  };
  const [pfp, setPfp] = React.useState("https://res.cloudinary.com/anyanime/image/upload/anime-icegif-11Kurizu9.gif");

  async function getGif(){
    try {
      const response = await axios.request(options);
      setPfp(response.data.images[0]);
    } catch (error) {
      console.error(error);
    }
  }

  const navigate = useNavigate();

	function handleLogout(){
		localStorage.removeItem("token");
    supabase.auth.signOut();
		navigate("/signin");
	}

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",  
    },
  });

  const [randomAnime, setRandomAnime] = React.useState([]);

  React.useEffect(()=>{
    axios.get("https://animotion-random-anime.up.railway.app/anime")
    .then((res) => setRandomAnime(res.data))
  },[])

  const randomNum = Math.floor(Math.random()*randomAnime.length);
  const randomAnimeData = randomAnime[randomNum];
  
  const handleRandomAnime = () => {
    navigate(`/details/${randomAnimeData.id}`);
    window.location.reload();
  }

    return (
      <>
        <div className="ProfileIcon">
        <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Pfp" src={pfp} />
              </IconButton>
            <Menu
              sx={{ mt: '45px',
              '& .MuiPaper-root': {
                width: '18rem',
              },
              
              }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}><span className="greetText1">Hi, <span className="greetText2">{name}</span> </span></MenuItem>
              <div className="greetDivider" />
              <Link exact to={"/premium"} style={{textDecoration:"none", color:"#FFDF00"}}><MenuItem><WorkspacePremiumOutlinedIcon style={{fontSize:"1.4rem",marginRight:"0.5rem"}}/> Premium </MenuItem></Link>
              <MenuItem onClick={getGif}><AddAPhotoOutlinedIcon style={{fontSize:"1.2rem",marginRight:"0.5rem"}}/>Random PFP</MenuItem>
              <MenuItem onClick={handleRandomAnime}><ShuffleRoundedIcon style={{fontSize:"1.2rem",marginRight:"0.5rem"}}/> Random Anime </MenuItem>
              <Link exact to={"/profile"} style={{textDecoration:"none", color:"var(--textColor)"}}><MenuItem><AccountCircleOutlinedIcon style={{fontSize:"1.2rem",marginRight:"0.5rem"}}/> My Account </MenuItem></Link>
              <Link exact to={"/watchlist"} style={{textDecoration:"none", color:"var(--textColor)"}}><MenuItem><BookmarkBorderIcon style={{fontSize:"1.2rem",marginRight:"0.5rem"}}/> Watchlist </MenuItem></Link>
              <Link exact to={"/history"} style={{textDecoration:"none", color:"var(--textColor)"}}><MenuItem><HistoryIcon style={{fontSize:"1.2rem",marginRight:"0.5rem"}}/> History </MenuItem></Link>
              <div className="greetDivider" />
              <MenuItem onClick={handleLogout}><LogoutIcon style={{fontSize:"1.2rem",marginRight:"0.5rem"}}/> Logout</MenuItem>
            </Menu>
          </Box>
          </ThemeProvider>
        </div>
      </>
    );
}

export default ProfileIcon;