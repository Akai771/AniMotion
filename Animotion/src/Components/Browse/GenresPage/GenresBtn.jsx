import React from "react";
import { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import "./genres.css";

const GenresBtn = ({id, title}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/genre/${id}`);
    }
    return(<>
        <div>
            <button className="genresBtn" id={id} onClick={handleClick}>{title}</button>
        </div>
    </>)
}

export default GenresBtn;