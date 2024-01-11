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
    // const [articles, setArticles] = useState([]);
    const [articles2, setArticles2] = useState([]);

    // useEffect(() => {
    //         let url = `https://newsapi.org/v2/everything?q=anime&sortBy=publishedAt&language=en&apiKey=${import.meta.env.VITE_NEWS_API}`;
    //         fetch(url)
    //         .then((response) => response.json())
    //         .then(data => setArticles(data.articles)) 
    //     }, []);

        useEffect(() => {
            axios.get(`https://animotion-consumet-api.vercel.app/news/ann/recent-feeds`)
            .then((res)=> setArticles2(res.data))
        }, []);

    return(
        <>
        <Preloader/>
        <div className="newsBG">
            <NavBar />
            <div className="alignNewsBoard">
                <h1 className="newsTitle" id="AnimeNews">Anime News</h1>
                <div className="newsCardAlign">
                    {/* {articles && articles.length > 0 ? (
                        articles.map((news, index) => (
                            <NewsCard
                                key={index}
                                title={news.title}
                                description={news.description}
                                url={news.url}
                                urlToImage={news.urlToImage}
                                source={news.source.name}
                            />
                        ))
                    ) : (
                        <p>No articles available</p>
                    )} */}
                    {articles2 && articles2.length > 0 ? (
                        articles2.map((news) => (
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
                    {/* {articles.map((news, index) => {
                        return(
                            <NewsCard key={index} title={news.title} description={news.description} url={news.url} urlToImage={news.urlToImage} source={news.source.name}/>
                        );
                    })} */}
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