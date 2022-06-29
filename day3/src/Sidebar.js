import "./Sidebar.css"
import SidebarChat from "./SidebarChat"
import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-header-avatar">
            {/* AVATAR */}
            <i className="bi bi-person-circle user-avatar-sidebar"></i>
          </div>
          <div className="siderbar-header-icons">
            {/* ICONS */}
            <span className="material-symbols-outlined">settings</span>
            <span className="material-symbols-outlined">sort</span>
            <span className="material-symbols-outlined">more_vert</span>
          </div>
        </div>
        <div className="sidebar-search">
          <div className="searchbar-container">
            {/* SEARCH BAR */}
            <span class="material-symbols-outlined searchSidebarIcon">search</span>
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
