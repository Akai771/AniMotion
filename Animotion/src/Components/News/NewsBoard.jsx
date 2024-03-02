import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import NewsCard from "./NewsCard";
import "./NewsBoard.css";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import axios from "axios";

function NewsBoard() {
    const [articles, setArticles] = useState([]);
        useEffect(() => {
            axios.get(`https://animotion-consumet-api-2.vercel.app/news/ann/recent-feeds`)
            .then((res)=> setArticles(res.data))
        }, []);

    return(
        <>
        <Preloader/>
        <div className="newsBG">
            <NavBar />
            <div className="alignNewsBoard">
                <h1 className="newsTitle" id="AnimeNews">Anime News</h1>
                <div className="newsCardAlign">
                    {articles && articles.length > 0 ? (
                        articles.map((news) => (
                            <NewsCard
                                key={news.id}
                                title={news.title}
                                description={news.topics}
                                url={news.url}
                                urlToImage={news.thumbnail}
                            />
                        ))
                    ) : (
                        <p>No articles available</p>
                    )}
                </div>
            </div>
            <br/><br/>
            <Footer />
            <ChatbotButton />
            <TopRedirect/>
        </div>
        </>
    );
    }

export default NewsBoard;