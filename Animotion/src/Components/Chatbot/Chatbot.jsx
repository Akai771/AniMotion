import { useState } from 'react'
import './Chatbot.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import NavBar from '../Navbar/Navbar';
import Preloader from '../Preloader/Preloader';

const watchlist = localStorage.getItem("watchlist");
const watchlistArray = JSON.parse(watchlist)
const displayedWatchlist = watchlistArray?watchlistArray.map((item) => {
  return item.animeTitle
}).join(" ,"):"No Anime in Watchlist";
console.log(displayedWatchlist);

const API_KEY = import.meta.env.VITE_OPENAI_API;
const systemMessage = {
  "role": "system", "content": `You are Hiro - AI Chatbot hosted on Animotion (an Anime Streaming Platform). You can ask me anything about Anime and Manga. This website is made by Akai as his final year project and is still in its development phase. On this website, you can read Manga, check Anime schedules, and watch Anime by adding them to your watchlist. For your watchlist, you currently have: ${displayedWatchlist}. There is also a fun feature of Random PFP Generator. For the source code, you can check 'https://github.com/Akai771/AniMotion'. I will try my best to answer your questions. Answer only questions related to anime and manga please. Thank you!`
}

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Hiro!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage, 
        ...apiMessages 
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  return (<>
    <Preloader/>
    <NavBar/>
    <div className="App">
      <div className='Chatbox'>
        <div className='ChatDesc'>
          <h1 className='Mont800'>Hiro</h1>
          <span className='Mont400'>Hello, I'm Hiro, your friendly AI chatbot companion here on Animotion! I'm here to assist you with recommendations, answer your queries about anime, and make your viewing experience more enjoyable. Whether you're seeking new shows or need help navigating the platform, I'm at your service!</span>
        </div>
        <div className="ChatContainer">
          <MainContainer>
            <ChatContainer>  
              <MessageList 
                style={{backgroundColor:"#232323",border:"2px solid #636363"}}
                scrollBehavior="smooth" 
                typingIndicator={isTyping ? <TypingIndicator content="Hiro is typing" /> : null}
              >
                {messages.map((message, i) => {
                  return(<>
                    <Message className="ChatUI" key={i} model={message}>
                      <Message.Header sender="Hiro" />
                    </Message>
                  </>) 
                })}
              </MessageList>
              <MessageInput style={{backgroundColor:"#232323", border:"2px solid #636363"}} placeholder="Type message here" onSend={handleSend} />        
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
    </>)
}

export default Chatbot