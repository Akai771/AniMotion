import React from "react";
import "./comment.css";
import Avatar from '@mui/material/Avatar';
import { supabase } from "../../../Signing/supabaseClient";
import { DeleteForeverOutlined } from "@mui/icons-material";

function CommentCard({comment, user, date}) {
    // Delete comment from the database

    async function deleteComment(){
        const { data, error } = await supabase.from('comments').delete().eq('comment', comment);
        if (error) {
            console.log("Error deleting comment: ", error);
        }
        else{
            console.log("Comment deleted");
            window.location.reload();
        }
    }

    return (
        <div className="commentCard">
            <div className="commentUser">
                <Avatar alt="Pfp" src="https://via.placeholder.com/150x190" />
                <span className="userFont" >{user}</span>
                <span className="dateFont">{date}</span>
            </div>
            <div className="commentText">
                <p className="commentFont">{comment}</p>
            </div>
            <div className="commentDelete">
                <button className="deleteCommentBtn" onClick={deleteComment}><DeleteForeverOutlined/>Delete</button>
            </div>
        </div>
    );
}

export default CommentCard;
