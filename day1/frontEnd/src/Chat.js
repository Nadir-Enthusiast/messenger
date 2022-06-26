import "./Chat.css"
import React, {useState} from 'react'
import Avatar from "@material-ui/core/Avatar"
import { IconButton } from "@material-ui/core"
import AttachFile from "@material-ui/icons/AttachFile"
import SearchOutLined from "@material-ui/icons/SearchOutlined"
import MoreVert from "@material-ui/icons/MoreVert"
import InsertEmotionIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import axios from "./axios"

function Chat({messages}) {

  const [input, setInput] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()

    await axios.post("/messages/new", {
      message: input,
      name: "Me",
      timestamp: "testing",
      received: true
    })

    setInput('');
  }

  return (
    <div className="chat">
        <div className="chat-header">
          <Avatar 
            className="avatar-inChatHeader"
          />

          <div className="chat-header-info">
            <h3>Username</h3>
            <p>Last seen at ...</p>
          </div>

          <div className="chat-header-icons">
            <IconButton>
              <SearchOutLined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>

        <div className="chat-body">
          {messages.map((message) => {
            return(
            <p className={`chat-message ${message.received ==="true" ? 'chat-receiver' : ''}`}>
              <span className="chat-message-username">{message.name}</span>
              {message.message}
              <span className="chat-message-timestamp">
                {message.timestamp}
              </span>
            </p>
          )})}
        </div>

        <div className="chat-footer">
          <IconButton>
            <InsertEmotionIcon />
          </IconButton>
          <form>
            <input
              className="chat-message-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Enter your message..."
              type="text"
            />
            <button
              className="chat-send-message"
              type="submit"
              onClick={sendMessage} 
            >
              Send
            </button>
            <IconButton>
              <MicIcon className="mic-chat-footer" />
            </IconButton>
          </form>
        </div>
    </div>
  )
}

export default Chat
