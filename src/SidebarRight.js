import React from 'react';
import './SidebarRight.css';
import SearchIcon from '@material-ui/icons/Search';


function SidebarRight() {
    return (
          <div className = "sidebarRight">
               <SearchIcon
                  className = "sidebarRight__rightButton"
                />            
               <input                 
                 placeholder = "Search Twitter"
                />
            </div> 
    )
}

export default SidebarRight
