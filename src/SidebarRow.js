import React from 'react';
import './SidebarRow.css';

function SidebarRow  ({Icon, title}) {
    return (
        <div className = "sidebarRow">
            <Icon className = "sidebarRow__icon"/>
            <h2>{title}</h2>
        </div>
    );
}

export default SidebarRow;
