import React from 'react';
import './Header.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className = "header">
            <div className = "header__left">
               <TwitterIcon/>    
            </div>
            <div className = "header__mid">
                <h1>Home</h1>
            </div>
            <div className = "header__right">
               <SearchIcon
                  className = "header__rightButton"
                />            
               <input                 
                 placeholder = "Search Twitter"
                />
            </div>
        </div>
    )
}

export default Header;
