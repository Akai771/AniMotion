import { useState } from 'react'
import './Chatbot.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import NavBar from '../Navbar/Navbar';

const API_KEY = "";
const systemMessage = {
  "role": "system", "content": "You are Hiro- AI Chatbot hosted on Animotion(a Anime Streaming Platform). You can ask me anything about Anime and Manga. I will try my best to answer your questions."
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
        "Authorization": "Bearer " + process.env.OPENAI_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }

  return (<>
    <NavBar/>
    <div className="App">
      <div className='Chatbox'>
        <div className='ChatDesc'>
          <h1 className='Mont800'>Hiro</h1>
          <span className='Mont400'>Hello, I'm Hiro, your friendly AI chatbot companion here on Animotion! I'm here to assist you with recommendations, answer your queries about anime, and make your viewing experience more enjoyable. Whether you're seeking new shows or need help navigating the platform, I'm at your service!</span>
        </div>
        <div className="ChatContainer">
          <MainContainer >
            <ChatContainer >  
              <MessageList 
                style={{backgroundColor:"#232323",border:"2px solid #636363"}}
                scrollBehavior="smooth" 
                typingIndicator={isTyping ? <TypingIndicator content="Hiro is typing" /> : null}
              >
                {messages.map((message, i) => {
                  console.log(message)
                  return(<>
                    <Message className="ChatUI" key={i} model={message}/>
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