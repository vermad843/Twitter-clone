import React from 'react';
import './Header.css';
import TwitterIcon from '@material-ui/icons/Twitter';

function Header() {
    return (
        <div className = "header">
            <div className = "header__left">
               <TwitterIcon/>    
            </div>
            <div className = "header__mid">
                <h1>HOME</h1>
            </div>
            <div className = "header__right">
               <input
                
                />
            </div>
        </div>
    )
}

export default Header;
