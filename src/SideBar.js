import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarRow from './SidebarRow';

function SideBar() {
    return (
        <div className = "sidebar">
            <TwitterIcon className = "sidebar__icon"/>
            <SidebarRow/>
        </div>
    )
}

export default SideBar;
