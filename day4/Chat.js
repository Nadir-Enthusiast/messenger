import "./Chat.css"
import React from 'react'

function Chat() {
  return (
    <div className="chat">
        <div className="chat-header">
          <i className="bi bi-person-circle user-avatar-chat"></i>
          <div className="chat-header-info">
            <h3>Username</h3>
            <p>Last seen at ...</p>
          </div>

          <div className="chat-header-icons">
            {/* OPTIONS AT THE TOP OF NAVBAR */}
            <i className="bi bi-search chatNavbarIcon"></i>
            <i className="bi bi-paperclip chatNavbarIcon"></i>
            <i className="bi bi-three-dots-vertical chatNavbarIcon"></i>
          </div>
        </div>

        <div className="chat-body">
          <h1>building back-end</h1>
        </div>

        <div className="chat-footer">
          {/* EMOJI SIGN */}
          <span className="material-symbols-outlined emoji-chatFooter">mood</span>
          <form>
            <input
              className="chat-message-input"
              placeholder="Enter your message..."
              type="text"
            />
            <button
              className="chat-send-message"
              type="submit"
            >
              Send
            </button>
            {/* MIC SIGN */}
            <span className="material-symbols-outlined mic-chatFooter">mic</span>
          </form>
        </div>
    </div>
  )
}

export default Chat
