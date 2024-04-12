import React,{useEffect, useState} from "react";
import "./comment.css";
import Avatar from '@mui/material/Avatar';
import { supabase } from "../../../Signing/supabaseClient";
import { DeleteForeverOutlined } from "@mui/icons-material";

function CommentCard({comment, user, userID, date, onCommentDelete, pfp}) {
    const token = localStorage.getItem('token');
    const tokenData = JSON.parse(token);
    const userId = tokenData.user.id
    const [commentDisplay, setCommentDisplay] = useState(false);

    if (user === "undefined undefined"){
        user = "Anonymous";
    }
    else{
        user = user;
    }

    // Check if the user is the same as the comment user
    useEffect(() => {
        if(userId === userID){
            setCommentDisplay(true);
        }
        else{
            setCommentDisplay(false);
        }
    }, [userId, userID]);

    // Delete comment from the database
    async function deleteComment(){ 
        const { data, error } = await supabase.from('comments').delete().eq('comment', comment);
        if (error) {
            console.log("Error deleting comment: ", error);
        }
        else{
            console.log("Comment deleted");
            onCommentDelete();
        }
    }

    return (
        <div key={userID} className="commentCard">
            <div className="commentUser">
                <Avatar alt="Pfp" src={pfp} />
                <span className="userFont" >{user}</span>
                <span className="dateFont">{date}</span>
            </div>
            <div className="commentText">
                <p className="commentFont">{comment}</p>
            </div>
            <div className="commentDelete">
                <button className={commentDisplay?"deleteCommentVisible":"deleteCommentHidden"} onClick={deleteComment}><DeleteForeverOutlined/>Delete</button>
            </div>
        </div>
    );
}

export default CommentCard;
