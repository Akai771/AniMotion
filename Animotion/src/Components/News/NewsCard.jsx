import React from "react";
import "./NewsBoard.css";

function NewsCard({ title, description, url, urlToImage}) {
    return(
        <>
            <div class="card cardColor mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
            <a href={url}><img src={urlToImage?urlToImage:"https://intellij-support.jetbrains.com/hc/user_images/QZP8LIk0pW3bOuWt1P7HIQ.png"} style={{height:"200px", width:"100%"}} class="card-img-top" alt="NewsImage" /></a>
                <div class="card-body">
                    <h5 class="card-title cardTitle">{title?title.slice(0,50):"NoData"}</h5>
                    {/* <p class="card-tex cardDesc">{description?description.slice(0,90):"some information about the news"}....</p> */}
                    <p class="card-tex cardDesc">Topics: {description?description.join(" | ").toUpperCase():"No Data"}</p>
                    <a href={url} class="ReadMoreBtn">Read More</a>
                </div>
            </div>
        </>
    );
}

export default NewsCard;