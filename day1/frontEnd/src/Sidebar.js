import "./Sidebar.css"
import React from 'react'
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import {Avatar, IconButton} from "@material-ui/core"
import SidebarChat from "./SidebarChat"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-header-avatar">
            <Avatar
              className="avatar-in-headerSidebar"
              src="https://this-person-does-not-exist.com/img/avatar-92ab3af541fc0052e6f09d14d730ef20.jpg"
              alt="" 
            />
          </div>
          <div className="siderbar-header-icons">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar-search">
          <div className="searchbar-container">
            <SearchOutlined
              className="searchIcon-sidebar-search" 
            />
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
