import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import TopRedirect from "../TopRedirectButton/TopRedirect";
import ChatbotButton from "../Chatbot/ChatbotButton/ChatbotButton";
import NewsCard from "./NewsCard";
import "./NewsBoard.css";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function NewsBoard() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
            let url = `https://newsapi.org/v2/everything?q=anime&sortBy=publishedAt&language=en&apiKey=${import.meta.env.VITE_NEWS_API}`;
            fetch(url)
            .then((response) => response.json())
            .then(data => setArticles(data.articles)) 
        }, []);

        {articles && articles.length > 0 ? (
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
        )}

    return(
        <>
        <Preloader/>
        <div className="newsBG">
            <NavBar />
            <div className="alignNewsBoard">
                <h1 className="newsTitle" id="AnimeNews">Anime News</h1>
                {articles && articles.length > 0 ? (
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
                )}
                {/* {articles.map((news, index) => {
                    return(
                        <NewsCard key={index} title={news.title} description={news.description} url={news.url} urlToImage={news.urlToImage} source={news.source.name}/>
                    );
                })} */}
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