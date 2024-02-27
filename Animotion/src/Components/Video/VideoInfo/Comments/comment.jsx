import React,{useState, useEffect} from "react";
import "./comment.css";
import CommentCard from "./commentCard";
import { supabase } from "../../../Signing/supabaseClient";
import moment from 'moment';


function Comment({animeId}) {
    const [comments, setComments] = useState([]);
    const token = localStorage.getItem('token');
    const tokenData = JSON.parse(token);
    const userId = tokenData.user.id
    const userNameCont = tokenData.user.user_metadata;
    const userName = userNameCont.fname + " " + userNameCont.lname;

    const currentDate = moment();
    const formattedDate = currentDate.format('YYYY/MM/DD');

    //Handle the comment form
    const handleComment = (e) => {
        e.preventDefault();
        const comment = e.target[0].value;
        postComment(comment);
        e.target[0].value = "";
    }

    //Post comment to the database
    async function postComment(comment){
        const { data, error } = await supabase.from('comments').insert([
            { animeID: animeId, userId: userId, userName: userName, comment: comment, created_date: formattedDate}
        ]);
        if (error) {
            console.log("Error posting comment: ", error);
        }
        else{
            getComments();
        }
    }

    // Fetches the comments from the database
    useEffect(() => {
      getComments();
    }, []);

    async function getComments() {
      const { data } = await supabase.from("comments").select();
      const userData = data.filter((data) => data.animeID === animeId);
      setComments(userData);
    }

    return (
        <div className="comment">
            <form className="commentInputs" onSubmit={handleComment}>
                <textarea className="commentPara" placeholder="Add a public comment..."></textarea>
                <button className="commentsBtn" type="submit">Comment</button>
            </form>

            {comments?comments.map((anime) => (
                <CommentCard key={anime.userId} user = {anime.userName} comment = {anime.comment} date={anime.created_date} userID={anime.userId} onCommentDelete={getComments}/>
                )):null}
        </div>
    );
}

export default Comment;