import "./SidebarChat.css"
import React from 'react'

function SidebarChat() {
  return (
    <div className="sidebar-chat">
        {/* avatar */}
        <span class="material-symbols-outlined user-avatar-sidebarChat">account_circle</span>
        <div className="chat-info-container">
            <h2>Username</h2>
            <p>Last Message</p>
        </div>
    </div>
  )
}

export default SidebarChat
