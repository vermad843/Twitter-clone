import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import './Sidebar.css';


function SideBar() {
    return (
        <div className = "sidebar">
            <SidebarRow Icon=  {TwitterIcon}/>
            <SidebarRow Icon=  {HomeIcon} title = "Home"/>
            <SidebarRow Icon = {NotificationsNoneIcon} title = "Notifications"/>
            <SidebarRow Icon = {MailOutlineIcon} title = "Messages"/> 
            <SidebarRow Icon = {BookmarkBorderIcon} title = "Bookmarks"/>
            <SidebarRow Icon = {ListAltIcon} title = "Lists"/> 
            <SidebarRow Icon = {PersonOutlineIcon} title = "Profile"/>
            <SidebarRow Icon = {MoreHorizIcon} title = "More"/> 
            <Button 
               variant="contained"
               color = "primary"
               size = "large"
               >
               Tweet    
            </Button> 
        </div>
    )
}

export default SideBar;
