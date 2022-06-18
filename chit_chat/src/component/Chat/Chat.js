import React, { useEffect } from 'react';
import { user } from '../Join/Join';
import socketIO from "socket.io-client";
import "./Chat.css"
import sendLogo from "../../images/send.png"

const ENDPOINT = "http://localhost:4500/";


const Chat = () => {

   

    useEffect(() => {
        const socket = socketIO(ENDPOINT, { transports: ['websocket'] });
        socket.on('connect', () => {
          
      })
    
      socket.emit('joined', { user })
  
      socket.on('welcome', (data) => {
          console.log(data.user, data.message);
      })
  
        socket.on('userJoined', (data) => {
            console.log(data.user, data.message);
          
        })
        socket.on('leave', (data) => {
            console.log(data.user, data.message);
        })
        
            
      return () => {
          socket.emit('disconnected');
          socket.off();
      }
    }, [])
    
    

    

  return (
      <div className="chatPage">
          <div className="chatContainer">
              <div className="header"></div>
              <div className="chatBox"></div>
              <div className="inputBox">
              <input type="text" id="chatInput" />
                  <button className="sendBtn"><img src={sendLogo}/></button>
                  </div>
          </div>
          
      </div>
  )
}

export default Chat