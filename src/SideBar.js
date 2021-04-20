import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function SideBar() {
    return (
        <div className = "sidebar">
            <TwitterIcon className = "sidebar__icon"/>
            <SidebarRow Icon= {HomeIcon} title = "Home"/>
            <SidebarRow Icon = {NotificationsNoneIcon} title = "NotificationsNone"/>
            <SidebarRow Icon = {MailOutlineIcon} title = "MailOutline"/>      
        </div>
    )
}

export default SideBar;
