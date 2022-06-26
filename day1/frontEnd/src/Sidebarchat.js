import "./Sidebarchat.css"
import React from 'react'
import { Avatar } from "@material-ui/core"

function SidebarChat() {
  return (
    <div className="sidebar-chat">
        <Avatar
          className="avatar-inSidebarChat"
        />
        <div className="chat-info-container">
            <h2>Username</h2>
            <p>Last Message</p>
        </div>
    </div>
  )
}

export default SidebarChat
