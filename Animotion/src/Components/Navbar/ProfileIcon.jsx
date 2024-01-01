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

function ProfileIcon() {

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
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

  const navigate = useNavigate();

	function handleLogout(){
		sessionStorage.removeItem("token");
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
      mode: 'dark',
    },
  });

    return (
      <>
        <div className="ProfileIcon">
        <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Pfp" src={pfp} />
              </IconButton>
            <Menu
              sx={{ mt: '45px' }}
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
              <MenuItem onClick={getGif} >Random PFP</MenuItem>
              <Link exact to={"/profile"} style={{textDecoration:"none", color:"var(--textColor)"}}><MenuItem>My Account</MenuItem></Link>
              <Link exact to={"/premium"} style={{textDecoration:"none", color:"var(--secondary-color)"}}><MenuItem>Premium</MenuItem></Link>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
          </ThemeProvider>
        </div>
      </>
    );
}

export default ProfileIcon;