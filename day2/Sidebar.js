import "./Sidebar.css"
import SidebarChat from "./SidebarChat"
import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-header-avatar">
            {/* AVATAR */}
          </div>
          <div className="siderbar-header-icons">
            {/* ICONS */}
          </div>
        </div>
        <div className="sidebar-search">
          <div className="searchbar-container">
            {/* SEARCH BAR */}
            <input
              placeholder="Search"
              type="text"
              className="sidebar-search-input"
            />
          </div>
        </div>
        <div className="sidebar-chats-container">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar
